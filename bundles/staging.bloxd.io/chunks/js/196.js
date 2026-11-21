export const id = 196;
export const ids = [196];
export const modules = {
  9310: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Sd,
      c: () => bd,
      d: () => md
    });
    var pd = kd(9315);
    const Nd = {
        fileBytes: 4194304,
        vertices: 65535,
        indices: 196608,
        accessorElements: 196608,
        primitives: 64,
        nodes: 128,
        meshes: 64,
        materials: 8,
        images: 8,
        imageSide: 1024
      },
      Wd = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      Pd = 1048576,
      Zd = "is not a binary glTF 2.0 file",
      gd = "loads data from outside the file",
      Cd = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      Kd = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      od = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      ld = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: od,
        TEXCOORD_2: od,
        TEXCOORD_3: od,
        TEXCOORD_4: od,
        TEXCOORD_5: od
      },
      Qd = new Set(pd.i.map((dd => {
        let [Jd] = dd;
        return Jd
      }))),
      Ld = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      Od = 5126;

    function ed(dd) {
      return dd.toLocaleString("en-US")
    }

    function Rd(dd, Jd, kd) {
      return dd > Jd ? `has ${ed(dd)} ${kd} (the limit is ${ed(Jd)})` : null
    }

    function Id(dd, Jd) {
      return Number.isInteger(dd) && dd >= 0 && dd < (null !== Jd && void 0 !== Jd ? Jd : 0)
    }

    function Gd(dd) {
      return Number.isInteger(dd) && dd >= 0
    }

    function vd(dd, Jd) {
      return void 0 !== dd && (!Array.isArray(dd) || dd.length > Jd)
    }

    function xd(dd, Jd) {
      return "object" === typeof dd && null !== dd && Object.keys(dd).length > Jd
    }

    function qd(dd) {
      var Jd;
      return `${dd.normalized?"normalized ":""}${null!==(Jd=pd.f[dd.componentType])&&void 0!==Jd?Jd:dd.componentType} ${dd.type}`
    }

    function Bd(dd) {
      const Jd = Jd => {
        var kd;
        return null !== (kd = dd[Jd]) && void 0 !== kd ? kd : -1
      };
      return 255 === Jd(0) && 216 === Jd(1) ? "JPEG" : 82 === Jd(0) && 73 === Jd(1) && 87 === Jd(8) && 69 === Jd(9) ? "WebP" : 171 === Jd(0) && 75 === Jd(1) && 84 === Jd(2) && 88 === Jd(3) ? "KTX2" : "non-PNG"
    }

    function sd(dd) {
      return dd.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((Jd, kd) => dd[kd] === Jd)) && 73 === dd[12] && 72 === dd[13] && 68 === dd[14] && 82 === dd[15]
    }

    function ad(dd) {
      return /^[aeiou]/i.test(dd) ? `an ${dd}` : `a ${dd}`
    }

    function Md(dd) {
      const Jd = dd.byteStride;
      return void 0 === Jd || Number.isInteger(Jd) && Jd >= 4 && Jd <= 252 && Jd % 4 === 0
    }

    function Fd(dd, Jd, kd) {
      var pd, Nd;
      const Wd = null === (pd = dd.bufferViews) || void 0 === pd ? void 0 : pd[kd];
      if (!Wd || !Jd || 0 !== Wd.buffer) return null;
      const Pd = null !== (Nd = Wd.byteOffset) && void 0 !== Nd ? Nd : 0;
      return !Gd(Pd) || !Gd(Wd.byteLength) || Pd + Wd.byteLength > Jd.byteLength ? null : Jd.subarray(Pd, Pd + Wd.byteLength)
    }

    function Yd(dd, Jd) {
      var kd, Nd, Wd;
      const Pd = pd.n[Jd.type],
        Zd = pd.e[Jd.componentType];
      if (!Pd || !Zd || !Number.isInteger(Jd.count) || Jd.count < 0) return !1;
      if (void 0 === Jd.bufferView) return !0;
      const gd = null === (kd = dd.bufferViews) || void 0 === kd ? void 0 : kd[Jd.bufferView],
        Cd = null !== (Nd = Jd.byteOffset) && void 0 !== Nd ? Nd : 0;
      if (!gd || !Gd(Cd) || Cd % Zd !== 0) return !1;
      const Kd = Pd * Zd,
        od = null !== (Wd = gd.byteStride) && void 0 !== Wd ? Wd : Kd;
      if (od < Kd) return !1;
      return (0 === Jd.count ? 0 : Cd + od * (Jd.count - 1) + Kd) <= gd.byteLength
    }

    function md(dd) {
      return dd > Nd.fileBytes ? `is ${(dd/Pd).toFixed(1)} MiB (the limit is ${Nd.fileBytes/Pd} MiB)` : null
    }

    function bd(dd, Jd) {
      try {
        return function(dd, Jd) {
          var kd, Pd, od, ed, Gd, md, bd, Sd, jd, Xd, fd, nd, Ud, yd, Dd, Td, Ed;
          const cd = Array.isArray(dd.extensionsUsed) && dd.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(dd, Jd) {
              var kd, pd;
              const {
                items: Nd,
                perFile: Pd,
                surfaces: Zd,
                few: gd,
                bounds: Cd,
                attributeMembers: Kd
              } = Wd;
              if (vd(dd.extensionsRequired, gd) || vd(dd.animations, 1 / 0) || vd(dd.skins, 1 / 0)) return !0;
              if (null !== (kd = dd.animations) && void 0 !== kd && kd.length || null !== (pd = dd.skins) && void 0 !== pd && pd.length) return !1;
              if ([
                  [dd.buffers, gd],
                  [dd.scenes, gd],
                  [dd.bufferViews, Nd],
                  [dd.accessors, Nd],
                  [dd.nodes, Nd],
                  [dd.meshes, Nd],
                  [dd.materials, Zd],
                  [dd.textures, Zd],
                  [dd.samplers, Zd],
                  [dd.images, Zd]
                ].some((dd => {
                  let [Jd, kd] = dd;
                  return vd(Jd, kd)
                }))) return !0;
              for (const Wd of null !== (od = dd.accessors) && void 0 !== od ? od : []) {
                var od, ld, Qd;
                if (Number.isInteger(Wd.count) && (!Number.isSafeInteger(Wd.count) || Object.is(Wd.count, -0)) || vd(null !== (ld = Wd.min) && void 0 !== ld ? ld : void 0, Cd) || vd(null !== (Qd = Wd.max) && void 0 !== Qd ? Qd : void 0, Cd)) return !0
              }
              for (const Wd of null !== (Ld = dd.scenes) && void 0 !== Ld ? Ld : []) {
                var Ld;
                if (vd(Wd.nodes, Nd)) return !0
              }
              let Od = 0;
              for (const Wd of null !== (ed = dd.nodes) && void 0 !== ed ? ed : []) {
                var ed, Rd, Id;
                if (vd(Wd.children, Pd)) return !0;
                Od += null !== (Rd = null === (Id = Wd.children) || void 0 === Id ? void 0 : Id.length) && void 0 !== Rd ? Rd : 0
              }
              if (Od > Pd) return !0;
              let Gd = 0;
              for (const Wd of null !== (qd = dd.meshes) && void 0 !== qd ? qd : []) {
                var qd;
                if (!Array.isArray(Wd.primitives)) return !0;
                if (Gd += Wd.primitives.length, Gd > Pd) return !0;
                for (const dd of Wd.primitives) {
                  var Bd;
                  const kd = Jd ? null === (Bd = dd.extensions) || void 0 === Bd ? void 0 : Bd.KHR_draco_mesh_compression : void 0;
                  if (xd(dd.attributes, Kd) || xd(null === kd || void 0 === kd ? void 0 : kd.attributes, Kd)) return !0
                }
              }
              return !1
            }(dd, cd)) return Zd;
          const hd = null === (kd = dd.asset) || void 0 === kd ? void 0 : kd.version;
          if ("string" !== typeof hd || !/^2\.\d+/.test(hd)) return `uses glTF version ${null!==hd&&void 0!==hd?hd:"(none)"}`;
          const rd = null === (Pd = dd.asset) || void 0 === Pd ? void 0 : Pd.minVersion;
          if (void 0 !== rd && "2.0" !== rd) return `uses glTF version ${rd}`;
          for (const pd of null !== (ud = dd.extensionsRequired) && void 0 !== ud ? ud : []) {
            var ud;
            if (!Cd.has(pd)) return `requires the glTF extension ${pd}`
          }
          if (null !== (od = dd.animations) && void 0 !== od && od.length) return "has animations";
          if (null !== (ed = dd.skins) && void 0 !== ed && ed.length) return "uses skins";
          const td = null !== (Gd = dd.buffers) && void 0 !== Gd ? Gd : [];
          for (const [pd, Nd] of td.entries()) {
            if (void 0 !== Nd.uri) return gd;
            if (pd > 0 || !Jd) return Zd
          }
          for (const [pd, Nd] of(null !== (Vd = dd.bufferViews) && void 0 !== Vd ? Vd : []).entries()) {
            var Vd;
            if (!Fd(dd, Jd, pd) || !Md(Nd)) return Zd
          }
          const zd = null !== (md = dd.accessors) && void 0 !== md ? md : [];
          for (const pd of zd) {
            if (void 0 !== pd.sparse) return "uses sparse accessors";
            const Jd = Number.isInteger(pd.count) ? Rd(pd.count, Nd.accessorElements, "elements in an accessor") : null;
            if (Jd) return Jd;
            if (!Yd(dd, pd)) return Zd
          }
          const Hd = null !== (bd = dd.scenes) && void 0 !== bd ? bd : [];
          if (1 !== Hd.length) return `has ${Hd.length} scenes`;
          const wd = (0, pd.v)(dd);
          if (void 0 !== wd && 0 !== wd) return Zd;
          const Ad = null !== (Sd = dd.nodes) && void 0 !== Sd ? Sd : [],
            dJ = null !== (jd = dd.meshes) && void 0 !== jd ? jd : [],
            JJ = null !== (Xd = dd.materials) && void 0 !== Xd ? Xd : [],
            kJ = null !== (fd = dd.textures) && void 0 !== fd ? fd : [],
            pJ = null !== (nd = dd.images) && void 0 !== nd ? nd : [],
            NJ = null !== (Ud = null !== (yd = null !== (Dd = Rd(Ad.length, Nd.nodes, "nodes")) && void 0 !== Dd ? Dd : Rd(dJ.length, Nd.meshes, "meshes")) && void 0 !== yd ? yd : Rd(JJ.length, Nd.materials, "materials")) && void 0 !== Ud ? Ud : Rd(pJ.length, Nd.images, "images");
          if (NJ) return NJ;
          const WJ = new Set;
          for (const pd of Ad)
            for (const dd of null !== (PJ = pd.children) && void 0 !== PJ ? PJ : []) {
              var PJ;
              if (!Id(dd, Ad.length) || WJ.has(dd)) return Zd;
              WJ.add(dd)
            }
          const ZJ = new Set,
            gJ = dd => {
              var Jd;
              return !ZJ.has(dd) && (ZJ.add(dd), (null !== (Jd = Ad[dd].children) && void 0 !== Jd ? Jd : []).every(gJ))
            };
          for (const pd of null !== (CJ = Hd[0].nodes) && void 0 !== CJ ? CJ : []) {
            var CJ;
            if (!Id(pd, Ad.length) || WJ.has(pd) || !gJ(pd)) return Zd
          }
          for (const pd of Ad) {
            if (void 0 !== pd.matrix) return "uses node matrices";
            if (void 0 !== pd.skin) return "uses skins";
            if (void 0 !== pd.weights) return "uses morph targets";
            if (void 0 !== pd.mesh && !Id(pd.mesh, dJ.length)) return Zd;
            const dd = [
              [pd.translation, 3],
              [pd.rotation, 4],
              [pd.scale, 3]
            ];
            for (const [Jd, kd] of dd)
              if (void 0 !== Jd && (!Array.isArray(Jd) || Jd.length !== kd || !Jd.every((dd => Number.isFinite(dd))))) return Zd
          }
          let KJ = -1,
            oJ = 0,
            lJ = 0,
            QJ = null;
          for (const Nd of dJ) {
            if (void 0 !== Nd.weights) return "uses morph targets";
            if (0 === Nd.primitives.length) return Zd;
            for (const kd of Nd.primitives) {
              var LJ, OJ;
              const Nd = null !== (LJ = kd.mode) && void 0 !== LJ ? LJ : 4;
              var eJ;
              if (4 !== Nd && 0 !== Nd) return `uses ${null!==(eJ=Ld[Nd])&&void 0!==eJ?eJ:`mode ${Nd}`} primitives`;
              if (void 0 !== kd.targets) return "uses morph targets";
              if (void 0 !== kd.material && !Id(kd.material, JJ.length)) return Zd;
              const Wd = cd ? null === (OJ = kd.extensions) || void 0 === OJ ? void 0 : OJ.KHR_draco_mesh_compression : void 0;
              if (Wd) {
                if (4 !== Nd) return "uses Draco-compressed points";
                if (!Fd(dd, Jd, Wd.bufferView) || "object" !== typeof Wd.attributes) return Zd
              }
              const Pd = kd.attributes;
              if ("object" !== typeof Pd || null === Pd) return Zd;
              if (void 0 === Pd.POSITION) return "has a primitive with no positions";
              if (!Id(Pd.POSITION, zd.length)) return Zd;
              const gd = zd[Pd.POSITION].count;
              for (const [dd, Jd] of Object.entries(Pd)) {
                if (!Id(Jd, zd.length)) return Zd;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(dd)) return "uses skins";
                const kd = zd[Jd],
                  pd = Kd[dd];
                if (pd && (kd.componentType !== Od || kd.normalized || kd.type !== pd)) return `stores ${dd} as ${qd(kd)}`;
                const Nd = ld[dd];
                if (Nd && (kd.type !== Nd.type || !Nd.componentTypes.includes(kd.componentType) || kd.componentType === Od === !!kd.normalized)) return `stores ${dd} as ${qd(kd)}`;
                if (Qd.has(dd) && kd.count !== gd) return "has vertex attributes of different lengths"
              }
              if (Wd) {
                if (void 0 === kd.indices) return Zd;
                for (const Jd in Wd.attributes)
                  if (Qd.has(Jd) && void 0 === Pd[Jd]) return Zd;
                if (void 0 === Wd.attributes.POSITION) return Zd;
                const dd = Id(kd.indices, zd.length) ? zd[kd.indices].count : -1;
                if (0 === dd) return Zd;
                if (-1 === KJ) KJ = Wd.bufferView, oJ = gd, lJ = dd;
                else {
                  QJ ??= new Map([
                    [KJ, [oJ, lJ]]
                  ]);
                  const Jd = QJ.get(Wd.bufferView);
                  if (Jd && (Jd[0] !== gd || Jd[1] !== dd)) return Zd;
                  QJ.set(Wd.bufferView, null !== Jd && void 0 !== Jd ? Jd : [gd, dd])
                }
              }
              let Cd = gd;
              if (void 0 !== kd.indices) {
                if (!Id(kd.indices, zd.length)) return Zd;
                const dd = zd[kd.indices];
                if ("SCALAR" !== dd.type) return Zd;
                if (5121 === dd.componentType) return "uses 8-bit indices";
                var RJ;
                if (5123 !== dd.componentType && 5125 !== dd.componentType) return `stores indices as ${null!==(RJ=pd.f[dd.componentType])&&void 0!==RJ?RJ:dd.componentType}`;
                if (!Wd && void 0 === dd.bufferView) return Zd;
                Cd = dd.count
              }
              if (4 === Nd && Cd % 3 !== 0) return Zd
            }
          }
          let IJ = 0,
            GJ = 0,
            vJ = 0;
          for (let pd = 0; pd < Ad.length; pd++) {
            const dd = Ad[pd].mesh;
            if (void 0 !== dd && ZJ.has(pd))
              for (const Jd of dJ[dd].primitives) vJ++, IJ += zd[Jd.attributes.POSITION].count, void 0 !== Jd.indices && (GJ += zd[Jd.indices].count)
          }
          const xJ = null !== (Td = null !== (Ed = Rd(IJ, Nd.vertices, "vertices")) && void 0 !== Ed ? Ed : Rd(GJ, Nd.indices, "indices")) && void 0 !== Td ? Td : Rd(vJ, Nd.primitives, "primitives");
          if (xJ) return xJ;
          for (const pd of JJ) {
            var qJ, BJ;
            if (void 0 !== pd.emissiveTexture) return "uses an emissive texture";
            const Jd = null !== (qJ = pd.alphaMode) && void 0 !== qJ ? qJ : "OPAQUE";
            if ("OPAQUE" !== Jd && "MASK" !== Jd && "BLEND" !== Jd) return Zd;
            const kd = null === (BJ = pd.pbrMetallicRoughness) || void 0 === BJ ? void 0 : BJ.baseColorTexture;
            if (kd) {
              var sJ, iJ, aJ, MJ, FJ;
              const Jd = null !== (sJ = dd.extensionsUsed) && void 0 !== sJ && sJ.includes("KHR_texture_transform") ? null === (iJ = kd.extensions) || void 0 === iJ ? void 0 : iJ.KHR_texture_transform : void 0;
              if (0 !== (null !== (aJ = kd.texCoord) && void 0 !== aJ ? aJ : 0) || 0 !== (null !== (MJ = null === Jd || void 0 === Jd ? void 0 : Jd.texCoord) && void 0 !== MJ ? MJ : 0)) return "uses a second UV set";
              const pd = kJ[kd.index];
              if (!pd || !Id(pd.source, pJ.length) || void 0 !== pd.sampler && !Id(pd.sampler, null === (FJ = dd.samplers) || void 0 === FJ ? void 0 : FJ.length)) return Zd
            }
          }
          for (const pd of pJ) {
            if (void 0 !== pd.uri) return gd;
            if (void 0 === pd.bufferView) return Zd;
            const kd = Fd(dd, Jd, pd.bufferView);
            if (!kd) return Zd;
            if ("image/png" !== pd.mimeType) {
              var YJ, mJ, bJ;
              return `has ${ad(null!==(YJ=null!==(mJ={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(bJ=pd.mimeType)&&void 0!==bJ?bJ:""])&&void 0!==mJ?mJ:pd.mimeType)&&void 0!==YJ?YJ:"untyped")} image`
            }
            if (!sd(kd)) return `has ${ad(Bd(kd))} image`;
            const Wd = new DataView(kd.buffer, kd.byteOffset, kd.byteLength),
              Pd = Wd.getUint32(16),
              Cd = Wd.getUint32(20);
            if (Pd > Nd.imageSide || Cd > Nd.imageSide) return `has a ${Pd} \xd7 ${Cd} image (the limit is ${Nd.imageSide})`
          }
          return null
        }(dd, Jd)
      } catch {
        return Zd
      }
    }

    function Sd(dd) {
      const Jd = md(dd.byteLength);
      if (Jd) return Jd;
      try {
        const {
          json: Jd,
          bin: kd
        } = (0, pd.w)(dd);
        return bd(Jd, kd)
      } catch (kd) {
        if (kd instanceof pd.m) return kd.reason;
        throw kd
      }
    }
  },
  9315: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Qd,
      f: () => ld,
      i: () => Od,
      k: () => Wd,
      m: () => Nd,
      n: () => Ld,
      q: () => Kd,
      t: () => od,
      v: () => Pd,
      w: () => Cd
    });
    var pd = kd(9323);
    class Nd extends Error {
      constructor(dd) {
        super(`GLB refused: it ${dd}`), this.reason = dd, this.name = "GlbRefused"
      }
    }
    class Wd extends Error {
      constructor(dd) {
        super(dd), this.name = "GlbError"
      }
    }

    function Pd(dd) {
      return Reflect.get(dd, "scene")
    }
    const Zd = 5130562,
      gd = "is not a binary glTF 2.0 file";

    function Cd(dd) {
      var Jd;
      const kd = dd instanceof Uint8Array ? dd : new Uint8Array(dd),
        Wd = (0, pd.g)(kd);
      if (null === Wd) throw new Nd(gd);
      const Pd = Wd.json,
        {
          jsonEnd: Cd,
          length: Kd
        } = Wd,
        od = new DataView(kd.buffer, kd.byteOffset, kd.byteLength);
      let ld = -1,
        Qd = 0;
      for (let ed = Cd; ed < Kd;) {
        if (ed + 8 > Kd) throw new Nd(gd);
        const dd = od.getUint32(ed, !0),
          Jd = od.getUint32(ed + 4, !0);
        if (ed + 8 + dd > Kd || Jd === pd.c || Jd === Zd && -1 !== ld) throw new Nd(gd);
        Jd === Zd && (ld = ed + 8, Qd = dd), ed += 8 + dd
      }
      let Ld = null;
      const Od = null === (Jd = Pd.buffers) || void 0 === Jd ? void 0 : Jd[0];
      if (-1 !== ld && Od && void 0 === Od.uri) {
        if (!(Od.byteLength >= 0) || Od.byteLength > Qd) throw new Nd(gd);
        Ld = new Uint8Array(kd.buffer, kd.byteOffset + ld, Od.byteLength)
      }
      return {
        json: Pd,
        bin: Ld,
        fileBytes: kd.byteLength
      }
    }

    function Kd(dd) {
      const Jd = dd.slice(dd.indexOf(",") + 1),
        kd = Uint8Array.fromBase64;
      if (kd) return kd(Jd).buffer;
      const pd = atob(Jd),
        Nd = new Uint8Array(pd.length);
      for (let Wd = 0; Wd < pd.length; Wd++) Nd[Wd] = pd.charCodeAt(Wd);
      return Nd.buffer
    }
    async function od(dd) {
      if (dd.startsWith("data:")) return Kd(dd);
      const Jd = await fetch(dd);
      if (!Jd.ok) throw new Wd(`fetching ${dd} failed: ${Jd.status} ${Jd.statusText}`);
      return await Jd.arrayBuffer()
    }
    const ld = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      Qd = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      Ld = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      Od = [
        ["POSITION", "position"],
        ["NORMAL", "normal"],
        ["TANGENT", "tangent"],
        ["TEXCOORD_0", "uv"],
        ["TEXCOORD_1", "uv2"],
        ["TEXCOORD_2", "uv3"],
        ["TEXCOORD_3", "uv4"],
        ["TEXCOORD_4", "uv5"],
        ["TEXCOORD_5", "uv6"],
        ["COLOR_0", "color"]
      ]
  },
  9323: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      g: () => Wd,
      k: () => Pd
    });
    const pd = 1179937895,
      Nd = 1313821514;

    function Wd(dd) {
      const Jd = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
      if (dd.byteLength < 20 || Jd.getUint32(0, !0) !== pd || 2 !== Jd.getUint32(4, !0)) return null;
      const kd = Math.min(Jd.getUint32(8, !0), dd.byteLength),
        Wd = Jd.getUint32(12, !0);
      if (Jd.getUint32(16, !0) !== Nd || 20 + Wd > kd) return null;
      let Pd;
      try {
        Pd = JSON.parse((new TextDecoder).decode(dd.subarray(20, 20 + Wd)))
      } catch {
        return null
      }
      return "object" === typeof Pd && null !== Pd ? {
        json: Pd,
        jsonEnd: 20 + Wd,
        length: kd
      } : null
    }

    function Pd(dd) {
      var Jd;
      const kd = null === (Jd = Wd(dd)) || void 0 === Jd ? void 0 : Jd.json;
      if (void 0 === kd || !Array.isArray(kd.extensionsUsed) || !kd.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const pd = kd.meshes;
      return Array.isArray(pd) && pd.some((dd => {
        const Jd = null === dd || void 0 === dd ? void 0 : dd.primitives;
        return Array.isArray(Jd) && Jd.some((dd => {
          const Jd = null === dd || void 0 === dd ? void 0 : dd.extensions;
          return null != (null === Jd || void 0 === Jd ? void 0 : Jd.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);