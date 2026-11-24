export const id = 302;
export const ids = [302];
export const modules = {
  41561: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      installImageBitmapTextureLoader: () => uS
    });
    var tS = gS(39922),
      bS = gS(41564),
      XS = gS(3372);

    function xS(SS, HS) {
      if ("string" === typeof SS) {
        const gS = (0, XS.k)(SS);
        return gS ? new Blob([(0, XS.e)(gS.base64)], {
          type: gS.mimeType || HS
        }) : null
      }
      return SS instanceof Blob ? SS : new Blob([SS], {
        type: HS
      })
    }
    const NS = function(SS, HS, gS, tS) {
      let XS, NS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        qS = arguments.length > 5 ? arguments[5] : void 0,
        uS = arguments.length > 6 ? arguments[6] : void 0;
      try {
        XS = xS(SS, NS)
      } catch {
        XS = null
      }
      return XS ? (createImageBitmap(XS, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...qS
      }).then((SS => {
        HS(SS)
      }), (() => {
        (0, bS.g)(SS, HS, gS, tS, NS, qS, uS)
      })), null) : (0, bS.g)(SS, HS, gS, tS, NS, qS, uS)
    };
    let qS = "idle";

    function uS() {
      "idle" === qS && "function" === typeof createImageBitmap && (qS = "pending", async function() {
        const SS = document.createElement("canvas");
        SS.width = 1, SS.height = 2;
        const HS = SS.getContext("2d");
        if (!HS) throw new Error("2d context unavailable");
        HS.fillStyle = "#f00", HS.fillRect(0, 0, 1, 1), HS.fillStyle = "#0f0", HS.fillRect(0, 1, 1, 1);
        const gS = xS(SS.toDataURL(), "");
        if (!gS) throw new Error("toDataURL did not produce a base64 data URL");
        const tS = await createImageBitmap(gS, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        HS.drawImage(tS, 0, 0);
        const bS = HS.getImageData(0, 0, 1, 1).data;
        return bS[1] > bS[0]
      }().catch((() => (qS = "idle", !1))).then((SS => {
        "pending" === qS && (qS = "concluded"), SS && (tS.c.loadImage = NS)
      })))
    }
  },
  41564: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS.g,
      g: () => tS.n
    });
    var tS = gS(40087);
    (0, tS.v)()
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);