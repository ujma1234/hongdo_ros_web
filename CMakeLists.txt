cmake_minimum_required(VERSION 3.0.2)
project(hongdo_ros_web)
find_package(catkin REQUIRED)


find_package(catkin REQUIRED COMPONENTS
    std_msgs
    rospy
   #  message_generation
)


# catkin_python_setup()

# generate_messages(
#   DEPENDENCIES
#   std_msgs  # Or other packages containing msgs
# )


###################################
## catkin specific configuration ##
###################################
catkin_package(
#  INCLUDE_DIRS include
#  LIBRARIES hongdo_ros_music
 CATKIN_DEPENDS std_msgs rospy
#  DEPENDS system_lib
)

#############
## Install ##
#############

catkin_install_python(PROGRAMS
  scripts/public/hongdo_AI/simple_AI/vision.py
  DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)

install(DIRECTORY launch
   DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION}
)

install(PROGRAMS
   talker.js
   DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)

