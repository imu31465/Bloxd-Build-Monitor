export const id = 230;
export const ids = [230];
export const modules = {
  35113: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => WM,
      g: () => pM,
      j: () => RM
    });
    var OM = iM(35120);
    const SM = {
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
      jM = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      aM = 1048576,
      PM = "is not a binary glTF 2.0 file",
      nM = "loads data from outside the file",
      QM = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      zM = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      LM = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      mM = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: LM,
        TEXCOORD_2: LM,
        TEXCOORD_3: LM,
        TEXCOORD_4: LM,
        TEXCOORD_5: LM
      },
      HM = new Set(OM.h.map((MM => {
        let [rM] = MM;
        return rM
      }))),
      hM = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      JM = 5126;

    function dM(MM) {
      return MM.toLocaleString("en-US")
    }

    function yM(MM, rM, iM) {
      return MM > rM ? `has ${dM(MM)} ${iM} (the limit is ${dM(rM)})` : null
    }

    function lM(MM, rM) {
      return Number.isInteger(MM) && MM >= 0 && MM < (null !== rM && void 0 !== rM ? rM : 0)
    }

    function EM(MM) {
      return Number.isInteger(MM) && MM >= 0
    }

    function UM(MM, rM) {
      return void 0 !== MM && (!Array.isArray(MM) || MM.length > rM)
    }

    function GM(MM, rM) {
      return "object" === typeof MM && null !== MM && Object.keys(MM).length > rM
    }

    function CM(MM) {
      var rM;
      return `${MM.normalized?"normalized ":""}${null!==(rM=OM.e[MM.componentType])&&void 0!==rM?rM:MM.componentType} ${MM.type}`
    }

    function eM(MM) {
      const rM = rM => {
        var iM;
        return null !== (iM = MM[rM]) && void 0 !== iM ? iM : -1
      };
      return 255 === rM(0) && 216 === rM(1) ? "JPEG" : 82 === rM(0) && 73 === rM(1) && 87 === rM(8) && 69 === rM(9) ? "WebP" : 171 === rM(0) && 75 === rM(1) && 84 === rM(2) && 88 === rM(3) ? "KTX2" : "non-PNG"
    }

    function bM(MM) {
      return MM.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((rM, iM) => MM[iM] === rM)) && 73 === MM[12] && 72 === MM[13] && 68 === MM[14] && 82 === MM[15]
    }

    function wM(MM) {
      return /^[aeiou]/i.test(MM) ? `an ${MM}` : `a ${MM}`
    }

    function tM(MM) {
      const rM = MM.byteStride;
      return void 0 === rM || Number.isInteger(rM) && rM >= 4 && rM <= 252 && rM % 4 === 0
    }

    function gM(MM, rM, iM) {
      var OM, SM;
      const jM = null === (OM = MM.bufferViews) || void 0 === OM ? void 0 : OM[iM];
      if (!jM || !rM || 0 !== jM.buffer) return null;
      const aM = null !== (SM = jM.byteOffset) && void 0 !== SM ? SM : 0;
      return !EM(aM) || !EM(jM.byteLength) || aM + jM.byteLength > rM.byteLength ? null : rM.subarray(aM, aM + jM.byteLength)
    }

    function uM(MM, rM) {
      var iM, SM, jM;
      const aM = OM.s[rM.type],
        PM = OM.c[rM.componentType];
      if (!aM || !PM || !Number.isInteger(rM.count) || rM.count < 0) return !1;
      if (void 0 === rM.bufferView) return !0;
      const nM = null === (iM = MM.bufferViews) || void 0 === iM ? void 0 : iM[rM.bufferView],
        QM = null !== (SM = rM.byteOffset) && void 0 !== SM ? SM : 0;
      if (!nM || !EM(QM) || QM % PM !== 0) return !1;
      const zM = aM * PM,
        LM = null !== (jM = nM.byteStride) && void 0 !== jM ? jM : zM;
      if (LM < zM) return !1;
      return (0 === rM.count ? 0 : QM + LM * (rM.count - 1) + zM) <= nM.byteLength
    }

    function RM(MM) {
      return MM > SM.fileBytes ? `is ${(MM/aM).toFixed(1)} MiB (the limit is ${SM.fileBytes/aM} MiB)` : null
    }

    function pM(MM, rM) {
      try {
        return function(MM, rM) {
          var iM, aM, LM, dM, EM, RM, pM, WM, sM, DM, kM, ZM, oM, fM, YM, NM, AM;
          const xM = Array.isArray(MM.extensionsUsed) && MM.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(MM, rM) {
              var iM, OM;
              const {
                items: SM,
                perFile: aM,
                surfaces: PM,
                few: nM,
                bounds: QM,
                attributeMembers: zM
              } = jM;
              if (UM(MM.extensionsRequired, nM) || UM(MM.animations, 1 / 0) || UM(MM.skins, 1 / 0)) return !0;
              if (null !== (iM = MM.animations) && void 0 !== iM && iM.length || null !== (OM = MM.skins) && void 0 !== OM && OM.length) return !1;
              if ([
                  [MM.buffers, nM],
                  [MM.scenes, nM],
                  [MM.bufferViews, SM],
                  [MM.accessors, SM],
                  [MM.nodes, SM],
                  [MM.meshes, SM],
                  [MM.materials, PM],
                  [MM.textures, PM],
                  [MM.samplers, PM],
                  [MM.images, PM]
                ].some((MM => {
                  let [rM, iM] = MM;
                  return UM(rM, iM)
                }))) return !0;
              for (const jM of null !== (LM = MM.accessors) && void 0 !== LM ? LM : []) {
                var LM, mM, HM;
                if (Number.isInteger(jM.count) && (!Number.isSafeInteger(jM.count) || Object.is(jM.count, -0)) || UM(null !== (mM = jM.min) && void 0 !== mM ? mM : void 0, QM) || UM(null !== (HM = jM.max) && void 0 !== HM ? HM : void 0, QM)) return !0
              }
              for (const jM of null !== (hM = MM.scenes) && void 0 !== hM ? hM : []) {
                var hM;
                if (UM(jM.nodes, SM)) return !0
              }
              let JM = 0;
              for (const jM of null !== (dM = MM.nodes) && void 0 !== dM ? dM : []) {
                var dM, yM, lM;
                if (UM(jM.children, aM)) return !0;
                JM += null !== (yM = null === (lM = jM.children) || void 0 === lM ? void 0 : lM.length) && void 0 !== yM ? yM : 0
              }
              if (JM > aM) return !0;
              let EM = 0;
              for (const jM of null !== (CM = MM.meshes) && void 0 !== CM ? CM : []) {
                var CM;
                if (!Array.isArray(jM.primitives)) return !0;
                if (EM += jM.primitives.length, EM > aM) return !0;
                for (const MM of jM.primitives) {
                  var eM;
                  const iM = rM ? null === (eM = MM.extensions) || void 0 === eM ? void 0 : eM.KHR_draco_mesh_compression : void 0;
                  if (GM(MM.attributes, zM) || GM(null === iM || void 0 === iM ? void 0 : iM.attributes, zM)) return !0
                }
              }
              return !1
            }(MM, xM)) return PM;
          const vM = null === (iM = MM.asset) || void 0 === iM ? void 0 : iM.version;
          if ("string" !== typeof vM || !/^2\.\d+/.test(vM)) return `uses glTF version ${null!==vM&&void 0!==vM?vM:"(none)"}`;
          const FM = null === (aM = MM.asset) || void 0 === aM ? void 0 : aM.minVersion;
          if (void 0 !== FM && "2.0" !== FM) return `uses glTF version ${FM}`;
          for (const OM of null !== (BM = MM.extensionsRequired) && void 0 !== BM ? BM : []) {
            var BM;
            if (!QM.has(OM)) return `requires the glTF extension ${OM}`
          }
          if (null !== (LM = MM.animations) && void 0 !== LM && LM.length) return "has animations";
          if (null !== (dM = MM.skins) && void 0 !== dM && dM.length) return "uses skins";
          const XM = null !== (EM = MM.buffers) && void 0 !== EM ? EM : [];
          for (const [OM, SM] of XM.entries()) {
            if (void 0 !== SM.uri) return nM;
            if (OM > 0 || !rM) return PM
          }
          for (const [OM, SM] of(null !== (IM = MM.bufferViews) && void 0 !== IM ? IM : []).entries()) {
            var IM;
            if (!gM(MM, rM, OM) || !tM(SM)) return PM
          }
          const KM = null !== (RM = MM.accessors) && void 0 !== RM ? RM : [];
          for (const OM of KM) {
            if (void 0 !== OM.sparse) return "uses sparse accessors";
            const rM = Number.isInteger(OM.count) ? yM(OM.count, SM.accessorElements, "elements in an accessor") : null;
            if (rM) return rM;
            if (!uM(MM, OM)) return PM
          }
          const qM = null !== (pM = MM.scenes) && void 0 !== pM ? pM : [];
          if (1 !== qM.length) return `has ${qM.length} scenes`;
          const TM = (0, OM.B)(MM);
          if (void 0 !== TM && 0 !== TM) return PM;
          const VM = null !== (WM = MM.nodes) && void 0 !== WM ? WM : [],
            cM = null !== (sM = MM.meshes) && void 0 !== sM ? sM : [],
            Mr = null !== (DM = MM.materials) && void 0 !== DM ? DM : [],
            rr = null !== (kM = MM.textures) && void 0 !== kM ? kM : [],
            ir = null !== (ZM = MM.images) && void 0 !== ZM ? ZM : [],
            Or = null !== (oM = null !== (fM = null !== (YM = yM(VM.length, SM.nodes, "nodes")) && void 0 !== YM ? YM : yM(cM.length, SM.meshes, "meshes")) && void 0 !== fM ? fM : yM(Mr.length, SM.materials, "materials")) && void 0 !== oM ? oM : yM(ir.length, SM.images, "images");
          if (Or) return Or;
          const Sr = new Set;
          for (const OM of VM)
            for (const MM of null !== (jr = OM.children) && void 0 !== jr ? jr : []) {
              var jr;
              if (!lM(MM, VM.length) || Sr.has(MM)) return PM;
              Sr.add(MM)
            }
          const ar = new Set,
            Pr = MM => {
              var rM;
              return !ar.has(MM) && (ar.add(MM), (null !== (rM = VM[MM].children) && void 0 !== rM ? rM : []).every(Pr))
            };
          for (const OM of null !== (nr = qM[0].nodes) && void 0 !== nr ? nr : []) {
            var nr;
            if (!lM(OM, VM.length) || Sr.has(OM) || !Pr(OM)) return PM
          }
          for (const OM of VM) {
            if (void 0 !== OM.matrix) return "uses node matrices";
            if (void 0 !== OM.skin) return "uses skins";
            if (void 0 !== OM.weights) return "uses morph targets";
            if (void 0 !== OM.mesh && !lM(OM.mesh, cM.length)) return PM;
            const MM = [
              [OM.translation, 3],
              [OM.rotation, 4],
              [OM.scale, 3]
            ];
            for (const [rM, iM] of MM)
              if (void 0 !== rM && (!Array.isArray(rM) || rM.length !== iM || !rM.every((MM => Number.isFinite(MM))))) return PM
          }
          let Qr = -1,
            zr = 0,
            Lr = 0,
            mr = null;
          for (const SM of cM) {
            if (void 0 !== SM.weights) return "uses morph targets";
            if (0 === SM.primitives.length) return PM;
            for (const iM of SM.primitives) {
              var Hr, hr;
              const SM = null !== (Hr = iM.mode) && void 0 !== Hr ? Hr : 4;
              var Jr;
              if (4 !== SM && 0 !== SM) return `uses ${null!==(Jr=hM[SM])&&void 0!==Jr?Jr:`mode ${SM}`} primitives`;
              if (void 0 !== iM.targets) return "uses morph targets";
              if (void 0 !== iM.material && !lM(iM.material, Mr.length)) return PM;
              const jM = xM ? null === (hr = iM.extensions) || void 0 === hr ? void 0 : hr.KHR_draco_mesh_compression : void 0;
              if (jM) {
                if (4 !== SM) return "uses Draco-compressed points";
                if (!gM(MM, rM, jM.bufferView) || "object" !== typeof jM.attributes) return PM
              }
              const aM = iM.attributes;
              if ("object" !== typeof aM || null === aM) return PM;
              if (void 0 === aM.POSITION) return "has a primitive with no positions";
              if (!lM(aM.POSITION, KM.length)) return PM;
              const nM = KM[aM.POSITION].count;
              for (const [MM, rM] of Object.entries(aM)) {
                if (!lM(rM, KM.length)) return PM;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(MM)) return "uses skins";
                const iM = KM[rM],
                  OM = zM[MM];
                if (OM && (iM.componentType !== JM || iM.normalized || iM.type !== OM)) return `stores ${MM} as ${CM(iM)}`;
                const SM = mM[MM];
                if (SM && (iM.type !== SM.type || !SM.componentTypes.includes(iM.componentType) || iM.componentType === JM === !!iM.normalized)) return `stores ${MM} as ${CM(iM)}`;
                if (HM.has(MM) && iM.count !== nM) return "has vertex attributes of different lengths"
              }
              if (jM) {
                if (void 0 === iM.indices) return PM;
                for (const rM in jM.attributes)
                  if (HM.has(rM) && void 0 === aM[rM]) return PM;
                if (void 0 === jM.attributes.POSITION) return PM;
                const MM = lM(iM.indices, KM.length) ? KM[iM.indices].count : -1;
                if (0 === MM) return PM;
                if (-1 === Qr) Qr = jM.bufferView, zr = nM, Lr = MM;
                else {
                  mr ??= new Map([
                    [Qr, [zr, Lr]]
                  ]);
                  const rM = mr.get(jM.bufferView);
                  if (rM && (rM[0] !== nM || rM[1] !== MM)) return PM;
                  mr.set(jM.bufferView, null !== rM && void 0 !== rM ? rM : [nM, MM])
                }
              }
              let QM = nM;
              if (void 0 !== iM.indices) {
                if (!lM(iM.indices, KM.length)) return PM;
                const MM = KM[iM.indices];
                if ("SCALAR" !== MM.type) return PM;
                if (5121 === MM.componentType) return "uses 8-bit indices";
                var dr;
                if (5123 !== MM.componentType && 5125 !== MM.componentType) return `stores indices as ${null!==(dr=OM.e[MM.componentType])&&void 0!==dr?dr:MM.componentType}`;
                if (!jM && void 0 === MM.bufferView) return PM;
                QM = MM.count
              }
              if (4 === SM && QM % 3 !== 0) return PM
            }
          }
          let yr = 0,
            lr = 0,
            Er = 0;
          for (let OM = 0; OM < VM.length; OM++) {
            const MM = VM[OM].mesh;
            if (void 0 !== MM && ar.has(OM))
              for (const rM of cM[MM].primitives) Er++, yr += KM[rM.attributes.POSITION].count, void 0 !== rM.indices && (lr += KM[rM.indices].count)
          }
          const Ur = null !== (NM = null !== (AM = yM(yr, SM.vertices, "vertices")) && void 0 !== AM ? AM : yM(lr, SM.indices, "indices")) && void 0 !== NM ? NM : yM(Er, SM.primitives, "primitives");
          if (Ur) return Ur;
          for (const OM of Mr) {
            var Gr, Cr;
            if (void 0 !== OM.emissiveTexture) return "uses an emissive texture";
            const rM = null !== (Gr = OM.alphaMode) && void 0 !== Gr ? Gr : "OPAQUE";
            if ("OPAQUE" !== rM && "MASK" !== rM && "BLEND" !== rM) return PM;
            const iM = null === (Cr = OM.pbrMetallicRoughness) || void 0 === Cr ? void 0 : Cr.baseColorTexture;
            if (iM) {
              var er, br, wr, tr, gr;
              const rM = null !== (er = MM.extensionsUsed) && void 0 !== er && er.includes("KHR_texture_transform") ? null === (br = iM.extensions) || void 0 === br ? void 0 : br.KHR_texture_transform : void 0;
              if (0 !== (null !== (wr = iM.texCoord) && void 0 !== wr ? wr : 0) || 0 !== (null !== (tr = null === rM || void 0 === rM ? void 0 : rM.texCoord) && void 0 !== tr ? tr : 0)) return "uses a second UV set";
              const OM = rr[iM.index];
              if (!OM || !lM(OM.source, ir.length) || void 0 !== OM.sampler && !lM(OM.sampler, null === (gr = MM.samplers) || void 0 === gr ? void 0 : gr.length)) return PM
            }
          }
          for (const OM of ir) {
            if (void 0 !== OM.uri) return nM;
            if (void 0 === OM.bufferView) return PM;
            const iM = gM(MM, rM, OM.bufferView);
            if (!iM) return PM;
            if ("image/png" !== OM.mimeType) {
              var ur, Rr, pr;
              return `has ${wM(null!==(ur=null!==(Rr={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(pr=OM.mimeType)&&void 0!==pr?pr:""])&&void 0!==Rr?Rr:OM.mimeType)&&void 0!==ur?ur:"untyped")} image`
            }
            if (!bM(iM)) return `has ${wM(eM(iM))} image`;
            const jM = new DataView(iM.buffer, iM.byteOffset, iM.byteLength),
              aM = jM.getUint32(16),
              QM = jM.getUint32(20);
            if (aM > SM.imageSide || QM > SM.imageSide) return `has a ${aM} \xd7 ${QM} image (the limit is ${SM.imageSide})`
          }
          return null
        }(MM, rM)
      } catch {
        return PM
      }
    }

    function WM(MM) {
      const rM = RM(MM.byteLength);
      if (rM) return rM;
      try {
        const {
          json: rM,
          bin: iM
        } = (0, OM.E)(MM);
        return pM(rM, iM)
      } catch (iM) {
        if (iM instanceof OM.p) return iM.reason;
        throw iM
      }
    }
  },
  35120: (MM, rM, iM) => {
    iM.d(rM, {
      B: () => aM,
      E: () => QM,
      c: () => HM,
      e: () => mM,
      h: () => JM,
      l: () => jM,
      p: () => SM,
      s: () => hM,
      v: () => zM,
      x: () => LM
    });
    var OM = iM(35126);
    class SM extends Error {
      constructor(MM) {
        super(`GLB refused: it ${MM}`), this.reason = MM, this.name = "GlbRefused"
      }
    }
    class jM extends Error {
      constructor(MM) {
        super(MM), this.name = "GlbError"
      }
    }

    function aM(MM) {
      return Reflect.get(MM, "scene")
    }
    const PM = 5130562,
      nM = "is not a binary glTF 2.0 file";

    function QM(MM) {
      var rM;
      const iM = MM instanceof Uint8Array ? MM : new Uint8Array(MM),
        jM = (0, OM.g)(iM);
      if (null === jM) throw new SM(nM);
      const aM = jM.json,
        {
          jsonEnd: QM,
          length: zM
        } = jM,
        LM = new DataView(iM.buffer, iM.byteOffset, iM.byteLength);
      let mM = -1,
        HM = 0;
      for (let dM = QM; dM < zM;) {
        if (dM + 8 > zM) throw new SM(nM);
        const MM = LM.getUint32(dM, !0),
          rM = LM.getUint32(dM + 4, !0);
        if (dM + 8 + MM > zM || rM === OM.d || rM === PM && -1 !== mM) throw new SM(nM);
        rM === PM && (mM = dM + 8, HM = MM), dM += 8 + MM
      }
      let hM = null;
      const JM = null === (rM = aM.buffers) || void 0 === rM ? void 0 : rM[0];
      if (-1 !== mM && JM && void 0 === JM.uri) {
        if (!(JM.byteLength >= 0) || JM.byteLength > HM) throw new SM(nM);
        hM = new Uint8Array(iM.buffer, iM.byteOffset + mM, JM.byteLength)
      }
      return {
        json: aM,
        bin: hM,
        fileBytes: iM.byteLength
      }
    }

    function zM(MM) {
      const rM = MM.slice(MM.indexOf(",") + 1),
        iM = Uint8Array.fromBase64;
      if (iM) return iM(rM).buffer;
      const OM = atob(rM),
        SM = new Uint8Array(OM.length);
      for (let jM = 0; jM < OM.length; jM++) SM[jM] = OM.charCodeAt(jM);
      return SM.buffer
    }
    async function LM(MM) {
      if (MM.startsWith("data:")) return zM(MM);
      const rM = await fetch(MM);
      if (!rM.ok) throw new jM(`fetching ${MM} failed: ${rM.status} ${rM.statusText}`);
      return await rM.arrayBuffer()
    }
    const mM = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      HM = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      hM = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      JM = [
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
  35126: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      g: () => jM,
      j: () => aM
    });
    const OM = 1179937895,
      SM = 1313821514;

    function jM(MM) {
      const rM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength);
      if (MM.byteLength < 20 || rM.getUint32(0, !0) !== OM || 2 !== rM.getUint32(4, !0)) return null;
      const iM = Math.min(rM.getUint32(8, !0), MM.byteLength),
        jM = rM.getUint32(12, !0);
      if (rM.getUint32(16, !0) !== SM || 20 + jM > iM) return null;
      let aM;
      try {
        aM = JSON.parse((new TextDecoder).decode(MM.subarray(20, 20 + jM)))
      } catch {
        return null
      }
      return "object" === typeof aM && null !== aM ? {
        json: aM,
        jsonEnd: 20 + jM,
        length: iM
      } : null
    }

    function aM(MM) {
      var rM;
      const iM = null === (rM = jM(MM)) || void 0 === rM ? void 0 : rM.json;
      if (void 0 === iM || !Array.isArray(iM.extensionsUsed) || !iM.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const OM = iM.meshes;
      return Array.isArray(OM) && OM.some((MM => {
        const rM = null === MM || void 0 === MM ? void 0 : MM.primitives;
        return Array.isArray(rM) && rM.some((MM => {
          const rM = null === MM || void 0 === MM ? void 0 : MM.extensions;
          return null != (null === rM || void 0 === rM ? void 0 : rM.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);