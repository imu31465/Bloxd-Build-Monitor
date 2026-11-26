export const id = 612;
export const ids = [612];
export const modules = {
  44758: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      installImageBitmapTextureLoader: () => JB
    });
    var YB = GB(40883),
      DB = GB(44762),
      QB = GB(3629);

    function oB(BB, OB) {
      if ("string" === typeof BB) {
        const GB = (0, QB.j)(BB);
        return GB ? new Blob([(0, QB.d)(GB.base64)], {
          type: GB.mimeType || OB
        }) : null
      }
      return BB instanceof Blob ? BB : new Blob([BB], {
        type: OB
      })
    }
    const jB = function(BB, OB, GB, YB) {
      let QB, jB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        yB = arguments.length > 5 ? arguments[5] : void 0,
        JB = arguments.length > 6 ? arguments[6] : void 0;
      try {
        QB = oB(BB, jB)
      } catch {
        QB = null
      }
      return QB ? (createImageBitmap(QB, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...yB
      }).then((BB => {
        OB(BB)
      }), (() => {
        (0, DB.d)(BB, OB, GB, YB, jB, yB, JB)
      })), null) : (0, DB.d)(BB, OB, GB, YB, jB, yB, JB)
    };
    let yB = "idle";

    function JB() {
      "idle" === yB && "function" === typeof createImageBitmap && (yB = "pending", async function() {
        const BB = document.createElement("canvas");
        BB.width = 1, BB.height = 2;
        const OB = BB.getContext("2d");
        if (!OB) throw new Error("2d context unavailable");
        OB.fillStyle = "#f00", OB.fillRect(0, 0, 1, 1), OB.fillStyle = "#0f0", OB.fillRect(0, 1, 1, 1);
        const GB = oB(BB.toDataURL(), "");
        if (!GB) throw new Error("toDataURL did not produce a base64 data URL");
        const YB = await createImageBitmap(GB, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        OB.drawImage(YB, 0, 0);
        const DB = OB.getImageData(0, 0, 1, 1).data;
        return DB[1] > DB[0]
      }().catch((() => (yB = "idle", !1))).then((BB => {
        "pending" === yB && (yB = "concluded"), BB && (YB.b.loadImage = jB)
      })))
    }
  },
  44762: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB.g,
      d: () => YB.n
    });
    var YB = GB(41035);
    (0, YB.p)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);