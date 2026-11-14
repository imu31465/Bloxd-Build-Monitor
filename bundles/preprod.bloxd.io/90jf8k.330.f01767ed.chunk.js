export const id = 330;
export const ids = [330];
export const modules = {
  58984: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      applyLightFoOffset: () => hF,
      getFloatingOriginOffset: () => AF,
      lightFoVersion: () => uF,
      wrapRenderableForFO: () => bW
    });
    var CF = SF(39595);

    function AF(FF) {
      const WF = FF.camera;
      if (!WF) return {
        x: 0,
        y: 0,
        z: 0
      };
      const SF = WF.worldMatrix;
      return {
        x: SF[12],
        y: SF[13],
        z: SF[14]
      }
    }

    function uF(FF) {
      return FF.camera ? FF.camera.worldMatrixVersion : 0
    }

    function hF(FF, WF) {
      const SF = WF.camera?.worldMatrix;
      if (!SF) return;
      const AF = SF[12],
        uF = SF[13],
        hF = SF[14];
      let bW = 0;
      for (const dF of WF.lights) {
        if (bW >= CF.c) break;
        if (!dF._writeLightUbo) continue;
        const WF = 4 + 16 * bW,
          SF = FF[WF + 3];
        if (0 === SF || 2 === SF) {
          const SF = dF.worldMatrix;
          FF[WF] = SF[12] - AF, FF[WF + 1] = SF[13] - uF, FF[WF + 2] = SF[14] - hF
        }
        bW++
      }
    }

    function bW(FF, WF, SF) {
      let CF = -1;
      return () => {
        const AF = WF.camera ? WF.camera.worldMatrixVersion : -1;
        AF !== CF && (SF(), CF = AF), FF()
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);