//A study about paths

thisShape = content("Group 1").content("Path 1").path

thisShape.points(0)


interestPoint = 2;

thisShape = content("Group 1").content("Path 1").path; // Get the path of the current object
point = thisShape.points(0)[interestPoint]; // Set the point as the current interestPoint
point = point + anchorPoint; // The position of the points is relative to its achorpoint...
point = point + [thisComp.width/2, thisComp.height/2]; // ... and the top left edge of the comp
point = point + transform.position; // ... and the current position of the element
point = point + content("Group 1").transform.position; // ... and the current position of the elements inside "Group 1"

point


myLayer = thisComp.layer("Dark Gray Solid 1");
myLayer.toComp(myLayer.mask("Mask 1").maskPath.points()[0]);



interestPoint = 2;

thisShape = content("Group 1").content("Path 1").path; // Get the path of the current object
point = thisShape.points(0)[interestPoint]; // Set the point as the current interestPoint
content("Group 1").content("Path 1").path.points().toComp()










myLayer = thisComp.layer("Box - Front Facing Flap - Long Axis");
myLayer.toComp(myLayer.content("Group 1").content("Path 1").path.points()[0]);

thisShape = content("Group 1").content("Path 1").path; // Get the path of the current object
point = thisShape.points(0)[interestPoint]; // Set the point as the current interestPoint







posInShapeLayer = thisComp.layer("Box - Front Facing Flap - Long Axis").content("Group 1").content("Path 1").path.points()[0];
posInShapeLayer = posInShapeLayer + thisComp.layer("Box - Front Facing Flap - Long Axis").content("Group 1").content("Path 1").anchorPoint;

posInComp = thisComp.layer("Box - Front Facing Flap - Long Axis").toComp(posInShapeLayer);

posInThisLayer = thisLayer.fromComp(posInComp);



point = point + anchorPoint; // The position of the points is relative to its achorpoint...








originalPath = thisComp.layer("Box - Front Facing Flap - Long Axis").content("Group 1").content("Path 1").path;
thisPath = content("Group 1").content("Path 1").path;

thisPath.createPath(originalPath.points(), originalPath.inTangents(), originalPath.outTangents(), true);