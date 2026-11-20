export const id = 293;
export const ids = [293];
export const modules = {
  40653: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      installImageBitmapTextureLoader: () => Uz
    });
    var Fz = sz(39063),
      Wz = sz(40661),
      Xz = sz(2920);

    function Oz(zz, tz) {
      if ("string" === typeof zz) {
        const sz = (0, Xz.f)(zz);
        return sz ? new Blob([(0, Xz.b)(sz.base64)], {
          type: sz.mimeType || tz
        }) : null
      }
      return zz instanceof Blob ? zz : new Blob([zz], {
        type: tz
      })
    }
    const oz = function(zz, tz, sz, Fz) {
      let Xz, oz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        vz = arguments.length > 5 ? arguments[5] : void 0,
        Uz = arguments.length > 6 ? arguments[6] : void 0;
      try {
        Xz = Oz(zz, oz)
      } catch {
        Xz = null
      }
      return Xz ? (createImageBitmap(Xz, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...vz
      }).then((zz => {
        tz(zz)
      }), (() => {
        (0, Wz.e)(zz, tz, sz, Fz, oz, vz, Uz)
      })), null) : (0, Wz.e)(zz, tz, sz, Fz, oz, vz, Uz)
    };
    let vz = "idle";

    function Uz() {
      "idle" === vz && "function" === typeof createImageBitmap && (vz = "pending", async function() {
        const zz = document.createElement("canvas");
        zz.width = 1, zz.height = 2;
        const tz = zz.getContext("2d");
        if (!tz) throw new Error("2d context unavailable");
        tz.fillStyle = "#f00", tz.fillRect(0, 0, 1, 1), tz.fillStyle = "#0f0", tz.fillRect(0, 1, 1, 1);
        const sz = Oz(zz.toDataURL(), "");
        if (!sz) throw new Error("toDataURL did not produce a base64 data URL");
        const Fz = await createImageBitmap(sz, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        tz.drawImage(Fz, 0, 0);
        const Wz = tz.getImageData(0, 0, 1, 1).data;
        return Wz[1] > Wz[0]
      }().catch((() => (vz = "idle", !1))).then((zz => {
        "pending" === vz && (vz = "concluded"), zz && (Fz.b.loadImage = oz)
      })))
    }
  },
  40661: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz.g,
      e: () => Fz.p
    });
    var Fz = sz(39205);
    (0, Fz.t)()
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);