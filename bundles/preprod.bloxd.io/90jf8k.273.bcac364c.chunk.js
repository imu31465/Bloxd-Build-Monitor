export const id = 273;
export const ids = [273];
export const modules = {
  39399: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      installImageBitmapTextureLoader: () => PF
    });
    var CF = SF(37851),
      AF = SF(39403),
      uF = SF(2392);

    function hF(FF, WF) {
      if ("string" === typeof FF) {
        const SF = (0, uF.c)(FF);
        return SF ? new Blob([(0, uF.b)(SF.base64)], {
          type: SF.mimeType || WF
        }) : null
      }
      return FF instanceof Blob ? FF : new Blob([FF], {
        type: WF
      })
    }
    const bW = function(FF, WF, SF, CF) {
      let uF, bW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        dF = arguments.length > 5 ? arguments[5] : void 0,
        PF = arguments.length > 6 ? arguments[6] : void 0;
      try {
        uF = hF(FF, bW)
      } catch {
        uF = null
      }
      return uF ? (createImageBitmap(uF, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...dF
      }).then((FF => {
        WF(FF)
      }), (() => {
        (0, AF.d)(FF, WF, SF, CF, bW, dF, PF)
      })), null) : (0, AF.d)(FF, WF, SF, CF, bW, dF, PF)
    };
    let dF = "idle";

    function PF() {
      "idle" === dF && "function" === typeof createImageBitmap && (dF = "pending", async function() {
        const FF = document.createElement("canvas");
        FF.width = 1, FF.height = 2;
        const WF = FF.getContext("2d");
        if (!WF) throw new Error("2d context unavailable");
        WF.fillStyle = "#f00", WF.fillRect(0, 0, 1, 1), WF.fillStyle = "#0f0", WF.fillRect(0, 1, 1, 1);
        const SF = hF(FF.toDataURL(), "");
        if (!SF) throw new Error("toDataURL did not produce a base64 data URL");
        const CF = await createImageBitmap(SF, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        WF.drawImage(CF, 0, 0);
        const AF = WF.getImageData(0, 0, 1, 1).data;
        return AF[1] > AF[0]
      }().catch((() => (dF = "idle", !1))).then((FF => {
        "pending" === dF && (dF = "concluded"), FF && (CF.d.loadImage = bW)
      })))
    }
  },
  39403: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF.i,
      d: () => CF.m
    });
    var CF = SF(38010);
    (0, CF.o)()
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);