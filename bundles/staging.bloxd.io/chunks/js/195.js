export const id = 195;
export const ids = [195];
export const modules = {
  8995: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Db,
      e: () => Pb,
      g: () => yb
    });
    var kb = sb(8999);
    const Wb = {
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
      ab = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      Tb = 1048576,
      Ub = "is not a binary glTF 2.0 file",
      Ib = "loads data from outside the file",
      Hb = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      fb = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      Mb = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      Xb = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: Mb,
        TEXCOORD_2: Mb,
        TEXCOORD_3: Mb,
        TEXCOORD_4: Mb,
        TEXCOORD_5: Mb
      },
      nb = new Set(kb.j.map((bb => {
        let [cb] = bb;
        return cb
      }))),
      mb = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      lb = 5126;

    function Qb(bb) {
      return bb.toLocaleString("en-US")
    }

    function eb(bb, cb, sb) {
      return bb > cb ? `has ${Qb(bb)} ${sb} (the limit is ${Qb(cb)})` : null
    }

    function Cb(bb, cb) {
      return Number.isInteger(bb) && bb >= 0 && bb < (null !== cb && void 0 !== cb ? cb : 0)
    }

    function Nb(bb) {
      return Number.isInteger(bb) && bb >= 0
    }

    function Vb(bb, cb) {
      return void 0 !== bb && (!Array.isArray(bb) || bb.length > cb)
    }

    function Lb(bb, cb) {
      return "object" === typeof bb && null !== bb && Object.keys(bb).length > cb
    }

    function ub(bb) {
      var cb;
      return `${bb.normalized?"normalized ":""}${null!==(cb=kb.g[bb.componentType])&&void 0!==cb?cb:bb.componentType} ${bb.type}`
    }

    function Yb(bb) {
      const cb = cb => {
        var sb;
        return null !== (sb = bb[cb]) && void 0 !== sb ? sb : -1
      };
      return 255 === cb(0) && 216 === cb(1) ? "JPEG" : 82 === cb(0) && 73 === cb(1) && 87 === cb(8) && 69 === cb(9) ? "WebP" : 171 === cb(0) && 75 === cb(1) && 84 === cb(2) && 88 === cb(3) ? "KTX2" : "non-PNG"
    }

    function hb(bb) {
      return bb.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((cb, sb) => bb[sb] === cb)) && 73 === bb[12] && 72 === bb[13] && 68 === bb[14] && 82 === bb[15]
    }

    function Jb(bb) {
      return /^[aeiou]/i.test(bb) ? `an ${bb}` : `a ${bb}`
    }

    function gb(bb) {
      const cb = bb.byteStride;
      return void 0 === cb || Number.isInteger(cb) && cb >= 4 && cb <= 252 && cb % 4 === 0
    }

    function Bb(bb, cb, sb) {
      var kb, Wb;
      const ab = null === (kb = bb.bufferViews) || void 0 === kb ? void 0 : kb[sb];
      if (!ab || !cb || 0 !== ab.buffer) return null;
      const Tb = null !== (Wb = ab.byteOffset) && void 0 !== Wb ? Wb : 0;
      return !Nb(Tb) || !Nb(ab.byteLength) || Tb + ab.byteLength > cb.byteLength ? null : cb.subarray(Tb, Tb + ab.byteLength)
    }

    function tb(bb, cb) {
      var sb, Wb, ab;
      const Tb = kb.r[cb.type],
        Ub = kb.d[cb.componentType];
      if (!Tb || !Ub || !Number.isInteger(cb.count) || cb.count < 0) return !1;
      if (void 0 === cb.bufferView) return !0;
      const Ib = null === (sb = bb.bufferViews) || void 0 === sb ? void 0 : sb[cb.bufferView],
        Hb = null !== (Wb = cb.byteOffset) && void 0 !== Wb ? Wb : 0;
      if (!Ib || !Nb(Hb) || Hb % Ub !== 0) return !1;
      const fb = Tb * Ub,
        Mb = null !== (ab = Ib.byteStride) && void 0 !== ab ? ab : fb;
      if (Mb < fb) return !1;
      return (0 === cb.count ? 0 : Hb + Mb * (cb.count - 1) + fb) <= Ib.byteLength
    }

    function yb(bb) {
      return bb > Wb.fileBytes ? `is ${(bb/Tb).toFixed(1)} MiB (the limit is ${Wb.fileBytes/Tb} MiB)` : null
    }

    function Pb(bb, cb) {
      try {
        return function(bb, cb) {
          var sb, Tb, Mb, Qb, Nb, yb, Pb, Db, Eb, ib, Ob, Gb, Kb, Zb, zb, qb, db;
          const Ab = Array.isArray(bb.extensionsUsed) && bb.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(bb, cb) {
              var sb, kb;
              const {
                items: Wb,
                perFile: Tb,
                surfaces: Ub,
                few: Ib,
                bounds: Hb,
                attributeMembers: fb
              } = ab;
              if (Vb(bb.extensionsRequired, Ib) || Vb(bb.animations, 1 / 0) || Vb(bb.skins, 1 / 0)) return !0;
              if (null !== (sb = bb.animations) && void 0 !== sb && sb.length || null !== (kb = bb.skins) && void 0 !== kb && kb.length) return !1;
              if ([
                  [bb.buffers, Ib],
                  [bb.scenes, Ib],
                  [bb.bufferViews, Wb],
                  [bb.accessors, Wb],
                  [bb.nodes, Wb],
                  [bb.meshes, Wb],
                  [bb.materials, Ub],
                  [bb.textures, Ub],
                  [bb.samplers, Ub],
                  [bb.images, Ub]
                ].some((bb => {
                  let [cb, sb] = bb;
                  return Vb(cb, sb)
                }))) return !0;
              for (const ab of null !== (Mb = bb.accessors) && void 0 !== Mb ? Mb : []) {
                var Mb, Xb, nb;
                if (Number.isInteger(ab.count) && (!Number.isSafeInteger(ab.count) || Object.is(ab.count, -0)) || Vb(null !== (Xb = ab.min) && void 0 !== Xb ? Xb : void 0, Hb) || Vb(null !== (nb = ab.max) && void 0 !== nb ? nb : void 0, Hb)) return !0
              }
              for (const ab of null !== (mb = bb.scenes) && void 0 !== mb ? mb : []) {
                var mb;
                if (Vb(ab.nodes, Wb)) return !0
              }
              let lb = 0;
              for (const ab of null !== (Qb = bb.nodes) && void 0 !== Qb ? Qb : []) {
                var Qb, eb, Cb;
                if (Vb(ab.children, Tb)) return !0;
                lb += null !== (eb = null === (Cb = ab.children) || void 0 === Cb ? void 0 : Cb.length) && void 0 !== eb ? eb : 0
              }
              if (lb > Tb) return !0;
              let Nb = 0;
              for (const ab of null !== (ub = bb.meshes) && void 0 !== ub ? ub : []) {
                var ub;
                if (!Array.isArray(ab.primitives)) return !0;
                if (Nb += ab.primitives.length, Nb > Tb) return !0;
                for (const bb of ab.primitives) {
                  var Yb;
                  const sb = cb ? null === (Yb = bb.extensions) || void 0 === Yb ? void 0 : Yb.KHR_draco_mesh_compression : void 0;
                  if (Lb(bb.attributes, fb) || Lb(null === sb || void 0 === sb ? void 0 : sb.attributes, fb)) return !0
                }
              }
              return !1
            }(bb, Ab)) return Ub;
          const wb = null === (sb = bb.asset) || void 0 === sb ? void 0 : sb.version;
          if ("string" !== typeof wb || !/^2\.\d+/.test(wb)) return `uses glTF version ${null!==wb&&void 0!==wb?wb:"(none)"}`;
          const rb = null === (Tb = bb.asset) || void 0 === Tb ? void 0 : Tb.minVersion;
          if (void 0 !== rb && "2.0" !== rb) return `uses glTF version ${rb}`;
          for (const kb of null !== (ob = bb.extensionsRequired) && void 0 !== ob ? ob : []) {
            var ob;
            if (!Hb.has(kb)) return `requires the glTF extension ${kb}`
          }
          if (null !== (Mb = bb.animations) && void 0 !== Mb && Mb.length) return "has animations";
          if (null !== (Qb = bb.skins) && void 0 !== Qb && Qb.length) return "uses skins";
          const Sb = null !== (Nb = bb.buffers) && void 0 !== Nb ? Nb : [];
          for (const [kb, Wb] of Sb.entries()) {
            if (void 0 !== Wb.uri) return Ib;
            if (kb > 0 || !cb) return Ub
          }
          for (const [kb, Wb] of(null !== (Rb = bb.bufferViews) && void 0 !== Rb ? Rb : []).entries()) {
            var Rb;
            if (!Bb(bb, cb, kb) || !gb(Wb)) return Ub
          }
          const vb = null !== (yb = bb.accessors) && void 0 !== yb ? yb : [];
          for (const kb of vb) {
            if (void 0 !== kb.sparse) return "uses sparse accessors";
            const cb = Number.isInteger(kb.count) ? eb(kb.count, Wb.accessorElements, "elements in an accessor") : null;
            if (cb) return cb;
            if (!tb(bb, kb)) return Ub
          }
          const Fb = null !== (Pb = bb.scenes) && void 0 !== Pb ? Pb : [];
          if (1 !== Fb.length) return `has ${Fb.length} scenes`;
          const xb = (0, kb.y)(bb);
          if (void 0 !== xb && 0 !== xb) return Ub;
          const jb = null !== (Db = bb.nodes) && void 0 !== Db ? Db : [],
            pb = null !== (Eb = bb.meshes) && void 0 !== Eb ? Eb : [],
            bc = null !== (ib = bb.materials) && void 0 !== ib ? ib : [],
            cc = null !== (Ob = bb.textures) && void 0 !== Ob ? Ob : [],
            sc = null !== (Gb = bb.images) && void 0 !== Gb ? Gb : [],
            kc = null !== (Kb = null !== (Zb = null !== (zb = eb(jb.length, Wb.nodes, "nodes")) && void 0 !== zb ? zb : eb(pb.length, Wb.meshes, "meshes")) && void 0 !== Zb ? Zb : eb(bc.length, Wb.materials, "materials")) && void 0 !== Kb ? Kb : eb(sc.length, Wb.images, "images");
          if (kc) return kc;
          const Wc = new Set;
          for (const kb of jb)
            for (const bb of null !== (ac = kb.children) && void 0 !== ac ? ac : []) {
              var ac;
              if (!Cb(bb, jb.length) || Wc.has(bb)) return Ub;
              Wc.add(bb)
            }
          const Tc = new Set,
            Uc = bb => {
              var cb;
              return !Tc.has(bb) && (Tc.add(bb), (null !== (cb = jb[bb].children) && void 0 !== cb ? cb : []).every(Uc))
            };
          for (const kb of null !== (Ic = Fb[0].nodes) && void 0 !== Ic ? Ic : []) {
            var Ic;
            if (!Cb(kb, jb.length) || Wc.has(kb) || !Uc(kb)) return Ub
          }
          for (const kb of jb) {
            if (void 0 !== kb.matrix) return "uses node matrices";
            if (void 0 !== kb.skin) return "uses skins";
            if (void 0 !== kb.weights) return "uses morph targets";
            if (void 0 !== kb.mesh && !Cb(kb.mesh, pb.length)) return Ub;
            const bb = [
              [kb.translation, 3],
              [kb.rotation, 4],
              [kb.scale, 3]
            ];
            for (const [cb, sb] of bb)
              if (void 0 !== cb && (!Array.isArray(cb) || cb.length !== sb || !cb.every((bb => Number.isFinite(bb))))) return Ub
          }
          let Hc = -1,
            fc = 0,
            Mc = 0,
            Xc = null;
          for (const Wb of pb) {
            if (void 0 !== Wb.weights) return "uses morph targets";
            if (0 === Wb.primitives.length) return Ub;
            for (const sb of Wb.primitives) {
              var nc, mc;
              const Wb = null !== (nc = sb.mode) && void 0 !== nc ? nc : 4;
              var lc;
              if (4 !== Wb && 0 !== Wb) return `uses ${null!==(lc=mb[Wb])&&void 0!==lc?lc:`mode ${Wb}`} primitives`;
              if (void 0 !== sb.targets) return "uses morph targets";
              if (void 0 !== sb.material && !Cb(sb.material, bc.length)) return Ub;
              const ab = Ab ? null === (mc = sb.extensions) || void 0 === mc ? void 0 : mc.KHR_draco_mesh_compression : void 0;
              if (ab) {
                if (4 !== Wb) return "uses Draco-compressed points";
                if (!Bb(bb, cb, ab.bufferView) || "object" !== typeof ab.attributes) return Ub
              }
              const Tb = sb.attributes;
              if ("object" !== typeof Tb || null === Tb) return Ub;
              if (void 0 === Tb.POSITION) return "has a primitive with no positions";
              if (!Cb(Tb.POSITION, vb.length)) return Ub;
              const Ib = vb[Tb.POSITION].count;
              for (const [bb, cb] of Object.entries(Tb)) {
                if (!Cb(cb, vb.length)) return Ub;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(bb)) return "uses skins";
                const sb = vb[cb],
                  kb = fb[bb];
                if (kb && (sb.componentType !== lb || sb.normalized || sb.type !== kb)) return `stores ${bb} as ${ub(sb)}`;
                const Wb = Xb[bb];
                if (Wb && (sb.type !== Wb.type || !Wb.componentTypes.includes(sb.componentType) || sb.componentType === lb === !!sb.normalized)) return `stores ${bb} as ${ub(sb)}`;
                if (nb.has(bb) && sb.count !== Ib) return "has vertex attributes of different lengths"
              }
              if (ab) {
                if (void 0 === sb.indices) return Ub;
                for (const cb in ab.attributes)
                  if (nb.has(cb) && void 0 === Tb[cb]) return Ub;
                if (void 0 === ab.attributes.POSITION) return Ub;
                const bb = Cb(sb.indices, vb.length) ? vb[sb.indices].count : -1;
                if (0 === bb) return Ub;
                if (-1 === Hc) Hc = ab.bufferView, fc = Ib, Mc = bb;
                else {
                  Xc ??= new Map([
                    [Hc, [fc, Mc]]
                  ]);
                  const cb = Xc.get(ab.bufferView);
                  if (cb && (cb[0] !== Ib || cb[1] !== bb)) return Ub;
                  Xc.set(ab.bufferView, null !== cb && void 0 !== cb ? cb : [Ib, bb])
                }
              }
              let Hb = Ib;
              if (void 0 !== sb.indices) {
                if (!Cb(sb.indices, vb.length)) return Ub;
                const bb = vb[sb.indices];
                if ("SCALAR" !== bb.type) return Ub;
                if (5121 === bb.componentType) return "uses 8-bit indices";
                var Qc;
                if (5123 !== bb.componentType && 5125 !== bb.componentType) return `stores indices as ${null!==(Qc=kb.g[bb.componentType])&&void 0!==Qc?Qc:bb.componentType}`;
                if (!ab && void 0 === bb.bufferView) return Ub;
                Hb = bb.count
              }
              if (4 === Wb && Hb % 3 !== 0) return Ub
            }
          }
          let ec = 0,
            Cc = 0,
            Nc = 0;
          for (let kb = 0; kb < jb.length; kb++) {
            const bb = jb[kb].mesh;
            if (void 0 !== bb && Tc.has(kb))
              for (const cb of pb[bb].primitives) Nc++, ec += vb[cb.attributes.POSITION].count, void 0 !== cb.indices && (Cc += vb[cb.indices].count)
          }
          const Vc = null !== (qb = null !== (db = eb(ec, Wb.vertices, "vertices")) && void 0 !== db ? db : eb(Cc, Wb.indices, "indices")) && void 0 !== qb ? qb : eb(Nc, Wb.primitives, "primitives");
          if (Vc) return Vc;
          for (const kb of bc) {
            var Lc, uc;
            if (void 0 !== kb.emissiveTexture) return "uses an emissive texture";
            const cb = null !== (Lc = kb.alphaMode) && void 0 !== Lc ? Lc : "OPAQUE";
            if ("OPAQUE" !== cb && "MASK" !== cb && "BLEND" !== cb) return Ub;
            const sb = null === (uc = kb.pbrMetallicRoughness) || void 0 === uc ? void 0 : uc.baseColorTexture;
            if (sb) {
              var Yc, hc, Jc, gc, Bc;
              const cb = null !== (Yc = bb.extensionsUsed) && void 0 !== Yc && Yc.includes("KHR_texture_transform") ? null === (hc = sb.extensions) || void 0 === hc ? void 0 : hc.KHR_texture_transform : void 0;
              if (0 !== (null !== (Jc = sb.texCoord) && void 0 !== Jc ? Jc : 0) || 0 !== (null !== (gc = null === cb || void 0 === cb ? void 0 : cb.texCoord) && void 0 !== gc ? gc : 0)) return "uses a second UV set";
              const kb = cc[sb.index];
              if (!kb || !Cb(kb.source, sc.length) || void 0 !== kb.sampler && !Cb(kb.sampler, null === (Bc = bb.samplers) || void 0 === Bc ? void 0 : Bc.length)) return Ub
            }
          }
          for (const kb of sc) {
            if (void 0 !== kb.uri) return Ib;
            if (void 0 === kb.bufferView) return Ub;
            const sb = Bb(bb, cb, kb.bufferView);
            if (!sb) return Ub;
            if ("image/png" !== kb.mimeType) {
              var tc, yc, Pc;
              return `has ${Jb(null!==(tc=null!==(yc={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(Pc=kb.mimeType)&&void 0!==Pc?Pc:""])&&void 0!==yc?yc:kb.mimeType)&&void 0!==tc?tc:"untyped")} image`
            }
            if (!hb(sb)) return `has ${Jb(Yb(sb))} image`;
            const ab = new DataView(sb.buffer, sb.byteOffset, sb.byteLength),
              Tb = ab.getUint32(16),
              Hb = ab.getUint32(20);
            if (Tb > Wb.imageSide || Hb > Wb.imageSide) return `has a ${Tb} \xd7 ${Hb} image (the limit is ${Wb.imageSide})`
          }
          return null
        }(bb, cb)
      } catch {
        return Ub
      }
    }

    function Db(bb) {
      const cb = yb(bb.byteLength);
      if (cb) return cb;
      try {
        const {
          json: cb,
          bin: sb
        } = (0, kb.z)(bb);
        return Pb(cb, sb)
      } catch (sb) {
        if (sb instanceof kb.n) return sb.reason;
        throw sb
      }
    }
  },
  8999: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => nb,
      g: () => Xb,
      j: () => lb,
      k: () => ab,
      n: () => Wb,
      r: () => mb,
      u: () => fb,
      x: () => Mb,
      y: () => Tb,
      z: () => Hb
    });
    var kb = sb(9002);
    class Wb extends Error {
      constructor(bb) {
        super(`GLB refused: it ${bb}`), this.reason = bb, this.name = "GlbRefused"
      }
    }
    class ab extends Error {
      constructor(bb) {
        super(bb), this.name = "GlbError"
      }
    }

    function Tb(bb) {
      return Reflect.get(bb, "scene")
    }
    const Ub = 5130562,
      Ib = "is not a binary glTF 2.0 file";

    function Hb(bb) {
      var cb;
      const sb = bb instanceof Uint8Array ? bb : new Uint8Array(bb),
        ab = (0, kb.h)(sb);
      if (null === ab) throw new Wb(Ib);
      const Tb = ab.json,
        {
          jsonEnd: Hb,
          length: fb
        } = ab,
        Mb = new DataView(sb.buffer, sb.byteOffset, sb.byteLength);
      let Xb = -1,
        nb = 0;
      for (let Qb = Hb; Qb < fb;) {
        if (Qb + 8 > fb) throw new Wb(Ib);
        const bb = Mb.getUint32(Qb, !0),
          cb = Mb.getUint32(Qb + 4, !0);
        if (Qb + 8 + bb > fb || cb === kb.e || cb === Ub && -1 !== Xb) throw new Wb(Ib);
        cb === Ub && (Xb = Qb + 8, nb = bb), Qb += 8 + bb
      }
      let mb = null;
      const lb = null === (cb = Tb.buffers) || void 0 === cb ? void 0 : cb[0];
      if (-1 !== Xb && lb && void 0 === lb.uri) {
        if (!(lb.byteLength >= 0) || lb.byteLength > nb) throw new Wb(Ib);
        mb = new Uint8Array(sb.buffer, sb.byteOffset + Xb, lb.byteLength)
      }
      return {
        json: Tb,
        bin: mb,
        fileBytes: sb.byteLength
      }
    }

    function fb(bb) {
      const cb = bb.slice(bb.indexOf(",") + 1),
        sb = Uint8Array.fromBase64;
      if (sb) return sb(cb).buffer;
      const kb = atob(cb),
        Wb = new Uint8Array(kb.length);
      for (let ab = 0; ab < kb.length; ab++) Wb[ab] = kb.charCodeAt(ab);
      return Wb.buffer
    }
    async function Mb(bb) {
      if (bb.startsWith("data:")) return fb(bb);
      const cb = await fetch(bb);
      if (!cb.ok) throw new ab(`fetching ${bb} failed: ${cb.status} ${cb.statusText}`);
      return await cb.arrayBuffer()
    }
    const Xb = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      nb = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      mb = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      lb = [
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
  9002: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      h: () => ab,
      i: () => Tb
    });
    const kb = 1179937895,
      Wb = 1313821514;

    function ab(bb) {
      const cb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      if (bb.byteLength < 20 || cb.getUint32(0, !0) !== kb || 2 !== cb.getUint32(4, !0)) return null;
      const sb = Math.min(cb.getUint32(8, !0), bb.byteLength),
        ab = cb.getUint32(12, !0);
      if (cb.getUint32(16, !0) !== Wb || 20 + ab > sb) return null;
      let Tb;
      try {
        Tb = JSON.parse((new TextDecoder).decode(bb.subarray(20, 20 + ab)))
      } catch {
        return null
      }
      return "object" === typeof Tb && null !== Tb ? {
        json: Tb,
        jsonEnd: 20 + ab,
        length: sb
      } : null
    }

    function Tb(bb) {
      var cb;
      const sb = null === (cb = ab(bb)) || void 0 === cb ? void 0 : cb.json;
      if (void 0 === sb || !Array.isArray(sb.extensionsUsed) || !sb.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const kb = sb.meshes;
      return Array.isArray(kb) && kb.some((bb => {
        const cb = null === bb || void 0 === bb ? void 0 : bb.primitives;
        return Array.isArray(cb) && cb.some((bb => {
          const cb = null === bb || void 0 === bb ? void 0 : bb.extensions;
          return null != (null === cb || void 0 === cb ? void 0 : cb.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);