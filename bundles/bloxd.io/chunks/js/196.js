export const id = 196;
export const ids = [196];
export const modules = {
  9163: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => vb,
      e: () => ib,
      i: () => gb
    });
    var Bb = hb(9170);
    const Ob = {
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
      Gb = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      Ub = 1048576,
      Lb = "is not a binary glTF 2.0 file",
      Yb = "loads data from outside the file",
      Sb = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      ab = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      Hb = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      wb = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: Hb,
        TEXCOORD_2: Hb,
        TEXCOORD_3: Hb,
        TEXCOORD_4: Hb,
        TEXCOORD_5: Hb
      },
      Zb = new Set(Bb.l.map((bb => {
        let [ub] = bb;
        return ub
      }))),
      Xb = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      pb = 5126;

    function ob(bb) {
      return bb.toLocaleString("en-US")
    }

    function Ab(bb, ub, hb) {
      return bb > ub ? `has ${ob(bb)} ${hb} (the limit is ${ob(ub)})` : null
    }

    function lb(bb, ub) {
      return Number.isInteger(bb) && bb >= 0 && bb < (null !== ub && void 0 !== ub ? ub : 0)
    }

    function Kb(bb) {
      return Number.isInteger(bb) && bb >= 0
    }

    function Wb(bb, ub) {
      return void 0 !== bb && (!Array.isArray(bb) || bb.length > ub)
    }

    function Cb(bb, ub) {
      return "object" === typeof bb && null !== bb && Object.keys(bb).length > ub
    }

    function db(bb) {
      var ub;
      return `${bb.normalized?"normalized ":""}${null!==(ub=Bb.h[bb.componentType])&&void 0!==ub?ub:bb.componentType} ${bb.type}`
    }

    function rb(bb) {
      const ub = ub => {
        var hb;
        return null !== (hb = bb[ub]) && void 0 !== hb ? hb : -1
      };
      return 255 === ub(0) && 216 === ub(1) ? "JPEG" : 82 === ub(0) && 73 === ub(1) && 87 === ub(8) && 69 === ub(9) ? "WebP" : 171 === ub(0) && 75 === ub(1) && 84 === ub(2) && 88 === ub(3) ? "KTX2" : "non-PNG"
    }

    function jb(bb) {
      return bb.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((ub, hb) => bb[hb] === ub)) && 73 === bb[12] && 72 === bb[13] && 68 === bb[14] && 82 === bb[15]
    }

    function nb(bb) {
      return /^[aeiou]/i.test(bb) ? `an ${bb}` : `a ${bb}`
    }

    function Db(bb) {
      const ub = bb.byteStride;
      return void 0 === ub || Number.isInteger(ub) && ub >= 4 && ub <= 252 && ub % 4 === 0
    }

    function xb(bb, ub, hb) {
      var Bb, Ob;
      const Gb = null === (Bb = bb.bufferViews) || void 0 === Bb ? void 0 : Bb[hb];
      if (!Gb || !ub || 0 !== Gb.buffer) return null;
      const Ub = null !== (Ob = Gb.byteOffset) && void 0 !== Ob ? Ob : 0;
      return !Kb(Ub) || !Kb(Gb.byteLength) || Ub + Gb.byteLength > ub.byteLength ? null : ub.subarray(Ub, Ub + Gb.byteLength)
    }

    function zb(bb, ub) {
      var hb, Ob, Gb;
      const Ub = Bb.s[ub.type],
        Lb = Bb.d[ub.componentType];
      if (!Ub || !Lb || !Number.isInteger(ub.count) || ub.count < 0) return !1;
      if (void 0 === ub.bufferView) return !0;
      const Yb = null === (hb = bb.bufferViews) || void 0 === hb ? void 0 : hb[ub.bufferView],
        Sb = null !== (Ob = ub.byteOffset) && void 0 !== Ob ? Ob : 0;
      if (!Yb || !Kb(Sb) || Sb % Lb !== 0) return !1;
      const ab = Ub * Lb,
        Hb = null !== (Gb = Yb.byteStride) && void 0 !== Gb ? Gb : ab;
      if (Hb < ab) return !1;
      return (0 === ub.count ? 0 : Sb + Hb * (ub.count - 1) + ab) <= Yb.byteLength
    }

    function gb(bb) {
      return bb > Ob.fileBytes ? `is ${(bb/Ub).toFixed(1)} MiB (the limit is ${Ob.fileBytes/Ub} MiB)` : null
    }

    function ib(bb, ub) {
      try {
        return function(bb, ub) {
          var hb, Ub, Hb, ob, Kb, gb, ib, vb, tb, Jb, eb, Nb, sb, Mb, mb, Ib, Pb;
          const qb = Array.isArray(bb.extensionsUsed) && bb.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(bb, ub) {
              var hb, Bb;
              const {
                items: Ob,
                perFile: Ub,
                surfaces: Lb,
                few: Yb,
                bounds: Sb,
                attributeMembers: ab
              } = Gb;
              if (Wb(bb.extensionsRequired, Yb) || Wb(bb.animations, 1 / 0) || Wb(bb.skins, 1 / 0)) return !0;
              if (null !== (hb = bb.animations) && void 0 !== hb && hb.length || null !== (Bb = bb.skins) && void 0 !== Bb && Bb.length) return !1;
              if ([
                  [bb.buffers, Yb],
                  [bb.scenes, Yb],
                  [bb.bufferViews, Ob],
                  [bb.accessors, Ob],
                  [bb.nodes, Ob],
                  [bb.meshes, Ob],
                  [bb.materials, Lb],
                  [bb.textures, Lb],
                  [bb.samplers, Lb],
                  [bb.images, Lb]
                ].some((bb => {
                  let [ub, hb] = bb;
                  return Wb(ub, hb)
                }))) return !0;
              for (const Gb of null !== (Hb = bb.accessors) && void 0 !== Hb ? Hb : []) {
                var Hb, wb, Zb;
                if (Number.isInteger(Gb.count) && (!Number.isSafeInteger(Gb.count) || Object.is(Gb.count, -0)) || Wb(null !== (wb = Gb.min) && void 0 !== wb ? wb : void 0, Sb) || Wb(null !== (Zb = Gb.max) && void 0 !== Zb ? Zb : void 0, Sb)) return !0
              }
              for (const Gb of null !== (Xb = bb.scenes) && void 0 !== Xb ? Xb : []) {
                var Xb;
                if (Wb(Gb.nodes, Ob)) return !0
              }
              let pb = 0;
              for (const Gb of null !== (ob = bb.nodes) && void 0 !== ob ? ob : []) {
                var ob, Ab, lb;
                if (Wb(Gb.children, Ub)) return !0;
                pb += null !== (Ab = null === (lb = Gb.children) || void 0 === lb ? void 0 : lb.length) && void 0 !== Ab ? Ab : 0
              }
              if (pb > Ub) return !0;
              let Kb = 0;
              for (const Gb of null !== (db = bb.meshes) && void 0 !== db ? db : []) {
                var db;
                if (!Array.isArray(Gb.primitives)) return !0;
                if (Kb += Gb.primitives.length, Kb > Ub) return !0;
                for (const bb of Gb.primitives) {
                  var rb;
                  const hb = ub ? null === (rb = bb.extensions) || void 0 === rb ? void 0 : rb.KHR_draco_mesh_compression : void 0;
                  if (Cb(bb.attributes, ab) || Cb(null === hb || void 0 === hb ? void 0 : hb.attributes, ab)) return !0
                }
              }
              return !1
            }(bb, qb)) return Lb;
          const Eb = null === (hb = bb.asset) || void 0 === hb ? void 0 : hb.version;
          if ("string" !== typeof Eb || !/^2\.\d+/.test(Eb)) return `uses glTF version ${null!==Eb&&void 0!==Eb?Eb:"(none)"}`;
          const yb = null === (Ub = bb.asset) || void 0 === Ub ? void 0 : Ub.minVersion;
          if (void 0 !== yb && "2.0" !== yb) return `uses glTF version ${yb}`;
          for (const Bb of null !== (Vb = bb.extensionsRequired) && void 0 !== Vb ? Vb : []) {
            var Vb;
            if (!Sb.has(Bb)) return `requires the glTF extension ${Bb}`
          }
          if (null !== (Hb = bb.animations) && void 0 !== Hb && Hb.length) return "has animations";
          if (null !== (ob = bb.skins) && void 0 !== ob && ob.length) return "uses skins";
          const Fb = null !== (Kb = bb.buffers) && void 0 !== Kb ? Kb : [];
          for (const [Bb, Ob] of Fb.entries()) {
            if (void 0 !== Ob.uri) return Yb;
            if (Bb > 0 || !ub) return Lb
          }
          for (const [Bb, Ob] of(null !== (fb = bb.bufferViews) && void 0 !== fb ? fb : []).entries()) {
            var fb;
            if (!xb(bb, ub, Bb) || !Db(Ob)) return Lb
          }
          const kb = null !== (gb = bb.accessors) && void 0 !== gb ? gb : [];
          for (const Bb of kb) {
            if (void 0 !== Bb.sparse) return "uses sparse accessors";
            const ub = Number.isInteger(Bb.count) ? Ab(Bb.count, Ob.accessorElements, "elements in an accessor") : null;
            if (ub) return ub;
            if (!zb(bb, Bb)) return Lb
          }
          const Tb = null !== (ib = bb.scenes) && void 0 !== ib ? ib : [];
          if (1 !== Tb.length) return `has ${Tb.length} scenes`;
          const cb = (0, Bb.z)(bb);
          if (void 0 !== cb && 0 !== cb) return Lb;
          const Qb = null !== (vb = bb.nodes) && void 0 !== vb ? vb : [],
            Rb = null !== (tb = bb.meshes) && void 0 !== tb ? tb : [],
            bu = null !== (Jb = bb.materials) && void 0 !== Jb ? Jb : [],
            uu = null !== (eb = bb.textures) && void 0 !== eb ? eb : [],
            hu = null !== (Nb = bb.images) && void 0 !== Nb ? Nb : [],
            Bu = null !== (sb = null !== (Mb = null !== (mb = Ab(Qb.length, Ob.nodes, "nodes")) && void 0 !== mb ? mb : Ab(Rb.length, Ob.meshes, "meshes")) && void 0 !== Mb ? Mb : Ab(bu.length, Ob.materials, "materials")) && void 0 !== sb ? sb : Ab(hu.length, Ob.images, "images");
          if (Bu) return Bu;
          const Ou = new Set;
          for (const Bb of Qb)
            for (const bb of null !== (Gu = Bb.children) && void 0 !== Gu ? Gu : []) {
              var Gu;
              if (!lb(bb, Qb.length) || Ou.has(bb)) return Lb;
              Ou.add(bb)
            }
          const Uu = new Set,
            Lu = bb => {
              var ub;
              return !Uu.has(bb) && (Uu.add(bb), (null !== (ub = Qb[bb].children) && void 0 !== ub ? ub : []).every(Lu))
            };
          for (const Bb of null !== (Yu = Tb[0].nodes) && void 0 !== Yu ? Yu : []) {
            var Yu;
            if (!lb(Bb, Qb.length) || Ou.has(Bb) || !Lu(Bb)) return Lb
          }
          for (const Bb of Qb) {
            if (void 0 !== Bb.matrix) return "uses node matrices";
            if (void 0 !== Bb.skin) return "uses skins";
            if (void 0 !== Bb.weights) return "uses morph targets";
            if (void 0 !== Bb.mesh && !lb(Bb.mesh, Rb.length)) return Lb;
            const bb = [
              [Bb.translation, 3],
              [Bb.rotation, 4],
              [Bb.scale, 3]
            ];
            for (const [ub, hb] of bb)
              if (void 0 !== ub && (!Array.isArray(ub) || ub.length !== hb || !ub.every((bb => Number.isFinite(bb))))) return Lb
          }
          let Su = -1,
            au = 0,
            Hu = 0,
            wu = null;
          for (const Ob of Rb) {
            if (void 0 !== Ob.weights) return "uses morph targets";
            if (0 === Ob.primitives.length) return Lb;
            for (const hb of Ob.primitives) {
              var Zu, Xu;
              const Ob = null !== (Zu = hb.mode) && void 0 !== Zu ? Zu : 4;
              var pu;
              if (4 !== Ob && 0 !== Ob) return `uses ${null!==(pu=Xb[Ob])&&void 0!==pu?pu:`mode ${Ob}`} primitives`;
              if (void 0 !== hb.targets) return "uses morph targets";
              if (void 0 !== hb.material && !lb(hb.material, bu.length)) return Lb;
              const Gb = qb ? null === (Xu = hb.extensions) || void 0 === Xu ? void 0 : Xu.KHR_draco_mesh_compression : void 0;
              if (Gb) {
                if (4 !== Ob) return "uses Draco-compressed points";
                if (!xb(bb, ub, Gb.bufferView) || "object" !== typeof Gb.attributes) return Lb
              }
              const Ub = hb.attributes;
              if ("object" !== typeof Ub || null === Ub) return Lb;
              if (void 0 === Ub.POSITION) return "has a primitive with no positions";
              if (!lb(Ub.POSITION, kb.length)) return Lb;
              const Yb = kb[Ub.POSITION].count;
              for (const [bb, ub] of Object.entries(Ub)) {
                if (!lb(ub, kb.length)) return Lb;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(bb)) return "uses skins";
                const hb = kb[ub],
                  Bb = ab[bb];
                if (Bb && (hb.componentType !== pb || hb.normalized || hb.type !== Bb)) return `stores ${bb} as ${db(hb)}`;
                const Ob = wb[bb];
                if (Ob && (hb.type !== Ob.type || !Ob.componentTypes.includes(hb.componentType) || hb.componentType === pb === !!hb.normalized)) return `stores ${bb} as ${db(hb)}`;
                if (Zb.has(bb) && hb.count !== Yb) return "has vertex attributes of different lengths"
              }
              if (Gb) {
                if (void 0 === hb.indices) return Lb;
                for (const ub in Gb.attributes)
                  if (Zb.has(ub) && void 0 === Ub[ub]) return Lb;
                if (void 0 === Gb.attributes.POSITION) return Lb;
                const bb = lb(hb.indices, kb.length) ? kb[hb.indices].count : -1;
                if (0 === bb) return Lb;
                if (-1 === Su) Su = Gb.bufferView, au = Yb, Hu = bb;
                else {
                  wu ??= new Map([
                    [Su, [au, Hu]]
                  ]);
                  const ub = wu.get(Gb.bufferView);
                  if (ub && (ub[0] !== Yb || ub[1] !== bb)) return Lb;
                  wu.set(Gb.bufferView, null !== ub && void 0 !== ub ? ub : [Yb, bb])
                }
              }
              let Sb = Yb;
              if (void 0 !== hb.indices) {
                if (!lb(hb.indices, kb.length)) return Lb;
                const bb = kb[hb.indices];
                if ("SCALAR" !== bb.type) return Lb;
                if (5121 === bb.componentType) return "uses 8-bit indices";
                var ou;
                if (5123 !== bb.componentType && 5125 !== bb.componentType) return `stores indices as ${null!==(ou=Bb.h[bb.componentType])&&void 0!==ou?ou:bb.componentType}`;
                if (!Gb && void 0 === bb.bufferView) return Lb;
                Sb = bb.count
              }
              if (4 === Ob && Sb % 3 !== 0) return Lb
            }
          }
          let Au = 0,
            lu = 0,
            Ku = 0;
          for (let Bb = 0; Bb < Qb.length; Bb++) {
            const bb = Qb[Bb].mesh;
            if (void 0 !== bb && Uu.has(Bb))
              for (const ub of Rb[bb].primitives) Ku++, Au += kb[ub.attributes.POSITION].count, void 0 !== ub.indices && (lu += kb[ub.indices].count)
          }
          const Wu = null !== (Ib = null !== (Pb = Ab(Au, Ob.vertices, "vertices")) && void 0 !== Pb ? Pb : Ab(lu, Ob.indices, "indices")) && void 0 !== Ib ? Ib : Ab(Ku, Ob.primitives, "primitives");
          if (Wu) return Wu;
          for (const Bb of bu) {
            var Cu, du;
            if (void 0 !== Bb.emissiveTexture) return "uses an emissive texture";
            const ub = null !== (Cu = Bb.alphaMode) && void 0 !== Cu ? Cu : "OPAQUE";
            if ("OPAQUE" !== ub && "MASK" !== ub && "BLEND" !== ub) return Lb;
            const hb = null === (du = Bb.pbrMetallicRoughness) || void 0 === du ? void 0 : du.baseColorTexture;
            if (hb) {
              var ru, ju, nu, Du, xu;
              const ub = null !== (ru = bb.extensionsUsed) && void 0 !== ru && ru.includes("KHR_texture_transform") ? null === (ju = hb.extensions) || void 0 === ju ? void 0 : ju.KHR_texture_transform : void 0;
              if (0 !== (null !== (nu = hb.texCoord) && void 0 !== nu ? nu : 0) || 0 !== (null !== (Du = null === ub || void 0 === ub ? void 0 : ub.texCoord) && void 0 !== Du ? Du : 0)) return "uses a second UV set";
              const Bb = uu[hb.index];
              if (!Bb || !lb(Bb.source, hu.length) || void 0 !== Bb.sampler && !lb(Bb.sampler, null === (xu = bb.samplers) || void 0 === xu ? void 0 : xu.length)) return Lb
            }
          }
          for (const Bb of hu) {
            if (void 0 !== Bb.uri) return Yb;
            if (void 0 === Bb.bufferView) return Lb;
            const hb = xb(bb, ub, Bb.bufferView);
            if (!hb) return Lb;
            if ("image/png" !== Bb.mimeType) {
              var zu, gu, iu;
              return `has ${nb(null!==(zu=null!==(gu={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(iu=Bb.mimeType)&&void 0!==iu?iu:""])&&void 0!==gu?gu:Bb.mimeType)&&void 0!==zu?zu:"untyped")} image`
            }
            if (!jb(hb)) return `has ${nb(rb(hb))} image`;
            const Gb = new DataView(hb.buffer, hb.byteOffset, hb.byteLength),
              Ub = Gb.getUint32(16),
              Sb = Gb.getUint32(20);
            if (Ub > Ob.imageSide || Sb > Ob.imageSide) return `has a ${Ub} \xd7 ${Sb} image (the limit is ${Ob.imageSide})`
          }
          return null
        }(bb, ub)
      } catch {
        return Lb
      }
    }

    function vb(bb) {
      const ub = gb(bb.byteLength);
      if (ub) return ub;
      try {
        const {
          json: ub,
          bin: hb
        } = (0, Bb.B)(bb);
        return ib(ub, hb)
      } catch (hb) {
        if (hb instanceof Bb.p) return hb.reason;
        throw hb
      }
    }
  },
  9170: (bb, ub, hb) => {
    hb.d(ub, {
      B: () => Sb,
      d: () => Zb,
      h: () => wb,
      l: () => pb,
      n: () => Gb,
      p: () => Ob,
      s: () => Xb,
      t: () => ab,
      w: () => Hb,
      z: () => Ub
    });
    var Bb = hb(9173);
    class Ob extends Error {
      constructor(bb) {
        super(`GLB refused: it ${bb}`), this.reason = bb, this.name = "GlbRefused"
      }
    }
    class Gb extends Error {
      constructor(bb) {
        super(bb), this.name = "GlbError"
      }
    }

    function Ub(bb) {
      return Reflect.get(bb, "scene")
    }
    const Lb = 5130562,
      Yb = "is not a binary glTF 2.0 file";

    function Sb(bb) {
      var ub;
      const hb = bb instanceof Uint8Array ? bb : new Uint8Array(bb),
        Gb = (0, Bb.h)(hb);
      if (null === Gb) throw new Ob(Yb);
      const Ub = Gb.json,
        {
          jsonEnd: Sb,
          length: ab
        } = Gb,
        Hb = new DataView(hb.buffer, hb.byteOffset, hb.byteLength);
      let wb = -1,
        Zb = 0;
      for (let ob = Sb; ob < ab;) {
        if (ob + 8 > ab) throw new Ob(Yb);
        const bb = Hb.getUint32(ob, !0),
          ub = Hb.getUint32(ob + 4, !0);
        if (ob + 8 + bb > ab || ub === Bb.d || ub === Lb && -1 !== wb) throw new Ob(Yb);
        ub === Lb && (wb = ob + 8, Zb = bb), ob += 8 + bb
      }
      let Xb = null;
      const pb = null === (ub = Ub.buffers) || void 0 === ub ? void 0 : ub[0];
      if (-1 !== wb && pb && void 0 === pb.uri) {
        if (!(pb.byteLength >= 0) || pb.byteLength > Zb) throw new Ob(Yb);
        Xb = new Uint8Array(hb.buffer, hb.byteOffset + wb, pb.byteLength)
      }
      return {
        json: Ub,
        bin: Xb,
        fileBytes: hb.byteLength
      }
    }

    function ab(bb) {
      const ub = bb.slice(bb.indexOf(",") + 1),
        hb = Uint8Array.fromBase64;
      if (hb) return hb(ub).buffer;
      const Bb = atob(ub),
        Ob = new Uint8Array(Bb.length);
      for (let Gb = 0; Gb < Bb.length; Gb++) Ob[Gb] = Bb.charCodeAt(Gb);
      return Ob.buffer
    }
    async function Hb(bb) {
      if (bb.startsWith("data:")) return ab(bb);
      const ub = await fetch(bb);
      if (!ub.ok) throw new Gb(`fetching ${bb} failed: ${ub.status} ${ub.statusText}`);
      return await ub.arrayBuffer()
    }
    const wb = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      Zb = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      Xb = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      pb = [
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
  9173: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      h: () => Gb,
      l: () => Ub
    });
    const Bb = 1179937895,
      Ob = 1313821514;

    function Gb(bb) {
      const ub = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      if (bb.byteLength < 20 || ub.getUint32(0, !0) !== Bb || 2 !== ub.getUint32(4, !0)) return null;
      const hb = Math.min(ub.getUint32(8, !0), bb.byteLength),
        Gb = ub.getUint32(12, !0);
      if (ub.getUint32(16, !0) !== Ob || 20 + Gb > hb) return null;
      let Ub;
      try {
        Ub = JSON.parse((new TextDecoder).decode(bb.subarray(20, 20 + Gb)))
      } catch {
        return null
      }
      return "object" === typeof Ub && null !== Ub ? {
        json: Ub,
        jsonEnd: 20 + Gb,
        length: hb
      } : null
    }

    function Ub(bb) {
      var ub;
      const hb = null === (ub = Gb(bb)) || void 0 === ub ? void 0 : ub.json;
      if (void 0 === hb || !Array.isArray(hb.extensionsUsed) || !hb.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Bb = hb.meshes;
      return Array.isArray(Bb) && Bb.some((bb => {
        const ub = null === bb || void 0 === bb ? void 0 : bb.primitives;
        return Array.isArray(ub) && ub.some((bb => {
          const ub = null === bb || void 0 === bb ? void 0 : bb.extensions;
          return null != (null === ub || void 0 === ub ? void 0 : ub.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);