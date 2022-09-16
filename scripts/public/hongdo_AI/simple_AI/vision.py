#! /usr/bin/env python3

import rospy
from std_srvs.srv import Trigger, TriggerResponse
import numpy as np
import PIL.Image
import torchvision.transforms as T
from fastai.vision import *
from torchvision.utils import save_image

class fileRoot(object): 
    file_abspath = os.path.abspath(__file__)
    dirpath = os.path.dirname(file_abspath)
    pr_dirpath = os.path.dirname(dirpath)

class FeatureLoss(nn.Module):
    def __init__(self, m_feat, layer_ids, layer_wgts):
        super().__init__()
        self.m_feat = m_feat
        self.loss_features = [self.m_feat[i] for i in layer_ids]
        self.hooks = hook_outputs(self.loss_features, detach=False)
        self.wgts = layer_wgts
        self.metric_names = ['pixel',] + [f'feat_{i}' for i in range(len(layer_ids))
              ] + [f'gram_{i}' for i in range(len(layer_ids))]

    def make_features(self, x, clone=False):
        self.m_feat(x)
        return [(o.clone() if clone else o) for o in self.hooks.stored]
    
    def forward(self, input, target):
        out_feat = self.make_features(target, clone=True)
        in_feat = self.make_features(input)
        self.feat_losses = [base_loss(input,target)]
        self.feat_losses += [base_loss(f_in, f_out)*w
                             for f_in, f_out, w in zip(in_feat, out_feat, self.wgts)]
        self.feat_losses += [base_loss(gram_matrix(f_in), gram_matrix(f_out))*w**2 * 5e3
                             for f_in, f_out, w in zip(in_feat, out_feat, self.wgts)]
        self.metrics = dict(zip(self.metric_names, self.feat_losses))
        return sum(self.feat_losses)
    
    def __del__(self): self.hooks.remove()

class hongdosimpleAInode:
    _number = None
    _path =None
    _pr_dirpath=None
    def __init__(self):
        self._number = 0
        self._path = fileRoot.dirpath
        self._pr_dirpath = fileRoot.pr_dirpath
        print(self._pr_dirpath)
        rospy.loginfo("AI node is start")
        rospy.Service('/simple_AI', Trigger, self.start)

        rospy.on_shutdown(self.__del__)


    def start(self, req):

        rospy.loginfo('start AImodel')
        self._number+=1
        self.AImodel()
        return TriggerResponse(success=True, message="finish")

    def AImodel(self):
        # pass
        # learn=load_learner(self._path, 'ArtLine_650.pkl')
        img = PIL.Image.open(self._pr_dirpath + '/input/model.png')
        # img_t = T.ToTensor()(img)
        # img_fast = Image(img_t)
        # p,img_hr,b = learn.predict(img_fast)
        # save_image(img_hr, os.path.join(self._pr_dirpath+"/output",'{0}.png'.format(self._number)))
        # save_image(img_hr, os.path.join(self._pr_dirpath+"/backup_trained", ))


        rospy.on_shutdown(self.__del__)

    def main(self):
        rospy.spin()

    def __del__(self):
        print("terminating hongdo_ros_simpleAI_node")
        self._number = None
        self._path = None
        self._pr_dirpath=None
# if __name__ == '__main__':
rospy.init_node('hongdo_ros_simpleAI_node')
learn=load_learner(fileRoot.dirpath, 'ArtLine_650.pkl')
node = hongdosimpleAInode()
# learn=load_learner(node._path, 'ArtLine_650.pkl')
node.main()