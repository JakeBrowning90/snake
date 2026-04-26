function getNeighborSegments(leading, target, following) {
  // console.log(leading, target, following);
  if (following) {
    // Get xy of Leading
    let leadingXY = [
      parseInt(leading.getAttribute("xloc")),
      parseInt(leading.getAttribute("yloc")),
    ];
    // Get xy of Target
    let targetXY = [
      parseInt(target.getAttribute("xloc")),
      parseInt(target.getAttribute("yloc")),
    ];
    // Get xy of Following

    let followingXY = [
      parseInt(following.getAttribute("xloc")),
      parseInt(following.getAttribute("yloc")),
    ];

    // Declare code
    let code = "";
    // Leading position relative to Target
    // If Lx > Tx, code[0] = 1
    // If Lx < Tx, code[0] = 3
    // If Ly > Ty, code[0] = 0
    // If Ly < Ty, code[0] = 2
    if (leadingXY[0] > targetXY[0]) {
      code = code + 1;
    } else if (leadingXY[0] < targetXY[0]) {
      code = code + 3;
    } else if (leadingXY[1] > targetXY[1]) {
      code = code + 0;
    } else if (leadingXY[1] < targetXY[1]) {
      code = code + 2;
    }

    // Following position relative to Target
    // If Fx > Tx, code[1] = 1
    // If Fx < Tx, code[1] = 3
    // If Fy > Ty, code[1] = 0
    // If Fy < Ty, code[1] = 2

    if (followingXY[0] > targetXY[0]) {
      code = code + 1;
    } else if (followingXY[0] < targetXY[0]) {
      code = code + 3;
    } else if (followingXY[1] > targetXY[1]) {
      code = code + 0;
    } else if (followingXY[1] < targetXY[1]) {
      code = code + 2;
    }

    return code;
  }
}

export { getNeighborSegments };
