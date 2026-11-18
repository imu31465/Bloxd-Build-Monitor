export const id = 181;
export const ids = [181];
export const modules = {
  8615: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => WJ,
      f: () => wJ,
      j: () => bJ
    });
    var FJ = ZJ(8620);
    const UJ = {
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
      eJ = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      XJ = 1048576,
      AJ = "is not a binary glTF 2.0 file",
      qJ = "loads data from outside the file",
      jJ = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      YJ = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      hJ = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      DJ = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: hJ,
        TEXCOORD_2: hJ,
        TEXCOORD_3: hJ,
        TEXCOORD_4: hJ,
        TEXCOORD_5: hJ
      },
      sJ = new Set(FJ.l.map((JJ => {
        let [cJ] = JJ;
        return cJ
      }))),
      nJ = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      GJ = 5126;

    function fJ(JJ) {
      return JJ.toLocaleString("en-US")
    }

    function xJ(JJ, cJ, ZJ) {
      return JJ > cJ ? `has ${fJ(JJ)} ${ZJ} (the limit is ${fJ(cJ)})` : null
    }

    function rJ(JJ, cJ) {
      return Number.isInteger(JJ) && JJ >= 0 && JJ < (null !== cJ && void 0 !== cJ ? cJ : 0)
    }

    function vJ(JJ) {
      return Number.isInteger(JJ) && JJ >= 0
    }

    function mJ(JJ, cJ) {
      return void 0 !== JJ && (!Array.isArray(JJ) || JJ.length > cJ)
    }

    function QJ(JJ, cJ) {
      return "object" === typeof JJ && null !== JJ && Object.keys(JJ).length > cJ
    }

    function EJ(JJ) {
      var cJ;
      return `${JJ.normalized?"normalized ":""}${null!==(cJ=FJ.i[JJ.componentType])&&void 0!==cJ?cJ:JJ.componentType} ${JJ.type}`
    }

    function VJ(JJ) {
      const cJ = cJ => {
        var ZJ;
        return null !== (ZJ = JJ[cJ]) && void 0 !== ZJ ? ZJ : -1
      };
      return 255 === cJ(0) && 216 === cJ(1) ? "JPEG" : 82 === cJ(0) && 73 === cJ(1) && 87 === cJ(8) && 69 === cJ(9) ? "WebP" : 171 === cJ(0) && 75 === cJ(1) && 84 === cJ(2) && 88 === cJ(3) ? "KTX2" : "non-PNG"
    }

    function KJ(JJ) {
      return JJ.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((cJ, ZJ) => JJ[ZJ] === cJ)) && 73 === JJ[12] && 72 === JJ[13] && 68 === JJ[14] && 82 === JJ[15]
    }

    function yJ(JJ) {
      return /^[aeiou]/i.test(JJ) ? `an ${JJ}` : `a ${JJ}`
    }

    function SJ(JJ) {
      const cJ = JJ.byteStride;
      return void 0 === cJ || Number.isInteger(cJ) && cJ >= 4 && cJ <= 252 && cJ % 4 === 0
    }

    function IJ(JJ, cJ, ZJ) {
      var FJ, UJ;
      const eJ = null === (FJ = JJ.bufferViews) || void 0 === FJ ? void 0 : FJ[ZJ];
      if (!eJ || !cJ || 0 !== eJ.buffer) return null;
      const XJ = null !== (UJ = eJ.byteOffset) && void 0 !== UJ ? UJ : 0;
      return !vJ(XJ) || !vJ(eJ.byteLength) || XJ + eJ.byteLength > cJ.byteLength ? null : cJ.subarray(XJ, XJ + eJ.byteLength)
    }

    function MJ(JJ, cJ) {
      var ZJ, UJ, eJ;
      const XJ = FJ.s[cJ.type],
        AJ = FJ.e[cJ.componentType];
      if (!XJ || !AJ || !Number.isInteger(cJ.count) || cJ.count < 0) return !1;
      if (void 0 === cJ.bufferView) return !0;
      const qJ = null === (ZJ = JJ.bufferViews) || void 0 === ZJ ? void 0 : ZJ[cJ.bufferView],
        jJ = null !== (UJ = cJ.byteOffset) && void 0 !== UJ ? UJ : 0;
      if (!qJ || !vJ(jJ) || jJ % AJ !== 0) return !1;
      const YJ = XJ * AJ,
        hJ = null !== (eJ = qJ.byteStride) && void 0 !== eJ ? eJ : YJ;
      if (hJ < YJ) return !1;
      return (0 === cJ.count ? 0 : jJ + hJ * (cJ.count - 1) + YJ) <= qJ.byteLength
    }

    function bJ(JJ) {
      return JJ > UJ.fileBytes ? `is ${(JJ/XJ).toFixed(1)} MiB (the limit is ${UJ.fileBytes/XJ} MiB)` : null
    }

    function wJ(JJ, cJ) {
      try {
        return function(JJ, cJ) {
          var ZJ, XJ, hJ, fJ, vJ, bJ, wJ, WJ, gJ, HJ, PJ, kJ, pJ, dJ, zJ, NJ, OJ;
          const TJ = Array.isArray(JJ.extensionsUsed) && JJ.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(JJ, cJ) {
              var ZJ, FJ;
              const {
                items: UJ,
                perFile: XJ,
                surfaces: AJ,
                few: qJ,
                bounds: jJ,
                attributeMembers: YJ
              } = eJ;
              if (mJ(JJ.extensionsRequired, qJ) || mJ(JJ.animations, 1 / 0) || mJ(JJ.skins, 1 / 0)) return !0;
              if (null !== (ZJ = JJ.animations) && void 0 !== ZJ && ZJ.length || null !== (FJ = JJ.skins) && void 0 !== FJ && FJ.length) return !1;
              if ([
                  [JJ.buffers, qJ],
                  [JJ.scenes, qJ],
                  [JJ.bufferViews, UJ],
                  [JJ.accessors, UJ],
                  [JJ.nodes, UJ],
                  [JJ.meshes, UJ],
                  [JJ.materials, AJ],
                  [JJ.textures, AJ],
                  [JJ.samplers, AJ],
                  [JJ.images, AJ]
                ].some((JJ => {
                  let [cJ, ZJ] = JJ;
                  return mJ(cJ, ZJ)
                }))) return !0;
              for (const eJ of null !== (hJ = JJ.accessors) && void 0 !== hJ ? hJ : []) {
                var hJ, DJ, sJ;
                if (Number.isInteger(eJ.count) && (!Number.isSafeInteger(eJ.count) || Object.is(eJ.count, -0)) || mJ(null !== (DJ = eJ.min) && void 0 !== DJ ? DJ : void 0, jJ) || mJ(null !== (sJ = eJ.max) && void 0 !== sJ ? sJ : void 0, jJ)) return !0
              }
              for (const eJ of null !== (nJ = JJ.scenes) && void 0 !== nJ ? nJ : []) {
                var nJ;
                if (mJ(eJ.nodes, UJ)) return !0
              }
              let GJ = 0;
              for (const eJ of null !== (fJ = JJ.nodes) && void 0 !== fJ ? fJ : []) {
                var fJ, xJ, rJ;
                if (mJ(eJ.children, XJ)) return !0;
                GJ += null !== (xJ = null === (rJ = eJ.children) || void 0 === rJ ? void 0 : rJ.length) && void 0 !== xJ ? xJ : 0
              }
              if (GJ > XJ) return !0;
              let vJ = 0;
              for (const eJ of null !== (EJ = JJ.meshes) && void 0 !== EJ ? EJ : []) {
                var EJ;
                if (!Array.isArray(eJ.primitives)) return !0;
                if (vJ += eJ.primitives.length, vJ > XJ) return !0;
                for (const JJ of eJ.primitives) {
                  var VJ;
                  const ZJ = cJ ? null === (VJ = JJ.extensions) || void 0 === VJ ? void 0 : VJ.KHR_draco_mesh_compression : void 0;
                  if (QJ(JJ.attributes, YJ) || QJ(null === ZJ || void 0 === ZJ ? void 0 : ZJ.attributes, YJ)) return !0
                }
              }
              return !1
            }(JJ, TJ)) return AJ;
          const CJ = null === (ZJ = JJ.asset) || void 0 === ZJ ? void 0 : ZJ.version;
          if ("string" !== typeof CJ || !/^2\.\d+/.test(CJ)) return `uses glTF version ${null!==CJ&&void 0!==CJ?CJ:"(none)"}`;
          const uJ = null === (XJ = JJ.asset) || void 0 === XJ ? void 0 : XJ.minVersion;
          if (void 0 !== uJ && "2.0" !== uJ) return `uses glTF version ${uJ}`;
          for (const FJ of null !== (iJ = JJ.extensionsRequired) && void 0 !== iJ ? iJ : []) {
            var iJ;
            if (!jJ.has(FJ)) return `requires the glTF extension ${FJ}`
          }
          if (null !== (hJ = JJ.animations) && void 0 !== hJ && hJ.length) return "has animations";
          if (null !== (fJ = JJ.skins) && void 0 !== fJ && fJ.length) return "uses skins";
          const RJ = null !== (vJ = JJ.buffers) && void 0 !== vJ ? vJ : [];
          for (const [FJ, UJ] of RJ.entries()) {
            if (void 0 !== UJ.uri) return qJ;
            if (FJ > 0 || !cJ) return AJ
          }
          for (const [FJ, UJ] of(null !== (LJ = JJ.bufferViews) && void 0 !== LJ ? LJ : []).entries()) {
            var LJ;
            if (!IJ(JJ, cJ, FJ) || !SJ(UJ)) return AJ
          }
          const aJ = null !== (bJ = JJ.accessors) && void 0 !== bJ ? bJ : [];
          for (const FJ of aJ) {
            if (void 0 !== FJ.sparse) return "uses sparse accessors";
            const cJ = Number.isInteger(FJ.count) ? xJ(FJ.count, UJ.accessorElements, "elements in an accessor") : null;
            if (cJ) return cJ;
            if (!MJ(JJ, FJ)) return AJ
          }
          const BJ = null !== (wJ = JJ.scenes) && void 0 !== wJ ? wJ : [];
          if (1 !== BJ.length) return `has ${BJ.length} scenes`;
          const tJ = (0, FJ.D)(JJ);
          if (void 0 !== tJ && 0 !== tJ) return AJ;
          const oJ = null !== (WJ = JJ.nodes) && void 0 !== WJ ? WJ : [],
            lJ = null !== (gJ = JJ.meshes) && void 0 !== gJ ? gJ : [],
            Jc = null !== (HJ = JJ.materials) && void 0 !== HJ ? HJ : [],
            cc = null !== (PJ = JJ.textures) && void 0 !== PJ ? PJ : [],
            Zc = null !== (kJ = JJ.images) && void 0 !== kJ ? kJ : [],
            Fc = null !== (pJ = null !== (dJ = null !== (zJ = xJ(oJ.length, UJ.nodes, "nodes")) && void 0 !== zJ ? zJ : xJ(lJ.length, UJ.meshes, "meshes")) && void 0 !== dJ ? dJ : xJ(Jc.length, UJ.materials, "materials")) && void 0 !== pJ ? pJ : xJ(Zc.length, UJ.images, "images");
          if (Fc) return Fc;
          const Uc = new Set;
          for (const FJ of oJ)
            for (const JJ of null !== (ec = FJ.children) && void 0 !== ec ? ec : []) {
              var ec;
              if (!rJ(JJ, oJ.length) || Uc.has(JJ)) return AJ;
              Uc.add(JJ)
            }
          const Xc = new Set,
            Ac = JJ => {
              var cJ;
              return !Xc.has(JJ) && (Xc.add(JJ), (null !== (cJ = oJ[JJ].children) && void 0 !== cJ ? cJ : []).every(Ac))
            };
          for (const FJ of null !== (qc = BJ[0].nodes) && void 0 !== qc ? qc : []) {
            var qc;
            if (!rJ(FJ, oJ.length) || Uc.has(FJ) || !Ac(FJ)) return AJ
          }
          for (const FJ of oJ) {
            if (void 0 !== FJ.matrix) return "uses node matrices";
            if (void 0 !== FJ.skin) return "uses skins";
            if (void 0 !== FJ.weights) return "uses morph targets";
            if (void 0 !== FJ.mesh && !rJ(FJ.mesh, lJ.length)) return AJ;
            const JJ = [
              [FJ.translation, 3],
              [FJ.rotation, 4],
              [FJ.scale, 3]
            ];
            for (const [cJ, ZJ] of JJ)
              if (void 0 !== cJ && (!Array.isArray(cJ) || cJ.length !== ZJ || !cJ.every((JJ => Number.isFinite(JJ))))) return AJ
          }
          let jc = -1,
            Yc = 0,
            hc = 0,
            Dc = null;
          for (const UJ of lJ) {
            if (void 0 !== UJ.weights) return "uses morph targets";
            if (0 === UJ.primitives.length) return AJ;
            for (const ZJ of UJ.primitives) {
              var sc, nc;
              const UJ = null !== (sc = ZJ.mode) && void 0 !== sc ? sc : 4;
              var Gc;
              if (4 !== UJ && 0 !== UJ) return `uses ${null!==(Gc=nJ[UJ])&&void 0!==Gc?Gc:`mode ${UJ}`} primitives`;
              if (void 0 !== ZJ.targets) return "uses morph targets";
              if (void 0 !== ZJ.material && !rJ(ZJ.material, Jc.length)) return AJ;
              const eJ = TJ ? null === (nc = ZJ.extensions) || void 0 === nc ? void 0 : nc.KHR_draco_mesh_compression : void 0;
              if (eJ) {
                if (4 !== UJ) return "uses Draco-compressed points";
                if (!IJ(JJ, cJ, eJ.bufferView) || "object" !== typeof eJ.attributes) return AJ
              }
              const XJ = ZJ.attributes;
              if ("object" !== typeof XJ || null === XJ) return AJ;
              if (void 0 === XJ.POSITION) return "has a primitive with no positions";
              if (!rJ(XJ.POSITION, aJ.length)) return AJ;
              const qJ = aJ[XJ.POSITION].count;
              for (const [JJ, cJ] of Object.entries(XJ)) {
                if (!rJ(cJ, aJ.length)) return AJ;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(JJ)) return "uses skins";
                const ZJ = aJ[cJ],
                  FJ = YJ[JJ];
                if (FJ && (ZJ.componentType !== GJ || ZJ.normalized || ZJ.type !== FJ)) return `stores ${JJ} as ${EJ(ZJ)}`;
                const UJ = DJ[JJ];
                if (UJ && (ZJ.type !== UJ.type || !UJ.componentTypes.includes(ZJ.componentType) || ZJ.componentType === GJ === !!ZJ.normalized)) return `stores ${JJ} as ${EJ(ZJ)}`;
                if (sJ.has(JJ) && ZJ.count !== qJ) return "has vertex attributes of different lengths"
              }
              if (eJ) {
                if (void 0 === ZJ.indices) return AJ;
                for (const cJ in eJ.attributes)
                  if (sJ.has(cJ) && void 0 === XJ[cJ]) return AJ;
                if (void 0 === eJ.attributes.POSITION) return AJ;
                const JJ = rJ(ZJ.indices, aJ.length) ? aJ[ZJ.indices].count : -1;
                if (0 === JJ) return AJ;
                if (-1 === jc) jc = eJ.bufferView, Yc = qJ, hc = JJ;
                else {
                  Dc ??= new Map([
                    [jc, [Yc, hc]]
                  ]);
                  const cJ = Dc.get(eJ.bufferView);
                  if (cJ && (cJ[0] !== qJ || cJ[1] !== JJ)) return AJ;
                  Dc.set(eJ.bufferView, null !== cJ && void 0 !== cJ ? cJ : [qJ, JJ])
                }
              }
              let jJ = qJ;
              if (void 0 !== ZJ.indices) {
                if (!rJ(ZJ.indices, aJ.length)) return AJ;
                const JJ = aJ[ZJ.indices];
                if ("SCALAR" !== JJ.type) return AJ;
                if (5121 === JJ.componentType) return "uses 8-bit indices";
                var fc;
                if (5123 !== JJ.componentType && 5125 !== JJ.componentType) return `stores indices as ${null!==(fc=FJ.i[JJ.componentType])&&void 0!==fc?fc:JJ.componentType}`;
                if (!eJ && void 0 === JJ.bufferView) return AJ;
                jJ = JJ.count
              }
              if (4 === UJ && jJ % 3 !== 0) return AJ
            }
          }
          let xc = 0,
            rc = 0,
            vc = 0;
          for (let FJ = 0; FJ < oJ.length; FJ++) {
            const JJ = oJ[FJ].mesh;
            if (void 0 !== JJ && Xc.has(FJ))
              for (const cJ of lJ[JJ].primitives) vc++, xc += aJ[cJ.attributes.POSITION].count, void 0 !== cJ.indices && (rc += aJ[cJ.indices].count)
          }
          const mc = null !== (NJ = null !== (OJ = xJ(xc, UJ.vertices, "vertices")) && void 0 !== OJ ? OJ : xJ(rc, UJ.indices, "indices")) && void 0 !== NJ ? NJ : xJ(vc, UJ.primitives, "primitives");
          if (mc) return mc;
          for (const FJ of Jc) {
            var Qc, Ec;
            if (void 0 !== FJ.emissiveTexture) return "uses an emissive texture";
            const cJ = null !== (Qc = FJ.alphaMode) && void 0 !== Qc ? Qc : "OPAQUE";
            if ("OPAQUE" !== cJ && "MASK" !== cJ && "BLEND" !== cJ) return AJ;
            const ZJ = null === (Ec = FJ.pbrMetallicRoughness) || void 0 === Ec ? void 0 : Ec.baseColorTexture;
            if (ZJ) {
              var Vc, Kc, yc, Sc, Ic;
              const cJ = null !== (Vc = JJ.extensionsUsed) && void 0 !== Vc && Vc.includes("KHR_texture_transform") ? null === (Kc = ZJ.extensions) || void 0 === Kc ? void 0 : Kc.KHR_texture_transform : void 0;
              if (0 !== (null !== (yc = ZJ.texCoord) && void 0 !== yc ? yc : 0) || 0 !== (null !== (Sc = null === cJ || void 0 === cJ ? void 0 : cJ.texCoord) && void 0 !== Sc ? Sc : 0)) return "uses a second UV set";
              const FJ = cc[ZJ.index];
              if (!FJ || !rJ(FJ.source, Zc.length) || void 0 !== FJ.sampler && !rJ(FJ.sampler, null === (Ic = JJ.samplers) || void 0 === Ic ? void 0 : Ic.length)) return AJ
            }
          }
          for (const FJ of Zc) {
            if (void 0 !== FJ.uri) return qJ;
            if (void 0 === FJ.bufferView) return AJ;
            const ZJ = IJ(JJ, cJ, FJ.bufferView);
            if (!ZJ) return AJ;
            if ("image/png" !== FJ.mimeType) {
              var Mc, bc, wc;
              return `has ${yJ(null!==(Mc=null!==(bc={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(wc=FJ.mimeType)&&void 0!==wc?wc:""])&&void 0!==bc?bc:FJ.mimeType)&&void 0!==Mc?Mc:"untyped")} image`
            }
            if (!KJ(ZJ)) return `has ${yJ(VJ(ZJ))} image`;
            const eJ = new DataView(ZJ.buffer, ZJ.byteOffset, ZJ.byteLength),
              XJ = eJ.getUint32(16),
              jJ = eJ.getUint32(20);
            if (XJ > UJ.imageSide || jJ > UJ.imageSide) return `has a ${XJ} \xd7 ${jJ} image (the limit is ${UJ.imageSide})`
          }
          return null
        }(JJ, cJ)
      } catch {
        return AJ
      }
    }

    function WJ(JJ) {
      const cJ = bJ(JJ.byteLength);
      if (cJ) return cJ;
      try {
        const {
          json: cJ,
          bin: ZJ
        } = (0, FJ.F)(JJ);
        return wJ(cJ, ZJ)
      } catch (ZJ) {
        if (ZJ instanceof FJ.q) return ZJ.reason;
        throw ZJ
      }
    }
  },
  8620: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => hJ,
      D: () => XJ,
      F: () => jJ,
      e: () => sJ,
      i: () => DJ,
      l: () => GJ,
      o: () => eJ,
      q: () => UJ,
      s: () => nJ,
      w: () => YJ
    });
    var FJ = ZJ(8625);
    class UJ extends Error {
      constructor(JJ) {
        super(`GLB refused: it ${JJ}`), this.reason = JJ, this.name = "GlbRefused"
      }
    }
    class eJ extends Error {
      constructor(JJ) {
        super(JJ), this.name = "GlbError"
      }
    }

    function XJ(JJ) {
      return Reflect.get(JJ, "scene")
    }
    const AJ = 5130562,
      qJ = "is not a binary glTF 2.0 file";

    function jJ(JJ) {
      var cJ;
      const ZJ = JJ instanceof Uint8Array ? JJ : new Uint8Array(JJ),
        eJ = (0, FJ.f)(ZJ);
      if (null === eJ) throw new UJ(qJ);
      const XJ = eJ.json,
        {
          jsonEnd: jJ,
          length: YJ
        } = eJ,
        hJ = new DataView(ZJ.buffer, ZJ.byteOffset, ZJ.byteLength);
      let DJ = -1,
        sJ = 0;
      for (let fJ = jJ; fJ < YJ;) {
        if (fJ + 8 > YJ) throw new UJ(qJ);
        const JJ = hJ.getUint32(fJ, !0),
          cJ = hJ.getUint32(fJ + 4, !0);
        if (fJ + 8 + JJ > YJ || cJ === FJ.e || cJ === AJ && -1 !== DJ) throw new UJ(qJ);
        cJ === AJ && (DJ = fJ + 8, sJ = JJ), fJ += 8 + JJ
      }
      let nJ = null;
      const GJ = null === (cJ = XJ.buffers) || void 0 === cJ ? void 0 : cJ[0];
      if (-1 !== DJ && GJ && void 0 === GJ.uri) {
        if (!(GJ.byteLength >= 0) || GJ.byteLength > sJ) throw new UJ(qJ);
        nJ = new Uint8Array(ZJ.buffer, ZJ.byteOffset + DJ, GJ.byteLength)
      }
      return {
        json: XJ,
        bin: nJ,
        fileBytes: ZJ.byteLength
      }
    }

    function YJ(JJ) {
      const cJ = JJ.slice(JJ.indexOf(",") + 1),
        ZJ = Uint8Array.fromBase64;
      if (ZJ) return ZJ(cJ).buffer;
      const FJ = atob(cJ),
        UJ = new Uint8Array(FJ.length);
      for (let eJ = 0; eJ < FJ.length; eJ++) UJ[eJ] = FJ.charCodeAt(eJ);
      return UJ.buffer
    }
    async function hJ(JJ) {
      if (JJ.startsWith("data:")) return YJ(JJ);
      const cJ = await fetch(JJ);
      if (!cJ.ok) throw new eJ(`fetching ${JJ} failed: ${cJ.status} ${cJ.statusText}`);
      return await cJ.arrayBuffer()
    }
    const DJ = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      sJ = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      nJ = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      GJ = [
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
  8625: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      f: () => eJ,
      g: () => XJ
    });
    const FJ = 1179937895,
      UJ = 1313821514;

    function eJ(JJ) {
      const cJ = new DataView(JJ.buffer, JJ.byteOffset, JJ.byteLength);
      if (JJ.byteLength < 20 || cJ.getUint32(0, !0) !== FJ || 2 !== cJ.getUint32(4, !0)) return null;
      const ZJ = Math.min(cJ.getUint32(8, !0), JJ.byteLength),
        eJ = cJ.getUint32(12, !0);
      if (cJ.getUint32(16, !0) !== UJ || 20 + eJ > ZJ) return null;
      let XJ;
      try {
        XJ = JSON.parse((new TextDecoder).decode(JJ.subarray(20, 20 + eJ)))
      } catch {
        return null
      }
      return "object" === typeof XJ && null !== XJ ? {
        json: XJ,
        jsonEnd: 20 + eJ,
        length: ZJ
      } : null
    }

    function XJ(JJ) {
      var cJ;
      const ZJ = null === (cJ = eJ(JJ)) || void 0 === cJ ? void 0 : cJ.json;
      if (void 0 === ZJ || !Array.isArray(ZJ.extensionsUsed) || !ZJ.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const FJ = ZJ.meshes;
      return Array.isArray(FJ) && FJ.some((JJ => {
        const cJ = null === JJ || void 0 === JJ ? void 0 : JJ.primitives;
        return Array.isArray(cJ) && cJ.some((JJ => {
          const cJ = null === JJ || void 0 === JJ ? void 0 : JJ.extensions;
          return null != (null === cJ || void 0 === cJ ? void 0 : cJ.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);