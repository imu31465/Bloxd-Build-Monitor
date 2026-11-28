export const id = 234;
export const ids = [234];
export const modules = {
  35653: (dd, Od, md) => {
    md.d(Od, {
      e: () => Vd,
      i: () => ud,
      k: () => sd
    });
    var Wd = md(35662);
    const Fd = {
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
      Rd = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      Xd = 1048576,
      Kd = "is not a binary glTF 2.0 file",
      hd = "loads data from outside the file",
      vd = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      Qd = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      td = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      od = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: td,
        TEXCOORD_2: td,
        TEXCOORD_3: td,
        TEXCOORD_4: td,
        TEXCOORD_5: td
      },
      Nd = new Set(Wd.g.map((dd => {
        let [Od] = dd;
        return Od
      }))),
      qd = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      Hd = 5126;

    function yd(dd) {
      return dd.toLocaleString("en-US")
    }

    function bd(dd, Od, md) {
      return dd > Od ? `has ${yd(dd)} ${md} (the limit is ${yd(Od)})` : null
    }

    function Td(dd, Od) {
      return Number.isInteger(dd) && dd >= 0 && dd < (null !== Od && void 0 !== Od ? Od : 0)
    }

    function pd(dd) {
      return Number.isInteger(dd) && dd >= 0
    }

    function Yd(dd, Od) {
      return void 0 !== dd && (!Array.isArray(dd) || dd.length > Od)
    }

    function gd(dd, Od) {
      return "object" === typeof dd && null !== dd && Object.keys(dd).length > Od
    }

    function wd(dd) {
      var Od;
      return `${dd.normalized?"normalized ":""}${null!==(Od=Wd.d[dd.componentType])&&void 0!==Od?Od:dd.componentType} ${dd.type}`
    }

    function Ed(dd) {
      const Od = Od => {
        var md;
        return null !== (md = dd[Od]) && void 0 !== md ? md : -1
      };
      return 255 === Od(0) && 216 === Od(1) ? "JPEG" : 82 === Od(0) && 73 === Od(1) && 87 === Od(8) && 69 === Od(9) ? "WebP" : 171 === Od(0) && 75 === Od(1) && 84 === Od(2) && 88 === Od(3) ? "KTX2" : "non-PNG"
    }

    function Jd(dd) {
      return dd.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((Od, md) => dd[md] === Od)) && 73 === dd[12] && 72 === dd[13] && 68 === dd[14] && 82 === dd[15]
    }

    function Ud(dd) {
      return /^[aeiou]/i.test(dd) ? `an ${dd}` : `a ${dd}`
    }

    function xd(dd) {
      const Od = dd.byteStride;
      return void 0 === Od || Number.isInteger(Od) && Od >= 4 && Od <= 252 && Od % 4 === 0
    }

    function Bd(dd, Od, md) {
      var Wd, Fd;
      const Rd = null === (Wd = dd.bufferViews) || void 0 === Wd ? void 0 : Wd[md];
      if (!Rd || !Od || 0 !== Rd.buffer) return null;
      const Xd = null !== (Fd = Rd.byteOffset) && void 0 !== Fd ? Fd : 0;
      return !pd(Xd) || !pd(Rd.byteLength) || Xd + Rd.byteLength > Od.byteLength ? null : Od.subarray(Xd, Xd + Rd.byteLength)
    }

    function Sd(dd, Od) {
      var md, Fd, Rd;
      const Xd = Wd.m[Od.type],
        Kd = Wd.c[Od.componentType];
      if (!Xd || !Kd || !Number.isInteger(Od.count) || Od.count < 0) return !1;
      if (void 0 === Od.bufferView) return !0;
      const hd = null === (md = dd.bufferViews) || void 0 === md ? void 0 : md[Od.bufferView],
        vd = null !== (Fd = Od.byteOffset) && void 0 !== Fd ? Fd : 0;
      if (!hd || !pd(vd) || vd % Kd !== 0) return !1;
      const Qd = Xd * Kd,
        td = null !== (Rd = hd.byteStride) && void 0 !== Rd ? Rd : Qd;
      if (td < Qd) return !1;
      return (0 === Od.count ? 0 : vd + td * (Od.count - 1) + Qd) <= hd.byteLength
    }

    function sd(dd) {
      return dd > Fd.fileBytes ? `is ${(dd/Xd).toFixed(1)} MiB (the limit is ${Fd.fileBytes/Xd} MiB)` : null
    }

    function ud(dd, Od) {
      try {
        return function(dd, Od) {
          var md, Xd, td, yd, pd, sd, ud, Vd, Ad, rd, Gd, nd, Ld, Pd, zd, cd, jd;
          const Dd = Array.isArray(dd.extensionsUsed) && dd.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(dd, Od) {
              var md, Wd;
              const {
                items: Fd,
                perFile: Xd,
                surfaces: Kd,
                few: hd,
                bounds: vd,
                attributeMembers: Qd
              } = Rd;
              if (Yd(dd.extensionsRequired, hd) || Yd(dd.animations, 1 / 0) || Yd(dd.skins, 1 / 0)) return !0;
              if (null !== (md = dd.animations) && void 0 !== md && md.length || null !== (Wd = dd.skins) && void 0 !== Wd && Wd.length) return !1;
              if ([
                  [dd.buffers, hd],
                  [dd.scenes, hd],
                  [dd.bufferViews, Fd],
                  [dd.accessors, Fd],
                  [dd.nodes, Fd],
                  [dd.meshes, Fd],
                  [dd.materials, Kd],
                  [dd.textures, Kd],
                  [dd.samplers, Kd],
                  [dd.images, Kd]
                ].some((dd => {
                  let [Od, md] = dd;
                  return Yd(Od, md)
                }))) return !0;
              for (const Rd of null !== (td = dd.accessors) && void 0 !== td ? td : []) {
                var td, od, Nd;
                if (Number.isInteger(Rd.count) && (!Number.isSafeInteger(Rd.count) || Object.is(Rd.count, -0)) || Yd(null !== (od = Rd.min) && void 0 !== od ? od : void 0, vd) || Yd(null !== (Nd = Rd.max) && void 0 !== Nd ? Nd : void 0, vd)) return !0
              }
              for (const Rd of null !== (qd = dd.scenes) && void 0 !== qd ? qd : []) {
                var qd;
                if (Yd(Rd.nodes, Fd)) return !0
              }
              let Hd = 0;
              for (const Rd of null !== (yd = dd.nodes) && void 0 !== yd ? yd : []) {
                var yd, bd, Td;
                if (Yd(Rd.children, Xd)) return !0;
                Hd += null !== (bd = null === (Td = Rd.children) || void 0 === Td ? void 0 : Td.length) && void 0 !== bd ? bd : 0
              }
              if (Hd > Xd) return !0;
              let pd = 0;
              for (const Rd of null !== (wd = dd.meshes) && void 0 !== wd ? wd : []) {
                var wd;
                if (!Array.isArray(Rd.primitives)) return !0;
                if (pd += Rd.primitives.length, pd > Xd) return !0;
                for (const dd of Rd.primitives) {
                  var Ed;
                  const md = Od ? null === (Ed = dd.extensions) || void 0 === Ed ? void 0 : Ed.KHR_draco_mesh_compression : void 0;
                  if (gd(dd.attributes, Qd) || gd(null === md || void 0 === md ? void 0 : md.attributes, Qd)) return !0
                }
              }
              return !1
            }(dd, Dd)) return Kd;
          const ed = null === (md = dd.asset) || void 0 === md ? void 0 : md.version;
          if ("string" !== typeof ed || !/^2\.\d+/.test(ed)) return `uses glTF version ${null!==ed&&void 0!==ed?ed:"(none)"}`;
          const Id = null === (Xd = dd.asset) || void 0 === Xd ? void 0 : Xd.minVersion;
          if (void 0 !== Id && "2.0" !== Id) return `uses glTF version ${Id}`;
          for (const Wd of null !== (ld = dd.extensionsRequired) && void 0 !== ld ? ld : []) {
            var ld;
            if (!vd.has(Wd)) return `requires the glTF extension ${Wd}`
          }
          if (null !== (td = dd.animations) && void 0 !== td && td.length) return "has animations";
          if (null !== (yd = dd.skins) && void 0 !== yd && yd.length) return "uses skins";
          const Cd = null !== (pd = dd.buffers) && void 0 !== pd ? pd : [];
          for (const [Wd, Fd] of Cd.entries()) {
            if (void 0 !== Fd.uri) return hd;
            if (Wd > 0 || !Od) return Kd
          }
          for (const [Wd, Fd] of(null !== (Zd = dd.bufferViews) && void 0 !== Zd ? Zd : []).entries()) {
            var Zd;
            if (!Bd(dd, Od, Wd) || !xd(Fd)) return Kd
          }
          const kd = null !== (sd = dd.accessors) && void 0 !== sd ? sd : [];
          for (const Wd of kd) {
            if (void 0 !== Wd.sparse) return "uses sparse accessors";
            const Od = Number.isInteger(Wd.count) ? bd(Wd.count, Fd.accessorElements, "elements in an accessor") : null;
            if (Od) return Od;
            if (!Sd(dd, Wd)) return Kd
          }
          const fd = null !== (ud = dd.scenes) && void 0 !== ud ? ud : [];
          if (1 !== fd.length) return `has ${fd.length} scenes`;
          const Md = (0, Wd.u)(dd);
          if (void 0 !== Md && 0 !== Md) return Kd;
          const dO = null !== (Vd = dd.nodes) && void 0 !== Vd ? Vd : [],
            OO = null !== (Ad = dd.meshes) && void 0 !== Ad ? Ad : [],
            mO = null !== (rd = dd.materials) && void 0 !== rd ? rd : [],
            WO = null !== (Gd = dd.textures) && void 0 !== Gd ? Gd : [],
            FO = null !== (nd = dd.images) && void 0 !== nd ? nd : [],
            RO = null !== (Ld = null !== (Pd = null !== (zd = bd(dO.length, Fd.nodes, "nodes")) && void 0 !== zd ? zd : bd(OO.length, Fd.meshes, "meshes")) && void 0 !== Pd ? Pd : bd(mO.length, Fd.materials, "materials")) && void 0 !== Ld ? Ld : bd(FO.length, Fd.images, "images");
          if (RO) return RO;
          const XO = new Set;
          for (const Wd of dO)
            for (const dd of null !== (KO = Wd.children) && void 0 !== KO ? KO : []) {
              var KO;
              if (!Td(dd, dO.length) || XO.has(dd)) return Kd;
              XO.add(dd)
            }
          const hO = new Set,
            vO = dd => {
              var Od;
              return !hO.has(dd) && (hO.add(dd), (null !== (Od = dO[dd].children) && void 0 !== Od ? Od : []).every(vO))
            };
          for (const Wd of null !== (QO = fd[0].nodes) && void 0 !== QO ? QO : []) {
            var QO;
            if (!Td(Wd, dO.length) || XO.has(Wd) || !vO(Wd)) return Kd
          }
          for (const Wd of dO) {
            if (void 0 !== Wd.matrix) return "uses node matrices";
            if (void 0 !== Wd.skin) return "uses skins";
            if (void 0 !== Wd.weights) return "uses morph targets";
            if (void 0 !== Wd.mesh && !Td(Wd.mesh, OO.length)) return Kd;
            const dd = [
              [Wd.translation, 3],
              [Wd.rotation, 4],
              [Wd.scale, 3]
            ];
            for (const [Od, md] of dd)
              if (void 0 !== Od && (!Array.isArray(Od) || Od.length !== md || !Od.every((dd => Number.isFinite(dd))))) return Kd
          }
          let tO = -1,
            oO = 0,
            NO = 0,
            qO = null;
          for (const Fd of OO) {
            if (void 0 !== Fd.weights) return "uses morph targets";
            if (0 === Fd.primitives.length) return Kd;
            for (const md of Fd.primitives) {
              var HO, yO;
              const Fd = null !== (HO = md.mode) && void 0 !== HO ? HO : 4;
              var bO;
              if (4 !== Fd && 0 !== Fd) return `uses ${null!==(bO=qd[Fd])&&void 0!==bO?bO:`mode ${Fd}`} primitives`;
              if (void 0 !== md.targets) return "uses morph targets";
              if (void 0 !== md.material && !Td(md.material, mO.length)) return Kd;
              const Rd = Dd ? null === (yO = md.extensions) || void 0 === yO ? void 0 : yO.KHR_draco_mesh_compression : void 0;
              if (Rd) {
                if (4 !== Fd) return "uses Draco-compressed points";
                if (!Bd(dd, Od, Rd.bufferView) || "object" !== typeof Rd.attributes) return Kd
              }
              const Xd = md.attributes;
              if ("object" !== typeof Xd || null === Xd) return Kd;
              if (void 0 === Xd.POSITION) return "has a primitive with no positions";
              if (!Td(Xd.POSITION, kd.length)) return Kd;
              const hd = kd[Xd.POSITION].count;
              for (const [dd, Od] of Object.entries(Xd)) {
                if (!Td(Od, kd.length)) return Kd;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(dd)) return "uses skins";
                const md = kd[Od],
                  Wd = Qd[dd];
                if (Wd && (md.componentType !== Hd || md.normalized || md.type !== Wd)) return `stores ${dd} as ${wd(md)}`;
                const Fd = od[dd];
                if (Fd && (md.type !== Fd.type || !Fd.componentTypes.includes(md.componentType) || md.componentType === Hd === !!md.normalized)) return `stores ${dd} as ${wd(md)}`;
                if (Nd.has(dd) && md.count !== hd) return "has vertex attributes of different lengths"
              }
              if (Rd) {
                if (void 0 === md.indices) return Kd;
                for (const Od in Rd.attributes)
                  if (Nd.has(Od) && void 0 === Xd[Od]) return Kd;
                if (void 0 === Rd.attributes.POSITION) return Kd;
                const dd = Td(md.indices, kd.length) ? kd[md.indices].count : -1;
                if (0 === dd) return Kd;
                if (-1 === tO) tO = Rd.bufferView, oO = hd, NO = dd;
                else {
                  qO ??= new Map([
                    [tO, [oO, NO]]
                  ]);
                  const Od = qO.get(Rd.bufferView);
                  if (Od && (Od[0] !== hd || Od[1] !== dd)) return Kd;
                  qO.set(Rd.bufferView, null !== Od && void 0 !== Od ? Od : [hd, dd])
                }
              }
              let vd = hd;
              if (void 0 !== md.indices) {
                if (!Td(md.indices, kd.length)) return Kd;
                const dd = kd[md.indices];
                if ("SCALAR" !== dd.type) return Kd;
                if (5121 === dd.componentType) return "uses 8-bit indices";
                var TO;
                if (5123 !== dd.componentType && 5125 !== dd.componentType) return `stores indices as ${null!==(TO=Wd.d[dd.componentType])&&void 0!==TO?TO:dd.componentType}`;
                if (!Rd && void 0 === dd.bufferView) return Kd;
                vd = dd.count
              }
              if (4 === Fd && vd % 3 !== 0) return Kd
            }
          }
          let pO = 0,
            YO = 0,
            gO = 0;
          for (let Wd = 0; Wd < dO.length; Wd++) {
            const dd = dO[Wd].mesh;
            if (void 0 !== dd && hO.has(Wd))
              for (const Od of OO[dd].primitives) gO++, pO += kd[Od.attributes.POSITION].count, void 0 !== Od.indices && (YO += kd[Od.indices].count)
          }
          const wO = null !== (cd = null !== (jd = bd(pO, Fd.vertices, "vertices")) && void 0 !== jd ? jd : bd(YO, Fd.indices, "indices")) && void 0 !== cd ? cd : bd(gO, Fd.primitives, "primitives");
          if (wO) return wO;
          for (const Wd of mO) {
            var aO, EO;
            if (void 0 !== Wd.emissiveTexture) return "uses an emissive texture";
            const Od = null !== (aO = Wd.alphaMode) && void 0 !== aO ? aO : "OPAQUE";
            if ("OPAQUE" !== Od && "MASK" !== Od && "BLEND" !== Od) return Kd;
            const md = null === (EO = Wd.pbrMetallicRoughness) || void 0 === EO ? void 0 : EO.baseColorTexture;
            if (md) {
              var JO, UO, xO, BO, SO;
              const Od = null !== (JO = dd.extensionsUsed) && void 0 !== JO && JO.includes("KHR_texture_transform") ? null === (UO = md.extensions) || void 0 === UO ? void 0 : UO.KHR_texture_transform : void 0;
              if (0 !== (null !== (xO = md.texCoord) && void 0 !== xO ? xO : 0) || 0 !== (null !== (BO = null === Od || void 0 === Od ? void 0 : Od.texCoord) && void 0 !== BO ? BO : 0)) return "uses a second UV set";
              const Wd = WO[md.index];
              if (!Wd || !Td(Wd.source, FO.length) || void 0 !== Wd.sampler && !Td(Wd.sampler, null === (SO = dd.samplers) || void 0 === SO ? void 0 : SO.length)) return Kd
            }
          }
          for (const Wd of FO) {
            if (void 0 !== Wd.uri) return hd;
            if (void 0 === Wd.bufferView) return Kd;
            const md = Bd(dd, Od, Wd.bufferView);
            if (!md) return Kd;
            if ("image/png" !== Wd.mimeType) {
              var sO, uO, VO;
              return `has ${Ud(null!==(sO=null!==(uO={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(VO=Wd.mimeType)&&void 0!==VO?VO:""])&&void 0!==uO?uO:Wd.mimeType)&&void 0!==sO?sO:"untyped")} image`
            }
            if (!Jd(md)) return `has ${Ud(Ed(md))} image`;
            const Rd = new DataView(md.buffer, md.byteOffset, md.byteLength),
              Xd = Rd.getUint32(16),
              vd = Rd.getUint32(20);
            if (Xd > Fd.imageSide || vd > Fd.imageSide) return `has a ${Xd} \xd7 ${vd} image (the limit is ${Fd.imageSide})`
          }
          return null
        }(dd, Od)
      } catch {
        return Kd
      }
    }

    function Vd(dd) {
      const Od = sd(dd.byteLength);
      if (Od) return Od;
      try {
        const {
          json: Od,
          bin: md
        } = (0, Wd.v)(dd);
        return ud(Od, md)
      } catch (md) {
        if (md instanceof Wd.j) return md.reason;
        throw md
      }
    }
  },
  35662: (dd, Od, md) => {
    md.d(Od, {
      c: () => qd,
      d: () => Nd,
      g: () => yd,
      i: () => Xd,
      j: () => Rd,
      m: () => Hd,
      n: () => td,
      r: () => od,
      u: () => Kd,
      v: () => Qd
    });
    const Wd = 1179937895,
      Fd = 1313821514;
    class Rd extends Error {
      constructor(dd) {
        super(`GLB refused: it ${dd}`), this.reason = dd, this.name = "GlbRefused"
      }
    }
    class Xd extends Error {
      constructor(dd) {
        super(dd), this.name = "GlbError"
      }
    }

    function Kd(dd) {
      return Reflect.get(dd, "scene")
    }
    const hd = 5130562,
      vd = "is not a binary glTF 2.0 file";

    function Qd(dd) {
      var Od;
      const md = dd instanceof Uint8Array ? dd : new Uint8Array(dd),
        Xd = function(dd) {
          const Od = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
          if (dd.byteLength < 20 || Od.getUint32(0, !0) !== Wd || 2 !== Od.getUint32(4, !0)) return null;
          const md = Math.min(Od.getUint32(8, !0), dd.byteLength),
            Rd = Od.getUint32(12, !0);
          if (Od.getUint32(16, !0) !== Fd || 20 + Rd > md) return null;
          let Xd;
          try {
            Xd = JSON.parse((new TextDecoder).decode(dd.subarray(20, 20 + Rd)))
          } catch {
            return null
          }
          return "object" === typeof Xd && null !== Xd ? {
            json: Xd,
            jsonEnd: 20 + Rd,
            length: md
          } : null
        }(md);
      if (null === Xd) throw new Rd(vd);
      const Kd = Xd.json,
        {
          jsonEnd: Qd,
          length: td
        } = Xd,
        od = new DataView(md.buffer, md.byteOffset, md.byteLength);
      let Nd = -1,
        qd = 0;
      for (let Wd = Qd; Wd < td;) {
        if (Wd + 8 > td) throw new Rd(vd);
        const dd = od.getUint32(Wd, !0),
          Od = od.getUint32(Wd + 4, !0);
        if (Wd + 8 + dd > td || Od === Fd || Od === hd && -1 !== Nd) throw new Rd(vd);
        Od === hd && (Nd = Wd + 8, qd = dd), Wd += 8 + dd
      }
      let Hd = null;
      const yd = null === (Od = Kd.buffers) || void 0 === Od ? void 0 : Od[0];
      if (-1 !== Nd && yd && void 0 === yd.uri) {
        if (!(yd.byteLength >= 0) || yd.byteLength > qd) throw new Rd(vd);
        Hd = new Uint8Array(md.buffer, md.byteOffset + Nd, yd.byteLength)
      }
      return {
        json: Kd,
        bin: Hd,
        fileBytes: md.byteLength
      }
    }

    function td(dd) {
      const Od = dd.slice(dd.indexOf(",") + 1),
        md = Uint8Array.fromBase64;
      if (md) return md(Od).buffer;
      const Wd = atob(Od),
        Fd = new Uint8Array(Wd.length);
      for (let Rd = 0; Rd < Wd.length; Rd++) Fd[Rd] = Wd.charCodeAt(Rd);
      return Fd.buffer
    }
    async function od(dd) {
      if (dd.startsWith("data:")) return td(dd);
      const Od = await fetch(dd);
      if (!Od.ok) throw new Xd(`fetching ${dd} failed: ${Od.status} ${Od.statusText}`);
      return await Od.arrayBuffer()
    }
    const Nd = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      qd = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      Hd = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      yd = [
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
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);