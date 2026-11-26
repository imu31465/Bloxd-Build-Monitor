export const id = 230;
export const ids = [230];
export const modules = {
  35408: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => RV,
      h: () => WV,
      l: () => GV
    });
    var JV = xV(35415);
    const YV = {
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
      UV = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      yV = 1048576,
      pV = "is not a binary glTF 2.0 file",
      QV = "loads data from outside the file",
      nV = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      wV = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      ZV = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      vV = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: ZV,
        TEXCOORD_2: ZV,
        TEXCOORD_3: ZV,
        TEXCOORD_4: ZV,
        TEXCOORD_5: ZV
      },
      rV = new Set(JV.f.map((VV => {
        let [eV] = VV;
        return eV
      }))),
      kV = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      bV = 5126;

    function EV(VV) {
      return VV.toLocaleString("en-US")
    }

    function BV(VV, eV, xV) {
      return VV > eV ? `has ${EV(VV)} ${xV} (the limit is ${EV(eV)})` : null
    }

    function jV(VV, eV) {
      return Number.isInteger(VV) && VV >= 0 && VV < (null !== eV && void 0 !== eV ? eV : 0)
    }

    function qV(VV) {
      return Number.isInteger(VV) && VV >= 0
    }

    function tV(VV, eV) {
      return void 0 !== VV && (!Array.isArray(VV) || VV.length > eV)
    }

    function FV(VV, eV) {
      return "object" === typeof VV && null !== VV && Object.keys(VV).length > eV
    }

    function TV(VV) {
      var eV;
      return `${VV.normalized?"normalized ":""}${null!==(eV=JV.d[VV.componentType])&&void 0!==eV?eV:VV.componentType} ${VV.type}`
    }

    function PV(VV) {
      const eV = eV => {
        var xV;
        return null !== (xV = VV[eV]) && void 0 !== xV ? xV : -1
      };
      return 255 === eV(0) && 216 === eV(1) ? "JPEG" : 82 === eV(0) && 73 === eV(1) && 87 === eV(8) && 69 === eV(9) ? "WebP" : 171 === eV(0) && 75 === eV(1) && 84 === eV(2) && 88 === eV(3) ? "KTX2" : "non-PNG"
    }

    function AV(VV) {
      return VV.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((eV, xV) => VV[xV] === eV)) && 73 === VV[12] && 72 === VV[13] && 68 === VV[14] && 82 === VV[15]
    }

    function NV(VV) {
      return /^[aeiou]/i.test(VV) ? `an ${VV}` : `a ${VV}`
    }

    function XV(VV) {
      const eV = VV.byteStride;
      return void 0 === eV || Number.isInteger(eV) && eV >= 4 && eV <= 252 && eV % 4 === 0
    }

    function MV(VV, eV, xV) {
      var JV, YV;
      const UV = null === (JV = VV.bufferViews) || void 0 === JV ? void 0 : JV[xV];
      if (!UV || !eV || 0 !== UV.buffer) return null;
      const yV = null !== (YV = UV.byteOffset) && void 0 !== YV ? YV : 0;
      return !qV(yV) || !qV(UV.byteLength) || yV + UV.byteLength > eV.byteLength ? null : eV.subarray(yV, yV + UV.byteLength)
    }

    function zV(VV, eV) {
      var xV, YV, UV;
      const yV = JV.l[eV.type],
        pV = JV.b[eV.componentType];
      if (!yV || !pV || !Number.isInteger(eV.count) || eV.count < 0) return !1;
      if (void 0 === eV.bufferView) return !0;
      const QV = null === (xV = VV.bufferViews) || void 0 === xV ? void 0 : xV[eV.bufferView],
        nV = null !== (YV = eV.byteOffset) && void 0 !== YV ? YV : 0;
      if (!QV || !qV(nV) || nV % pV !== 0) return !1;
      const wV = yV * pV,
        ZV = null !== (UV = QV.byteStride) && void 0 !== UV ? UV : wV;
      if (ZV < wV) return !1;
      return (0 === eV.count ? 0 : nV + ZV * (eV.count - 1) + wV) <= QV.byteLength
    }

    function GV(VV) {
      return VV > YV.fileBytes ? `is ${(VV/yV).toFixed(1)} MiB (the limit is ${YV.fileBytes/yV} MiB)` : null
    }

    function WV(VV, eV) {
      try {
        return function(VV, eV) {
          var xV, yV, ZV, EV, qV, GV, WV, RV, gV, DV, iV, CV, aV, oV, cV, hV, lV;
          const LV = Array.isArray(VV.extensionsUsed) && VV.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(VV, eV) {
              var xV, JV;
              const {
                items: YV,
                perFile: yV,
                surfaces: pV,
                few: QV,
                bounds: nV,
                attributeMembers: wV
              } = UV;
              if (tV(VV.extensionsRequired, QV) || tV(VV.animations, 1 / 0) || tV(VV.skins, 1 / 0)) return !0;
              if (null !== (xV = VV.animations) && void 0 !== xV && xV.length || null !== (JV = VV.skins) && void 0 !== JV && JV.length) return !1;
              if ([
                  [VV.buffers, QV],
                  [VV.scenes, QV],
                  [VV.bufferViews, YV],
                  [VV.accessors, YV],
                  [VV.nodes, YV],
                  [VV.meshes, YV],
                  [VV.materials, pV],
                  [VV.textures, pV],
                  [VV.samplers, pV],
                  [VV.images, pV]
                ].some((VV => {
                  let [eV, xV] = VV;
                  return tV(eV, xV)
                }))) return !0;
              for (const UV of null !== (ZV = VV.accessors) && void 0 !== ZV ? ZV : []) {
                var ZV, vV, rV;
                if (Number.isInteger(UV.count) && (!Number.isSafeInteger(UV.count) || Object.is(UV.count, -0)) || tV(null !== (vV = UV.min) && void 0 !== vV ? vV : void 0, nV) || tV(null !== (rV = UV.max) && void 0 !== rV ? rV : void 0, nV)) return !0
              }
              for (const UV of null !== (kV = VV.scenes) && void 0 !== kV ? kV : []) {
                var kV;
                if (tV(UV.nodes, YV)) return !0
              }
              let bV = 0;
              for (const UV of null !== (EV = VV.nodes) && void 0 !== EV ? EV : []) {
                var EV, BV, jV;
                if (tV(UV.children, yV)) return !0;
                bV += null !== (BV = null === (jV = UV.children) || void 0 === jV ? void 0 : jV.length) && void 0 !== BV ? BV : 0
              }
              if (bV > yV) return !0;
              let qV = 0;
              for (const UV of null !== (TV = VV.meshes) && void 0 !== TV ? TV : []) {
                var TV;
                if (!Array.isArray(UV.primitives)) return !0;
                if (qV += UV.primitives.length, qV > yV) return !0;
                for (const VV of UV.primitives) {
                  var PV;
                  const xV = eV ? null === (PV = VV.extensions) || void 0 === PV ? void 0 : PV.KHR_draco_mesh_compression : void 0;
                  if (FV(VV.attributes, wV) || FV(null === xV || void 0 === xV ? void 0 : xV.attributes, wV)) return !0
                }
              }
              return !1
            }(VV, LV)) return pV;
          const fV = null === (xV = VV.asset) || void 0 === xV ? void 0 : xV.version;
          if ("string" !== typeof fV || !/^2\.\d+/.test(fV)) return `uses glTF version ${null!==fV&&void 0!==fV?fV:"(none)"}`;
          const mV = null === (yV = VV.asset) || void 0 === yV ? void 0 : yV.minVersion;
          if (void 0 !== mV && "2.0" !== mV) return `uses glTF version ${mV}`;
          for (const JV of null !== (KV = VV.extensionsRequired) && void 0 !== KV ? KV : []) {
            var KV;
            if (!nV.has(JV)) return `requires the glTF extension ${JV}`
          }
          if (null !== (ZV = VV.animations) && void 0 !== ZV && ZV.length) return "has animations";
          if (null !== (EV = VV.skins) && void 0 !== EV && EV.length) return "uses skins";
          const HV = null !== (qV = VV.buffers) && void 0 !== qV ? qV : [];
          for (const [JV, YV] of HV.entries()) {
            if (void 0 !== YV.uri) return QV;
            if (JV > 0 || !eV) return pV
          }
          for (const [JV, YV] of(null !== (uV = VV.bufferViews) && void 0 !== uV ? uV : []).entries()) {
            var uV;
            if (!MV(VV, eV, JV) || !XV(YV)) return pV
          }
          const sV = null !== (GV = VV.accessors) && void 0 !== GV ? GV : [];
          for (const JV of sV) {
            if (void 0 !== JV.sparse) return "uses sparse accessors";
            const eV = Number.isInteger(JV.count) ? BV(JV.count, YV.accessorElements, "elements in an accessor") : null;
            if (eV) return eV;
            if (!zV(VV, JV)) return pV
          }
          const SV = null !== (WV = VV.scenes) && void 0 !== WV ? WV : [];
          if (1 !== SV.length) return `has ${SV.length} scenes`;
          const IV = (0, JV.u)(VV);
          if (void 0 !== IV && 0 !== IV) return pV;
          const dV = null !== (RV = VV.nodes) && void 0 !== RV ? RV : [],
            OV = null !== (gV = VV.meshes) && void 0 !== gV ? gV : [],
            Ve = null !== (DV = VV.materials) && void 0 !== DV ? DV : [],
            ee = null !== (iV = VV.textures) && void 0 !== iV ? iV : [],
            xe = null !== (CV = VV.images) && void 0 !== CV ? CV : [],
            Je = null !== (aV = null !== (oV = null !== (cV = BV(dV.length, YV.nodes, "nodes")) && void 0 !== cV ? cV : BV(OV.length, YV.meshes, "meshes")) && void 0 !== oV ? oV : BV(Ve.length, YV.materials, "materials")) && void 0 !== aV ? aV : BV(xe.length, YV.images, "images");
          if (Je) return Je;
          const Ye = new Set;
          for (const JV of dV)
            for (const VV of null !== (Ue = JV.children) && void 0 !== Ue ? Ue : []) {
              var Ue;
              if (!jV(VV, dV.length) || Ye.has(VV)) return pV;
              Ye.add(VV)
            }
          const ye = new Set,
            pe = VV => {
              var eV;
              return !ye.has(VV) && (ye.add(VV), (null !== (eV = dV[VV].children) && void 0 !== eV ? eV : []).every(pe))
            };
          for (const JV of null !== (Qe = SV[0].nodes) && void 0 !== Qe ? Qe : []) {
            var Qe;
            if (!jV(JV, dV.length) || Ye.has(JV) || !pe(JV)) return pV
          }
          for (const JV of dV) {
            if (void 0 !== JV.matrix) return "uses node matrices";
            if (void 0 !== JV.skin) return "uses skins";
            if (void 0 !== JV.weights) return "uses morph targets";
            if (void 0 !== JV.mesh && !jV(JV.mesh, OV.length)) return pV;
            const VV = [
              [JV.translation, 3],
              [JV.rotation, 4],
              [JV.scale, 3]
            ];
            for (const [eV, xV] of VV)
              if (void 0 !== eV && (!Array.isArray(eV) || eV.length !== xV || !eV.every((VV => Number.isFinite(VV))))) return pV
          }
          let ne = -1,
            we = 0,
            Ze = 0,
            ve = null;
          for (const YV of OV) {
            if (void 0 !== YV.weights) return "uses morph targets";
            if (0 === YV.primitives.length) return pV;
            for (const xV of YV.primitives) {
              var re, ke;
              const YV = null !== (re = xV.mode) && void 0 !== re ? re : 4;
              var be;
              if (4 !== YV && 0 !== YV) return `uses ${null!==(be=kV[YV])&&void 0!==be?be:`mode ${YV}`} primitives`;
              if (void 0 !== xV.targets) return "uses morph targets";
              if (void 0 !== xV.material && !jV(xV.material, Ve.length)) return pV;
              const UV = LV ? null === (ke = xV.extensions) || void 0 === ke ? void 0 : ke.KHR_draco_mesh_compression : void 0;
              if (UV) {
                if (4 !== YV) return "uses Draco-compressed points";
                if (!MV(VV, eV, UV.bufferView) || "object" !== typeof UV.attributes) return pV
              }
              const yV = xV.attributes;
              if ("object" !== typeof yV || null === yV) return pV;
              if (void 0 === yV.POSITION) return "has a primitive with no positions";
              if (!jV(yV.POSITION, sV.length)) return pV;
              const QV = sV[yV.POSITION].count;
              for (const [VV, eV] of Object.entries(yV)) {
                if (!jV(eV, sV.length)) return pV;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(VV)) return "uses skins";
                const xV = sV[eV],
                  JV = wV[VV];
                if (JV && (xV.componentType !== bV || xV.normalized || xV.type !== JV)) return `stores ${VV} as ${TV(xV)}`;
                const YV = vV[VV];
                if (YV && (xV.type !== YV.type || !YV.componentTypes.includes(xV.componentType) || xV.componentType === bV === !!xV.normalized)) return `stores ${VV} as ${TV(xV)}`;
                if (rV.has(VV) && xV.count !== QV) return "has vertex attributes of different lengths"
              }
              if (UV) {
                if (void 0 === xV.indices) return pV;
                for (const eV in UV.attributes)
                  if (rV.has(eV) && void 0 === yV[eV]) return pV;
                if (void 0 === UV.attributes.POSITION) return pV;
                const VV = jV(xV.indices, sV.length) ? sV[xV.indices].count : -1;
                if (0 === VV) return pV;
                if (-1 === ne) ne = UV.bufferView, we = QV, Ze = VV;
                else {
                  ve ??= new Map([
                    [ne, [we, Ze]]
                  ]);
                  const eV = ve.get(UV.bufferView);
                  if (eV && (eV[0] !== QV || eV[1] !== VV)) return pV;
                  ve.set(UV.bufferView, null !== eV && void 0 !== eV ? eV : [QV, VV])
                }
              }
              let nV = QV;
              if (void 0 !== xV.indices) {
                if (!jV(xV.indices, sV.length)) return pV;
                const VV = sV[xV.indices];
                if ("SCALAR" !== VV.type) return pV;
                if (5121 === VV.componentType) return "uses 8-bit indices";
                var Ee;
                if (5123 !== VV.componentType && 5125 !== VV.componentType) return `stores indices as ${null!==(Ee=JV.d[VV.componentType])&&void 0!==Ee?Ee:VV.componentType}`;
                if (!UV && void 0 === VV.bufferView) return pV;
                nV = VV.count
              }
              if (4 === YV && nV % 3 !== 0) return pV
            }
          }
          let Be = 0,
            je = 0,
            qe = 0;
          for (let JV = 0; JV < dV.length; JV++) {
            const VV = dV[JV].mesh;
            if (void 0 !== VV && ye.has(JV))
              for (const eV of OV[VV].primitives) qe++, Be += sV[eV.attributes.POSITION].count, void 0 !== eV.indices && (je += sV[eV.indices].count)
          }
          const te = null !== (hV = null !== (lV = BV(Be, YV.vertices, "vertices")) && void 0 !== lV ? lV : BV(je, YV.indices, "indices")) && void 0 !== hV ? hV : BV(qe, YV.primitives, "primitives");
          if (te) return te;
          for (const JV of Ve) {
            var Fe, Te;
            if (void 0 !== JV.emissiveTexture) return "uses an emissive texture";
            const eV = null !== (Fe = JV.alphaMode) && void 0 !== Fe ? Fe : "OPAQUE";
            if ("OPAQUE" !== eV && "MASK" !== eV && "BLEND" !== eV) return pV;
            const xV = null === (Te = JV.pbrMetallicRoughness) || void 0 === Te ? void 0 : Te.baseColorTexture;
            if (xV) {
              var Pe, Ae, Ne, Xe, Me;
              const eV = null !== (Pe = VV.extensionsUsed) && void 0 !== Pe && Pe.includes("KHR_texture_transform") ? null === (Ae = xV.extensions) || void 0 === Ae ? void 0 : Ae.KHR_texture_transform : void 0;
              if (0 !== (null !== (Ne = xV.texCoord) && void 0 !== Ne ? Ne : 0) || 0 !== (null !== (Xe = null === eV || void 0 === eV ? void 0 : eV.texCoord) && void 0 !== Xe ? Xe : 0)) return "uses a second UV set";
              const JV = ee[xV.index];
              if (!JV || !jV(JV.source, xe.length) || void 0 !== JV.sampler && !jV(JV.sampler, null === (Me = VV.samplers) || void 0 === Me ? void 0 : Me.length)) return pV
            }
          }
          for (const JV of xe) {
            if (void 0 !== JV.uri) return QV;
            if (void 0 === JV.bufferView) return pV;
            const xV = MV(VV, eV, JV.bufferView);
            if (!xV) return pV;
            if ("image/png" !== JV.mimeType) {
              var ze, Ge, We;
              return `has ${NV(null!==(ze=null!==(Ge={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(We=JV.mimeType)&&void 0!==We?We:""])&&void 0!==Ge?Ge:JV.mimeType)&&void 0!==ze?ze:"untyped")} image`
            }
            if (!AV(xV)) return `has ${NV(PV(xV))} image`;
            const UV = new DataView(xV.buffer, xV.byteOffset, xV.byteLength),
              yV = UV.getUint32(16),
              nV = UV.getUint32(20);
            if (yV > YV.imageSide || nV > YV.imageSide) return `has a ${yV} \xd7 ${nV} image (the limit is ${YV.imageSide})`
          }
          return null
        }(VV, eV)
      } catch {
        return pV
      }
    }

    function RV(VV) {
      const eV = GV(VV.byteLength);
      if (eV) return eV;
      try {
        const {
          json: eV,
          bin: xV
        } = (0, JV.v)(VV);
        return WV(eV, xV)
      } catch (xV) {
        if (xV instanceof JV.h) return xV.reason;
        throw xV
      }
    }
  },
  35415: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => rV,
      d: () => vV,
      f: () => bV,
      g: () => UV,
      h: () => YV,
      l: () => kV,
      o: () => wV,
      r: () => ZV,
      u: () => yV,
      v: () => nV
    });
    var JV = xV(35419);
    class YV extends Error {
      constructor(VV) {
        super(`GLB refused: it ${VV}`), this.reason = VV, this.name = "GlbRefused"
      }
    }
    class UV extends Error {
      constructor(VV) {
        super(VV), this.name = "GlbError"
      }
    }

    function yV(VV) {
      return Reflect.get(VV, "scene")
    }
    const pV = 5130562,
      QV = "is not a binary glTF 2.0 file";

    function nV(VV) {
      var eV;
      const xV = VV instanceof Uint8Array ? VV : new Uint8Array(VV),
        UV = (0, JV.d)(xV);
      if (null === UV) throw new YV(QV);
      const yV = UV.json,
        {
          jsonEnd: nV,
          length: wV
        } = UV,
        ZV = new DataView(xV.buffer, xV.byteOffset, xV.byteLength);
      let vV = -1,
        rV = 0;
      for (let EV = nV; EV < wV;) {
        if (EV + 8 > wV) throw new YV(QV);
        const VV = ZV.getUint32(EV, !0),
          eV = ZV.getUint32(EV + 4, !0);
        if (EV + 8 + VV > wV || eV === JV.c || eV === pV && -1 !== vV) throw new YV(QV);
        eV === pV && (vV = EV + 8, rV = VV), EV += 8 + VV
      }
      let kV = null;
      const bV = null === (eV = yV.buffers) || void 0 === eV ? void 0 : eV[0];
      if (-1 !== vV && bV && void 0 === bV.uri) {
        if (!(bV.byteLength >= 0) || bV.byteLength > rV) throw new YV(QV);
        kV = new Uint8Array(xV.buffer, xV.byteOffset + vV, bV.byteLength)
      }
      return {
        json: yV,
        bin: kV,
        fileBytes: xV.byteLength
      }
    }

    function wV(VV) {
      const eV = VV.slice(VV.indexOf(",") + 1),
        xV = Uint8Array.fromBase64;
      if (xV) return xV(eV).buffer;
      const JV = atob(eV),
        YV = new Uint8Array(JV.length);
      for (let UV = 0; UV < JV.length; UV++) YV[UV] = JV.charCodeAt(UV);
      return YV.buffer
    }
    async function ZV(VV) {
      if (VV.startsWith("data:")) return wV(VV);
      const eV = await fetch(VV);
      if (!eV.ok) throw new UV(`fetching ${VV} failed: ${eV.status} ${eV.statusText}`);
      return await eV.arrayBuffer()
    }
    const vV = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      rV = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      kV = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      bV = [
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
  35419: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV,
      d: () => UV,
      g: () => yV
    });
    const JV = 1179937895,
      YV = 1313821514;

    function UV(VV) {
      const eV = new DataView(VV.buffer, VV.byteOffset, VV.byteLength);
      if (VV.byteLength < 20 || eV.getUint32(0, !0) !== JV || 2 !== eV.getUint32(4, !0)) return null;
      const xV = Math.min(eV.getUint32(8, !0), VV.byteLength),
        UV = eV.getUint32(12, !0);
      if (eV.getUint32(16, !0) !== YV || 20 + UV > xV) return null;
      let yV;
      try {
        yV = JSON.parse((new TextDecoder).decode(VV.subarray(20, 20 + UV)))
      } catch {
        return null
      }
      return "object" === typeof yV && null !== yV ? {
        json: yV,
        jsonEnd: 20 + UV,
        length: xV
      } : null
    }

    function yV(VV) {
      var eV;
      const xV = null === (eV = UV(VV)) || void 0 === eV ? void 0 : eV.json;
      if (void 0 === xV || !Array.isArray(xV.extensionsUsed) || !xV.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const JV = xV.meshes;
      return Array.isArray(JV) && JV.some((VV => {
        const eV = null === VV || void 0 === VV ? void 0 : VV.primitives;
        return Array.isArray(eV) && eV.some((VV => {
          const eV = null === VV || void 0 === VV ? void 0 : VV.extensions;
          return null != (null === eV || void 0 === eV ? void 0 : eV.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);