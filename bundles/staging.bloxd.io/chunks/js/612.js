export const id = 612;
export const ids = [612];
export const modules = {
  44822: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      installImageBitmapTextureLoader: () => Je
    });
    var ye = He(40979),
      be = He(44824),
      Me = He(3529);

    function Ke(ee, ie) {
      if ("string" === typeof ee) {
        const He = (0, Me.k)(ee);
        return He ? new Blob([(0, Me.e)(He.base64)], {
          type: He.mimeType || ie
        }) : null
      }
      return ee instanceof Blob ? ee : new Blob([ee], {
        type: ie
      })
    }
    const Ue = function(ee, ie, He, ye) {
      let Me, Ue = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        Fe = arguments.length > 5 ? arguments[5] : void 0,
        Je = arguments.length > 6 ? arguments[6] : void 0;
      try {
        Me = Ke(ee, Ue)
      } catch {
        Me = null
      }
      return Me ? (createImageBitmap(Me, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...Fe
      }).then((ee => {
        ie(ee)
      }), (() => {
        (0, be.i)(ee, ie, He, ye, Ue, Fe, Je)
      })), null) : (0, be.i)(ee, ie, He, ye, Ue, Fe, Je)
    };
    let Fe = "idle";

    function Je() {
      "idle" === Fe && "function" === typeof createImageBitmap && (Fe = "pending", async function() {
        const ee = document.createElement("canvas");
        ee.width = 1, ee.height = 2;
        const ie = ee.getContext("2d");
        if (!ie) throw new Error("2d context unavailable");
        ie.fillStyle = "#f00", ie.fillRect(0, 0, 1, 1), ie.fillStyle = "#0f0", ie.fillRect(0, 1, 1, 1);
        const He = Ke(ee.toDataURL(), "");
        if (!He) throw new Error("toDataURL did not produce a base64 data URL");
        const ye = await createImageBitmap(He, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        ie.drawImage(ye, 0, 0);
        const be = ie.getImageData(0, 0, 1, 1).data;
        return be[1] > be[0]
      }().catch((() => (Fe = "idle", !1))).then((ee => {
        "pending" === Fe && (Fe = "concluded"), ee && (ye.b.loadImage = Ue)
      })))
    }
  },
  44824: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye.i,
      i: () => ye.r
    });
    var ye = He(41159);
    (0, ye.u)()
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);