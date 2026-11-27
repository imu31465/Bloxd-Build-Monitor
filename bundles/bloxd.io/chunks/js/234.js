export const id = 234;
export const ids = [234];
export const modules = {
  35576: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Hr,
      i: () => Pr,
      m: () => Xr
    });
    var Zr = Qr(35580);
    const Wr = {
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
      ar = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      jr = 1048576,
      Ir = "is not a binary glTF 2.0 file",
      fr = "loads data from outside the file",
      Er = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      pr = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      xr = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      mr = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: xr,
        TEXCOORD_2: xr,
        TEXCOORD_3: xr,
        TEXCOORD_4: xr,
        TEXCOORD_5: xr
      },
      Nr = new Set(Zr.j.map((rr => {
        let [Sr] = rr;
        return Sr
      }))),
      Ur = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      tr = 5126;

    function hr(rr) {
      return rr.toLocaleString("en-US")
    }

    function zr(rr, Sr, Qr) {
      return rr > Sr ? `has ${hr(rr)} ${Qr} (the limit is ${hr(Sr)})` : null
    }

    function Yr(rr, Sr) {
      return Number.isInteger(rr) && rr >= 0 && rr < (null !== Sr && void 0 !== Sr ? Sr : 0)
    }

    function nr(rr) {
      return Number.isInteger(rr) && rr >= 0
    }

    function er(rr, Sr) {
      return void 0 !== rr && (!Array.isArray(rr) || rr.length > Sr)
    }

    function Kr(rr, Sr) {
      return "object" === typeof rr && null !== rr && Object.keys(rr).length > Sr
    }

    function yr(rr) {
      var Sr;
      return `${rr.normalized?"normalized ":""}${null!==(Sr=Zr.g[rr.componentType])&&void 0!==Sr?Sr:rr.componentType} ${rr.type}`
    }

    function Br(rr) {
      const Sr = Sr => {
        var Qr;
        return null !== (Qr = rr[Sr]) && void 0 !== Qr ? Qr : -1
      };
      return 255 === Sr(0) && 216 === Sr(1) ? "JPEG" : 82 === Sr(0) && 73 === Sr(1) && 87 === Sr(8) && 69 === Sr(9) ? "WebP" : 171 === Sr(0) && 75 === Sr(1) && 84 === Sr(2) && 88 === Sr(3) ? "KTX2" : "non-PNG"
    }

    function Tr(rr) {
      return rr.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((Sr, Qr) => rr[Qr] === Sr)) && 73 === rr[12] && 72 === rr[13] && 68 === rr[14] && 82 === rr[15]
    }

    function vr(rr) {
      return /^[aeiou]/i.test(rr) ? `an ${rr}` : `a ${rr}`
    }

    function Or(rr) {
      const Sr = rr.byteStride;
      return void 0 === Sr || Number.isInteger(Sr) && Sr >= 4 && Sr <= 252 && Sr % 4 === 0
    }

    function Lr(rr, Sr, Qr) {
      var Zr, Wr;
      const ar = null === (Zr = rr.bufferViews) || void 0 === Zr ? void 0 : Zr[Qr];
      if (!ar || !Sr || 0 !== ar.buffer) return null;
      const jr = null !== (Wr = ar.byteOffset) && void 0 !== Wr ? Wr : 0;
      return !nr(jr) || !nr(ar.byteLength) || jr + ar.byteLength > Sr.byteLength ? null : Sr.subarray(jr, jr + ar.byteLength)
    }

    function lr(rr, Sr) {
      var Qr, Wr, ar;
      const jr = Zr.p[Sr.type],
        Ir = Zr.d[Sr.componentType];
      if (!jr || !Ir || !Number.isInteger(Sr.count) || Sr.count < 0) return !1;
      if (void 0 === Sr.bufferView) return !0;
      const fr = null === (Qr = rr.bufferViews) || void 0 === Qr ? void 0 : Qr[Sr.bufferView],
        Er = null !== (Wr = Sr.byteOffset) && void 0 !== Wr ? Wr : 0;
      if (!fr || !nr(Er) || Er % Ir !== 0) return !1;
      const pr = jr * Ir,
        xr = null !== (ar = fr.byteStride) && void 0 !== ar ? ar : pr;
      if (xr < pr) return !1;
      return (0 === Sr.count ? 0 : Er + xr * (Sr.count - 1) + pr) <= fr.byteLength
    }

    function Xr(rr) {
      return rr > Wr.fileBytes ? `is ${(rr/jr).toFixed(1)} MiB (the limit is ${Wr.fileBytes/jr} MiB)` : null
    }

    function Pr(rr, Sr) {
      try {
        return function(rr, Sr) {
          var Qr, jr, xr, hr, nr, Xr, Pr, Hr, qr, Rr, gr, Cr, Mr, Gr, kr, Ar, Vr;
          const ir = Array.isArray(rr.extensionsUsed) && rr.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(rr, Sr) {
              var Qr, Zr;
              const {
                items: Wr,
                perFile: jr,
                surfaces: Ir,
                few: fr,
                bounds: Er,
                attributeMembers: pr
              } = ar;
              if (er(rr.extensionsRequired, fr) || er(rr.animations, 1 / 0) || er(rr.skins, 1 / 0)) return !0;
              if (null !== (Qr = rr.animations) && void 0 !== Qr && Qr.length || null !== (Zr = rr.skins) && void 0 !== Zr && Zr.length) return !1;
              if ([
                  [rr.buffers, fr],
                  [rr.scenes, fr],
                  [rr.bufferViews, Wr],
                  [rr.accessors, Wr],
                  [rr.nodes, Wr],
                  [rr.meshes, Wr],
                  [rr.materials, Ir],
                  [rr.textures, Ir],
                  [rr.samplers, Ir],
                  [rr.images, Ir]
                ].some((rr => {
                  let [Sr, Qr] = rr;
                  return er(Sr, Qr)
                }))) return !0;
              for (const ar of null !== (xr = rr.accessors) && void 0 !== xr ? xr : []) {
                var xr, mr, Nr;
                if (Number.isInteger(ar.count) && (!Number.isSafeInteger(ar.count) || Object.is(ar.count, -0)) || er(null !== (mr = ar.min) && void 0 !== mr ? mr : void 0, Er) || er(null !== (Nr = ar.max) && void 0 !== Nr ? Nr : void 0, Er)) return !0
              }
              for (const ar of null !== (Ur = rr.scenes) && void 0 !== Ur ? Ur : []) {
                var Ur;
                if (er(ar.nodes, Wr)) return !0
              }
              let tr = 0;
              for (const ar of null !== (hr = rr.nodes) && void 0 !== hr ? hr : []) {
                var hr, zr, Yr;
                if (er(ar.children, jr)) return !0;
                tr += null !== (zr = null === (Yr = ar.children) || void 0 === Yr ? void 0 : Yr.length) && void 0 !== zr ? zr : 0
              }
              if (tr > jr) return !0;
              let nr = 0;
              for (const ar of null !== (yr = rr.meshes) && void 0 !== yr ? yr : []) {
                var yr;
                if (!Array.isArray(ar.primitives)) return !0;
                if (nr += ar.primitives.length, nr > jr) return !0;
                for (const rr of ar.primitives) {
                  var Br;
                  const Qr = Sr ? null === (Br = rr.extensions) || void 0 === Br ? void 0 : Br.KHR_draco_mesh_compression : void 0;
                  if (Kr(rr.attributes, pr) || Kr(null === Qr || void 0 === Qr ? void 0 : Qr.attributes, pr)) return !0
                }
              }
              return !1
            }(rr, ir)) return Ir;
          const wr = null === (Qr = rr.asset) || void 0 === Qr ? void 0 : Qr.version;
          if ("string" !== typeof wr || !/^2\.\d+/.test(wr)) return `uses glTF version ${null!==wr&&void 0!==wr?wr:"(none)"}`;
          const cr = null === (jr = rr.asset) || void 0 === jr ? void 0 : jr.minVersion;
          if (void 0 !== cr && "2.0" !== cr) return `uses glTF version ${cr}`;
          for (const Zr of null !== (Fr = rr.extensionsRequired) && void 0 !== Fr ? Fr : []) {
            var Fr;
            if (!Er.has(Zr)) return `requires the glTF extension ${Zr}`
          }
          if (null !== (xr = rr.animations) && void 0 !== xr && xr.length) return "has animations";
          if (null !== (hr = rr.skins) && void 0 !== hr && hr.length) return "uses skins";
          const or = null !== (nr = rr.buffers) && void 0 !== nr ? nr : [];
          for (const [Zr, Wr] of or.entries()) {
            if (void 0 !== Wr.uri) return fr;
            if (Zr > 0 || !Sr) return Ir
          }
          for (const [Zr, Wr] of(null !== (br = rr.bufferViews) && void 0 !== br ? br : []).entries()) {
            var br;
            if (!Lr(rr, Sr, Zr) || !Or(Wr)) return Ir
          }
          const Jr = null !== (Xr = rr.accessors) && void 0 !== Xr ? Xr : [];
          for (const Zr of Jr) {
            if (void 0 !== Zr.sparse) return "uses sparse accessors";
            const Sr = Number.isInteger(Zr.count) ? zr(Zr.count, Wr.accessorElements, "elements in an accessor") : null;
            if (Sr) return Sr;
            if (!lr(rr, Zr)) return Ir
          }
          const Dr = null !== (Pr = rr.scenes) && void 0 !== Pr ? Pr : [];
          if (1 !== Dr.length) return `has ${Dr.length} scenes`;
          const dr = (0, Zr.y)(rr);
          if (void 0 !== dr && 0 !== dr) return Ir;
          const sr = null !== (Hr = rr.nodes) && void 0 !== Hr ? Hr : [],
            ur = null !== (qr = rr.meshes) && void 0 !== qr ? qr : [],
            rS = null !== (Rr = rr.materials) && void 0 !== Rr ? Rr : [],
            SS = null !== (gr = rr.textures) && void 0 !== gr ? gr : [],
            QS = null !== (Cr = rr.images) && void 0 !== Cr ? Cr : [],
            ZS = null !== (Mr = null !== (Gr = null !== (kr = zr(sr.length, Wr.nodes, "nodes")) && void 0 !== kr ? kr : zr(ur.length, Wr.meshes, "meshes")) && void 0 !== Gr ? Gr : zr(rS.length, Wr.materials, "materials")) && void 0 !== Mr ? Mr : zr(QS.length, Wr.images, "images");
          if (ZS) return ZS;
          const WS = new Set;
          for (const Zr of sr)
            for (const rr of null !== (aS = Zr.children) && void 0 !== aS ? aS : []) {
              var aS;
              if (!Yr(rr, sr.length) || WS.has(rr)) return Ir;
              WS.add(rr)
            }
          const jS = new Set,
            IS = rr => {
              var Sr;
              return !jS.has(rr) && (jS.add(rr), (null !== (Sr = sr[rr].children) && void 0 !== Sr ? Sr : []).every(IS))
            };
          for (const Zr of null !== (fS = Dr[0].nodes) && void 0 !== fS ? fS : []) {
            var fS;
            if (!Yr(Zr, sr.length) || WS.has(Zr) || !IS(Zr)) return Ir
          }
          for (const Zr of sr) {
            if (void 0 !== Zr.matrix) return "uses node matrices";
            if (void 0 !== Zr.skin) return "uses skins";
            if (void 0 !== Zr.weights) return "uses morph targets";
            if (void 0 !== Zr.mesh && !Yr(Zr.mesh, ur.length)) return Ir;
            const rr = [
              [Zr.translation, 3],
              [Zr.rotation, 4],
              [Zr.scale, 3]
            ];
            for (const [Sr, Qr] of rr)
              if (void 0 !== Sr && (!Array.isArray(Sr) || Sr.length !== Qr || !Sr.every((rr => Number.isFinite(rr))))) return Ir
          }
          let ES = -1,
            pS = 0,
            xS = 0,
            mS = null;
          for (const Wr of ur) {
            if (void 0 !== Wr.weights) return "uses morph targets";
            if (0 === Wr.primitives.length) return Ir;
            for (const Qr of Wr.primitives) {
              var NS, US;
              const Wr = null !== (NS = Qr.mode) && void 0 !== NS ? NS : 4;
              var tS;
              if (4 !== Wr && 0 !== Wr) return `uses ${null!==(tS=Ur[Wr])&&void 0!==tS?tS:`mode ${Wr}`} primitives`;
              if (void 0 !== Qr.targets) return "uses morph targets";
              if (void 0 !== Qr.material && !Yr(Qr.material, rS.length)) return Ir;
              const ar = ir ? null === (US = Qr.extensions) || void 0 === US ? void 0 : US.KHR_draco_mesh_compression : void 0;
              if (ar) {
                if (4 !== Wr) return "uses Draco-compressed points";
                if (!Lr(rr, Sr, ar.bufferView) || "object" !== typeof ar.attributes) return Ir
              }
              const jr = Qr.attributes;
              if ("object" !== typeof jr || null === jr) return Ir;
              if (void 0 === jr.POSITION) return "has a primitive with no positions";
              if (!Yr(jr.POSITION, Jr.length)) return Ir;
              const fr = Jr[jr.POSITION].count;
              for (const [rr, Sr] of Object.entries(jr)) {
                if (!Yr(Sr, Jr.length)) return Ir;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(rr)) return "uses skins";
                const Qr = Jr[Sr],
                  Zr = pr[rr];
                if (Zr && (Qr.componentType !== tr || Qr.normalized || Qr.type !== Zr)) return `stores ${rr} as ${yr(Qr)}`;
                const Wr = mr[rr];
                if (Wr && (Qr.type !== Wr.type || !Wr.componentTypes.includes(Qr.componentType) || Qr.componentType === tr === !!Qr.normalized)) return `stores ${rr} as ${yr(Qr)}`;
                if (Nr.has(rr) && Qr.count !== fr) return "has vertex attributes of different lengths"
              }
              if (ar) {
                if (void 0 === Qr.indices) return Ir;
                for (const Sr in ar.attributes)
                  if (Nr.has(Sr) && void 0 === jr[Sr]) return Ir;
                if (void 0 === ar.attributes.POSITION) return Ir;
                const rr = Yr(Qr.indices, Jr.length) ? Jr[Qr.indices].count : -1;
                if (0 === rr) return Ir;
                if (-1 === ES) ES = ar.bufferView, pS = fr, xS = rr;
                else {
                  mS ??= new Map([
                    [ES, [pS, xS]]
                  ]);
                  const Sr = mS.get(ar.bufferView);
                  if (Sr && (Sr[0] !== fr || Sr[1] !== rr)) return Ir;
                  mS.set(ar.bufferView, null !== Sr && void 0 !== Sr ? Sr : [fr, rr])
                }
              }
              let Er = fr;
              if (void 0 !== Qr.indices) {
                if (!Yr(Qr.indices, Jr.length)) return Ir;
                const rr = Jr[Qr.indices];
                if ("SCALAR" !== rr.type) return Ir;
                if (5121 === rr.componentType) return "uses 8-bit indices";
                var hS;
                if (5123 !== rr.componentType && 5125 !== rr.componentType) return `stores indices as ${null!==(hS=Zr.g[rr.componentType])&&void 0!==hS?hS:rr.componentType}`;
                if (!ar && void 0 === rr.bufferView) return Ir;
                Er = rr.count
              }
              if (4 === Wr && Er % 3 !== 0) return Ir
            }
          }
          let zS = 0,
            YS = 0,
            nS = 0;
          for (let Zr = 0; Zr < sr.length; Zr++) {
            const rr = sr[Zr].mesh;
            if (void 0 !== rr && jS.has(Zr))
              for (const Sr of ur[rr].primitives) nS++, zS += Jr[Sr.attributes.POSITION].count, void 0 !== Sr.indices && (YS += Jr[Sr.indices].count)
          }
          const eS = null !== (Ar = null !== (Vr = zr(zS, Wr.vertices, "vertices")) && void 0 !== Vr ? Vr : zr(YS, Wr.indices, "indices")) && void 0 !== Ar ? Ar : zr(nS, Wr.primitives, "primitives");
          if (eS) return eS;
          for (const Zr of rS) {
            var KS, yS;
            if (void 0 !== Zr.emissiveTexture) return "uses an emissive texture";
            const Sr = null !== (KS = Zr.alphaMode) && void 0 !== KS ? KS : "OPAQUE";
            if ("OPAQUE" !== Sr && "MASK" !== Sr && "BLEND" !== Sr) return Ir;
            const Qr = null === (yS = Zr.pbrMetallicRoughness) || void 0 === yS ? void 0 : yS.baseColorTexture;
            if (Qr) {
              var BS, TS, vS, OS, LS;
              const Sr = null !== (BS = rr.extensionsUsed) && void 0 !== BS && BS.includes("KHR_texture_transform") ? null === (TS = Qr.extensions) || void 0 === TS ? void 0 : TS.KHR_texture_transform : void 0;
              if (0 !== (null !== (vS = Qr.texCoord) && void 0 !== vS ? vS : 0) || 0 !== (null !== (OS = null === Sr || void 0 === Sr ? void 0 : Sr.texCoord) && void 0 !== OS ? OS : 0)) return "uses a second UV set";
              const Zr = SS[Qr.index];
              if (!Zr || !Yr(Zr.source, QS.length) || void 0 !== Zr.sampler && !Yr(Zr.sampler, null === (LS = rr.samplers) || void 0 === LS ? void 0 : LS.length)) return Ir
            }
          }
          for (const Zr of QS) {
            if (void 0 !== Zr.uri) return fr;
            if (void 0 === Zr.bufferView) return Ir;
            const Qr = Lr(rr, Sr, Zr.bufferView);
            if (!Qr) return Ir;
            if ("image/png" !== Zr.mimeType) {
              var lS, XS, PS;
              return `has ${vr(null!==(lS=null!==(XS={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(PS=Zr.mimeType)&&void 0!==PS?PS:""])&&void 0!==XS?XS:Zr.mimeType)&&void 0!==lS?lS:"untyped")} image`
            }
            if (!Tr(Qr)) return `has ${vr(Br(Qr))} image`;
            const ar = new DataView(Qr.buffer, Qr.byteOffset, Qr.byteLength),
              jr = ar.getUint32(16),
              Er = ar.getUint32(20);
            if (jr > Wr.imageSide || Er > Wr.imageSide) return `has a ${jr} \xd7 ${Er} image (the limit is ${Wr.imageSide})`
          }
          return null
        }(rr, Sr)
      } catch {
        return Ir
      }
    }

    function Hr(rr) {
      const Sr = Xr(rr.byteLength);
      if (Sr) return Sr;
      try {
        const {
          json: Sr,
          bin: Qr
        } = (0, Zr.z)(rr);
        return Pr(Sr, Qr)
      } catch (Qr) {
        if (Qr instanceof Zr.o) return Qr.reason;
        throw Qr
      }
    }
  },
  35580: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ur,
      g: () => Nr,
      j: () => hr,
      m: () => jr,
      o: () => ar,
      p: () => tr,
      t: () => xr,
      v: () => mr,
      y: () => Ir,
      z: () => pr
    });
    const Zr = 1179937895,
      Wr = 1313821514;
    class ar extends Error {
      constructor(rr) {
        super(`GLB refused: it ${rr}`), this.reason = rr, this.name = "GlbRefused"
      }
    }
    class jr extends Error {
      constructor(rr) {
        super(rr), this.name = "GlbError"
      }
    }

    function Ir(rr) {
      return Reflect.get(rr, "scene")
    }
    const fr = 5130562,
      Er = "is not a binary glTF 2.0 file";

    function pr(rr) {
      var Sr;
      const Qr = rr instanceof Uint8Array ? rr : new Uint8Array(rr),
        jr = function(rr) {
          const Sr = new DataView(rr.buffer, rr.byteOffset, rr.byteLength);
          if (rr.byteLength < 20 || Sr.getUint32(0, !0) !== Zr || 2 !== Sr.getUint32(4, !0)) return null;
          const Qr = Math.min(Sr.getUint32(8, !0), rr.byteLength),
            ar = Sr.getUint32(12, !0);
          if (Sr.getUint32(16, !0) !== Wr || 20 + ar > Qr) return null;
          let jr;
          try {
            jr = JSON.parse((new TextDecoder).decode(rr.subarray(20, 20 + ar)))
          } catch {
            return null
          }
          return "object" === typeof jr && null !== jr ? {
            json: jr,
            jsonEnd: 20 + ar,
            length: Qr
          } : null
        }(Qr);
      if (null === jr) throw new ar(Er);
      const Ir = jr.json,
        {
          jsonEnd: pr,
          length: xr
        } = jr,
        mr = new DataView(Qr.buffer, Qr.byteOffset, Qr.byteLength);
      let Nr = -1,
        Ur = 0;
      for (let Zr = pr; Zr < xr;) {
        if (Zr + 8 > xr) throw new ar(Er);
        const rr = mr.getUint32(Zr, !0),
          Sr = mr.getUint32(Zr + 4, !0);
        if (Zr + 8 + rr > xr || Sr === Wr || Sr === fr && -1 !== Nr) throw new ar(Er);
        Sr === fr && (Nr = Zr + 8, Ur = rr), Zr += 8 + rr
      }
      let tr = null;
      const hr = null === (Sr = Ir.buffers) || void 0 === Sr ? void 0 : Sr[0];
      if (-1 !== Nr && hr && void 0 === hr.uri) {
        if (!(hr.byteLength >= 0) || hr.byteLength > Ur) throw new ar(Er);
        tr = new Uint8Array(Qr.buffer, Qr.byteOffset + Nr, hr.byteLength)
      }
      return {
        json: Ir,
        bin: tr,
        fileBytes: Qr.byteLength
      }
    }

    function xr(rr) {
      const Sr = rr.slice(rr.indexOf(",") + 1),
        Qr = Uint8Array.fromBase64;
      if (Qr) return Qr(Sr).buffer;
      const Zr = atob(Sr),
        Wr = new Uint8Array(Zr.length);
      for (let ar = 0; ar < Zr.length; ar++) Wr[ar] = Zr.charCodeAt(ar);
      return Wr.buffer
    }
    async function mr(rr) {
      if (rr.startsWith("data:")) return xr(rr);
      const Sr = await fetch(rr);
      if (!Sr.ok) throw new jr(`fetching ${rr} failed: ${Sr.status} ${Sr.statusText}`);
      return await Sr.arrayBuffer()
    }
    const Nr = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      Ur = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      tr = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      hr = [
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
for (const rr in modules) Object.freeze(modules[rr]);