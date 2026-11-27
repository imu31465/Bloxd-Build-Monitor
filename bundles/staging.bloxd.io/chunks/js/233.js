export const id = 233;
export const ids = [233];
export const modules = {
  35244: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => xR,
      f: () => OR,
      i: () => vR
    });
    var yR = GR(35252);
    const tR = {
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
      uR = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      ZR = 1048576,
      qR = "is not a binary glTF 2.0 file",
      iR = "loads data from outside the file",
      fR = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      VR = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      KR = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      wR = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: KR,
        TEXCOORD_2: KR,
        TEXCOORD_3: KR,
        TEXCOORD_4: KR,
        TEXCOORD_5: KR
      },
      rR = new Set(yR.e.map((RR => {
        let [JR] = RR;
        return JR
      }))),
      eR = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      aR = 5126;

    function LR(RR) {
      return RR.toLocaleString("en-US")
    }

    function nR(RR, JR, GR) {
      return RR > JR ? `has ${LR(RR)} ${GR} (the limit is ${LR(JR)})` : null
    }

    function UR(RR, JR) {
      return Number.isInteger(RR) && RR >= 0 && RR < (null !== JR && void 0 !== JR ? JR : 0)
    }

    function WR(RR) {
      return Number.isInteger(RR) && RR >= 0
    }

    function AR(RR, JR) {
      return void 0 !== RR && (!Array.isArray(RR) || RR.length > JR)
    }

    function CR(RR, JR) {
      return "object" === typeof RR && null !== RR && Object.keys(RR).length > JR
    }

    function XR(RR) {
      var JR;
      return `${RR.normalized?"normalized ":""}${null!==(JR=yR.d[RR.componentType])&&void 0!==JR?JR:RR.componentType} ${RR.type}`
    }

    function MR(RR) {
      const JR = JR => {
        var GR;
        return null !== (GR = RR[JR]) && void 0 !== GR ? GR : -1
      };
      return 255 === JR(0) && 216 === JR(1) ? "JPEG" : 82 === JR(0) && 73 === JR(1) && 87 === JR(8) && 69 === JR(9) ? "WebP" : 171 === JR(0) && 75 === JR(1) && 84 === JR(2) && 88 === JR(3) ? "KTX2" : "non-PNG"
    }

    function BR(RR) {
      return RR.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((JR, GR) => RR[GR] === JR)) && 73 === RR[12] && 72 === RR[13] && 68 === RR[14] && 82 === RR[15]
    }

    function lR(RR) {
      return /^[aeiou]/i.test(RR) ? `an ${RR}` : `a ${RR}`
    }

    function pR(RR) {
      const JR = RR.byteStride;
      return void 0 === JR || Number.isInteger(JR) && JR >= 4 && JR <= 252 && JR % 4 === 0
    }

    function gR(RR, JR, GR) {
      var yR, tR;
      const uR = null === (yR = RR.bufferViews) || void 0 === yR ? void 0 : yR[GR];
      if (!uR || !JR || 0 !== uR.buffer) return null;
      const ZR = null !== (tR = uR.byteOffset) && void 0 !== tR ? tR : 0;
      return !WR(ZR) || !WR(uR.byteLength) || ZR + uR.byteLength > JR.byteLength ? null : JR.subarray(ZR, ZR + uR.byteLength)
    }

    function bR(RR, JR) {
      var GR, tR, uR;
      const ZR = yR.n[JR.type],
        qR = yR.b[JR.componentType];
      if (!ZR || !qR || !Number.isInteger(JR.count) || JR.count < 0) return !1;
      if (void 0 === JR.bufferView) return !0;
      const iR = null === (GR = RR.bufferViews) || void 0 === GR ? void 0 : GR[JR.bufferView],
        fR = null !== (tR = JR.byteOffset) && void 0 !== tR ? tR : 0;
      if (!iR || !WR(fR) || fR % qR !== 0) return !1;
      const VR = ZR * qR,
        KR = null !== (uR = iR.byteStride) && void 0 !== uR ? uR : VR;
      if (KR < VR) return !1;
      return (0 === JR.count ? 0 : fR + KR * (JR.count - 1) + VR) <= iR.byteLength
    }

    function vR(RR) {
      return RR > tR.fileBytes ? `is ${(RR/ZR).toFixed(1)} MiB (the limit is ${tR.fileBytes/ZR} MiB)` : null
    }

    function OR(RR, JR) {
      try {
        return function(RR, JR) {
          var GR, ZR, KR, LR, WR, vR, OR, xR, NR, DR, HR, oR, cR, PR, IR, mR, zR;
          const SR = Array.isArray(RR.extensionsUsed) && RR.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(RR, JR) {
              var GR, yR;
              const {
                items: tR,
                perFile: ZR,
                surfaces: qR,
                few: iR,
                bounds: fR,
                attributeMembers: VR
              } = uR;
              if (AR(RR.extensionsRequired, iR) || AR(RR.animations, 1 / 0) || AR(RR.skins, 1 / 0)) return !0;
              if (null !== (GR = RR.animations) && void 0 !== GR && GR.length || null !== (yR = RR.skins) && void 0 !== yR && yR.length) return !1;
              if ([
                  [RR.buffers, iR],
                  [RR.scenes, iR],
                  [RR.bufferViews, tR],
                  [RR.accessors, tR],
                  [RR.nodes, tR],
                  [RR.meshes, tR],
                  [RR.materials, qR],
                  [RR.textures, qR],
                  [RR.samplers, qR],
                  [RR.images, qR]
                ].some((RR => {
                  let [JR, GR] = RR;
                  return AR(JR, GR)
                }))) return !0;
              for (const uR of null !== (KR = RR.accessors) && void 0 !== KR ? KR : []) {
                var KR, wR, rR;
                if (Number.isInteger(uR.count) && (!Number.isSafeInteger(uR.count) || Object.is(uR.count, -0)) || AR(null !== (wR = uR.min) && void 0 !== wR ? wR : void 0, fR) || AR(null !== (rR = uR.max) && void 0 !== rR ? rR : void 0, fR)) return !0
              }
              for (const uR of null !== (eR = RR.scenes) && void 0 !== eR ? eR : []) {
                var eR;
                if (AR(uR.nodes, tR)) return !0
              }
              let aR = 0;
              for (const uR of null !== (LR = RR.nodes) && void 0 !== LR ? LR : []) {
                var LR, nR, UR;
                if (AR(uR.children, ZR)) return !0;
                aR += null !== (nR = null === (UR = uR.children) || void 0 === UR ? void 0 : UR.length) && void 0 !== nR ? nR : 0
              }
              if (aR > ZR) return !0;
              let WR = 0;
              for (const uR of null !== (XR = RR.meshes) && void 0 !== XR ? XR : []) {
                var XR;
                if (!Array.isArray(uR.primitives)) return !0;
                if (WR += uR.primitives.length, WR > ZR) return !0;
                for (const RR of uR.primitives) {
                  var MR;
                  const GR = JR ? null === (MR = RR.extensions) || void 0 === MR ? void 0 : MR.KHR_draco_mesh_compression : void 0;
                  if (CR(RR.attributes, VR) || CR(null === GR || void 0 === GR ? void 0 : GR.attributes, VR)) return !0
                }
              }
              return !1
            }(RR, SR)) return qR;
          const jR = null === (GR = RR.asset) || void 0 === GR ? void 0 : GR.version;
          if ("string" !== typeof jR || !/^2\.\d+/.test(jR)) return `uses glTF version ${null!==jR&&void 0!==jR?jR:"(none)"}`;
          const dR = null === (ZR = RR.asset) || void 0 === ZR ? void 0 : ZR.minVersion;
          if (void 0 !== dR && "2.0" !== dR) return `uses glTF version ${dR}`;
          for (const yR of null !== (ER = RR.extensionsRequired) && void 0 !== ER ? ER : []) {
            var ER;
            if (!fR.has(yR)) return `requires the glTF extension ${yR}`
          }
          if (null !== (KR = RR.animations) && void 0 !== KR && KR.length) return "has animations";
          if (null !== (LR = RR.skins) && void 0 !== LR && LR.length) return "uses skins";
          const YR = null !== (WR = RR.buffers) && void 0 !== WR ? WR : [];
          for (const [yR, tR] of YR.entries()) {
            if (void 0 !== tR.uri) return iR;
            if (yR > 0 || !JR) return qR
          }
          for (const [yR, tR] of(null !== (kR = RR.bufferViews) && void 0 !== kR ? kR : []).entries()) {
            var kR;
            if (!gR(RR, JR, yR) || !pR(tR)) return qR
          }
          const QR = null !== (vR = RR.accessors) && void 0 !== vR ? vR : [];
          for (const yR of QR) {
            if (void 0 !== yR.sparse) return "uses sparse accessors";
            const JR = Number.isInteger(yR.count) ? nR(yR.count, tR.accessorElements, "elements in an accessor") : null;
            if (JR) return JR;
            if (!bR(RR, yR)) return qR
          }
          const FR = null !== (OR = RR.scenes) && void 0 !== OR ? OR : [];
          if (1 !== FR.length) return `has ${FR.length} scenes`;
          const TR = (0, yR.u)(RR);
          if (void 0 !== TR && 0 !== TR) return qR;
          const sR = null !== (xR = RR.nodes) && void 0 !== xR ? xR : [],
            hR = null !== (NR = RR.meshes) && void 0 !== NR ? NR : [],
            RJ = null !== (DR = RR.materials) && void 0 !== DR ? DR : [],
            JJ = null !== (HR = RR.textures) && void 0 !== HR ? HR : [],
            GJ = null !== (oR = RR.images) && void 0 !== oR ? oR : [],
            yJ = null !== (cR = null !== (PR = null !== (IR = nR(sR.length, tR.nodes, "nodes")) && void 0 !== IR ? IR : nR(hR.length, tR.meshes, "meshes")) && void 0 !== PR ? PR : nR(RJ.length, tR.materials, "materials")) && void 0 !== cR ? cR : nR(GJ.length, tR.images, "images");
          if (yJ) return yJ;
          const tJ = new Set;
          for (const yR of sR)
            for (const RR of null !== (uJ = yR.children) && void 0 !== uJ ? uJ : []) {
              var uJ;
              if (!UR(RR, sR.length) || tJ.has(RR)) return qR;
              tJ.add(RR)
            }
          const ZJ = new Set,
            qJ = RR => {
              var JR;
              return !ZJ.has(RR) && (ZJ.add(RR), (null !== (JR = sR[RR].children) && void 0 !== JR ? JR : []).every(qJ))
            };
          for (const yR of null !== (iJ = FR[0].nodes) && void 0 !== iJ ? iJ : []) {
            var iJ;
            if (!UR(yR, sR.length) || tJ.has(yR) || !qJ(yR)) return qR
          }
          for (const yR of sR) {
            if (void 0 !== yR.matrix) return "uses node matrices";
            if (void 0 !== yR.skin) return "uses skins";
            if (void 0 !== yR.weights) return "uses morph targets";
            if (void 0 !== yR.mesh && !UR(yR.mesh, hR.length)) return qR;
            const RR = [
              [yR.translation, 3],
              [yR.rotation, 4],
              [yR.scale, 3]
            ];
            for (const [JR, GR] of RR)
              if (void 0 !== JR && (!Array.isArray(JR) || JR.length !== GR || !JR.every((RR => Number.isFinite(RR))))) return qR
          }
          let fJ = -1,
            VJ = 0,
            KJ = 0,
            wJ = null;
          for (const tR of hR) {
            if (void 0 !== tR.weights) return "uses morph targets";
            if (0 === tR.primitives.length) return qR;
            for (const GR of tR.primitives) {
              var rJ, eJ;
              const tR = null !== (rJ = GR.mode) && void 0 !== rJ ? rJ : 4;
              var aJ;
              if (4 !== tR && 0 !== tR) return `uses ${null!==(aJ=eR[tR])&&void 0!==aJ?aJ:`mode ${tR}`} primitives`;
              if (void 0 !== GR.targets) return "uses morph targets";
              if (void 0 !== GR.material && !UR(GR.material, RJ.length)) return qR;
              const uR = SR ? null === (eJ = GR.extensions) || void 0 === eJ ? void 0 : eJ.KHR_draco_mesh_compression : void 0;
              if (uR) {
                if (4 !== tR) return "uses Draco-compressed points";
                if (!gR(RR, JR, uR.bufferView) || "object" !== typeof uR.attributes) return qR
              }
              const ZR = GR.attributes;
              if ("object" !== typeof ZR || null === ZR) return qR;
              if (void 0 === ZR.POSITION) return "has a primitive with no positions";
              if (!UR(ZR.POSITION, QR.length)) return qR;
              const iR = QR[ZR.POSITION].count;
              for (const [RR, JR] of Object.entries(ZR)) {
                if (!UR(JR, QR.length)) return qR;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(RR)) return "uses skins";
                const GR = QR[JR],
                  yR = VR[RR];
                if (yR && (GR.componentType !== aR || GR.normalized || GR.type !== yR)) return `stores ${RR} as ${XR(GR)}`;
                const tR = wR[RR];
                if (tR && (GR.type !== tR.type || !tR.componentTypes.includes(GR.componentType) || GR.componentType === aR === !!GR.normalized)) return `stores ${RR} as ${XR(GR)}`;
                if (rR.has(RR) && GR.count !== iR) return "has vertex attributes of different lengths"
              }
              if (uR) {
                if (void 0 === GR.indices) return qR;
                for (const JR in uR.attributes)
                  if (rR.has(JR) && void 0 === ZR[JR]) return qR;
                if (void 0 === uR.attributes.POSITION) return qR;
                const RR = UR(GR.indices, QR.length) ? QR[GR.indices].count : -1;
                if (0 === RR) return qR;
                if (-1 === fJ) fJ = uR.bufferView, VJ = iR, KJ = RR;
                else {
                  wJ ??= new Map([
                    [fJ, [VJ, KJ]]
                  ]);
                  const JR = wJ.get(uR.bufferView);
                  if (JR && (JR[0] !== iR || JR[1] !== RR)) return qR;
                  wJ.set(uR.bufferView, null !== JR && void 0 !== JR ? JR : [iR, RR])
                }
              }
              let fR = iR;
              if (void 0 !== GR.indices) {
                if (!UR(GR.indices, QR.length)) return qR;
                const RR = QR[GR.indices];
                if ("SCALAR" !== RR.type) return qR;
                if (5121 === RR.componentType) return "uses 8-bit indices";
                var LJ;
                if (5123 !== RR.componentType && 5125 !== RR.componentType) return `stores indices as ${null!==(LJ=yR.d[RR.componentType])&&void 0!==LJ?LJ:RR.componentType}`;
                if (!uR && void 0 === RR.bufferView) return qR;
                fR = RR.count
              }
              if (4 === tR && fR % 3 !== 0) return qR
            }
          }
          let nJ = 0,
            UJ = 0,
            WJ = 0;
          for (let yR = 0; yR < sR.length; yR++) {
            const RR = sR[yR].mesh;
            if (void 0 !== RR && ZJ.has(yR))
              for (const JR of hR[RR].primitives) WJ++, nJ += QR[JR.attributes.POSITION].count, void 0 !== JR.indices && (UJ += QR[JR.indices].count)
          }
          const AJ = null !== (mR = null !== (zR = nR(nJ, tR.vertices, "vertices")) && void 0 !== zR ? zR : nR(UJ, tR.indices, "indices")) && void 0 !== mR ? mR : nR(WJ, tR.primitives, "primitives");
          if (AJ) return AJ;
          for (const yR of RJ) {
            var CJ, XJ;
            if (void 0 !== yR.emissiveTexture) return "uses an emissive texture";
            const JR = null !== (CJ = yR.alphaMode) && void 0 !== CJ ? CJ : "OPAQUE";
            if ("OPAQUE" !== JR && "MASK" !== JR && "BLEND" !== JR) return qR;
            const GR = null === (XJ = yR.pbrMetallicRoughness) || void 0 === XJ ? void 0 : XJ.baseColorTexture;
            if (GR) {
              var MJ, BJ, lJ, pJ, gJ;
              const JR = null !== (MJ = RR.extensionsUsed) && void 0 !== MJ && MJ.includes("KHR_texture_transform") ? null === (BJ = GR.extensions) || void 0 === BJ ? void 0 : BJ.KHR_texture_transform : void 0;
              if (0 !== (null !== (lJ = GR.texCoord) && void 0 !== lJ ? lJ : 0) || 0 !== (null !== (pJ = null === JR || void 0 === JR ? void 0 : JR.texCoord) && void 0 !== pJ ? pJ : 0)) return "uses a second UV set";
              const yR = JJ[GR.index];
              if (!yR || !UR(yR.source, GJ.length) || void 0 !== yR.sampler && !UR(yR.sampler, null === (gJ = RR.samplers) || void 0 === gJ ? void 0 : gJ.length)) return qR
            }
          }
          for (const yR of GJ) {
            if (void 0 !== yR.uri) return iR;
            if (void 0 === yR.bufferView) return qR;
            const GR = gR(RR, JR, yR.bufferView);
            if (!GR) return qR;
            if ("image/png" !== yR.mimeType) {
              var bJ, vJ, OJ;
              return `has ${lR(null!==(bJ=null!==(vJ={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(OJ=yR.mimeType)&&void 0!==OJ?OJ:""])&&void 0!==vJ?vJ:yR.mimeType)&&void 0!==bJ?bJ:"untyped")} image`
            }
            if (!BR(GR)) return `has ${lR(MR(GR))} image`;
            const uR = new DataView(GR.buffer, GR.byteOffset, GR.byteLength),
              ZR = uR.getUint32(16),
              fR = uR.getUint32(20);
            if (ZR > tR.imageSide || fR > tR.imageSide) return `has a ${ZR} \xd7 ${fR} image (the limit is ${tR.imageSide})`
          }
          return null
        }(RR, JR)
      } catch {
        return qR
      }
    }

    function xR(RR) {
      const JR = vR(RR.byteLength);
      if (JR) return JR;
      try {
        const {
          json: JR,
          bin: GR
        } = (0, yR.y)(RR);
        return OR(JR, GR)
      } catch (GR) {
        if (GR instanceof yR.l) return GR.reason;
        throw GR
      }
    }
  },
  35252: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => eR,
      d: () => rR,
      e: () => LR,
      i: () => ZR,
      l: () => uR,
      n: () => aR,
      p: () => KR,
      s: () => wR,
      u: () => qR,
      y: () => VR
    });
    const yR = 1179937895,
      tR = 1313821514;
    class uR extends Error {
      constructor(RR) {
        super(`GLB refused: it ${RR}`), this.reason = RR, this.name = "GlbRefused"
      }
    }
    class ZR extends Error {
      constructor(RR) {
        super(RR), this.name = "GlbError"
      }
    }

    function qR(RR) {
      return Reflect.get(RR, "scene")
    }
    const iR = 5130562,
      fR = "is not a binary glTF 2.0 file";

    function VR(RR) {
      var JR;
      const GR = RR instanceof Uint8Array ? RR : new Uint8Array(RR),
        ZR = function(RR) {
          const JR = new DataView(RR.buffer, RR.byteOffset, RR.byteLength);
          if (RR.byteLength < 20 || JR.getUint32(0, !0) !== yR || 2 !== JR.getUint32(4, !0)) return null;
          const GR = Math.min(JR.getUint32(8, !0), RR.byteLength),
            uR = JR.getUint32(12, !0);
          if (JR.getUint32(16, !0) !== tR || 20 + uR > GR) return null;
          let ZR;
          try {
            ZR = JSON.parse((new TextDecoder).decode(RR.subarray(20, 20 + uR)))
          } catch {
            return null
          }
          return "object" === typeof ZR && null !== ZR ? {
            json: ZR,
            jsonEnd: 20 + uR,
            length: GR
          } : null
        }(GR);
      if (null === ZR) throw new uR(fR);
      const qR = ZR.json,
        {
          jsonEnd: VR,
          length: KR
        } = ZR,
        wR = new DataView(GR.buffer, GR.byteOffset, GR.byteLength);
      let rR = -1,
        eR = 0;
      for (let yR = VR; yR < KR;) {
        if (yR + 8 > KR) throw new uR(fR);
        const RR = wR.getUint32(yR, !0),
          JR = wR.getUint32(yR + 4, !0);
        if (yR + 8 + RR > KR || JR === tR || JR === iR && -1 !== rR) throw new uR(fR);
        JR === iR && (rR = yR + 8, eR = RR), yR += 8 + RR
      }
      let aR = null;
      const LR = null === (JR = qR.buffers) || void 0 === JR ? void 0 : JR[0];
      if (-1 !== rR && LR && void 0 === LR.uri) {
        if (!(LR.byteLength >= 0) || LR.byteLength > eR) throw new uR(fR);
        aR = new Uint8Array(GR.buffer, GR.byteOffset + rR, LR.byteLength)
      }
      return {
        json: qR,
        bin: aR,
        fileBytes: GR.byteLength
      }
    }

    function KR(RR) {
      const JR = RR.slice(RR.indexOf(",") + 1),
        GR = Uint8Array.fromBase64;
      if (GR) return GR(JR).buffer;
      const yR = atob(JR),
        tR = new Uint8Array(yR.length);
      for (let uR = 0; uR < yR.length; uR++) tR[uR] = yR.charCodeAt(uR);
      return tR.buffer
    }
    async function wR(RR) {
      if (RR.startsWith("data:")) return KR(RR);
      const JR = await fetch(RR);
      if (!JR.ok) throw new ZR(`fetching ${RR} failed: ${JR.status} ${JR.statusText}`);
      return await JR.arrayBuffer()
    }
    const rR = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      eR = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      aR = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      LR = [
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
for (const RR in modules) Object.freeze(modules[RR]);