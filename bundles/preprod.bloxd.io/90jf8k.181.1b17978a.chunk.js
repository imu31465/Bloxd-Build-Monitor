export const id = 181;
export const ids = [181];
export const modules = {
  32964: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => YF,
      d: () => oF,
      h: () => ZF
    });
    var CF = SF(32968);
    const AF = {
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
      uF = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      hF = 1048576,
      bW = "is not a binary glTF 2.0 file",
      dF = "loads data from outside the file",
      PF = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      RF = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      iW = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      eF = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: iW,
        TEXCOORD_2: iW,
        TEXCOORD_3: iW,
        TEXCOORD_4: iW,
        TEXCOORD_5: iW
      },
      EF = new Set(CF.f.map((FF => {
        let [WF] = FF;
        return WF
      }))),
      QF = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      rW = 5126;

    function gW(FF) {
      return FF.toLocaleString("en-US")
    }

    function tW(FF, WF, SF) {
      return FF > WF ? `has ${gW(FF)} ${SF} (the limit is ${gW(WF)})` : null
    }

    function TF(FF, WF) {
      return Number.isInteger(FF) && FF >= 0 && FF < (null !== WF && void 0 !== WF ? WF : 0)
    }

    function aW(FF) {
      return Number.isInteger(FF) && FF >= 0
    }

    function kW(FF, WF) {
      return void 0 !== FF && (!Array.isArray(FF) || FF.length > WF)
    }

    function qW(FF, WF) {
      return "object" === typeof FF && null !== FF && Object.keys(FF).length > WF
    }

    function VF(FF) {
      var WF;
      return `${FF.normalized?"normalized ":""}${null!==(WF=CF.d[FF.componentType])&&void 0!==WF?WF:FF.componentType} ${FF.type}`
    }

    function NF(FF) {
      const WF = WF => {
        var SF;
        return null !== (SF = FF[WF]) && void 0 !== SF ? SF : -1
      };
      return 255 === WF(0) && 216 === WF(1) ? "JPEG" : 82 === WF(0) && 73 === WF(1) && 87 === WF(8) && 69 === WF(9) ? "WebP" : 171 === WF(0) && 75 === WF(1) && 84 === WF(2) && 88 === WF(3) ? "KTX2" : "non-PNG"
    }

    function DF(FF) {
      return FF.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((WF, SF) => FF[SF] === WF)) && 73 === FF[12] && 72 === FF[13] && 68 === FF[14] && 82 === FF[15]
    }

    function LF(FF) {
      return /^[aeiou]/i.test(FF) ? `an ${FF}` : `a ${FF}`
    }

    function mW(FF) {
      const WF = FF.byteStride;
      return void 0 === WF || Number.isInteger(WF) && WF >= 4 && WF <= 252 && WF % 4 === 0
    }

    function OF(FF, WF, SF) {
      var CF, AF;
      const uF = null === (CF = FF.bufferViews) || void 0 === CF ? void 0 : CF[SF];
      if (!uF || !WF || 0 !== uF.buffer) return null;
      const hF = null !== (AF = uF.byteOffset) && void 0 !== AF ? AF : 0;
      return !aW(hF) || !aW(uF.byteLength) || hF + uF.byteLength > WF.byteLength ? null : WF.subarray(hF, hF + uF.byteLength)
    }

    function xW(FF, WF) {
      var SF, AF, uF;
      const hF = CF.n[WF.type],
        bW = CF.c[WF.componentType];
      if (!hF || !bW || !Number.isInteger(WF.count) || WF.count < 0) return !1;
      if (void 0 === WF.bufferView) return !0;
      const dF = null === (SF = FF.bufferViews) || void 0 === SF ? void 0 : SF[WF.bufferView],
        PF = null !== (AF = WF.byteOffset) && void 0 !== AF ? AF : 0;
      if (!dF || !aW(PF) || PF % bW !== 0) return !1;
      const RF = hF * bW,
        iW = null !== (uF = dF.byteStride) && void 0 !== uF ? uF : RF;
      if (iW < RF) return !1;
      return (0 === WF.count ? 0 : PF + iW * (WF.count - 1) + RF) <= dF.byteLength
    }

    function ZF(FF) {
      return FF > AF.fileBytes ? `is ${(FF/hF).toFixed(1)} MiB (the limit is ${AF.fileBytes/hF} MiB)` : null
    }

    function oF(FF, WF) {
      try {
        return function(FF, WF) {
          var SF, hF, iW, gW, aW, ZF, oF, YF, MF, cW, GF, zW, IF, fF, yW, sF, nF;
          const HF = Array.isArray(FF.extensionsUsed) && FF.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(FF, WF) {
              var SF, CF;
              const {
                items: AF,
                perFile: hF,
                surfaces: bW,
                few: dF,
                bounds: PF,
                attributeMembers: RF
              } = uF;
              if (kW(FF.extensionsRequired, dF) || kW(FF.animations, 1 / 0) || kW(FF.skins, 1 / 0)) return !0;
              if (null !== (SF = FF.animations) && void 0 !== SF && SF.length || null !== (CF = FF.skins) && void 0 !== CF && CF.length) return !1;
              if ([
                  [FF.buffers, dF],
                  [FF.scenes, dF],
                  [FF.bufferViews, AF],
                  [FF.accessors, AF],
                  [FF.nodes, AF],
                  [FF.meshes, AF],
                  [FF.materials, bW],
                  [FF.textures, bW],
                  [FF.samplers, bW],
                  [FF.images, bW]
                ].some((FF => {
                  let [WF, SF] = FF;
                  return kW(WF, SF)
                }))) return !0;
              for (const uF of null !== (iW = FF.accessors) && void 0 !== iW ? iW : []) {
                var iW, eF, EF;
                if (Number.isInteger(uF.count) && (!Number.isSafeInteger(uF.count) || Object.is(uF.count, -0)) || kW(null !== (eF = uF.min) && void 0 !== eF ? eF : void 0, PF) || kW(null !== (EF = uF.max) && void 0 !== EF ? EF : void 0, PF)) return !0
              }
              for (const uF of null !== (QF = FF.scenes) && void 0 !== QF ? QF : []) {
                var QF;
                if (kW(uF.nodes, AF)) return !0
              }
              let rW = 0;
              for (const uF of null !== (gW = FF.nodes) && void 0 !== gW ? gW : []) {
                var gW, tW, TF;
                if (kW(uF.children, hF)) return !0;
                rW += null !== (tW = null === (TF = uF.children) || void 0 === TF ? void 0 : TF.length) && void 0 !== tW ? tW : 0
              }
              if (rW > hF) return !0;
              let aW = 0;
              for (const uF of null !== (VF = FF.meshes) && void 0 !== VF ? VF : []) {
                var VF;
                if (!Array.isArray(uF.primitives)) return !0;
                if (aW += uF.primitives.length, aW > hF) return !0;
                for (const FF of uF.primitives) {
                  var NF;
                  const SF = WF ? null === (NF = FF.extensions) || void 0 === NF ? void 0 : NF.KHR_draco_mesh_compression : void 0;
                  if (qW(FF.attributes, RF) || qW(null === SF || void 0 === SF ? void 0 : SF.attributes, RF)) return !0
                }
              }
              return !1
            }(FF, HF)) return bW;
          const KF = null === (SF = FF.asset) || void 0 === SF ? void 0 : SF.version;
          if ("string" !== typeof KF || !/^2\.\d+/.test(KF)) return `uses glTF version ${null!==KF&&void 0!==KF?KF:"(none)"}`;
          const wF = null === (hF = FF.asset) || void 0 === hF ? void 0 : hF.minVersion;
          if (void 0 !== wF && "2.0" !== wF) return `uses glTF version ${wF}`;
          for (const CF of null !== (XF = FF.extensionsRequired) && void 0 !== XF ? XF : []) {
            var XF;
            if (!PF.has(CF)) return `requires the glTF extension ${CF}`
          }
          if (null !== (iW = FF.animations) && void 0 !== iW && iW.length) return "has animations";
          if (null !== (gW = FF.skins) && void 0 !== gW && gW.length) return "uses skins";
          const UF = null !== (aW = FF.buffers) && void 0 !== aW ? aW : [];
          for (const [CF, AF] of UF.entries()) {
            if (void 0 !== AF.uri) return dF;
            if (CF > 0 || !WF) return bW
          }
          for (const [CF, AF] of(null !== (BF = FF.bufferViews) && void 0 !== BF ? BF : []).entries()) {
            var BF;
            if (!OF(FF, WF, CF) || !mW(AF)) return bW
          }
          const jW = null !== (ZF = FF.accessors) && void 0 !== ZF ? ZF : [];
          for (const CF of jW) {
            if (void 0 !== CF.sparse) return "uses sparse accessors";
            const WF = Number.isInteger(CF.count) ? tW(CF.count, AF.accessorElements, "elements in an accessor") : null;
            if (WF) return WF;
            if (!xW(FF, CF)) return bW
          }
          const vW = null !== (oF = FF.scenes) && void 0 !== oF ? oF : [];
          if (1 !== vW.length) return `has ${vW.length} scenes`;
          const JF = (0, CF.r)(FF);
          if (void 0 !== JF && 0 !== JF) return bW;
          const pF = null !== (YF = FF.nodes) && void 0 !== YF ? YF : [],
            lF = null !== (MF = FF.meshes) && void 0 !== MF ? MF : [],
            FW = null !== (cW = FF.materials) && void 0 !== cW ? cW : [],
            WW = null !== (GF = FF.textures) && void 0 !== GF ? GF : [],
            SW = null !== (zW = FF.images) && void 0 !== zW ? zW : [],
            CW = null !== (IF = null !== (fF = null !== (yW = tW(pF.length, AF.nodes, "nodes")) && void 0 !== yW ? yW : tW(lF.length, AF.meshes, "meshes")) && void 0 !== fF ? fF : tW(FW.length, AF.materials, "materials")) && void 0 !== IF ? IF : tW(SW.length, AF.images, "images");
          if (CW) return CW;
          const AW = new Set;
          for (const CF of pF)
            for (const FF of null !== (uW = CF.children) && void 0 !== uW ? uW : []) {
              var uW;
              if (!TF(FF, pF.length) || AW.has(FF)) return bW;
              AW.add(FF)
            }
          const hW = new Set,
            bS = FF => {
              var WF;
              return !hW.has(FF) && (hW.add(FF), (null !== (WF = pF[FF].children) && void 0 !== WF ? WF : []).every(bS))
            };
          for (const CF of null !== (dW = vW[0].nodes) && void 0 !== dW ? dW : []) {
            var dW;
            if (!TF(CF, pF.length) || AW.has(CF) || !bS(CF)) return bW
          }
          for (const CF of pF) {
            if (void 0 !== CF.matrix) return "uses node matrices";
            if (void 0 !== CF.skin) return "uses skins";
            if (void 0 !== CF.weights) return "uses morph targets";
            if (void 0 !== CF.mesh && !TF(CF.mesh, lF.length)) return bW;
            const FF = [
              [CF.translation, 3],
              [CF.rotation, 4],
              [CF.scale, 3]
            ];
            for (const [WF, SF] of FF)
              if (void 0 !== WF && (!Array.isArray(WF) || WF.length !== SF || !WF.every((FF => Number.isFinite(FF))))) return bW
          }
          let PW = -1,
            RW = 0,
            iS = 0,
            eW = null;
          for (const AF of lF) {
            if (void 0 !== AF.weights) return "uses morph targets";
            if (0 === AF.primitives.length) return bW;
            for (const SF of AF.primitives) {
              var EW, QW;
              const AF = null !== (EW = SF.mode) && void 0 !== EW ? EW : 4;
              var rS;
              if (4 !== AF && 0 !== AF) return `uses ${null!==(rS=QF[AF])&&void 0!==rS?rS:`mode ${AF}`} primitives`;
              if (void 0 !== SF.targets) return "uses morph targets";
              if (void 0 !== SF.material && !TF(SF.material, FW.length)) return bW;
              const uF = HF ? null === (QW = SF.extensions) || void 0 === QW ? void 0 : QW.KHR_draco_mesh_compression : void 0;
              if (uF) {
                if (4 !== AF) return "uses Draco-compressed points";
                if (!OF(FF, WF, uF.bufferView) || "object" !== typeof uF.attributes) return bW
              }
              const hF = SF.attributes;
              if ("object" !== typeof hF || null === hF) return bW;
              if (void 0 === hF.POSITION) return "has a primitive with no positions";
              if (!TF(hF.POSITION, jW.length)) return bW;
              const dF = jW[hF.POSITION].count;
              for (const [FF, WF] of Object.entries(hF)) {
                if (!TF(WF, jW.length)) return bW;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(FF)) return "uses skins";
                const SF = jW[WF],
                  CF = RF[FF];
                if (CF && (SF.componentType !== rW || SF.normalized || SF.type !== CF)) return `stores ${FF} as ${VF(SF)}`;
                const AF = eF[FF];
                if (AF && (SF.type !== AF.type || !AF.componentTypes.includes(SF.componentType) || SF.componentType === rW === !!SF.normalized)) return `stores ${FF} as ${VF(SF)}`;
                if (EF.has(FF) && SF.count !== dF) return "has vertex attributes of different lengths"
              }
              if (uF) {
                if (void 0 === SF.indices) return bW;
                for (const WF in uF.attributes)
                  if (EF.has(WF) && void 0 === hF[WF]) return bW;
                if (void 0 === uF.attributes.POSITION) return bW;
                const FF = TF(SF.indices, jW.length) ? jW[SF.indices].count : -1;
                if (0 === FF) return bW;
                if (-1 === PW) PW = uF.bufferView, RW = dF, iS = FF;
                else {
                  eW ??= new Map([
                    [PW, [RW, iS]]
                  ]);
                  const WF = eW.get(uF.bufferView);
                  if (WF && (WF[0] !== dF || WF[1] !== FF)) return bW;
                  eW.set(uF.bufferView, null !== WF && void 0 !== WF ? WF : [dF, FF])
                }
              }
              let PF = dF;
              if (void 0 !== SF.indices) {
                if (!TF(SF.indices, jW.length)) return bW;
                const FF = jW[SF.indices];
                if ("SCALAR" !== FF.type) return bW;
                if (5121 === FF.componentType) return "uses 8-bit indices";
                var gS;
                if (5123 !== FF.componentType && 5125 !== FF.componentType) return `stores indices as ${null!==(gS=CF.d[FF.componentType])&&void 0!==gS?gS:FF.componentType}`;
                if (!uF && void 0 === FF.bufferView) return bW;
                PF = FF.count
              }
              if (4 === AF && PF % 3 !== 0) return bW
            }
          }
          let tS = 0,
            TW = 0,
            aS = 0;
          for (let CF = 0; CF < pF.length; CF++) {
            const FF = pF[CF].mesh;
            if (void 0 !== FF && hW.has(CF))
              for (const WF of lF[FF].primitives) aS++, tS += jW[WF.attributes.POSITION].count, void 0 !== WF.indices && (TW += jW[WF.indices].count)
          }
          const kS = null !== (sF = null !== (nF = tW(tS, AF.vertices, "vertices")) && void 0 !== nF ? nF : tW(TW, AF.indices, "indices")) && void 0 !== sF ? sF : tW(aS, AF.primitives, "primitives");
          if (kS) return kS;
          for (const CF of FW) {
            var qS, VW;
            if (void 0 !== CF.emissiveTexture) return "uses an emissive texture";
            const WF = null !== (qS = CF.alphaMode) && void 0 !== qS ? qS : "OPAQUE";
            if ("OPAQUE" !== WF && "MASK" !== WF && "BLEND" !== WF) return bW;
            const SF = null === (VW = CF.pbrMetallicRoughness) || void 0 === VW ? void 0 : VW.baseColorTexture;
            if (SF) {
              var NW, DW, LW, mS, OW;
              const WF = null !== (NW = FF.extensionsUsed) && void 0 !== NW && NW.includes("KHR_texture_transform") ? null === (DW = SF.extensions) || void 0 === DW ? void 0 : DW.KHR_texture_transform : void 0;
              if (0 !== (null !== (LW = SF.texCoord) && void 0 !== LW ? LW : 0) || 0 !== (null !== (mS = null === WF || void 0 === WF ? void 0 : WF.texCoord) && void 0 !== mS ? mS : 0)) return "uses a second UV set";
              const CF = WW[SF.index];
              if (!CF || !TF(CF.source, SW.length) || void 0 !== CF.sampler && !TF(CF.sampler, null === (OW = FF.samplers) || void 0 === OW ? void 0 : OW.length)) return bW
            }
          }
          for (const CF of SW) {
            if (void 0 !== CF.uri) return dF;
            if (void 0 === CF.bufferView) return bW;
            const SF = OF(FF, WF, CF.bufferView);
            if (!SF) return bW;
            if ("image/png" !== CF.mimeType) {
              var xS, ZW, oW;
              return `has ${LF(null!==(xS=null!==(ZW={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(oW=CF.mimeType)&&void 0!==oW?oW:""])&&void 0!==ZW?ZW:CF.mimeType)&&void 0!==xS?xS:"untyped")} image`
            }
            if (!DF(SF)) return `has ${LF(NF(SF))} image`;
            const uF = new DataView(SF.buffer, SF.byteOffset, SF.byteLength),
              hF = uF.getUint32(16),
              PF = uF.getUint32(20);
            if (hF > AF.imageSide || PF > AF.imageSide) return `has a ${hF} \xd7 ${PF} image (the limit is ${AF.imageSide})`
          }
          return null
        }(FF, WF)
      } catch {
        return bW
      }
    }

    function YF(FF) {
      const WF = ZF(FF.byteLength);
      if (WF) return WF;
      try {
        const {
          json: WF,
          bin: SF
        } = (0, CF.t)(FF);
        return oF(WF, SF)
      } catch (SF) {
        if (SF instanceof CF.l) return SF.reason;
        throw SF
      }
    }
  },
  32968: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => EF,
      d: () => eF,
      f: () => rW,
      h: () => uF,
      l: () => AF,
      n: () => QF,
      o: () => RF,
      p: () => iW,
      r: () => hF,
      t: () => PF
    });
    var CF = SF(32976);
    class AF extends Error {
      constructor(FF) {
        super(`GLB refused: it ${FF}`), this.reason = FF, this.name = "GlbRefused"
      }
    }
    class uF extends Error {
      constructor(FF) {
        super(FF), this.name = "GlbError"
      }
    }

    function hF(FF) {
      return Reflect.get(FF, "scene")
    }
    const bW = 5130562,
      dF = "is not a binary glTF 2.0 file";

    function PF(FF) {
      var WF;
      const SF = FF instanceof Uint8Array ? FF : new Uint8Array(FF),
        uF = (0, CF.i)(SF);
      if (null === uF) throw new AF(dF);
      const hF = uF.json,
        {
          jsonEnd: PF,
          length: RF
        } = uF,
        iW = new DataView(SF.buffer, SF.byteOffset, SF.byteLength);
      let eF = -1,
        EF = 0;
      for (let gW = PF; gW < RF;) {
        if (gW + 8 > RF) throw new AF(dF);
        const FF = iW.getUint32(gW, !0),
          WF = iW.getUint32(gW + 4, !0);
        if (gW + 8 + FF > RF || WF === CF.e || WF === bW && -1 !== eF) throw new AF(dF);
        WF === bW && (eF = gW + 8, EF = FF), gW += 8 + FF
      }
      let QF = null;
      const rW = null === (WF = hF.buffers) || void 0 === WF ? void 0 : WF[0];
      if (-1 !== eF && rW && void 0 === rW.uri) {
        if (!(rW.byteLength >= 0) || rW.byteLength > EF) throw new AF(dF);
        QF = new Uint8Array(SF.buffer, SF.byteOffset + eF, rW.byteLength)
      }
      return {
        json: hF,
        bin: QF,
        fileBytes: SF.byteLength
      }
    }

    function RF(FF) {
      const WF = FF.slice(FF.indexOf(",") + 1),
        SF = Uint8Array.fromBase64;
      if (SF) return SF(WF).buffer;
      const CF = atob(WF),
        AF = new Uint8Array(CF.length);
      for (let uF = 0; uF < CF.length; uF++) AF[uF] = CF.charCodeAt(uF);
      return AF.buffer
    }
    async function iW(FF) {
      if (FF.startsWith("data:")) return RF(FF);
      const WF = await fetch(FF);
      if (!WF.ok) throw new uF(`fetching ${FF} failed: ${WF.status} ${WF.statusText}`);
      return await WF.arrayBuffer()
    }
    const eF = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      EF = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      QF = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      rW = [
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
  32976: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      i: () => uF,
      j: () => hF
    });
    const CF = 1179937895,
      AF = 1313821514;

    function uF(FF) {
      const WF = new DataView(FF.buffer, FF.byteOffset, FF.byteLength);
      if (FF.byteLength < 20 || WF.getUint32(0, !0) !== CF || 2 !== WF.getUint32(4, !0)) return null;
      const SF = Math.min(WF.getUint32(8, !0), FF.byteLength),
        uF = WF.getUint32(12, !0);
      if (WF.getUint32(16, !0) !== AF || 20 + uF > SF) return null;
      let hF;
      try {
        hF = JSON.parse((new TextDecoder).decode(FF.subarray(20, 20 + uF)))
      } catch {
        return null
      }
      return "object" === typeof hF && null !== hF ? {
        json: hF,
        jsonEnd: 20 + uF,
        length: SF
      } : null
    }

    function hF(FF) {
      var WF;
      const SF = null === (WF = uF(FF)) || void 0 === WF ? void 0 : WF.json;
      if (void 0 === SF || !Array.isArray(SF.extensionsUsed) || !SF.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const CF = SF.meshes;
      return Array.isArray(CF) && CF.some((FF => {
        const WF = null === FF || void 0 === FF ? void 0 : FF.primitives;
        return Array.isArray(WF) && WF.some((FF => {
          const WF = null === FF || void 0 === FF ? void 0 : FF.extensions;
          return null != (null === WF || void 0 === WF ? void 0 : WF.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);