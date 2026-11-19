export const id = 293;
export const ids = [293];
export const modules = {
  40756: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      installImageBitmapTextureLoader: () => Hz
    });
    var Ez = bz(39057),
      nz = bz(40763),
      iz = bz(2966);

    function lz(zz, uz) {
      if ("string" === typeof zz) {
        const bz = (0, iz.g)(zz);
        return bz ? new Blob([(0, iz.d)(bz.base64)], {
          type: bz.mimeType || uz
        }) : null
      }
      return zz instanceof Blob ? zz : new Blob([zz], {
        type: uz
      })
    }
    const Mz = function(zz, uz, bz, Ez) {
      let iz, Mz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        tz = arguments.length > 5 ? arguments[5] : void 0,
        Hz = arguments.length > 6 ? arguments[6] : void 0;
      try {
        iz = lz(zz, Mz)
      } catch {
        iz = null
      }
      return iz ? (createImageBitmap(iz, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...tz
      }).then((zz => {
        uz(zz)
      }), (() => {
        (0, nz.g)(zz, uz, bz, Ez, Mz, tz, Hz)
      })), null) : (0, nz.g)(zz, uz, bz, Ez, Mz, tz, Hz)
    };
    let tz = "idle";

    function Hz() {
      "idle" === tz && "function" === typeof createImageBitmap && (tz = "pending", async function() {
        const zz = document.createElement("canvas");
        zz.width = 1, zz.height = 2;
        const uz = zz.getContext("2d");
        if (!uz) throw new Error("2d context unavailable");
        uz.fillStyle = "#f00", uz.fillRect(0, 0, 1, 1), uz.fillStyle = "#0f0", uz.fillRect(0, 1, 1, 1);
        const bz = lz(zz.toDataURL(), "");
        if (!bz) throw new Error("toDataURL did not produce a base64 data URL");
        const Ez = await createImageBitmap(bz, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        uz.drawImage(Ez, 0, 0);
        const nz = uz.getImageData(0, 0, 1, 1).data;
        return nz[1] > nz[0]
      }().catch((() => (tz = "idle", !1))).then((zz => {
        "pending" === tz && (tz = "concluded"), zz && (Ez.d.loadImage = Mz)
      })))
    }
  },
  40763: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez.j,
      g: () => Ez.t
    });
    var Ez = bz(39202);
    (0, Ez.z)()
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);