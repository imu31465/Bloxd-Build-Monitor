export const id = 203;
export const ids = [203];
export const modules = {
  34308: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => LS,
      h: () => ES,
      l: () => vS
    });
    var tS = gS(34310);
    const bS = {
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
      XS = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      xS = 1048576,
      NS = "is not a binary glTF 2.0 file",
      qS = "loads data from outside the file",
      uS = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      IS = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      fS = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      kS = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: fS,
        TEXCOORD_2: fS,
        TEXCOORD_3: fS,
        TEXCOORD_4: fS,
        TEXCOORD_5: fS
      },
      aS = new Set(tS.h.map((SS => {
        let [HS] = SS;
        return HS
      }))),
      KS = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      jS = 5126;

    function GS(SS) {
      return SS.toLocaleString("en-US")
    }

    function CS(SS, HS, gS) {
      return SS > HS ? `has ${GS(SS)} ${gS} (the limit is ${GS(HS)})` : null
    }

    function nS(SS, HS) {
      return Number.isInteger(SS) && SS >= 0 && SS < (null !== HS && void 0 !== HS ? HS : 0)
    }

    function PS(SS) {
      return Number.isInteger(SS) && SS >= 0
    }

    function QS(SS, HS) {
      return void 0 !== SS && (!Array.isArray(SS) || SS.length > HS)
    }

    function DS(SS, HS) {
      return "object" === typeof SS && null !== SS && Object.keys(SS).length > HS
    }

    function wS(SS) {
      var HS;
      return `${SS.normalized?"normalized ":""}${null!==(HS=tS.e[SS.componentType])&&void 0!==HS?HS:SS.componentType} ${SS.type}`
    }

    function hS(SS) {
      const HS = HS => {
        var gS;
        return null !== (gS = SS[HS]) && void 0 !== gS ? gS : -1
      };
      return 255 === HS(0) && 216 === HS(1) ? "JPEG" : 82 === HS(0) && 73 === HS(1) && 87 === HS(8) && 69 === HS(9) ? "WebP" : 171 === HS(0) && 75 === HS(1) && 84 === HS(2) && 88 === HS(3) ? "KTX2" : "non-PNG"
    }

    function ZS(SS) {
      return SS.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((HS, gS) => SS[gS] === HS)) && 73 === SS[12] && 72 === SS[13] && 68 === SS[14] && 82 === SS[15]
    }

    function JS(SS) {
      return /^[aeiou]/i.test(SS) ? `an ${SS}` : `a ${SS}`
    }

    function OS(SS) {
      const HS = SS.byteStride;
      return void 0 === HS || Number.isInteger(HS) && HS >= 4 && HS <= 252 && HS % 4 === 0
    }

    function dS(SS, HS, gS) {
      var tS, bS;
      const XS = null === (tS = SS.bufferViews) || void 0 === tS ? void 0 : tS[gS];
      if (!XS || !HS || 0 !== XS.buffer) return null;
      const xS = null !== (bS = XS.byteOffset) && void 0 !== bS ? bS : 0;
      return !PS(xS) || !PS(XS.byteLength) || xS + XS.byteLength > HS.byteLength ? null : HS.subarray(xS, xS + XS.byteLength)
    }

    function cS(SS, HS) {
      var gS, bS, XS;
      const xS = tS.m[HS.type],
        NS = tS.c[HS.componentType];
      if (!xS || !NS || !Number.isInteger(HS.count) || HS.count < 0) return !1;
      if (void 0 === HS.bufferView) return !0;
      const qS = null === (gS = SS.bufferViews) || void 0 === gS ? void 0 : gS[HS.bufferView],
        uS = null !== (bS = HS.byteOffset) && void 0 !== bS ? bS : 0;
      if (!qS || !PS(uS) || uS % NS !== 0) return !1;
      const IS = xS * NS,
        fS = null !== (XS = qS.byteStride) && void 0 !== XS ? XS : IS;
      if (fS < IS) return !1;
      return (0 === HS.count ? 0 : uS + fS * (HS.count - 1) + IS) <= qS.byteLength
    }

    function vS(SS) {
      return SS > bS.fileBytes ? `is ${(SS/xS).toFixed(1)} MiB (the limit is ${bS.fileBytes/xS} MiB)` : null
    }

    function ES(SS, HS) {
      try {
        return function(SS, HS) {
          var gS, xS, fS, GS, PS, vS, ES, LS, YS, AS, yS, VS, iS, WS, zS, US, pS;
          const sS = Array.isArray(SS.extensionsUsed) && SS.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(SS, HS) {
              var gS, tS;
              const {
                items: bS,
                perFile: xS,
                surfaces: NS,
                few: qS,
                bounds: uS,
                attributeMembers: IS
              } = XS;
              if (QS(SS.extensionsRequired, qS) || QS(SS.animations, 1 / 0) || QS(SS.skins, 1 / 0)) return !0;
              if (null !== (gS = SS.animations) && void 0 !== gS && gS.length || null !== (tS = SS.skins) && void 0 !== tS && tS.length) return !1;
              if ([
                  [SS.buffers, qS],
                  [SS.scenes, qS],
                  [SS.bufferViews, bS],
                  [SS.accessors, bS],
                  [SS.nodes, bS],
                  [SS.meshes, bS],
                  [SS.materials, NS],
                  [SS.textures, NS],
                  [SS.samplers, NS],
                  [SS.images, NS]
                ].some((SS => {
                  let [HS, gS] = SS;
                  return QS(HS, gS)
                }))) return !0;
              for (const XS of null !== (fS = SS.accessors) && void 0 !== fS ? fS : []) {
                var fS, kS, aS;
                if (Number.isInteger(XS.count) && (!Number.isSafeInteger(XS.count) || Object.is(XS.count, -0)) || QS(null !== (kS = XS.min) && void 0 !== kS ? kS : void 0, uS) || QS(null !== (aS = XS.max) && void 0 !== aS ? aS : void 0, uS)) return !0
              }
              for (const XS of null !== (KS = SS.scenes) && void 0 !== KS ? KS : []) {
                var KS;
                if (QS(XS.nodes, bS)) return !0
              }
              let jS = 0;
              for (const XS of null !== (GS = SS.nodes) && void 0 !== GS ? GS : []) {
                var GS, CS, nS;
                if (QS(XS.children, xS)) return !0;
                jS += null !== (CS = null === (nS = XS.children) || void 0 === nS ? void 0 : nS.length) && void 0 !== CS ? CS : 0
              }
              if (jS > xS) return !0;
              let PS = 0;
              for (const XS of null !== (wS = SS.meshes) && void 0 !== wS ? wS : []) {
                var wS;
                if (!Array.isArray(XS.primitives)) return !0;
                if (PS += XS.primitives.length, PS > xS) return !0;
                for (const SS of XS.primitives) {
                  var hS;
                  const gS = HS ? null === (hS = SS.extensions) || void 0 === hS ? void 0 : hS.KHR_draco_mesh_compression : void 0;
                  if (DS(SS.attributes, IS) || DS(null === gS || void 0 === gS ? void 0 : gS.attributes, IS)) return !0
                }
              }
              return !1
            }(SS, sS)) return NS;
          const BS = null === (gS = SS.asset) || void 0 === gS ? void 0 : gS.version;
          if ("string" !== typeof BS || !/^2\.\d+/.test(BS)) return `uses glTF version ${null!==BS&&void 0!==BS?BS:"(none)"}`;
          const MS = null === (xS = SS.asset) || void 0 === xS ? void 0 : xS.minVersion;
          if (void 0 !== MS && "2.0" !== MS) return `uses glTF version ${MS}`;
          for (const tS of null !== (FS = SS.extensionsRequired) && void 0 !== FS ? FS : []) {
            var FS;
            if (!uS.has(tS)) return `requires the glTF extension ${tS}`
          }
          if (null !== (fS = SS.animations) && void 0 !== fS && fS.length) return "has animations";
          if (null !== (GS = SS.skins) && void 0 !== GS && GS.length) return "uses skins";
          const RS = null !== (PS = SS.buffers) && void 0 !== PS ? PS : [];
          for (const [tS, bS] of RS.entries()) {
            if (void 0 !== bS.uri) return qS;
            if (tS > 0 || !HS) return NS
          }
          for (const [tS, bS] of(null !== (TS = SS.bufferViews) && void 0 !== TS ? TS : []).entries()) {
            var TS;
            if (!dS(SS, HS, tS) || !OS(bS)) return NS
          }
          const oS = null !== (vS = SS.accessors) && void 0 !== vS ? vS : [];
          for (const tS of oS) {
            if (void 0 !== tS.sparse) return "uses sparse accessors";
            const HS = Number.isInteger(tS.count) ? CS(tS.count, bS.accessorElements, "elements in an accessor") : null;
            if (HS) return HS;
            if (!cS(SS, tS)) return NS
          }
          const lS = null !== (ES = SS.scenes) && void 0 !== ES ? ES : [];
          if (1 !== lS.length) return `has ${lS.length} scenes`;
          const mS = (0, tS.r)(SS);
          if (void 0 !== mS && 0 !== mS) return NS;
          const eS = null !== (LS = SS.nodes) && void 0 !== LS ? LS : [],
            rS = null !== (YS = SS.meshes) && void 0 !== YS ? YS : [],
            SH = null !== (AS = SS.materials) && void 0 !== AS ? AS : [],
            HH = null !== (yS = SS.textures) && void 0 !== yS ? yS : [],
            gH = null !== (VS = SS.images) && void 0 !== VS ? VS : [],
            tH = null !== (iS = null !== (WS = null !== (zS = CS(eS.length, bS.nodes, "nodes")) && void 0 !== zS ? zS : CS(rS.length, bS.meshes, "meshes")) && void 0 !== WS ? WS : CS(SH.length, bS.materials, "materials")) && void 0 !== iS ? iS : CS(gH.length, bS.images, "images");
          if (tH) return tH;
          const bH = new Set;
          for (const tS of eS)
            for (const SS of null !== (XH = tS.children) && void 0 !== XH ? XH : []) {
              var XH;
              if (!nS(SS, eS.length) || bH.has(SS)) return NS;
              bH.add(SS)
            }
          const xH = new Set,
            NH = SS => {
              var HS;
              return !xH.has(SS) && (xH.add(SS), (null !== (HS = eS[SS].children) && void 0 !== HS ? HS : []).every(NH))
            };
          for (const tS of null !== (qH = lS[0].nodes) && void 0 !== qH ? qH : []) {
            var qH;
            if (!nS(tS, eS.length) || bH.has(tS) || !NH(tS)) return NS
          }
          for (const tS of eS) {
            if (void 0 !== tS.matrix) return "uses node matrices";
            if (void 0 !== tS.skin) return "uses skins";
            if (void 0 !== tS.weights) return "uses morph targets";
            if (void 0 !== tS.mesh && !nS(tS.mesh, rS.length)) return NS;
            const SS = [
              [tS.translation, 3],
              [tS.rotation, 4],
              [tS.scale, 3]
            ];
            for (const [HS, gS] of SS)
              if (void 0 !== HS && (!Array.isArray(HS) || HS.length !== gS || !HS.every((SS => Number.isFinite(SS))))) return NS
          }
          let uH = -1,
            IH = 0,
            fH = 0,
            kH = null;
          for (const bS of rS) {
            if (void 0 !== bS.weights) return "uses morph targets";
            if (0 === bS.primitives.length) return NS;
            for (const gS of bS.primitives) {
              var aH, KH;
              const bS = null !== (aH = gS.mode) && void 0 !== aH ? aH : 4;
              var jH;
              if (4 !== bS && 0 !== bS) return `uses ${null!==(jH=KS[bS])&&void 0!==jH?jH:`mode ${bS}`} primitives`;
              if (void 0 !== gS.targets) return "uses morph targets";
              if (void 0 !== gS.material && !nS(gS.material, SH.length)) return NS;
              const XS = sS ? null === (KH = gS.extensions) || void 0 === KH ? void 0 : KH.KHR_draco_mesh_compression : void 0;
              if (XS) {
                if (4 !== bS) return "uses Draco-compressed points";
                if (!dS(SS, HS, XS.bufferView) || "object" !== typeof XS.attributes) return NS
              }
              const xS = gS.attributes;
              if ("object" !== typeof xS || null === xS) return NS;
              if (void 0 === xS.POSITION) return "has a primitive with no positions";
              if (!nS(xS.POSITION, oS.length)) return NS;
              const qS = oS[xS.POSITION].count;
              for (const [SS, HS] of Object.entries(xS)) {
                if (!nS(HS, oS.length)) return NS;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(SS)) return "uses skins";
                const gS = oS[HS],
                  tS = IS[SS];
                if (tS && (gS.componentType !== jS || gS.normalized || gS.type !== tS)) return `stores ${SS} as ${wS(gS)}`;
                const bS = kS[SS];
                if (bS && (gS.type !== bS.type || !bS.componentTypes.includes(gS.componentType) || gS.componentType === jS === !!gS.normalized)) return `stores ${SS} as ${wS(gS)}`;
                if (aS.has(SS) && gS.count !== qS) return "has vertex attributes of different lengths"
              }
              if (XS) {
                if (void 0 === gS.indices) return NS;
                for (const HS in XS.attributes)
                  if (aS.has(HS) && void 0 === xS[HS]) return NS;
                if (void 0 === XS.attributes.POSITION) return NS;
                const SS = nS(gS.indices, oS.length) ? oS[gS.indices].count : -1;
                if (0 === SS) return NS;
                if (-1 === uH) uH = XS.bufferView, IH = qS, fH = SS;
                else {
                  kH ??= new Map([
                    [uH, [IH, fH]]
                  ]);
                  const HS = kH.get(XS.bufferView);
                  if (HS && (HS[0] !== qS || HS[1] !== SS)) return NS;
                  kH.set(XS.bufferView, null !== HS && void 0 !== HS ? HS : [qS, SS])
                }
              }
              let uS = qS;
              if (void 0 !== gS.indices) {
                if (!nS(gS.indices, oS.length)) return NS;
                const SS = oS[gS.indices];
                if ("SCALAR" !== SS.type) return NS;
                if (5121 === SS.componentType) return "uses 8-bit indices";
                var GH;
                if (5123 !== SS.componentType && 5125 !== SS.componentType) return `stores indices as ${null!==(GH=tS.e[SS.componentType])&&void 0!==GH?GH:SS.componentType}`;
                if (!XS && void 0 === SS.bufferView) return NS;
                uS = SS.count
              }
              if (4 === bS && uS % 3 !== 0) return NS
            }
          }
          let CH = 0,
            nH = 0,
            PH = 0;
          for (let tS = 0; tS < eS.length; tS++) {
            const SS = eS[tS].mesh;
            if (void 0 !== SS && xH.has(tS))
              for (const HS of rS[SS].primitives) PH++, CH += oS[HS.attributes.POSITION].count, void 0 !== HS.indices && (nH += oS[HS.indices].count)
          }
          const QH = null !== (US = null !== (pS = CS(CH, bS.vertices, "vertices")) && void 0 !== pS ? pS : CS(nH, bS.indices, "indices")) && void 0 !== US ? US : CS(PH, bS.primitives, "primitives");
          if (QH) return QH;
          for (const tS of SH) {
            var DH, wH;
            if (void 0 !== tS.emissiveTexture) return "uses an emissive texture";
            const HS = null !== (DH = tS.alphaMode) && void 0 !== DH ? DH : "OPAQUE";
            if ("OPAQUE" !== HS && "MASK" !== HS && "BLEND" !== HS) return NS;
            const gS = null === (wH = tS.pbrMetallicRoughness) || void 0 === wH ? void 0 : wH.baseColorTexture;
            if (gS) {
              var hH, ZH, JH, OH, dH;
              const HS = null !== (hH = SS.extensionsUsed) && void 0 !== hH && hH.includes("KHR_texture_transform") ? null === (ZH = gS.extensions) || void 0 === ZH ? void 0 : ZH.KHR_texture_transform : void 0;
              if (0 !== (null !== (JH = gS.texCoord) && void 0 !== JH ? JH : 0) || 0 !== (null !== (OH = null === HS || void 0 === HS ? void 0 : HS.texCoord) && void 0 !== OH ? OH : 0)) return "uses a second UV set";
              const tS = HH[gS.index];
              if (!tS || !nS(tS.source, gH.length) || void 0 !== tS.sampler && !nS(tS.sampler, null === (dH = SS.samplers) || void 0 === dH ? void 0 : dH.length)) return NS
            }
          }
          for (const tS of gH) {
            if (void 0 !== tS.uri) return qS;
            if (void 0 === tS.bufferView) return NS;
            const gS = dS(SS, HS, tS.bufferView);
            if (!gS) return NS;
            if ("image/png" !== tS.mimeType) {
              var cH, vH, EH;
              return `has ${JS(null!==(cH=null!==(vH={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(EH=tS.mimeType)&&void 0!==EH?EH:""])&&void 0!==vH?vH:tS.mimeType)&&void 0!==cH?cH:"untyped")} image`
            }
            if (!ZS(gS)) return `has ${JS(hS(gS))} image`;
            const XS = new DataView(gS.buffer, gS.byteOffset, gS.byteLength),
              xS = XS.getUint32(16),
              uS = XS.getUint32(20);
            if (xS > bS.imageSide || uS > bS.imageSide) return `has a ${xS} \xd7 ${uS} image (the limit is ${bS.imageSide})`
          }
          return null
        }(SS, HS)
      } catch {
        return NS
      }
    }

    function LS(SS) {
      const HS = vS(SS.byteLength);
      if (HS) return HS;
      try {
        const {
          json: HS,
          bin: gS
        } = (0, tS.v)(SS);
        return ES(HS, gS)
      } catch (gS) {
        if (gS instanceof tS.k) return gS.reason;
        throw gS
      }
    }
  },
  34310: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => aS,
      e: () => kS,
      h: () => jS,
      j: () => XS,
      k: () => bS,
      m: () => KS,
      n: () => IS,
      q: () => fS,
      r: () => xS,
      v: () => uS
    });
    var tS = gS(34316);
    class bS extends Error {
      constructor(SS) {
        super(`GLB refused: it ${SS}`), this.reason = SS, this.name = "GlbRefused"
      }
    }
    class XS extends Error {
      constructor(SS) {
        super(SS), this.name = "GlbError"
      }
    }

    function xS(SS) {
      return Reflect.get(SS, "scene")
    }
    const NS = 5130562,
      qS = "is not a binary glTF 2.0 file";

    function uS(SS) {
      var HS;
      const gS = SS instanceof Uint8Array ? SS : new Uint8Array(SS),
        XS = (0, tS.g)(gS);
      if (null === XS) throw new bS(qS);
      const xS = XS.json,
        {
          jsonEnd: uS,
          length: IS
        } = XS,
        fS = new DataView(gS.buffer, gS.byteOffset, gS.byteLength);
      let kS = -1,
        aS = 0;
      for (let GS = uS; GS < IS;) {
        if (GS + 8 > IS) throw new bS(qS);
        const SS = fS.getUint32(GS, !0),
          HS = fS.getUint32(GS + 4, !0);
        if (GS + 8 + SS > IS || HS === tS.d || HS === NS && -1 !== kS) throw new bS(qS);
        HS === NS && (kS = GS + 8, aS = SS), GS += 8 + SS
      }
      let KS = null;
      const jS = null === (HS = xS.buffers) || void 0 === HS ? void 0 : HS[0];
      if (-1 !== kS && jS && void 0 === jS.uri) {
        if (!(jS.byteLength >= 0) || jS.byteLength > aS) throw new bS(qS);
        KS = new Uint8Array(gS.buffer, gS.byteOffset + kS, jS.byteLength)
      }
      return {
        json: xS,
        bin: KS,
        fileBytes: gS.byteLength
      }
    }

    function IS(SS) {
      const HS = SS.slice(SS.indexOf(",") + 1),
        gS = Uint8Array.fromBase64;
      if (gS) return gS(HS).buffer;
      const tS = atob(HS),
        bS = new Uint8Array(tS.length);
      for (let XS = 0; XS < tS.length; XS++) bS[XS] = tS.charCodeAt(XS);
      return bS.buffer
    }
    async function fS(SS) {
      if (SS.startsWith("data:")) return IS(SS);
      const HS = await fetch(SS);
      if (!HS.ok) throw new XS(`fetching ${SS} failed: ${HS.status} ${HS.statusText}`);
      return await HS.arrayBuffer()
    }
    const kS = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      aS = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      KS = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      jS = [
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
  34316: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      g: () => XS,
      k: () => xS
    });
    const tS = 1179937895,
      bS = 1313821514;

    function XS(SS) {
      const HS = new DataView(SS.buffer, SS.byteOffset, SS.byteLength);
      if (SS.byteLength < 20 || HS.getUint32(0, !0) !== tS || 2 !== HS.getUint32(4, !0)) return null;
      const gS = Math.min(HS.getUint32(8, !0), SS.byteLength),
        XS = HS.getUint32(12, !0);
      if (HS.getUint32(16, !0) !== bS || 20 + XS > gS) return null;
      let xS;
      try {
        xS = JSON.parse((new TextDecoder).decode(SS.subarray(20, 20 + XS)))
      } catch {
        return null
      }
      return "object" === typeof xS && null !== xS ? {
        json: xS,
        jsonEnd: 20 + XS,
        length: gS
      } : null
    }

    function xS(SS) {
      var HS;
      const gS = null === (HS = XS(SS)) || void 0 === HS ? void 0 : HS.json;
      if (void 0 === gS || !Array.isArray(gS.extensionsUsed) || !gS.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const tS = gS.meshes;
      return Array.isArray(tS) && tS.some((SS => {
        const HS = null === SS || void 0 === SS ? void 0 : SS.primitives;
        return Array.isArray(HS) && HS.some((SS => {
          const HS = null === SS || void 0 === SS ? void 0 : SS.extensions;
          return null != (null === HS || void 0 === HS ? void 0 : HS.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);