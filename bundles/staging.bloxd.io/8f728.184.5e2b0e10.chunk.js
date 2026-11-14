export const id = 184;
export const ids = [184];
export const modules = {
  33039: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Cc,
      d: () => Qc,
      e: () => Zc
    });
    var Vc = nc(33044);
    const Ic = {
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
      rB = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      uc = 1048576,
      sc = "is not a binary glTF 2.0 file",
      Mc = "loads data from outside the file",
      Pc = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      qB = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      Oc = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      Tc = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: Oc,
        TEXCOORD_2: Oc,
        TEXCOORD_3: Oc,
        TEXCOORD_4: Oc,
        TEXCOORD_5: Oc
      },
      fc = new Set(Vc.f.map((cB => {
        let [Bc] = cB;
        return Bc
      }))),
      mB = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      ec = 5126;

    function tB(cB) {
      return cB.toLocaleString("en-US")
    }

    function Sc(cB, Bc, nc) {
      return cB > Bc ? `has ${tB(cB)} ${nc} (the limit is ${tB(Bc)})` : null
    }

    function yB(cB, Bc) {
      return Number.isInteger(cB) && cB >= 0 && cB < (null !== Bc && void 0 !== Bc ? Bc : 0)
    }

    function zB(cB) {
      return Number.isInteger(cB) && cB >= 0
    }

    function pc(cB, Bc) {
      return void 0 !== cB && (!Array.isArray(cB) || cB.length > Bc)
    }

    function hc(cB, Bc) {
      return "object" === typeof cB && null !== cB && Object.keys(cB).length > Bc
    }

    function aB(cB) {
      var Bc;
      return `${cB.normalized?"normalized ":""}${null!==(Bc=Vc.e[cB.componentType])&&void 0!==Bc?Bc:cB.componentType} ${cB.type}`
    }

    function lc(cB) {
      const Bc = Bc => {
        var nc;
        return null !== (nc = cB[Bc]) && void 0 !== nc ? nc : -1
      };
      return 255 === Bc(0) && 216 === Bc(1) ? "JPEG" : 82 === Bc(0) && 73 === Bc(1) && 87 === Bc(8) && 69 === Bc(9) ? "WebP" : 171 === Bc(0) && 75 === Bc(1) && 84 === Bc(2) && 88 === Bc(3) ? "KTX2" : "non-PNG"
    }

    function Yc(cB) {
      return cB.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((Bc, nc) => cB[nc] === Bc)) && 73 === cB[12] && 72 === cB[13] && 68 === cB[14] && 82 === cB[15]
    }

    function Lc(cB) {
      return /^[aeiou]/i.test(cB) ? `an ${cB}` : `a ${cB}`
    }

    function gB(cB) {
      const Bc = cB.byteStride;
      return void 0 === Bc || Number.isInteger(Bc) && Bc >= 4 && Bc <= 252 && Bc % 4 === 0
    }

    function Uc(cB, Bc, nc) {
      var Vc, Ic;
      const rB = null === (Vc = cB.bufferViews) || void 0 === Vc ? void 0 : Vc[nc];
      if (!rB || !Bc || 0 !== rB.buffer) return null;
      const uc = null !== (Ic = rB.byteOffset) && void 0 !== Ic ? Ic : 0;
      return !zB(uc) || !zB(rB.byteLength) || uc + rB.byteLength > Bc.byteLength ? null : Bc.subarray(uc, uc + rB.byteLength)
    }

    function bB(cB, Bc) {
      var nc, Ic, rB;
      const uc = Vc.m[Bc.type],
        sc = Vc.c[Bc.componentType];
      if (!uc || !sc || !Number.isInteger(Bc.count) || Bc.count < 0) return !1;
      if (void 0 === Bc.bufferView) return !0;
      const Mc = null === (nc = cB.bufferViews) || void 0 === nc ? void 0 : nc[Bc.bufferView],
        Pc = null !== (Ic = Bc.byteOffset) && void 0 !== Ic ? Ic : 0;
      if (!Mc || !zB(Pc) || Pc % sc !== 0) return !1;
      const qB = uc * sc,
        Oc = null !== (rB = Mc.byteStride) && void 0 !== rB ? rB : qB;
      if (Oc < qB) return !1;
      return (0 === Bc.count ? 0 : Pc + Oc * (Bc.count - 1) + qB) <= Mc.byteLength
    }

    function Zc(cB) {
      return cB > Ic.fileBytes ? `is ${(cB/uc).toFixed(1)} MiB (the limit is ${Ic.fileBytes/uc} MiB)` : null
    }

    function Qc(cB, Bc) {
      try {
        return function(cB, Bc) {
          var nc, uc, Oc, tB, zB, Zc, Qc, Cc, vB, Dc, Nc, Ec, oc, Wc, wc, kB, Xc;
          const Hc = Array.isArray(cB.extensionsUsed) && cB.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(cB, Bc) {
              var nc, Vc;
              const {
                items: Ic,
                perFile: uc,
                surfaces: sc,
                few: Mc,
                bounds: Pc,
                attributeMembers: qB
              } = rB;
              if (pc(cB.extensionsRequired, Mc) || pc(cB.animations, 1 / 0) || pc(cB.skins, 1 / 0)) return !0;
              if (null !== (nc = cB.animations) && void 0 !== nc && nc.length || null !== (Vc = cB.skins) && void 0 !== Vc && Vc.length) return !1;
              if ([
                  [cB.buffers, Mc],
                  [cB.scenes, Mc],
                  [cB.bufferViews, Ic],
                  [cB.accessors, Ic],
                  [cB.nodes, Ic],
                  [cB.meshes, Ic],
                  [cB.materials, sc],
                  [cB.textures, sc],
                  [cB.samplers, sc],
                  [cB.images, sc]
                ].some((cB => {
                  let [Bc, nc] = cB;
                  return pc(Bc, nc)
                }))) return !0;
              for (const rB of null !== (Oc = cB.accessors) && void 0 !== Oc ? Oc : []) {
                var Oc, Tc, fc;
                if (Number.isInteger(rB.count) && (!Number.isSafeInteger(rB.count) || Object.is(rB.count, -0)) || pc(null !== (Tc = rB.min) && void 0 !== Tc ? Tc : void 0, Pc) || pc(null !== (fc = rB.max) && void 0 !== fc ? fc : void 0, Pc)) return !0
              }
              for (const rB of null !== (mB = cB.scenes) && void 0 !== mB ? mB : []) {
                var mB;
                if (pc(rB.nodes, Ic)) return !0
              }
              let ec = 0;
              for (const rB of null !== (tB = cB.nodes) && void 0 !== tB ? tB : []) {
                var tB, Sc, yB;
                if (pc(rB.children, uc)) return !0;
                ec += null !== (Sc = null === (yB = rB.children) || void 0 === yB ? void 0 : yB.length) && void 0 !== Sc ? Sc : 0
              }
              if (ec > uc) return !0;
              let zB = 0;
              for (const rB of null !== (aB = cB.meshes) && void 0 !== aB ? aB : []) {
                var aB;
                if (!Array.isArray(rB.primitives)) return !0;
                if (zB += rB.primitives.length, zB > uc) return !0;
                for (const cB of rB.primitives) {
                  var lc;
                  const nc = Bc ? null === (lc = cB.extensions) || void 0 === lc ? void 0 : lc.KHR_draco_mesh_compression : void 0;
                  if (hc(cB.attributes, qB) || hc(null === nc || void 0 === nc ? void 0 : nc.attributes, qB)) return !0
                }
              }
              return !1
            }(cB, Hc)) return sc;
          const Fc = null === (nc = cB.asset) || void 0 === nc ? void 0 : nc.version;
          if ("string" !== typeof Fc || !/^2\.\d+/.test(Fc)) return `uses glTF version ${null!==Fc&&void 0!==Fc?Fc:"(none)"}`;
          const Jc = null === (uc = cB.asset) || void 0 === uc ? void 0 : uc.minVersion;
          if (void 0 !== Jc && "2.0" !== Jc) return `uses glTF version ${Jc}`;
          for (const Vc of null !== (jB = cB.extensionsRequired) && void 0 !== jB ? jB : []) {
            var jB;
            if (!Pc.has(Vc)) return `requires the glTF extension ${Vc}`
          }
          if (null !== (Oc = cB.animations) && void 0 !== Oc && Oc.length) return "has animations";
          if (null !== (tB = cB.skins) && void 0 !== tB && tB.length) return "uses skins";
          const Rc = null !== (zB = cB.buffers) && void 0 !== zB ? zB : [];
          for (const [Vc, Ic] of Rc.entries()) {
            if (void 0 !== Ic.uri) return Mc;
            if (Vc > 0 || !Bc) return sc
          }
          for (const [Vc, Ic] of(null !== (iB = cB.bufferViews) && void 0 !== iB ? iB : []).entries()) {
            var iB;
            if (!Uc(cB, Bc, Vc) || !gB(Ic)) return sc
          }
          const Kc = null !== (Zc = cB.accessors) && void 0 !== Zc ? Zc : [];
          for (const Vc of Kc) {
            if (void 0 !== Vc.sparse) return "uses sparse accessors";
            const Bc = Number.isInteger(Vc.count) ? Sc(Vc.count, Ic.accessorElements, "elements in an accessor") : null;
            if (Bc) return Bc;
            if (!bB(cB, Vc)) return sc
          }
          const xB = null !== (Qc = cB.scenes) && void 0 !== Qc ? Qc : [];
          if (1 !== xB.length) return `has ${xB.length} scenes`;
          const dc = (0, Vc.u)(cB);
          if (void 0 !== dc && 0 !== dc) return sc;
          const Ac = null !== (Cc = cB.nodes) && void 0 !== Cc ? Cc : [],
            Gc = null !== (vB = cB.meshes) && void 0 !== vB ? vB : [],
            cn = null !== (Dc = cB.materials) && void 0 !== Dc ? Dc : [],
            BB = null !== (Nc = cB.textures) && void 0 !== Nc ? Nc : [],
            nB = null !== (Ec = cB.images) && void 0 !== Ec ? Ec : [],
            VB = null !== (oc = null !== (Wc = null !== (wc = Sc(Ac.length, Ic.nodes, "nodes")) && void 0 !== wc ? wc : Sc(Gc.length, Ic.meshes, "meshes")) && void 0 !== Wc ? Wc : Sc(cn.length, Ic.materials, "materials")) && void 0 !== oc ? oc : Sc(nB.length, Ic.images, "images");
          if (VB) return VB;
          const IB = new Set;
          for (const Vc of Ac)
            for (const cB of null !== (rn = Vc.children) && void 0 !== rn ? rn : []) {
              var rn;
              if (!yB(cB, Ac.length) || IB.has(cB)) return sc;
              IB.add(cB)
            }
          const uB = new Set,
            sB = cB => {
              var Bc;
              return !uB.has(cB) && (uB.add(cB), (null !== (Bc = Ac[cB].children) && void 0 !== Bc ? Bc : []).every(sB))
            };
          for (const Vc of null !== (MB = xB[0].nodes) && void 0 !== MB ? MB : []) {
            var MB;
            if (!yB(Vc, Ac.length) || IB.has(Vc) || !sB(Vc)) return sc
          }
          for (const Vc of Ac) {
            if (void 0 !== Vc.matrix) return "uses node matrices";
            if (void 0 !== Vc.skin) return "uses skins";
            if (void 0 !== Vc.weights) return "uses morph targets";
            if (void 0 !== Vc.mesh && !yB(Vc.mesh, Gc.length)) return sc;
            const cB = [
              [Vc.translation, 3],
              [Vc.rotation, 4],
              [Vc.scale, 3]
            ];
            for (const [Bc, nc] of cB)
              if (void 0 !== Bc && (!Array.isArray(Bc) || Bc.length !== nc || !Bc.every((cB => Number.isFinite(cB))))) return sc
          }
          let PB = -1,
            qn = 0,
            OB = 0,
            TB = null;
          for (const Ic of Gc) {
            if (void 0 !== Ic.weights) return "uses morph targets";
            if (0 === Ic.primitives.length) return sc;
            for (const nc of Ic.primitives) {
              var fB, mn;
              const Ic = null !== (fB = nc.mode) && void 0 !== fB ? fB : 4;
              var eB;
              if (4 !== Ic && 0 !== Ic) return `uses ${null!==(eB=mB[Ic])&&void 0!==eB?eB:`mode ${Ic}`} primitives`;
              if (void 0 !== nc.targets) return "uses morph targets";
              if (void 0 !== nc.material && !yB(nc.material, cn.length)) return sc;
              const rB = Hc ? null === (mn = nc.extensions) || void 0 === mn ? void 0 : mn.KHR_draco_mesh_compression : void 0;
              if (rB) {
                if (4 !== Ic) return "uses Draco-compressed points";
                if (!Uc(cB, Bc, rB.bufferView) || "object" !== typeof rB.attributes) return sc
              }
              const uc = nc.attributes;
              if ("object" !== typeof uc || null === uc) return sc;
              if (void 0 === uc.POSITION) return "has a primitive with no positions";
              if (!yB(uc.POSITION, Kc.length)) return sc;
              const Mc = Kc[uc.POSITION].count;
              for (const [cB, Bc] of Object.entries(uc)) {
                if (!yB(Bc, Kc.length)) return sc;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(cB)) return "uses skins";
                const nc = Kc[Bc],
                  Vc = qB[cB];
                if (Vc && (nc.componentType !== ec || nc.normalized || nc.type !== Vc)) return `stores ${cB} as ${aB(nc)}`;
                const Ic = Tc[cB];
                if (Ic && (nc.type !== Ic.type || !Ic.componentTypes.includes(nc.componentType) || nc.componentType === ec === !!nc.normalized)) return `stores ${cB} as ${aB(nc)}`;
                if (fc.has(cB) && nc.count !== Mc) return "has vertex attributes of different lengths"
              }
              if (rB) {
                if (void 0 === nc.indices) return sc;
                for (const Bc in rB.attributes)
                  if (fc.has(Bc) && void 0 === uc[Bc]) return sc;
                if (void 0 === rB.attributes.POSITION) return sc;
                const cB = yB(nc.indices, Kc.length) ? Kc[nc.indices].count : -1;
                if (0 === cB) return sc;
                if (-1 === PB) PB = rB.bufferView, qn = Mc, OB = cB;
                else {
                  TB ??= new Map([
                    [PB, [qn, OB]]
                  ]);
                  const Bc = TB.get(rB.bufferView);
                  if (Bc && (Bc[0] !== Mc || Bc[1] !== cB)) return sc;
                  TB.set(rB.bufferView, null !== Bc && void 0 !== Bc ? Bc : [Mc, cB])
                }
              }
              let Pc = Mc;
              if (void 0 !== nc.indices) {
                if (!yB(nc.indices, Kc.length)) return sc;
                const cB = Kc[nc.indices];
                if ("SCALAR" !== cB.type) return sc;
                if (5121 === cB.componentType) return "uses 8-bit indices";
                var tn;
                if (5123 !== cB.componentType && 5125 !== cB.componentType) return `stores indices as ${null!==(tn=Vc.e[cB.componentType])&&void 0!==tn?tn:cB.componentType}`;
                if (!rB && void 0 === cB.bufferView) return sc;
                Pc = cB.count
              }
              if (4 === Ic && Pc % 3 !== 0) return sc
            }
          }
          let SB = 0,
            yn = 0,
            zn = 0;
          for (let Vc = 0; Vc < Ac.length; Vc++) {
            const cB = Ac[Vc].mesh;
            if (void 0 !== cB && uB.has(Vc))
              for (const Bc of Gc[cB].primitives) zn++, SB += Kc[Bc.attributes.POSITION].count, void 0 !== Bc.indices && (yn += Kc[Bc.indices].count)
          }
          const pB = null !== (kB = null !== (Xc = Sc(SB, Ic.vertices, "vertices")) && void 0 !== Xc ? Xc : Sc(yn, Ic.indices, "indices")) && void 0 !== kB ? kB : Sc(zn, Ic.primitives, "primitives");
          if (pB) return pB;
          for (const Vc of cn) {
            var hB, an;
            if (void 0 !== Vc.emissiveTexture) return "uses an emissive texture";
            const Bc = null !== (hB = Vc.alphaMode) && void 0 !== hB ? hB : "OPAQUE";
            if ("OPAQUE" !== Bc && "MASK" !== Bc && "BLEND" !== Bc) return sc;
            const nc = null === (an = Vc.pbrMetallicRoughness) || void 0 === an ? void 0 : an.baseColorTexture;
            if (nc) {
              var lB, YB, LB, gn, UB;
              const Bc = null !== (lB = cB.extensionsUsed) && void 0 !== lB && lB.includes("KHR_texture_transform") ? null === (YB = nc.extensions) || void 0 === YB ? void 0 : YB.KHR_texture_transform : void 0;
              if (0 !== (null !== (LB = nc.texCoord) && void 0 !== LB ? LB : 0) || 0 !== (null !== (gn = null === Bc || void 0 === Bc ? void 0 : Bc.texCoord) && void 0 !== gn ? gn : 0)) return "uses a second UV set";
              const Vc = BB[nc.index];
              if (!Vc || !yB(Vc.source, nB.length) || void 0 !== Vc.sampler && !yB(Vc.sampler, null === (UB = cB.samplers) || void 0 === UB ? void 0 : UB.length)) return sc
            }
          }
          for (const Vc of nB) {
            if (void 0 !== Vc.uri) return Mc;
            if (void 0 === Vc.bufferView) return sc;
            const nc = Uc(cB, Bc, Vc.bufferView);
            if (!nc) return sc;
            if ("image/png" !== Vc.mimeType) {
              var bn, ZB, QB;
              return `has ${Lc(null!==(bn=null!==(ZB={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(QB=Vc.mimeType)&&void 0!==QB?QB:""])&&void 0!==ZB?ZB:Vc.mimeType)&&void 0!==bn?bn:"untyped")} image`
            }
            if (!Yc(nc)) return `has ${Lc(lc(nc))} image`;
            const rB = new DataView(nc.buffer, nc.byteOffset, nc.byteLength),
              uc = rB.getUint32(16),
              Pc = rB.getUint32(20);
            if (uc > Ic.imageSide || Pc > Ic.imageSide) return `has a ${uc} \xd7 ${Pc} image (the limit is ${Ic.imageSide})`
          }
          return null
        }(cB, Bc)
      } catch {
        return sc
      }
    }

    function Cc(cB) {
      const Bc = Zc(cB.byteLength);
      if (Bc) return Bc;
      try {
        const {
          json: Bc,
          bin: nc
        } = (0, Vc.x)(cB);
        return Qc(Bc, nc)
      } catch (nc) {
        if (nc instanceof Vc.k) return nc.reason;
        throw nc
      }
    }
  },
  33044: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => fc,
      e: () => Tc,
      f: () => ec,
      i: () => rB,
      k: () => Ic,
      m: () => mB,
      p: () => qB,
      t: () => Oc,
      u: () => uc,
      x: () => Pc
    });
    var Vc = nc(33048);
    class Ic extends Error {
      constructor(cB) {
        super(`GLB refused: it ${cB}`), this.reason = cB, this.name = "GlbRefused"
      }
    }
    class rB extends Error {
      constructor(cB) {
        super(cB), this.name = "GlbError"
      }
    }

    function uc(cB) {
      return Reflect.get(cB, "scene")
    }
    const sc = 5130562,
      Mc = "is not a binary glTF 2.0 file";

    function Pc(cB) {
      var Bc;
      const nc = cB instanceof Uint8Array ? cB : new Uint8Array(cB),
        rB = (0, Vc.h)(nc);
      if (null === rB) throw new Ic(Mc);
      const uc = rB.json,
        {
          jsonEnd: Pc,
          length: qB
        } = rB,
        Oc = new DataView(nc.buffer, nc.byteOffset, nc.byteLength);
      let Tc = -1,
        fc = 0;
      for (let tB = Pc; tB < qB;) {
        if (tB + 8 > qB) throw new Ic(Mc);
        const cB = Oc.getUint32(tB, !0),
          Bc = Oc.getUint32(tB + 4, !0);
        if (tB + 8 + cB > qB || Bc === Vc.d || Bc === sc && -1 !== Tc) throw new Ic(Mc);
        Bc === sc && (Tc = tB + 8, fc = cB), tB += 8 + cB
      }
      let mB = null;
      const ec = null === (Bc = uc.buffers) || void 0 === Bc ? void 0 : Bc[0];
      if (-1 !== Tc && ec && void 0 === ec.uri) {
        if (!(ec.byteLength >= 0) || ec.byteLength > fc) throw new Ic(Mc);
        mB = new Uint8Array(nc.buffer, nc.byteOffset + Tc, ec.byteLength)
      }
      return {
        json: uc,
        bin: mB,
        fileBytes: nc.byteLength
      }
    }

    function qB(cB) {
      const Bc = cB.slice(cB.indexOf(",") + 1),
        nc = Uint8Array.fromBase64;
      if (nc) return nc(Bc).buffer;
      const Vc = atob(Bc),
        Ic = new Uint8Array(Vc.length);
      for (let rB = 0; rB < Vc.length; rB++) Ic[rB] = Vc.charCodeAt(rB);
      return Ic.buffer
    }
    async function Oc(cB) {
      if (cB.startsWith("data:")) return qB(cB);
      const Bc = await fetch(cB);
      if (!Bc.ok) throw new rB(`fetching ${cB} failed: ${Bc.status} ${Bc.statusText}`);
      return await Bc.arrayBuffer()
    }
    const Tc = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      fc = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      mB = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      ec = [
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
  33048: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic,
      h: () => rB,
      l: () => uc
    });
    const Vc = 1179937895,
      Ic = 1313821514;

    function rB(cB) {
      const Bc = new DataView(cB.buffer, cB.byteOffset, cB.byteLength);
      if (cB.byteLength < 20 || Bc.getUint32(0, !0) !== Vc || 2 !== Bc.getUint32(4, !0)) return null;
      const nc = Math.min(Bc.getUint32(8, !0), cB.byteLength),
        rB = Bc.getUint32(12, !0);
      if (Bc.getUint32(16, !0) !== Ic || 20 + rB > nc) return null;
      let uc;
      try {
        uc = JSON.parse((new TextDecoder).decode(cB.subarray(20, 20 + rB)))
      } catch {
        return null
      }
      return "object" === typeof uc && null !== uc ? {
        json: uc,
        jsonEnd: 20 + rB,
        length: nc
      } : null
    }

    function uc(cB) {
      var Bc;
      const nc = null === (Bc = rB(cB)) || void 0 === Bc ? void 0 : Bc.json;
      if (void 0 === nc || !Array.isArray(nc.extensionsUsed) || !nc.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Vc = nc.meshes;
      return Array.isArray(Vc) && Vc.some((cB => {
        const Bc = null === cB || void 0 === cB ? void 0 : cB.primitives;
        return Array.isArray(Bc) && Bc.some((cB => {
          const Bc = null === cB || void 0 === cB ? void 0 : cB.extensions;
          return null != (null === Bc || void 0 === Bc ? void 0 : Bc.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);