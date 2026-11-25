export const id = 612;
export const ids = [612];
export const modules = {
  44294: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      installImageBitmapTextureLoader: () => QM
    });
    var OM = iM(40981),
      SM = iM(44300),
      jM = iM(3614);

    function aM(MM, rM) {
      if ("string" === typeof MM) {
        const iM = (0, jM.g)(MM);
        return iM ? new Blob([(0, jM.e)(iM.base64)], {
          type: iM.mimeType || rM
        }) : null
      }
      return MM instanceof Blob ? MM : new Blob([MM], {
        type: rM
      })
    }
    const PM = function(MM, rM, iM, OM) {
      let jM, PM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        nM = arguments.length > 5 ? arguments[5] : void 0,
        QM = arguments.length > 6 ? arguments[6] : void 0;
      try {
        jM = aM(MM, PM)
      } catch {
        jM = null
      }
      return jM ? (createImageBitmap(jM, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...nM
      }).then((MM => {
        rM(MM)
      }), (() => {
        (0, SM.c)(MM, rM, iM, OM, PM, nM, QM)
      })), null) : (0, SM.c)(MM, rM, iM, OM, PM, nM, QM)
    };
    let nM = "idle";

    function QM() {
      "idle" === nM && "function" === typeof createImageBitmap && (nM = "pending", async function() {
        const MM = document.createElement("canvas");
        MM.width = 1, MM.height = 2;
        const rM = MM.getContext("2d");
        if (!rM) throw new Error("2d context unavailable");
        rM.fillStyle = "#f00", rM.fillRect(0, 0, 1, 1), rM.fillStyle = "#0f0", rM.fillRect(0, 1, 1, 1);
        const iM = aM(MM.toDataURL(), "");
        if (!iM) throw new Error("toDataURL did not produce a base64 data URL");
        const OM = await createImageBitmap(iM, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        rM.drawImage(OM, 0, 0);
        const SM = rM.getImageData(0, 0, 1, 1).data;
        return SM[1] > SM[0]
      }().catch((() => (nM = "idle", !1))).then((MM => {
        "pending" === nM && (nM = "concluded"), MM && (OM.c.loadImage = PM)
      })))
    }
  },
  44300: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM.j,
      c: () => OM.p
    });
    var OM = iM(41145);
    (0, OM.u)()
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);