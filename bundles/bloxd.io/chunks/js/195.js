export const id = 195;
export const ids = [195];
export const modules = {
  9429: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => HT,
      c: () => oT,
      f: () => JT
    });
    var lT = cT(9438);
    const MT = {
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
      KT = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      OT = 1048576,
      yT = "is not a binary glTF 2.0 file",
      fT = "loads data from outside the file",
      xT = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      IT = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      AT = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      CT = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: AT,
        TEXCOORD_2: AT,
        TEXCOORD_3: AT,
        TEXCOORD_4: AT,
        TEXCOORD_5: AT
      },
      jT = new Set(lT.h.map((TT => {
        let [kT] = TT;
        return kT
      }))),
      vT = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      tT = 5126;

    function hT(TT) {
      return TT.toLocaleString("en-US")
    }

    function NT(TT, kT, cT) {
      return TT > kT ? `has ${hT(TT)} ${cT} (the limit is ${hT(kT)})` : null
    }

    function QT(TT, kT) {
      return Number.isInteger(TT) && TT >= 0 && TT < (null !== kT && void 0 !== kT ? kT : 0)
    }

    function ST(TT) {
      return Number.isInteger(TT) && TT >= 0
    }

    function DT(TT, kT) {
      return void 0 !== TT && (!Array.isArray(TT) || TT.length > kT)
    }

    function aT(TT, kT) {
      return "object" === typeof TT && null !== TT && Object.keys(TT).length > kT
    }

    function FT(TT) {
      var kT;
      return `${TT.normalized?"normalized ":""}${null!==(kT=lT.g[TT.componentType])&&void 0!==kT?kT:TT.componentType} ${TT.type}`
    }

    function rT(TT) {
      const kT = kT => {
        var cT;
        return null !== (cT = TT[kT]) && void 0 !== cT ? cT : -1
      };
      return 255 === kT(0) && 216 === kT(1) ? "JPEG" : 82 === kT(0) && 73 === kT(1) && 87 === kT(8) && 69 === kT(9) ? "WebP" : 171 === kT(0) && 75 === kT(1) && 84 === kT(2) && 88 === kT(3) ? "KTX2" : "non-PNG"
    }

    function PT(TT) {
      return TT.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((kT, cT) => TT[cT] === kT)) && 73 === TT[12] && 72 === TT[13] && 68 === TT[14] && 82 === TT[15]
    }

    function wT(TT) {
      return /^[aeiou]/i.test(TT) ? `an ${TT}` : `a ${TT}`
    }

    function mT(TT) {
      const kT = TT.byteStride;
      return void 0 === kT || Number.isInteger(kT) && kT >= 4 && kT <= 252 && kT % 4 === 0
    }

    function bT(TT, kT, cT) {
      var lT, MT;
      const KT = null === (lT = TT.bufferViews) || void 0 === lT ? void 0 : lT[cT];
      if (!KT || !kT || 0 !== KT.buffer) return null;
      const OT = null !== (MT = KT.byteOffset) && void 0 !== MT ? MT : 0;
      return !ST(OT) || !ST(KT.byteLength) || OT + KT.byteLength > kT.byteLength ? null : kT.subarray(OT, OT + KT.byteLength)
    }

    function zT(TT, kT) {
      var cT, MT, KT;
      const OT = lT.p[kT.type],
        yT = lT.e[kT.componentType];
      if (!OT || !yT || !Number.isInteger(kT.count) || kT.count < 0) return !1;
      if (void 0 === kT.bufferView) return !0;
      const fT = null === (cT = TT.bufferViews) || void 0 === cT ? void 0 : cT[kT.bufferView],
        xT = null !== (MT = kT.byteOffset) && void 0 !== MT ? MT : 0;
      if (!fT || !ST(xT) || xT % yT !== 0) return !1;
      const IT = OT * yT,
        AT = null !== (KT = fT.byteStride) && void 0 !== KT ? KT : IT;
      if (AT < IT) return !1;
      return (0 === kT.count ? 0 : xT + AT * (kT.count - 1) + IT) <= fT.byteLength
    }

    function JT(TT) {
      return TT > MT.fileBytes ? `is ${(TT/OT).toFixed(1)} MiB (the limit is ${MT.fileBytes/OT} MiB)` : null
    }

    function oT(TT, kT) {
      try {
        return function(TT, kT) {
          var cT, OT, AT, hT, ST, JT, oT, HT, eT, GT, VT, ET, ZT, uT, XT, dT, LT;
          const RT = Array.isArray(TT.extensionsUsed) && TT.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(TT, kT) {
              var cT, lT;
              const {
                items: MT,
                perFile: OT,
                surfaces: yT,
                few: fT,
                bounds: xT,
                attributeMembers: IT
              } = KT;
              if (DT(TT.extensionsRequired, fT) || DT(TT.animations, 1 / 0) || DT(TT.skins, 1 / 0)) return !0;
              if (null !== (cT = TT.animations) && void 0 !== cT && cT.length || null !== (lT = TT.skins) && void 0 !== lT && lT.length) return !1;
              if ([
                  [TT.buffers, fT],
                  [TT.scenes, fT],
                  [TT.bufferViews, MT],
                  [TT.accessors, MT],
                  [TT.nodes, MT],
                  [TT.meshes, MT],
                  [TT.materials, yT],
                  [TT.textures, yT],
                  [TT.samplers, yT],
                  [TT.images, yT]
                ].some((TT => {
                  let [kT, cT] = TT;
                  return DT(kT, cT)
                }))) return !0;
              for (const KT of null !== (AT = TT.accessors) && void 0 !== AT ? AT : []) {
                var AT, CT, jT;
                if (Number.isInteger(KT.count) && (!Number.isSafeInteger(KT.count) || Object.is(KT.count, -0)) || DT(null !== (CT = KT.min) && void 0 !== CT ? CT : void 0, xT) || DT(null !== (jT = KT.max) && void 0 !== jT ? jT : void 0, xT)) return !0
              }
              for (const KT of null !== (vT = TT.scenes) && void 0 !== vT ? vT : []) {
                var vT;
                if (DT(KT.nodes, MT)) return !0
              }
              let tT = 0;
              for (const KT of null !== (hT = TT.nodes) && void 0 !== hT ? hT : []) {
                var hT, NT, QT;
                if (DT(KT.children, OT)) return !0;
                tT += null !== (NT = null === (QT = KT.children) || void 0 === QT ? void 0 : QT.length) && void 0 !== NT ? NT : 0
              }
              if (tT > OT) return !0;
              let ST = 0;
              for (const KT of null !== (FT = TT.meshes) && void 0 !== FT ? FT : []) {
                var FT;
                if (!Array.isArray(KT.primitives)) return !0;
                if (ST += KT.primitives.length, ST > OT) return !0;
                for (const TT of KT.primitives) {
                  var rT;
                  const cT = kT ? null === (rT = TT.extensions) || void 0 === rT ? void 0 : rT.KHR_draco_mesh_compression : void 0;
                  if (aT(TT.attributes, IT) || aT(null === cT || void 0 === cT ? void 0 : cT.attributes, IT)) return !0
                }
              }
              return !1
            }(TT, RT)) return yT;
          const gT = null === (cT = TT.asset) || void 0 === cT ? void 0 : cT.version;
          if ("string" !== typeof gT || !/^2\.\d+/.test(gT)) return `uses glTF version ${null!==gT&&void 0!==gT?gT:"(none)"}`;
          const UT = null === (OT = TT.asset) || void 0 === OT ? void 0 : OT.minVersion;
          if (void 0 !== UT && "2.0" !== UT) return `uses glTF version ${UT}`;
          for (const lT of null !== (YT = TT.extensionsRequired) && void 0 !== YT ? YT : []) {
            var YT;
            if (!xT.has(lT)) return `requires the glTF extension ${lT}`
          }
          if (null !== (AT = TT.animations) && void 0 !== AT && AT.length) return "has animations";
          if (null !== (hT = TT.skins) && void 0 !== hT && hT.length) return "uses skins";
          const BT = null !== (ST = TT.buffers) && void 0 !== ST ? ST : [];
          for (const [lT, MT] of BT.entries()) {
            if (void 0 !== MT.uri) return fT;
            if (lT > 0 || !kT) return yT
          }
          for (const [lT, MT] of(null !== (WT = TT.bufferViews) && void 0 !== WT ? WT : []).entries()) {
            var WT;
            if (!bT(TT, kT, lT) || !mT(MT)) return yT
          }
          const nT = null !== (JT = TT.accessors) && void 0 !== JT ? JT : [];
          for (const lT of nT) {
            if (void 0 !== lT.sparse) return "uses sparse accessors";
            const kT = Number.isInteger(lT.count) ? NT(lT.count, MT.accessorElements, "elements in an accessor") : null;
            if (kT) return kT;
            if (!zT(TT, lT)) return yT
          }
          const pT = null !== (oT = TT.scenes) && void 0 !== oT ? oT : [];
          if (1 !== pT.length) return `has ${pT.length} scenes`;
          const iT = (0, lT.A)(TT);
          if (void 0 !== iT && 0 !== iT) return yT;
          const qT = null !== (HT = TT.nodes) && void 0 !== HT ? HT : [],
            sT = null !== (eT = TT.meshes) && void 0 !== eT ? eT : [],
            Tk = null !== (GT = TT.materials) && void 0 !== GT ? GT : [],
            kk = null !== (VT = TT.textures) && void 0 !== VT ? VT : [],
            ck = null !== (ET = TT.images) && void 0 !== ET ? ET : [],
            lk = null !== (ZT = null !== (uT = null !== (XT = NT(qT.length, MT.nodes, "nodes")) && void 0 !== XT ? XT : NT(sT.length, MT.meshes, "meshes")) && void 0 !== uT ? uT : NT(Tk.length, MT.materials, "materials")) && void 0 !== ZT ? ZT : NT(ck.length, MT.images, "images");
          if (lk) return lk;
          const Mk = new Set;
          for (const lT of qT)
            for (const TT of null !== (Kk = lT.children) && void 0 !== Kk ? Kk : []) {
              var Kk;
              if (!QT(TT, qT.length) || Mk.has(TT)) return yT;
              Mk.add(TT)
            }
          const Ok = new Set,
            yk = TT => {
              var kT;
              return !Ok.has(TT) && (Ok.add(TT), (null !== (kT = qT[TT].children) && void 0 !== kT ? kT : []).every(yk))
            };
          for (const lT of null !== (fk = pT[0].nodes) && void 0 !== fk ? fk : []) {
            var fk;
            if (!QT(lT, qT.length) || Mk.has(lT) || !yk(lT)) return yT
          }
          for (const lT of qT) {
            if (void 0 !== lT.matrix) return "uses node matrices";
            if (void 0 !== lT.skin) return "uses skins";
            if (void 0 !== lT.weights) return "uses morph targets";
            if (void 0 !== lT.mesh && !QT(lT.mesh, sT.length)) return yT;
            const TT = [
              [lT.translation, 3],
              [lT.rotation, 4],
              [lT.scale, 3]
            ];
            for (const [kT, cT] of TT)
              if (void 0 !== kT && (!Array.isArray(kT) || kT.length !== cT || !kT.every((TT => Number.isFinite(TT))))) return yT
          }
          let xk = -1,
            Ik = 0,
            Ak = 0,
            Ck = null;
          for (const MT of sT) {
            if (void 0 !== MT.weights) return "uses morph targets";
            if (0 === MT.primitives.length) return yT;
            for (const cT of MT.primitives) {
              var jk, vk;
              const MT = null !== (jk = cT.mode) && void 0 !== jk ? jk : 4;
              var tk;
              if (4 !== MT && 0 !== MT) return `uses ${null!==(tk=vT[MT])&&void 0!==tk?tk:`mode ${MT}`} primitives`;
              if (void 0 !== cT.targets) return "uses morph targets";
              if (void 0 !== cT.material && !QT(cT.material, Tk.length)) return yT;
              const KT = RT ? null === (vk = cT.extensions) || void 0 === vk ? void 0 : vk.KHR_draco_mesh_compression : void 0;
              if (KT) {
                if (4 !== MT) return "uses Draco-compressed points";
                if (!bT(TT, kT, KT.bufferView) || "object" !== typeof KT.attributes) return yT
              }
              const OT = cT.attributes;
              if ("object" !== typeof OT || null === OT) return yT;
              if (void 0 === OT.POSITION) return "has a primitive with no positions";
              if (!QT(OT.POSITION, nT.length)) return yT;
              const fT = nT[OT.POSITION].count;
              for (const [TT, kT] of Object.entries(OT)) {
                if (!QT(kT, nT.length)) return yT;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(TT)) return "uses skins";
                const cT = nT[kT],
                  lT = IT[TT];
                if (lT && (cT.componentType !== tT || cT.normalized || cT.type !== lT)) return `stores ${TT} as ${FT(cT)}`;
                const MT = CT[TT];
                if (MT && (cT.type !== MT.type || !MT.componentTypes.includes(cT.componentType) || cT.componentType === tT === !!cT.normalized)) return `stores ${TT} as ${FT(cT)}`;
                if (jT.has(TT) && cT.count !== fT) return "has vertex attributes of different lengths"
              }
              if (KT) {
                if (void 0 === cT.indices) return yT;
                for (const kT in KT.attributes)
                  if (jT.has(kT) && void 0 === OT[kT]) return yT;
                if (void 0 === KT.attributes.POSITION) return yT;
                const TT = QT(cT.indices, nT.length) ? nT[cT.indices].count : -1;
                if (0 === TT) return yT;
                if (-1 === xk) xk = KT.bufferView, Ik = fT, Ak = TT;
                else {
                  Ck ??= new Map([
                    [xk, [Ik, Ak]]
                  ]);
                  const kT = Ck.get(KT.bufferView);
                  if (kT && (kT[0] !== fT || kT[1] !== TT)) return yT;
                  Ck.set(KT.bufferView, null !== kT && void 0 !== kT ? kT : [fT, TT])
                }
              }
              let xT = fT;
              if (void 0 !== cT.indices) {
                if (!QT(cT.indices, nT.length)) return yT;
                const TT = nT[cT.indices];
                if ("SCALAR" !== TT.type) return yT;
                if (5121 === TT.componentType) return "uses 8-bit indices";
                var hk;
                if (5123 !== TT.componentType && 5125 !== TT.componentType) return `stores indices as ${null!==(hk=lT.g[TT.componentType])&&void 0!==hk?hk:TT.componentType}`;
                if (!KT && void 0 === TT.bufferView) return yT;
                xT = TT.count
              }
              if (4 === MT && xT % 3 !== 0) return yT
            }
          }
          let Nk = 0,
            Qk = 0,
            Sk = 0;
          for (let lT = 0; lT < qT.length; lT++) {
            const TT = qT[lT].mesh;
            if (void 0 !== TT && Ok.has(lT))
              for (const kT of sT[TT].primitives) Sk++, Nk += nT[kT.attributes.POSITION].count, void 0 !== kT.indices && (Qk += nT[kT.indices].count)
          }
          const Dk = null !== (dT = null !== (LT = NT(Nk, MT.vertices, "vertices")) && void 0 !== LT ? LT : NT(Qk, MT.indices, "indices")) && void 0 !== dT ? dT : NT(Sk, MT.primitives, "primitives");
          if (Dk) return Dk;
          for (const lT of Tk) {
            var ak, Fk;
            if (void 0 !== lT.emissiveTexture) return "uses an emissive texture";
            const kT = null !== (ak = lT.alphaMode) && void 0 !== ak ? ak : "OPAQUE";
            if ("OPAQUE" !== kT && "MASK" !== kT && "BLEND" !== kT) return yT;
            const cT = null === (Fk = lT.pbrMetallicRoughness) || void 0 === Fk ? void 0 : Fk.baseColorTexture;
            if (cT) {
              var rk, Pk, wk, mk, bk;
              const kT = null !== (rk = TT.extensionsUsed) && void 0 !== rk && rk.includes("KHR_texture_transform") ? null === (Pk = cT.extensions) || void 0 === Pk ? void 0 : Pk.KHR_texture_transform : void 0;
              if (0 !== (null !== (wk = cT.texCoord) && void 0 !== wk ? wk : 0) || 0 !== (null !== (mk = null === kT || void 0 === kT ? void 0 : kT.texCoord) && void 0 !== mk ? mk : 0)) return "uses a second UV set";
              const lT = kk[cT.index];
              if (!lT || !QT(lT.source, ck.length) || void 0 !== lT.sampler && !QT(lT.sampler, null === (bk = TT.samplers) || void 0 === bk ? void 0 : bk.length)) return yT
            }
          }
          for (const lT of ck) {
            if (void 0 !== lT.uri) return fT;
            if (void 0 === lT.bufferView) return yT;
            const cT = bT(TT, kT, lT.bufferView);
            if (!cT) return yT;
            if ("image/png" !== lT.mimeType) {
              var zk, Jk, Hk;
              return `has ${wT(null!==(zk=null!==(Jk={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(Hk=lT.mimeType)&&void 0!==Hk?Hk:""])&&void 0!==Jk?Jk:lT.mimeType)&&void 0!==zk?zk:"untyped")} image`
            }
            if (!PT(cT)) return `has ${wT(rT(cT))} image`;
            const KT = new DataView(cT.buffer, cT.byteOffset, cT.byteLength),
              OT = KT.getUint32(16),
              xT = KT.getUint32(20);
            if (OT > MT.imageSide || xT > MT.imageSide) return `has a ${OT} \xd7 ${xT} image (the limit is ${MT.imageSide})`
          }
          return null
        }(TT, kT)
      } catch {
        return yT
      }
    }

    function HT(TT) {
      const kT = JT(TT.byteLength);
      if (kT) return kT;
      try {
        const {
          json: kT,
          bin: cT
        } = (0, lT.D)(TT);
        return oT(kT, cT)
      } catch (cT) {
        if (cT instanceof lT.o) return cT.reason;
        throw cT
      }
    }
  },
  9438: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => OT,
      D: () => xT,
      e: () => jT,
      g: () => CT,
      h: () => tT,
      k: () => KT,
      o: () => MT,
      p: () => vT,
      t: () => IT,
      x: () => AT
    });
    var lT = cT(9440);
    class MT extends Error {
      constructor(TT) {
        super(`GLB refused: it ${TT}`), this.reason = TT, this.name = "GlbRefused"
      }
    }
    class KT extends Error {
      constructor(TT) {
        super(TT), this.name = "GlbError"
      }
    }

    function OT(TT) {
      return Reflect.get(TT, "scene")
    }
    const yT = 5130562,
      fT = "is not a binary glTF 2.0 file";

    function xT(TT) {
      var kT;
      const cT = TT instanceof Uint8Array ? TT : new Uint8Array(TT),
        KT = (0, lT.e)(cT);
      if (null === KT) throw new MT(fT);
      const OT = KT.json,
        {
          jsonEnd: xT,
          length: IT
        } = KT,
        AT = new DataView(cT.buffer, cT.byteOffset, cT.byteLength);
      let CT = -1,
        jT = 0;
      for (let hT = xT; hT < IT;) {
        if (hT + 8 > IT) throw new MT(fT);
        const TT = AT.getUint32(hT, !0),
          kT = AT.getUint32(hT + 4, !0);
        if (hT + 8 + TT > IT || kT === lT.c || kT === yT && -1 !== CT) throw new MT(fT);
        kT === yT && (CT = hT + 8, jT = TT), hT += 8 + TT
      }
      let vT = null;
      const tT = null === (kT = OT.buffers) || void 0 === kT ? void 0 : kT[0];
      if (-1 !== CT && tT && void 0 === tT.uri) {
        if (!(tT.byteLength >= 0) || tT.byteLength > jT) throw new MT(fT);
        vT = new Uint8Array(cT.buffer, cT.byteOffset + CT, tT.byteLength)
      }
      return {
        json: OT,
        bin: vT,
        fileBytes: cT.byteLength
      }
    }

    function IT(TT) {
      const kT = TT.slice(TT.indexOf(",") + 1),
        cT = Uint8Array.fromBase64;
      if (cT) return cT(kT).buffer;
      const lT = atob(kT),
        MT = new Uint8Array(lT.length);
      for (let KT = 0; KT < lT.length; KT++) MT[KT] = lT.charCodeAt(KT);
      return MT.buffer
    }
    async function AT(TT) {
      if (TT.startsWith("data:")) return IT(TT);
      const kT = await fetch(TT);
      if (!kT.ok) throw new KT(`fetching ${TT} failed: ${kT.status} ${kT.statusText}`);
      return await kT.arrayBuffer()
    }
    const CT = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      jT = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      vT = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      tT = [
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
  9440: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT,
      e: () => KT,
      g: () => OT
    });
    const lT = 1179937895,
      MT = 1313821514;

    function KT(TT) {
      const kT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      if (TT.byteLength < 20 || kT.getUint32(0, !0) !== lT || 2 !== kT.getUint32(4, !0)) return null;
      const cT = Math.min(kT.getUint32(8, !0), TT.byteLength),
        KT = kT.getUint32(12, !0);
      if (kT.getUint32(16, !0) !== MT || 20 + KT > cT) return null;
      let OT;
      try {
        OT = JSON.parse((new TextDecoder).decode(TT.subarray(20, 20 + KT)))
      } catch {
        return null
      }
      return "object" === typeof OT && null !== OT ? {
        json: OT,
        jsonEnd: 20 + KT,
        length: cT
      } : null
    }

    function OT(TT) {
      var kT;
      const cT = null === (kT = KT(TT)) || void 0 === kT ? void 0 : kT.json;
      if (void 0 === cT || !Array.isArray(cT.extensionsUsed) || !cT.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const lT = cT.meshes;
      return Array.isArray(lT) && lT.some((TT => {
        const kT = null === TT || void 0 === TT ? void 0 : TT.primitives;
        return Array.isArray(kT) && kT.some((TT => {
          const kT = null === TT || void 0 === TT ? void 0 : TT.extensions;
          return null != (null === kT || void 0 === kT ? void 0 : kT.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);