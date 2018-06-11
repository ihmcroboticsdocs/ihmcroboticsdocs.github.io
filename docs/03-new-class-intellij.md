---
title: Create The ValkyrieDemo Class
sidebar_label: Create the ValkyrieDemo Class
---

Once GradleProject has been imported into IntelliJ IDEA, the project window should open.

![new project window](/img/quickstart/intellij/new-project-view.png)

<br/> 
### Open the "Gradle projects" Tool Window

#### 1. Hide/Show Tools tabs

In the lower left corner of the project window you will see the Hide/Show tools icon.  If you do not see the `Gradle` tab on the right select this icon to show it.

#### 2. Open the "Gradle projects" Tool Window

On the right of the project window you should see a Gradle tab, select it to expand the "Gradle projects" tool window.

#### 3. List Gradle Dependencies

Select the triangle next to `Dependencies` in the "Gradle projects" tool window.  You should now see a full list of dependencies. These libraries have been automatically downloaded from the remote repositories specified in your build.gradle script and linked to your project.

You can hide/show the "Gradle projects" tool window by selecting the `Gradle` tab on the right.

<br/> 
### Create a New Class to Run the Valkyrie Simulation

Java classes are organized by "packages". Many IHMC packages start with `us.ihmc`, you can use your organization, a personal website, or whatever you'd like as your package. Here we're going to use `us.ihmc.demo` as the package, and `ValkyrieDemo` as the name of the class. 

In the project tool window on the right, right click on the `java` folder, and select `Java Class` under the `New` menu.

![create new class](/img/quickstart/intellij/select-new-java-class.png)

Enter `us.ihmc.demo.ValkyrieDemo` for the `Name` field and select `OK`.

![create new class](/img/quickstart/intellij/create-new-class.png)

<br/> 
### ValkyrieDemo Class

You should now see a skeleton of your ValkyrieDemo class.  Replace the skeleton text with the following java source code:

```java
package us.ihmc.demo;

import us.ihmc.avatar.DRCFlatGroundWalkingTrack;
import us.ihmc.avatar.drcRobot.DRCRobotModel;
import us.ihmc.avatar.initialSetup.DRCGuiInitialSetup;
import us.ihmc.avatar.initialSetup.DRCRobotInitialSetup;
import us.ihmc.avatar.initialSetup.DRCSCSInitialSetup;
import us.ihmc.commonWalkingControlModules.desiredHeadingAndVelocity.HeadingAndVelocityEvaluationScriptParameters;
import us.ihmc.commonWalkingControlModules.highLevelHumanoidControl.factories.WalkingProvider;
import us.ihmc.jMonkeyEngineToolkit.GroundProfile3D;
import us.ihmc.simulationconstructionset.HumanoidFloatingRootJointRobot;
import us.ihmc.simulationconstructionset.SimulationConstructionSet;
import us.ihmc.simulationconstructionset.util.ground.FlatGroundProfile;
import us.ihmc.valkyrie.ValkyrieRobotModel;

public class ValkyrieDemo
{
   public static void main(String[] args)
   {
      DRCRobotModel robotModel = new ValkyrieRobotModel(DRCRobotModel.RobotTarget.SCS, false); // Construct the Valkyrie robot model for simulation.
      DRCGuiInitialSetup guiInitialSetup = new DRCGuiInitialSetup(true, false); // Helper configuration object for setting up the Simulation GUI
      final double groundHeight = 0.0; // No magic numbers!
      GroundProfile3D groundProfile = new FlatGroundProfile(groundHeight); // Construct a ground profile

      DRCSCSInitialSetup scsInitialSetup = new DRCSCSInitialSetup(groundProfile, robotModel.getSimulateDT()); // Helper configuration object for setting up Simulation Construction Set
      scsInitialSetup.setDrawGroundProfile(true); // Make ground profile visible
      scsInitialSetup.setInitializeEstimatorToActual(true); // Seed the state estimator with a perfect starting configuration

      double initialYaw = 0.0; // No magic numbers!
      DRCRobotInitialSetup<HumanoidFloatingRootJointRobot> robotInitialSetup = robotModel.getDefaultRobotInitialSetup(groundHeight,
                                                                                                                      initialYaw); // Helper configuration object for the robot starting configuration

      boolean useVelocityAndHeadingScript = true; // No magic... booleans?
      boolean cheatWithGroundHeightAtForFootstep = false; // No magic... booleans?

      HeadingAndVelocityEvaluationScriptParameters walkingScriptParameters = new HeadingAndVelocityEvaluationScriptParameters();
      DRCFlatGroundWalkingTrack flatGroundWalkingTrack = new DRCFlatGroundWalkingTrack(robotInitialSetup,
                                                                                       guiInitialSetup, scsInitialSetup, useVelocityAndHeadingScript, cheatWithGroundHeightAtForFootstep,
                                                                                       robotModel, WalkingProvider.VELOCITY_HEADING_COMPONENT, walkingScriptParameters); // Construct a Flat Ground Walking Track, a re-usable sim environment we use to validate the basics of the walking algorithm

      SimulationConstructionSet scs = flatGroundWalkingTrack.getSimulationConstructionSet(); // Construct the SCS instance
   }
}
```
