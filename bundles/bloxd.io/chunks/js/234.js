export const id = 234;
export const ids = [234];
export const modules = {
  35420: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Zb,
      i: () => Yb,
      m: () => cb
    });
    var eb = Mb(35423);
    const Hb = {
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
      pb = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      Vb = 1048576,
      gb = "is not a binary glTF 2.0 file",
      lb = "loads data from outside the file",
      Lb = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      Ib = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      Ob = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      Ub = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: Ob,
        TEXCOORD_2: Ob,
        TEXCOORD_3: Ob,
        TEXCOORD_4: Ob,
        TEXCOORD_5: Ob
      },
      tb = new Set(eb.i.map((bb => {
        let [wb] = bb;
        return wb
      }))),
      Cb = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      Eb = 5126;

    function Fb(bb) {
      return bb.toLocaleString("en-US")
    }

    function Bb(bb, wb, Mb) {
      return bb > wb ? `has ${Fb(bb)} ${Mb} (the limit is ${Fb(wb)})` : null
    }

    function sb(bb, wb) {
      return Number.isInteger(bb) && bb >= 0 && bb < (null !== wb && void 0 !== wb ? wb : 0)
    }

    function mb(bb) {
      return Number.isInteger(bb) && bb >= 0
    }

    function hb(bb, wb) {
      return void 0 !== bb && (!Array.isArray(bb) || bb.length > wb)
    }

    function zb(bb, wb) {
      return "object" === typeof bb && null !== bb && Object.keys(bb).length > wb
    }

    function Xb(bb) {
      var wb;
      return `${bb.normalized?"normalized ":""}${null!==(wb=eb.e[bb.componentType])&&void 0!==wb?wb:bb.componentType} ${bb.type}`
    }

    function xb(bb) {
      const wb = wb => {
        var Mb;
        return null !== (Mb = bb[wb]) && void 0 !== Mb ? Mb : -1
      };
      return 255 === wb(0) && 216 === wb(1) ? "JPEG" : 82 === wb(0) && 73 === wb(1) && 87 === wb(8) && 69 === wb(9) ? "WebP" : 171 === wb(0) && 75 === wb(1) && 84 === wb(2) && 88 === wb(3) ? "KTX2" : "non-PNG"
    }

    function jb(bb) {
      return bb.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((wb, Mb) => bb[Mb] === wb)) && 73 === bb[12] && 72 === bb[13] && 68 === bb[14] && 82 === bb[15]
    }

    function Kb(bb) {
      return /^[aeiou]/i.test(bb) ? `an ${bb}` : `a ${bb}`
    }

    function rb(bb) {
      const wb = bb.byteStride;
      return void 0 === wb || Number.isInteger(wb) && wb >= 4 && wb <= 252 && wb % 4 === 0
    }

    function Rb(bb, wb, Mb) {
      var eb, Hb;
      const pb = null === (eb = bb.bufferViews) || void 0 === eb ? void 0 : eb[Mb];
      if (!pb || !wb || 0 !== pb.buffer) return null;
      const Vb = null !== (Hb = pb.byteOffset) && void 0 !== Hb ? Hb : 0;
      return !mb(Vb) || !mb(pb.byteLength) || Vb + pb.byteLength > wb.byteLength ? null : wb.subarray(Vb, Vb + pb.byteLength)
    }

    function Db(bb, wb) {
      var Mb, Hb, pb;
      const Vb = eb.r[wb.type],
        gb = eb.d[wb.componentType];
      if (!Vb || !gb || !Number.isInteger(wb.count) || wb.count < 0) return !1;
      if (void 0 === wb.bufferView) return !0;
      const lb = null === (Mb = bb.bufferViews) || void 0 === Mb ? void 0 : Mb[wb.bufferView],
        Lb = null !== (Hb = wb.byteOffset) && void 0 !== Hb ? Hb : 0;
      if (!lb || !mb(Lb) || Lb % gb !== 0) return !1;
      const Ib = Vb * gb,
        Ob = null !== (pb = lb.byteStride) && void 0 !== pb ? pb : Ib;
      if (Ob < Ib) return !1;
      return (0 === wb.count ? 0 : Lb + Ob * (wb.count - 1) + Ib) <= lb.byteLength
    }

    function cb(bb) {
      return bb > Hb.fileBytes ? `is ${(bb/Vb).toFixed(1)} MiB (the limit is ${Hb.fileBytes/Vb} MiB)` : null
    }

    function Yb(bb, wb) {
      try {
        return function(bb, wb) {
          var Mb, Vb, Ob, Fb, mb, cb, Yb, Zb, fb, Ab, Wb, Jb, Sb, Nb, vb, Qb, Gb;
          const qb = Array.isArray(bb.extensionsUsed) && bb.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(bb, wb) {
              var Mb, eb;
              const {
                items: Hb,
                perFile: Vb,
                surfaces: gb,
                few: lb,
                bounds: Lb,
                attributeMembers: Ib
              } = pb;
              if (hb(bb.extensionsRequired, lb) || hb(bb.animations, 1 / 0) || hb(bb.skins, 1 / 0)) return !0;
              if (null !== (Mb = bb.animations) && void 0 !== Mb && Mb.length || null !== (eb = bb.skins) && void 0 !== eb && eb.length) return !1;
              if ([
                  [bb.buffers, lb],
                  [bb.scenes, lb],
                  [bb.bufferViews, Hb],
                  [bb.accessors, Hb],
                  [bb.nodes, Hb],
                  [bb.meshes, Hb],
                  [bb.materials, gb],
                  [bb.textures, gb],
                  [bb.samplers, gb],
                  [bb.images, gb]
                ].some((bb => {
                  let [wb, Mb] = bb;
                  return hb(wb, Mb)
                }))) return !0;
              for (const pb of null !== (Ob = bb.accessors) && void 0 !== Ob ? Ob : []) {
                var Ob, Ub, tb;
                if (Number.isInteger(pb.count) && (!Number.isSafeInteger(pb.count) || Object.is(pb.count, -0)) || hb(null !== (Ub = pb.min) && void 0 !== Ub ? Ub : void 0, Lb) || hb(null !== (tb = pb.max) && void 0 !== tb ? tb : void 0, Lb)) return !0
              }
              for (const pb of null !== (Cb = bb.scenes) && void 0 !== Cb ? Cb : []) {
                var Cb;
                if (hb(pb.nodes, Hb)) return !0
              }
              let Eb = 0;
              for (const pb of null !== (Fb = bb.nodes) && void 0 !== Fb ? Fb : []) {
                var Fb, Bb, sb;
                if (hb(pb.children, Vb)) return !0;
                Eb += null !== (Bb = null === (sb = pb.children) || void 0 === sb ? void 0 : sb.length) && void 0 !== Bb ? Bb : 0
              }
              if (Eb > Vb) return !0;
              let mb = 0;
              for (const pb of null !== (Xb = bb.meshes) && void 0 !== Xb ? Xb : []) {
                var Xb;
                if (!Array.isArray(pb.primitives)) return !0;
                if (mb += pb.primitives.length, mb > Vb) return !0;
                for (const bb of pb.primitives) {
                  var xb;
                  const Mb = wb ? null === (xb = bb.extensions) || void 0 === xb ? void 0 : xb.KHR_draco_mesh_compression : void 0;
                  if (zb(bb.attributes, Ib) || zb(null === Mb || void 0 === Mb ? void 0 : Mb.attributes, Ib)) return !0
                }
              }
              return !1
            }(bb, qb)) return gb;
          const ab = null === (Mb = bb.asset) || void 0 === Mb ? void 0 : Mb.version;
          if ("string" !== typeof ab || !/^2\.\d+/.test(ab)) return `uses glTF version ${null!==ab&&void 0!==ab?ab:"(none)"}`;
          const ib = null === (Vb = bb.asset) || void 0 === Vb ? void 0 : Vb.minVersion;
          if (void 0 !== ib && "2.0" !== ib) return `uses glTF version ${ib}`;
          for (const eb of null !== (ub = bb.extensionsRequired) && void 0 !== ub ? ub : []) {
            var ub;
            if (!Lb.has(eb)) return `requires the glTF extension ${eb}`
          }
          if (null !== (Ob = bb.animations) && void 0 !== Ob && Ob.length) return "has animations";
          if (null !== (Fb = bb.skins) && void 0 !== Fb && Fb.length) return "uses skins";
          const db = null !== (mb = bb.buffers) && void 0 !== mb ? mb : [];
          for (const [eb, Hb] of db.entries()) {
            if (void 0 !== Hb.uri) return lb;
            if (eb > 0 || !wb) return gb
          }
          for (const [eb, Hb] of(null !== (Pb = bb.bufferViews) && void 0 !== Pb ? Pb : []).entries()) {
            var Pb;
            if (!Rb(bb, wb, eb) || !rb(Hb)) return gb
          }
          const nb = null !== (cb = bb.accessors) && void 0 !== cb ? cb : [];
          for (const eb of nb) {
            if (void 0 !== eb.sparse) return "uses sparse accessors";
            const wb = Number.isInteger(eb.count) ? Bb(eb.count, Hb.accessorElements, "elements in an accessor") : null;
            if (wb) return wb;
            if (!Db(bb, eb)) return gb
          }
          const yb = null !== (Yb = bb.scenes) && void 0 !== Yb ? Yb : [];
          if (1 !== yb.length) return `has ${yb.length} scenes`;
          const ob = (0, eb.B)(bb);
          if (void 0 !== ob && 0 !== ob) return gb;
          const Tb = null !== (Zb = bb.nodes) && void 0 !== Zb ? Zb : [],
            kb = null !== (fb = bb.meshes) && void 0 !== fb ? fb : [],
            bw = null !== (Ab = bb.materials) && void 0 !== Ab ? Ab : [],
            ww = null !== (Wb = bb.textures) && void 0 !== Wb ? Wb : [],
            Mw = null !== (Jb = bb.images) && void 0 !== Jb ? Jb : [],
            ew = null !== (Sb = null !== (Nb = null !== (vb = Bb(Tb.length, Hb.nodes, "nodes")) && void 0 !== vb ? vb : Bb(kb.length, Hb.meshes, "meshes")) && void 0 !== Nb ? Nb : Bb(bw.length, Hb.materials, "materials")) && void 0 !== Sb ? Sb : Bb(Mw.length, Hb.images, "images");
          if (ew) return ew;
          const Hw = new Set;
          for (const eb of Tb)
            for (const bb of null !== (pw = eb.children) && void 0 !== pw ? pw : []) {
              var pw;
              if (!sb(bb, Tb.length) || Hw.has(bb)) return gb;
              Hw.add(bb)
            }
          const Vw = new Set,
            gw = bb => {
              var wb;
              return !Vw.has(bb) && (Vw.add(bb), (null !== (wb = Tb[bb].children) && void 0 !== wb ? wb : []).every(gw))
            };
          for (const eb of null !== (lw = yb[0].nodes) && void 0 !== lw ? lw : []) {
            var lw;
            if (!sb(eb, Tb.length) || Hw.has(eb) || !gw(eb)) return gb
          }
          for (const eb of Tb) {
            if (void 0 !== eb.matrix) return "uses node matrices";
            if (void 0 !== eb.skin) return "uses skins";
            if (void 0 !== eb.weights) return "uses morph targets";
            if (void 0 !== eb.mesh && !sb(eb.mesh, kb.length)) return gb;
            const bb = [
              [eb.translation, 3],
              [eb.rotation, 4],
              [eb.scale, 3]
            ];
            for (const [wb, Mb] of bb)
              if (void 0 !== wb && (!Array.isArray(wb) || wb.length !== Mb || !wb.every((bb => Number.isFinite(bb))))) return gb
          }
          let Lw = -1,
            Iw = 0,
            Ow = 0,
            Uw = null;
          for (const Hb of kb) {
            if (void 0 !== Hb.weights) return "uses morph targets";
            if (0 === Hb.primitives.length) return gb;
            for (const Mb of Hb.primitives) {
              var tw, Cw;
              const Hb = null !== (tw = Mb.mode) && void 0 !== tw ? tw : 4;
              var Ew;
              if (4 !== Hb && 0 !== Hb) return `uses ${null!==(Ew=Cb[Hb])&&void 0!==Ew?Ew:`mode ${Hb}`} primitives`;
              if (void 0 !== Mb.targets) return "uses morph targets";
              if (void 0 !== Mb.material && !sb(Mb.material, bw.length)) return gb;
              const pb = qb ? null === (Cw = Mb.extensions) || void 0 === Cw ? void 0 : Cw.KHR_draco_mesh_compression : void 0;
              if (pb) {
                if (4 !== Hb) return "uses Draco-compressed points";
                if (!Rb(bb, wb, pb.bufferView) || "object" !== typeof pb.attributes) return gb
              }
              const Vb = Mb.attributes;
              if ("object" !== typeof Vb || null === Vb) return gb;
              if (void 0 === Vb.POSITION) return "has a primitive with no positions";
              if (!sb(Vb.POSITION, nb.length)) return gb;
              const lb = nb[Vb.POSITION].count;
              for (const [bb, wb] of Object.entries(Vb)) {
                if (!sb(wb, nb.length)) return gb;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(bb)) return "uses skins";
                const Mb = nb[wb],
                  eb = Ib[bb];
                if (eb && (Mb.componentType !== Eb || Mb.normalized || Mb.type !== eb)) return `stores ${bb} as ${Xb(Mb)}`;
                const Hb = Ub[bb];
                if (Hb && (Mb.type !== Hb.type || !Hb.componentTypes.includes(Mb.componentType) || Mb.componentType === Eb === !!Mb.normalized)) return `stores ${bb} as ${Xb(Mb)}`;
                if (tb.has(bb) && Mb.count !== lb) return "has vertex attributes of different lengths"
              }
              if (pb) {
                if (void 0 === Mb.indices) return gb;
                for (const wb in pb.attributes)
                  if (tb.has(wb) && void 0 === Vb[wb]) return gb;
                if (void 0 === pb.attributes.POSITION) return gb;
                const bb = sb(Mb.indices, nb.length) ? nb[Mb.indices].count : -1;
                if (0 === bb) return gb;
                if (-1 === Lw) Lw = pb.bufferView, Iw = lb, Ow = bb;
                else {
                  Uw ??= new Map([
                    [Lw, [Iw, Ow]]
                  ]);
                  const wb = Uw.get(pb.bufferView);
                  if (wb && (wb[0] !== lb || wb[1] !== bb)) return gb;
                  Uw.set(pb.bufferView, null !== wb && void 0 !== wb ? wb : [lb, bb])
                }
              }
              let Lb = lb;
              if (void 0 !== Mb.indices) {
                if (!sb(Mb.indices, nb.length)) return gb;
                const bb = nb[Mb.indices];
                if ("SCALAR" !== bb.type) return gb;
                if (5121 === bb.componentType) return "uses 8-bit indices";
                var Fw;
                if (5123 !== bb.componentType && 5125 !== bb.componentType) return `stores indices as ${null!==(Fw=eb.e[bb.componentType])&&void 0!==Fw?Fw:bb.componentType}`;
                if (!pb && void 0 === bb.bufferView) return gb;
                Lb = bb.count
              }
              if (4 === Hb && Lb % 3 !== 0) return gb
            }
          }
          let Bw = 0,
            sw = 0,
            mw = 0;
          for (let eb = 0; eb < Tb.length; eb++) {
            const bb = Tb[eb].mesh;
            if (void 0 !== bb && Vw.has(eb))
              for (const wb of kb[bb].primitives) mw++, Bw += nb[wb.attributes.POSITION].count, void 0 !== wb.indices && (sw += nb[wb.indices].count)
          }
          const hw = null !== (Qb = null !== (Gb = Bb(Bw, Hb.vertices, "vertices")) && void 0 !== Gb ? Gb : Bb(sw, Hb.indices, "indices")) && void 0 !== Qb ? Qb : Bb(mw, Hb.primitives, "primitives");
          if (hw) return hw;
          for (const eb of bw) {
            var zw, Xw;
            if (void 0 !== eb.emissiveTexture) return "uses an emissive texture";
            const wb = null !== (zw = eb.alphaMode) && void 0 !== zw ? zw : "OPAQUE";
            if ("OPAQUE" !== wb && "MASK" !== wb && "BLEND" !== wb) return gb;
            const Mb = null === (Xw = eb.pbrMetallicRoughness) || void 0 === Xw ? void 0 : Xw.baseColorTexture;
            if (Mb) {
              var xw, jw, Kw, rw, Rw;
              const wb = null !== (xw = bb.extensionsUsed) && void 0 !== xw && xw.includes("KHR_texture_transform") ? null === (jw = Mb.extensions) || void 0 === jw ? void 0 : jw.KHR_texture_transform : void 0;
              if (0 !== (null !== (Kw = Mb.texCoord) && void 0 !== Kw ? Kw : 0) || 0 !== (null !== (rw = null === wb || void 0 === wb ? void 0 : wb.texCoord) && void 0 !== rw ? rw : 0)) return "uses a second UV set";
              const eb = ww[Mb.index];
              if (!eb || !sb(eb.source, Mw.length) || void 0 !== eb.sampler && !sb(eb.sampler, null === (Rw = bb.samplers) || void 0 === Rw ? void 0 : Rw.length)) return gb
            }
          }
          for (const eb of Mw) {
            if (void 0 !== eb.uri) return lb;
            if (void 0 === eb.bufferView) return gb;
            const Mb = Rb(bb, wb, eb.bufferView);
            if (!Mb) return gb;
            if ("image/png" !== eb.mimeType) {
              var Dw, Yw, Zw;
              return `has ${Kb(null!==(Dw=null!==(Yw={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(Zw=eb.mimeType)&&void 0!==Zw?Zw:""])&&void 0!==Yw?Yw:eb.mimeType)&&void 0!==Dw?Dw:"untyped")} image`
            }
            if (!jb(Mb)) return `has ${Kb(xb(Mb))} image`;
            const pb = new DataView(Mb.buffer, Mb.byteOffset, Mb.byteLength),
              Vb = pb.getUint32(16),
              Lb = pb.getUint32(20);
            if (Vb > Hb.imageSide || Lb > Hb.imageSide) return `has a ${Vb} \xd7 ${Lb} image (the limit is ${Hb.imageSide})`
          }
          return null
        }(bb, wb)
      } catch {
        return gb
      }
    }

    function Zb(bb) {
      const wb = cb(bb.byteLength);
      if (wb) return wb;
      try {
        const {
          json: wb,
          bin: Mb
        } = (0, eb.C)(bb);
        return Yb(wb, Mb)
      } catch (Mb) {
        if (Mb instanceof eb.n) return Mb.reason;
        throw Mb
      }
    }
  },
  35423: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Cb,
      e: () => tb,
      i: () => Fb,
      m: () => Vb,
      n: () => pb,
      r: () => Eb,
      u: () => Ob,
      y: () => Ub,
      B: () => gb,
      C: () => Ib
    });
    const eb = 1179937895,
      Hb = 1313821514;
    class pb extends Error {
      constructor(bb) {
        super(`GLB refused: it ${bb}`), this.reason = bb, this.name = "GlbRefused"
      }
    }
    class Vb extends Error {
      constructor(bb) {
        super(bb), this.name = "GlbError"
      }
    }

    function gb(bb) {
      return Reflect.get(bb, "scene")
    }
    const lb = 5130562,
      Lb = "is not a binary glTF 2.0 file";

    function Ib(bb) {
      var wb;
      const Mb = bb instanceof Uint8Array ? bb : new Uint8Array(bb),
        Vb = function(bb) {
          const wb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
          if (bb.byteLength < 20 || wb.getUint32(0, !0) !== eb || 2 !== wb.getUint32(4, !0)) return null;
          const Mb = Math.min(wb.getUint32(8, !0), bb.byteLength),
            pb = wb.getUint32(12, !0);
          if (wb.getUint32(16, !0) !== Hb || 20 + pb > Mb) return null;
          let Vb;
          try {
            Vb = JSON.parse((new TextDecoder).decode(bb.subarray(20, 20 + pb)))
          } catch {
            return null
          }
          return "object" === typeof Vb && null !== Vb ? {
            json: Vb,
            jsonEnd: 20 + pb,
            length: Mb
          } : null
        }(Mb);
      if (null === Vb) throw new pb(Lb);
      const gb = Vb.json,
        {
          jsonEnd: Ib,
          length: Ob
        } = Vb,
        Ub = new DataView(Mb.buffer, Mb.byteOffset, Mb.byteLength);
      let tb = -1,
        Cb = 0;
      for (let eb = Ib; eb < Ob;) {
        if (eb + 8 > Ob) throw new pb(Lb);
        const bb = Ub.getUint32(eb, !0),
          wb = Ub.getUint32(eb + 4, !0);
        if (eb + 8 + bb > Ob || wb === Hb || wb === lb && -1 !== tb) throw new pb(Lb);
        wb === lb && (tb = eb + 8, Cb = bb), eb += 8 + bb
      }
      let Eb = null;
      const Fb = null === (wb = gb.buffers) || void 0 === wb ? void 0 : wb[0];
      if (-1 !== tb && Fb && void 0 === Fb.uri) {
        if (!(Fb.byteLength >= 0) || Fb.byteLength > Cb) throw new pb(Lb);
        Eb = new Uint8Array(Mb.buffer, Mb.byteOffset + tb, Fb.byteLength)
      }
      return {
        json: gb,
        bin: Eb,
        fileBytes: Mb.byteLength
      }
    }

    function Ob(bb) {
      const wb = bb.slice(bb.indexOf(",") + 1),
        Mb = Uint8Array.fromBase64;
      if (Mb) return Mb(wb).buffer;
      const eb = atob(wb),
        Hb = new Uint8Array(eb.length);
      for (let pb = 0; pb < eb.length; pb++) Hb[pb] = eb.charCodeAt(pb);
      return Hb.buffer
    }
    async function Ub(bb) {
      if (bb.startsWith("data:")) return Ob(bb);
      const wb = await fetch(bb);
      if (!wb.ok) throw new Vb(`fetching ${bb} failed: ${wb.status} ${wb.statusText}`);
      return await wb.arrayBuffer()
    }
    const tb = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      Cb = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      Eb = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      Fb = [
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
for (const bb in modules) Object.freeze(modules[bb]);