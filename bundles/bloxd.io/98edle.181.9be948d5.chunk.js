export const id = 181;
export const ids = [181];
export const modules = {
  32650: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => sW,
      e: () => aR,
      f: () => kR
    });
    var wW = MW(32658);
    const CW = {
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
      zR = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      AW = 1048576,
      bR = "is not a binary glTF 2.0 file",
      yR = "loads data from outside the file",
      NW = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      eW = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      BW = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      tR = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: BW,
        TEXCOORD_2: BW,
        TEXCOORD_3: BW,
        TEXCOORD_4: BW,
        TEXCOORD_5: BW
      },
      TW = new Set(wW.h.map((WW => {
        let [RW] = WW;
        return RW
      }))),
      gR = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      iR = 5126;

    function YW(WW) {
      return WW.toLocaleString("en-US")
    }

    function JW(WW, RW, MW) {
      return WW > RW ? `has ${YW(WW)} ${MW} (the limit is ${YW(RW)})` : null
    }

    function PW(WW, RW) {
      return Number.isInteger(WW) && WW >= 0 && WW < (null !== RW && void 0 !== RW ? RW : 0)
    }

    function IW(WW) {
      return Number.isInteger(WW) && WW >= 0
    }

    function oW(WW, RW) {
      return void 0 !== WW && (!Array.isArray(WW) || WW.length > RW)
    }

    function lW(WW, RW) {
      return "object" === typeof WW && null !== WW && Object.keys(WW).length > RW
    }

    function FW(WW) {
      var RW;
      return `${WW.normalized?"normalized ":""}${null!==(RW=wW.d[WW.componentType])&&void 0!==RW?RW:WW.componentType} ${WW.type}`
    }

    function fW(WW) {
      const RW = RW => {
        var MW;
        return null !== (MW = WW[RW]) && void 0 !== MW ? MW : -1
      };
      return 255 === RW(0) && 216 === RW(1) ? "JPEG" : 82 === RW(0) && 73 === RW(1) && 87 === RW(8) && 69 === RW(9) ? "WebP" : 171 === RW(0) && 75 === RW(1) && 84 === RW(2) && 88 === RW(3) ? "KTX2" : "non-PNG"
    }

    function QW(WW) {
      return WW.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((RW, MW) => WW[MW] === RW)) && 73 === WW[12] && 72 === WW[13] && 68 === WW[14] && 82 === WW[15]
    }

    function rR(WW) {
      return /^[aeiou]/i.test(WW) ? `an ${WW}` : `a ${WW}`
    }

    function cR(WW) {
      const RW = WW.byteStride;
      return void 0 === RW || Number.isInteger(RW) && RW >= 4 && RW <= 252 && RW % 4 === 0
    }

    function XW(WW, RW, MW) {
      var wW, CW;
      const zR = null === (wW = WW.bufferViews) || void 0 === wW ? void 0 : wW[MW];
      if (!zR || !RW || 0 !== zR.buffer) return null;
      const AW = null !== (CW = zR.byteOffset) && void 0 !== CW ? CW : 0;
      return !IW(AW) || !IW(zR.byteLength) || AW + zR.byteLength > RW.byteLength ? null : RW.subarray(AW, AW + zR.byteLength)
    }

    function jR(WW, RW) {
      var MW, CW, zR;
      const AW = wW.r[RW.type],
        bR = wW.b[RW.componentType];
      if (!AW || !bR || !Number.isInteger(RW.count) || RW.count < 0) return !1;
      if (void 0 === RW.bufferView) return !0;
      const yR = null === (MW = WW.bufferViews) || void 0 === MW ? void 0 : MW[RW.bufferView],
        NW = null !== (CW = RW.byteOffset) && void 0 !== CW ? CW : 0;
      if (!yR || !IW(NW) || NW % bR !== 0) return !1;
      const eW = AW * bR,
        BW = null !== (zR = yR.byteStride) && void 0 !== zR ? zR : eW;
      if (BW < eW) return !1;
      return (0 === RW.count ? 0 : NW + BW * (RW.count - 1) + eW) <= yR.byteLength
    }

    function kR(WW) {
      return WW > CW.fileBytes ? `is ${(WW/AW).toFixed(1)} MiB (the limit is ${CW.fileBytes/AW} MiB)` : null
    }

    function aR(WW, RW) {
      try {
        return function(WW, RW) {
          var MW, AW, BW, YW, IW, kR, aR, sW, dW, pW, hW, UW, EW, VW, mR, xR, vR;
          const KW = Array.isArray(WW.extensionsUsed) && WW.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(WW, RW) {
              var MW, wW;
              const {
                items: CW,
                perFile: AW,
                surfaces: bR,
                few: yR,
                bounds: NW,
                attributeMembers: eW
              } = zR;
              if (oW(WW.extensionsRequired, yR) || oW(WW.animations, 1 / 0) || oW(WW.skins, 1 / 0)) return !0;
              if (null !== (MW = WW.animations) && void 0 !== MW && MW.length || null !== (wW = WW.skins) && void 0 !== wW && wW.length) return !1;
              if ([
                  [WW.buffers, yR],
                  [WW.scenes, yR],
                  [WW.bufferViews, CW],
                  [WW.accessors, CW],
                  [WW.nodes, CW],
                  [WW.meshes, CW],
                  [WW.materials, bR],
                  [WW.textures, bR],
                  [WW.samplers, bR],
                  [WW.images, bR]
                ].some((WW => {
                  let [RW, MW] = WW;
                  return oW(RW, MW)
                }))) return !0;
              for (const zR of null !== (BW = WW.accessors) && void 0 !== BW ? BW : []) {
                var BW, tR, TW;
                if (Number.isInteger(zR.count) && (!Number.isSafeInteger(zR.count) || Object.is(zR.count, -0)) || oW(null !== (tR = zR.min) && void 0 !== tR ? tR : void 0, NW) || oW(null !== (TW = zR.max) && void 0 !== TW ? TW : void 0, NW)) return !0
              }
              for (const zR of null !== (gR = WW.scenes) && void 0 !== gR ? gR : []) {
                var gR;
                if (oW(zR.nodes, CW)) return !0
              }
              let iR = 0;
              for (const zR of null !== (YW = WW.nodes) && void 0 !== YW ? YW : []) {
                var YW, JW, PW;
                if (oW(zR.children, AW)) return !0;
                iR += null !== (JW = null === (PW = zR.children) || void 0 === PW ? void 0 : PW.length) && void 0 !== JW ? JW : 0
              }
              if (iR > AW) return !0;
              let IW = 0;
              for (const zR of null !== (FW = WW.meshes) && void 0 !== FW ? FW : []) {
                var FW;
                if (!Array.isArray(zR.primitives)) return !0;
                if (IW += zR.primitives.length, IW > AW) return !0;
                for (const WW of zR.primitives) {
                  var fW;
                  const MW = RW ? null === (fW = WW.extensions) || void 0 === fW ? void 0 : fW.KHR_draco_mesh_compression : void 0;
                  if (lW(WW.attributes, eW) || lW(null === MW || void 0 === MW ? void 0 : MW.attributes, eW)) return !0
                }
              }
              return !1
            }(WW, KW)) return bR;
          const uW = null === (MW = WW.asset) || void 0 === MW ? void 0 : MW.version;
          if ("string" !== typeof uW || !/^2\.\d+/.test(uW)) return `uses glTF version ${null!==uW&&void 0!==uW?uW:"(none)"}`;
          const OW = null === (AW = WW.asset) || void 0 === AW ? void 0 : AW.minVersion;
          if (void 0 !== OW && "2.0" !== OW) return `uses glTF version ${OW}`;
          for (const wW of null !== (nW = WW.extensionsRequired) && void 0 !== nW ? nW : []) {
            var nW;
            if (!NW.has(wW)) return `requires the glTF extension ${wW}`
          }
          if (null !== (BW = WW.animations) && void 0 !== BW && BW.length) return "has animations";
          if (null !== (YW = WW.skins) && void 0 !== YW && YW.length) return "uses skins";
          const GW = null !== (IW = WW.buffers) && void 0 !== IW ? IW : [];
          for (const [wW, CW] of GW.entries()) {
            if (void 0 !== CW.uri) return yR;
            if (wW > 0 || !RW) return bR
          }
          for (const [wW, CW] of(null !== (LW = WW.bufferViews) && void 0 !== LW ? LW : []).entries()) {
            var LW;
            if (!XW(WW, RW, wW) || !cR(CW)) return bR
          }
          const HW = null !== (kR = WW.accessors) && void 0 !== kR ? kR : [];
          for (const wW of HW) {
            if (void 0 !== wW.sparse) return "uses sparse accessors";
            const RW = Number.isInteger(wW.count) ? JW(wW.count, CW.accessorElements, "elements in an accessor") : null;
            if (RW) return RW;
            if (!jR(WW, wW)) return bR
          }
          const DW = null !== (aR = WW.scenes) && void 0 !== aR ? aR : [];
          if (1 !== DW.length) return `has ${DW.length} scenes`;
          const qR = (0, wW.v)(WW);
          if (void 0 !== qR && 0 !== qR) return bR;
          const ZW = null !== (sW = WW.nodes) && void 0 !== sW ? sW : [],
            SW = null !== (dW = WW.meshes) && void 0 !== dW ? dW : [],
            WR = null !== (pW = WW.materials) && void 0 !== pW ? pW : [],
            RR = null !== (hW = WW.textures) && void 0 !== hW ? hW : [],
            MR = null !== (UW = WW.images) && void 0 !== UW ? UW : [],
            wR = null !== (EW = null !== (VW = null !== (mR = JW(ZW.length, CW.nodes, "nodes")) && void 0 !== mR ? mR : JW(SW.length, CW.meshes, "meshes")) && void 0 !== VW ? VW : JW(WR.length, CW.materials, "materials")) && void 0 !== EW ? EW : JW(MR.length, CW.images, "images");
          if (wR) return wR;
          const CR = new Set;
          for (const wW of ZW)
            for (const WW of null !== (zM = wW.children) && void 0 !== zM ? zM : []) {
              var zM;
              if (!PW(WW, ZW.length) || CR.has(WW)) return bR;
              CR.add(WW)
            }
          const AR = new Set,
            bM = WW => {
              var RW;
              return !AR.has(WW) && (AR.add(WW), (null !== (RW = ZW[WW].children) && void 0 !== RW ? RW : []).every(bM))
            };
          for (const wW of null !== (yM = DW[0].nodes) && void 0 !== yM ? yM : []) {
            var yM;
            if (!PW(wW, ZW.length) || CR.has(wW) || !bM(wW)) return bR
          }
          for (const wW of ZW) {
            if (void 0 !== wW.matrix) return "uses node matrices";
            if (void 0 !== wW.skin) return "uses skins";
            if (void 0 !== wW.weights) return "uses morph targets";
            if (void 0 !== wW.mesh && !PW(wW.mesh, SW.length)) return bR;
            const WW = [
              [wW.translation, 3],
              [wW.rotation, 4],
              [wW.scale, 3]
            ];
            for (const [RW, MW] of WW)
              if (void 0 !== RW && (!Array.isArray(RW) || RW.length !== MW || !RW.every((WW => Number.isFinite(WW))))) return bR
          }
          let NR = -1,
            eR = 0,
            BR = 0,
            tM = null;
          for (const CW of SW) {
            if (void 0 !== CW.weights) return "uses morph targets";
            if (0 === CW.primitives.length) return bR;
            for (const MW of CW.primitives) {
              var TR, gM;
              const CW = null !== (TR = MW.mode) && void 0 !== TR ? TR : 4;
              var iM;
              if (4 !== CW && 0 !== CW) return `uses ${null!==(iM=gR[CW])&&void 0!==iM?iM:`mode ${CW}`} primitives`;
              if (void 0 !== MW.targets) return "uses morph targets";
              if (void 0 !== MW.material && !PW(MW.material, WR.length)) return bR;
              const zR = KW ? null === (gM = MW.extensions) || void 0 === gM ? void 0 : gM.KHR_draco_mesh_compression : void 0;
              if (zR) {
                if (4 !== CW) return "uses Draco-compressed points";
                if (!XW(WW, RW, zR.bufferView) || "object" !== typeof zR.attributes) return bR
              }
              const AW = MW.attributes;
              if ("object" !== typeof AW || null === AW) return bR;
              if (void 0 === AW.POSITION) return "has a primitive with no positions";
              if (!PW(AW.POSITION, HW.length)) return bR;
              const yR = HW[AW.POSITION].count;
              for (const [WW, RW] of Object.entries(AW)) {
                if (!PW(RW, HW.length)) return bR;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(WW)) return "uses skins";
                const MW = HW[RW],
                  wW = eW[WW];
                if (wW && (MW.componentType !== iR || MW.normalized || MW.type !== wW)) return `stores ${WW} as ${FW(MW)}`;
                const CW = tR[WW];
                if (CW && (MW.type !== CW.type || !CW.componentTypes.includes(MW.componentType) || MW.componentType === iR === !!MW.normalized)) return `stores ${WW} as ${FW(MW)}`;
                if (TW.has(WW) && MW.count !== yR) return "has vertex attributes of different lengths"
              }
              if (zR) {
                if (void 0 === MW.indices) return bR;
                for (const RW in zR.attributes)
                  if (TW.has(RW) && void 0 === AW[RW]) return bR;
                if (void 0 === zR.attributes.POSITION) return bR;
                const WW = PW(MW.indices, HW.length) ? HW[MW.indices].count : -1;
                if (0 === WW) return bR;
                if (-1 === NR) NR = zR.bufferView, eR = yR, BR = WW;
                else {
                  tM ??= new Map([
                    [NR, [eR, BR]]
                  ]);
                  const RW = tM.get(zR.bufferView);
                  if (RW && (RW[0] !== yR || RW[1] !== WW)) return bR;
                  tM.set(zR.bufferView, null !== RW && void 0 !== RW ? RW : [yR, WW])
                }
              }
              let NW = yR;
              if (void 0 !== MW.indices) {
                if (!PW(MW.indices, HW.length)) return bR;
                const WW = HW[MW.indices];
                if ("SCALAR" !== WW.type) return bR;
                if (5121 === WW.componentType) return "uses 8-bit indices";
                var YR;
                if (5123 !== WW.componentType && 5125 !== WW.componentType) return `stores indices as ${null!==(YR=wW.d[WW.componentType])&&void 0!==YR?YR:WW.componentType}`;
                if (!zR && void 0 === WW.bufferView) return bR;
                NW = WW.count
              }
              if (4 === CW && NW % 3 !== 0) return bR
            }
          }
          let JR = 0,
            PR = 0,
            IR = 0;
          for (let wW = 0; wW < ZW.length; wW++) {
            const WW = ZW[wW].mesh;
            if (void 0 !== WW && AR.has(wW))
              for (const RW of SW[WW].primitives) IR++, JR += HW[RW.attributes.POSITION].count, void 0 !== RW.indices && (PR += HW[RW.indices].count)
          }
          const oR = null !== (xR = null !== (vR = JW(JR, CW.vertices, "vertices")) && void 0 !== vR ? vR : JW(PR, CW.indices, "indices")) && void 0 !== xR ? xR : JW(IR, CW.primitives, "primitives");
          if (oR) return oR;
          for (const wW of WR) {
            var lR, FR;
            if (void 0 !== wW.emissiveTexture) return "uses an emissive texture";
            const RW = null !== (lR = wW.alphaMode) && void 0 !== lR ? lR : "OPAQUE";
            if ("OPAQUE" !== RW && "MASK" !== RW && "BLEND" !== RW) return bR;
            const MW = null === (FR = wW.pbrMetallicRoughness) || void 0 === FR ? void 0 : FR.baseColorTexture;
            if (MW) {
              var fR, QR, rM, cM, XR;
              const RW = null !== (fR = WW.extensionsUsed) && void 0 !== fR && fR.includes("KHR_texture_transform") ? null === (QR = MW.extensions) || void 0 === QR ? void 0 : QR.KHR_texture_transform : void 0;
              if (0 !== (null !== (rM = MW.texCoord) && void 0 !== rM ? rM : 0) || 0 !== (null !== (cM = null === RW || void 0 === RW ? void 0 : RW.texCoord) && void 0 !== cM ? cM : 0)) return "uses a second UV set";
              const wW = RR[MW.index];
              if (!wW || !PW(wW.source, MR.length) || void 0 !== wW.sampler && !PW(wW.sampler, null === (XR = WW.samplers) || void 0 === XR ? void 0 : XR.length)) return bR
            }
          }
          for (const wW of MR) {
            if (void 0 !== wW.uri) return yR;
            if (void 0 === wW.bufferView) return bR;
            const MW = XW(WW, RW, wW.bufferView);
            if (!MW) return bR;
            if ("image/png" !== wW.mimeType) {
              var jM, kM, aM;
              return `has ${rR(null!==(jM=null!==(kM={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(aM=wW.mimeType)&&void 0!==aM?aM:""])&&void 0!==kM?kM:wW.mimeType)&&void 0!==jM?jM:"untyped")} image`
            }
            if (!QW(MW)) return `has ${rR(fW(MW))} image`;
            const zR = new DataView(MW.buffer, MW.byteOffset, MW.byteLength),
              AW = zR.getUint32(16),
              NW = zR.getUint32(20);
            if (AW > CW.imageSide || NW > CW.imageSide) return `has a ${AW} \xd7 ${NW} image (the limit is ${CW.imageSide})`
          }
          return null
        }(WW, RW)
      } catch {
        return bR
      }
    }

    function sW(WW) {
      const RW = kR(WW.byteLength);
      if (RW) return RW;
      try {
        const {
          json: RW,
          bin: MW
        } = (0, wW.x)(WW);
        return aR(RW, MW)
      } catch (MW) {
        if (MW instanceof wW.o) return MW.reason;
        throw MW
      }
    }
  },
  32658: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => TW,
      d: () => tR,
      h: () => iR,
      l: () => zR,
      o: () => CW,
      r: () => gR,
      s: () => eW,
      t: () => BW,
      v: () => AW,
      x: () => NW
    });
    var wW = MW(32665);
    class CW extends Error {
      constructor(WW) {
        super(`GLB refused: it ${WW}`), this.reason = WW, this.name = "GlbRefused"
      }
    }
    class zR extends Error {
      constructor(WW) {
        super(WW), this.name = "GlbError"
      }
    }

    function AW(WW) {
      return Reflect.get(WW, "scene")
    }
    const bR = 5130562,
      yR = "is not a binary glTF 2.0 file";

    function NW(WW) {
      var RW;
      const MW = WW instanceof Uint8Array ? WW : new Uint8Array(WW),
        zR = (0, wW.f)(MW);
      if (null === zR) throw new CW(yR);
      const AW = zR.json,
        {
          jsonEnd: NW,
          length: eW
        } = zR,
        BW = new DataView(MW.buffer, MW.byteOffset, MW.byteLength);
      let tR = -1,
        TW = 0;
      for (let YW = NW; YW < eW;) {
        if (YW + 8 > eW) throw new CW(yR);
        const WW = BW.getUint32(YW, !0),
          RW = BW.getUint32(YW + 4, !0);
        if (YW + 8 + WW > eW || RW === wW.c || RW === bR && -1 !== tR) throw new CW(yR);
        RW === bR && (tR = YW + 8, TW = WW), YW += 8 + WW
      }
      let gR = null;
      const iR = null === (RW = AW.buffers) || void 0 === RW ? void 0 : RW[0];
      if (-1 !== tR && iR && void 0 === iR.uri) {
        if (!(iR.byteLength >= 0) || iR.byteLength > TW) throw new CW(yR);
        gR = new Uint8Array(MW.buffer, MW.byteOffset + tR, iR.byteLength)
      }
      return {
        json: AW,
        bin: gR,
        fileBytes: MW.byteLength
      }
    }

    function eW(WW) {
      const RW = WW.slice(WW.indexOf(",") + 1),
        MW = Uint8Array.fromBase64;
      if (MW) return MW(RW).buffer;
      const wW = atob(RW),
        CW = new Uint8Array(wW.length);
      for (let zR = 0; zR < wW.length; zR++) CW[zR] = wW.charCodeAt(zR);
      return CW.buffer
    }
    async function BW(WW) {
      if (WW.startsWith("data:")) return eW(WW);
      const RW = await fetch(WW);
      if (!RW.ok) throw new zR(`fetching ${WW} failed: ${RW.status} ${RW.statusText}`);
      return await RW.arrayBuffer()
    }
    const tR = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      TW = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      gR = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      iR = [
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
  32665: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      f: () => zR,
      h: () => AW
    });
    const wW = 1179937895,
      CW = 1313821514;

    function zR(WW) {
      const RW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
      if (WW.byteLength < 20 || RW.getUint32(0, !0) !== wW || 2 !== RW.getUint32(4, !0)) return null;
      const MW = Math.min(RW.getUint32(8, !0), WW.byteLength),
        zR = RW.getUint32(12, !0);
      if (RW.getUint32(16, !0) !== CW || 20 + zR > MW) return null;
      let AW;
      try {
        AW = JSON.parse((new TextDecoder).decode(WW.subarray(20, 20 + zR)))
      } catch {
        return null
      }
      return "object" === typeof AW && null !== AW ? {
        json: AW,
        jsonEnd: 20 + zR,
        length: MW
      } : null
    }

    function AW(WW) {
      var RW;
      const MW = null === (RW = zR(WW)) || void 0 === RW ? void 0 : RW.json;
      if (void 0 === MW || !Array.isArray(MW.extensionsUsed) || !MW.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const wW = MW.meshes;
      return Array.isArray(wW) && wW.some((WW => {
        const RW = null === WW || void 0 === WW ? void 0 : WW.primitives;
        return Array.isArray(RW) && RW.some((WW => {
          const RW = null === WW || void 0 === WW ? void 0 : WW.extensions;
          return null != (null === RW || void 0 === RW ? void 0 : RW.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);