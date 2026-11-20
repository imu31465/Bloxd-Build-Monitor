export const id = 195;
export const ids = [195];
export const modules = {
  8982: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Fb,
      e: () => db,
      i: () => Ib
    });
    var Ab = Ub(8985);
    const Mb = {
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
      Tb = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      Eb = 1048576,
      Yb = "is not a binary glTF 2.0 file",
      Bb = "loads data from outside the file",
      eb = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      vb = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      Lb = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      Pb = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: Lb,
        TEXCOORD_2: Lb,
        TEXCOORD_3: Lb,
        TEXCOORD_4: Lb,
        TEXCOORD_5: Lb
      },
      Xb = new Set(Ab.h.map((bb => {
        let [ab] = bb;
        return ab
      }))),
      jb = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      Rb = 5126;

    function kb(bb) {
      return bb.toLocaleString("en-US")
    }

    function yb(bb, ab, Ub) {
      return bb > ab ? `has ${kb(bb)} ${Ub} (the limit is ${kb(ab)})` : null
    }

    function Zb(bb, ab) {
      return Number.isInteger(bb) && bb >= 0 && bb < (null !== ab && void 0 !== ab ? ab : 0)
    }

    function Db(bb) {
      return Number.isInteger(bb) && bb >= 0
    }

    function zb(bb, ab) {
      return void 0 !== bb && (!Array.isArray(bb) || bb.length > ab)
    }

    function xb(bb, ab) {
      return "object" === typeof bb && null !== bb && Object.keys(bb).length > ab
    }

    function ib(bb) {
      var ab;
      return `${bb.normalized?"normalized ":""}${null!==(ab=Ab.g[bb.componentType])&&void 0!==ab?ab:bb.componentType} ${bb.type}`
    }

    function fb(bb) {
      const ab = ab => {
        var Ub;
        return null !== (Ub = bb[ab]) && void 0 !== Ub ? Ub : -1
      };
      return 255 === ab(0) && 216 === ab(1) ? "JPEG" : 82 === ab(0) && 73 === ab(1) && 87 === ab(8) && 69 === ab(9) ? "WebP" : 171 === ab(0) && 75 === ab(1) && 84 === ab(2) && 88 === ab(3) ? "KTX2" : "non-PNG"
    }

    function mb(bb) {
      return bb.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((ab, Ub) => bb[Ub] === ab)) && 73 === bb[12] && 72 === bb[13] && 68 === bb[14] && 82 === bb[15]
    }

    function pb(bb) {
      return /^[aeiou]/i.test(bb) ? `an ${bb}` : `a ${bb}`
    }

    function Nb(bb) {
      const ab = bb.byteStride;
      return void 0 === ab || Number.isInteger(ab) && ab >= 4 && ab <= 252 && ab % 4 === 0
    }

    function Wb(bb, ab, Ub) {
      var Ab, Mb;
      const Tb = null === (Ab = bb.bufferViews) || void 0 === Ab ? void 0 : Ab[Ub];
      if (!Tb || !ab || 0 !== Tb.buffer) return null;
      const Eb = null !== (Mb = Tb.byteOffset) && void 0 !== Mb ? Mb : 0;
      return !Db(Eb) || !Db(Tb.byteLength) || Eb + Tb.byteLength > ab.byteLength ? null : ab.subarray(Eb, Eb + Tb.byteLength)
    }

    function Hb(bb, ab) {
      var Ub, Mb, Tb;
      const Eb = Ab.k[ab.type],
        Yb = Ab.d[ab.componentType];
      if (!Eb || !Yb || !Number.isInteger(ab.count) || ab.count < 0) return !1;
      if (void 0 === ab.bufferView) return !0;
      const Bb = null === (Ub = bb.bufferViews) || void 0 === Ub ? void 0 : Ub[ab.bufferView],
        eb = null !== (Mb = ab.byteOffset) && void 0 !== Mb ? Mb : 0;
      if (!Bb || !Db(eb) || eb % Yb !== 0) return !1;
      const vb = Eb * Yb,
        Lb = null !== (Tb = Bb.byteStride) && void 0 !== Tb ? Tb : vb;
      if (Lb < vb) return !1;
      return (0 === ab.count ? 0 : eb + Lb * (ab.count - 1) + vb) <= Bb.byteLength
    }

    function Ib(bb) {
      return bb > Mb.fileBytes ? `is ${(bb/Eb).toFixed(1)} MiB (the limit is ${Mb.fileBytes/Eb} MiB)` : null
    }

    function db(bb, ab) {
      try {
        return function(bb, ab) {
          var Ub, Eb, Lb, kb, Db, Ib, db, Fb, hb, Gb, Qb, qb, ub, rb, Kb, ob, lb;
          const tb = Array.isArray(bb.extensionsUsed) && bb.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(bb, ab) {
              var Ub, Ab;
              const {
                items: Mb,
                perFile: Eb,
                surfaces: Yb,
                few: Bb,
                bounds: eb,
                attributeMembers: vb
              } = Tb;
              if (zb(bb.extensionsRequired, Bb) || zb(bb.animations, 1 / 0) || zb(bb.skins, 1 / 0)) return !0;
              if (null !== (Ub = bb.animations) && void 0 !== Ub && Ub.length || null !== (Ab = bb.skins) && void 0 !== Ab && Ab.length) return !1;
              if ([
                  [bb.buffers, Bb],
                  [bb.scenes, Bb],
                  [bb.bufferViews, Mb],
                  [bb.accessors, Mb],
                  [bb.nodes, Mb],
                  [bb.meshes, Mb],
                  [bb.materials, Yb],
                  [bb.textures, Yb],
                  [bb.samplers, Yb],
                  [bb.images, Yb]
                ].some((bb => {
                  let [ab, Ub] = bb;
                  return zb(ab, Ub)
                }))) return !0;
              for (const Tb of null !== (Lb = bb.accessors) && void 0 !== Lb ? Lb : []) {
                var Lb, Pb, Xb;
                if (Number.isInteger(Tb.count) && (!Number.isSafeInteger(Tb.count) || Object.is(Tb.count, -0)) || zb(null !== (Pb = Tb.min) && void 0 !== Pb ? Pb : void 0, eb) || zb(null !== (Xb = Tb.max) && void 0 !== Xb ? Xb : void 0, eb)) return !0
              }
              for (const Tb of null !== (jb = bb.scenes) && void 0 !== jb ? jb : []) {
                var jb;
                if (zb(Tb.nodes, Mb)) return !0
              }
              let Rb = 0;
              for (const Tb of null !== (kb = bb.nodes) && void 0 !== kb ? kb : []) {
                var kb, yb, Zb;
                if (zb(Tb.children, Eb)) return !0;
                Rb += null !== (yb = null === (Zb = Tb.children) || void 0 === Zb ? void 0 : Zb.length) && void 0 !== yb ? yb : 0
              }
              if (Rb > Eb) return !0;
              let Db = 0;
              for (const Tb of null !== (ib = bb.meshes) && void 0 !== ib ? ib : []) {
                var ib;
                if (!Array.isArray(Tb.primitives)) return !0;
                if (Db += Tb.primitives.length, Db > Eb) return !0;
                for (const bb of Tb.primitives) {
                  var fb;
                  const Ub = ab ? null === (fb = bb.extensions) || void 0 === fb ? void 0 : fb.KHR_draco_mesh_compression : void 0;
                  if (xb(bb.attributes, vb) || xb(null === Ub || void 0 === Ub ? void 0 : Ub.attributes, vb)) return !0
                }
              }
              return !1
            }(bb, tb)) return Yb;
          const wb = null === (Ub = bb.asset) || void 0 === Ub ? void 0 : Ub.version;
          if ("string" !== typeof wb || !/^2\.\d+/.test(wb)) return `uses glTF version ${null!==wb&&void 0!==wb?wb:"(none)"}`;
          const sb = null === (Eb = bb.asset) || void 0 === Eb ? void 0 : Eb.minVersion;
          if (void 0 !== sb && "2.0" !== sb) return `uses glTF version ${sb}`;
          for (const Ab of null !== (gb = bb.extensionsRequired) && void 0 !== gb ? gb : []) {
            var gb;
            if (!eb.has(Ab)) return `requires the glTF extension ${Ab}`
          }
          if (null !== (Lb = bb.animations) && void 0 !== Lb && Lb.length) return "has animations";
          if (null !== (kb = bb.skins) && void 0 !== kb && kb.length) return "uses skins";
          const Cb = null !== (Db = bb.buffers) && void 0 !== Db ? Db : [];
          for (const [Ab, Mb] of Cb.entries()) {
            if (void 0 !== Mb.uri) return Bb;
            if (Ab > 0 || !ab) return Yb
          }
          for (const [Ab, Mb] of(null !== (Vb = bb.bufferViews) && void 0 !== Vb ? Vb : []).entries()) {
            var Vb;
            if (!Wb(bb, ab, Ab) || !Nb(Mb)) return Yb
          }
          const Ob = null !== (Ib = bb.accessors) && void 0 !== Ib ? Ib : [];
          for (const Ab of Ob) {
            if (void 0 !== Ab.sparse) return "uses sparse accessors";
            const ab = Number.isInteger(Ab.count) ? yb(Ab.count, Mb.accessorElements, "elements in an accessor") : null;
            if (ab) return ab;
            if (!Hb(bb, Ab)) return Yb
          }
          const cb = null !== (db = bb.scenes) && void 0 !== db ? db : [];
          if (1 !== cb.length) return `has ${cb.length} scenes`;
          const Jb = (0, Ab.s)(bb);
          if (void 0 !== Jb && 0 !== Jb) return Yb;
          const nb = null !== (Fb = bb.nodes) && void 0 !== Fb ? Fb : [],
            Sb = null !== (hb = bb.meshes) && void 0 !== hb ? hb : [],
            ba = null !== (Gb = bb.materials) && void 0 !== Gb ? Gb : [],
            aa = null !== (Qb = bb.textures) && void 0 !== Qb ? Qb : [],
            Ua = null !== (qb = bb.images) && void 0 !== qb ? qb : [],
            Aa = null !== (ub = null !== (rb = null !== (Kb = yb(nb.length, Mb.nodes, "nodes")) && void 0 !== Kb ? Kb : yb(Sb.length, Mb.meshes, "meshes")) && void 0 !== rb ? rb : yb(ba.length, Mb.materials, "materials")) && void 0 !== ub ? ub : yb(Ua.length, Mb.images, "images");
          if (Aa) return Aa;
          const Ma = new Set;
          for (const Ab of nb)
            for (const bb of null !== (Ta = Ab.children) && void 0 !== Ta ? Ta : []) {
              var Ta;
              if (!Zb(bb, nb.length) || Ma.has(bb)) return Yb;
              Ma.add(bb)
            }
          const Ea = new Set,
            Ya = bb => {
              var ab;
              return !Ea.has(bb) && (Ea.add(bb), (null !== (ab = nb[bb].children) && void 0 !== ab ? ab : []).every(Ya))
            };
          for (const Ab of null !== (Ba = cb[0].nodes) && void 0 !== Ba ? Ba : []) {
            var Ba;
            if (!Zb(Ab, nb.length) || Ma.has(Ab) || !Ya(Ab)) return Yb
          }
          for (const Ab of nb) {
            if (void 0 !== Ab.matrix) return "uses node matrices";
            if (void 0 !== Ab.skin) return "uses skins";
            if (void 0 !== Ab.weights) return "uses morph targets";
            if (void 0 !== Ab.mesh && !Zb(Ab.mesh, Sb.length)) return Yb;
            const bb = [
              [Ab.translation, 3],
              [Ab.rotation, 4],
              [Ab.scale, 3]
            ];
            for (const [ab, Ub] of bb)
              if (void 0 !== ab && (!Array.isArray(ab) || ab.length !== Ub || !ab.every((bb => Number.isFinite(bb))))) return Yb
          }
          let ea = -1,
            va = 0,
            La = 0,
            Pa = null;
          for (const Mb of Sb) {
            if (void 0 !== Mb.weights) return "uses morph targets";
            if (0 === Mb.primitives.length) return Yb;
            for (const Ub of Mb.primitives) {
              var Xa, ja;
              const Mb = null !== (Xa = Ub.mode) && void 0 !== Xa ? Xa : 4;
              var Ra;
              if (4 !== Mb && 0 !== Mb) return `uses ${null!==(Ra=jb[Mb])&&void 0!==Ra?Ra:`mode ${Mb}`} primitives`;
              if (void 0 !== Ub.targets) return "uses morph targets";
              if (void 0 !== Ub.material && !Zb(Ub.material, ba.length)) return Yb;
              const Tb = tb ? null === (ja = Ub.extensions) || void 0 === ja ? void 0 : ja.KHR_draco_mesh_compression : void 0;
              if (Tb) {
                if (4 !== Mb) return "uses Draco-compressed points";
                if (!Wb(bb, ab, Tb.bufferView) || "object" !== typeof Tb.attributes) return Yb
              }
              const Eb = Ub.attributes;
              if ("object" !== typeof Eb || null === Eb) return Yb;
              if (void 0 === Eb.POSITION) return "has a primitive with no positions";
              if (!Zb(Eb.POSITION, Ob.length)) return Yb;
              const Bb = Ob[Eb.POSITION].count;
              for (const [bb, ab] of Object.entries(Eb)) {
                if (!Zb(ab, Ob.length)) return Yb;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(bb)) return "uses skins";
                const Ub = Ob[ab],
                  Ab = vb[bb];
                if (Ab && (Ub.componentType !== Rb || Ub.normalized || Ub.type !== Ab)) return `stores ${bb} as ${ib(Ub)}`;
                const Mb = Pb[bb];
                if (Mb && (Ub.type !== Mb.type || !Mb.componentTypes.includes(Ub.componentType) || Ub.componentType === Rb === !!Ub.normalized)) return `stores ${bb} as ${ib(Ub)}`;
                if (Xb.has(bb) && Ub.count !== Bb) return "has vertex attributes of different lengths"
              }
              if (Tb) {
                if (void 0 === Ub.indices) return Yb;
                for (const ab in Tb.attributes)
                  if (Xb.has(ab) && void 0 === Eb[ab]) return Yb;
                if (void 0 === Tb.attributes.POSITION) return Yb;
                const bb = Zb(Ub.indices, Ob.length) ? Ob[Ub.indices].count : -1;
                if (0 === bb) return Yb;
                if (-1 === ea) ea = Tb.bufferView, va = Bb, La = bb;
                else {
                  Pa ??= new Map([
                    [ea, [va, La]]
                  ]);
                  const ab = Pa.get(Tb.bufferView);
                  if (ab && (ab[0] !== Bb || ab[1] !== bb)) return Yb;
                  Pa.set(Tb.bufferView, null !== ab && void 0 !== ab ? ab : [Bb, bb])
                }
              }
              let eb = Bb;
              if (void 0 !== Ub.indices) {
                if (!Zb(Ub.indices, Ob.length)) return Yb;
                const bb = Ob[Ub.indices];
                if ("SCALAR" !== bb.type) return Yb;
                if (5121 === bb.componentType) return "uses 8-bit indices";
                var ka;
                if (5123 !== bb.componentType && 5125 !== bb.componentType) return `stores indices as ${null!==(ka=Ab.g[bb.componentType])&&void 0!==ka?ka:bb.componentType}`;
                if (!Tb && void 0 === bb.bufferView) return Yb;
                eb = bb.count
              }
              if (4 === Mb && eb % 3 !== 0) return Yb
            }
          }
          let ya = 0,
            Za = 0,
            Da = 0;
          for (let Ab = 0; Ab < nb.length; Ab++) {
            const bb = nb[Ab].mesh;
            if (void 0 !== bb && Ea.has(Ab))
              for (const ab of Sb[bb].primitives) Da++, ya += Ob[ab.attributes.POSITION].count, void 0 !== ab.indices && (Za += Ob[ab.indices].count)
          }
          const za = null !== (ob = null !== (lb = yb(ya, Mb.vertices, "vertices")) && void 0 !== lb ? lb : yb(Za, Mb.indices, "indices")) && void 0 !== ob ? ob : yb(Da, Mb.primitives, "primitives");
          if (za) return za;
          for (const Ab of ba) {
            var xa, ia;
            if (void 0 !== Ab.emissiveTexture) return "uses an emissive texture";
            const ab = null !== (xa = Ab.alphaMode) && void 0 !== xa ? xa : "OPAQUE";
            if ("OPAQUE" !== ab && "MASK" !== ab && "BLEND" !== ab) return Yb;
            const Ub = null === (ia = Ab.pbrMetallicRoughness) || void 0 === ia ? void 0 : ia.baseColorTexture;
            if (Ub) {
              var fa, ma, pa, Na, Wa;
              const ab = null !== (fa = bb.extensionsUsed) && void 0 !== fa && fa.includes("KHR_texture_transform") ? null === (ma = Ub.extensions) || void 0 === ma ? void 0 : ma.KHR_texture_transform : void 0;
              if (0 !== (null !== (pa = Ub.texCoord) && void 0 !== pa ? pa : 0) || 0 !== (null !== (Na = null === ab || void 0 === ab ? void 0 : ab.texCoord) && void 0 !== Na ? Na : 0)) return "uses a second UV set";
              const Ab = aa[Ub.index];
              if (!Ab || !Zb(Ab.source, Ua.length) || void 0 !== Ab.sampler && !Zb(Ab.sampler, null === (Wa = bb.samplers) || void 0 === Wa ? void 0 : Wa.length)) return Yb
            }
          }
          for (const Ab of Ua) {
            if (void 0 !== Ab.uri) return Bb;
            if (void 0 === Ab.bufferView) return Yb;
            const Ub = Wb(bb, ab, Ab.bufferView);
            if (!Ub) return Yb;
            if ("image/png" !== Ab.mimeType) {
              var Ha, Ia, da;
              return `has ${pb(null!==(Ha=null!==(Ia={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(da=Ab.mimeType)&&void 0!==da?da:""])&&void 0!==Ia?Ia:Ab.mimeType)&&void 0!==Ha?Ha:"untyped")} image`
            }
            if (!mb(Ub)) return `has ${pb(fb(Ub))} image`;
            const Tb = new DataView(Ub.buffer, Ub.byteOffset, Ub.byteLength),
              Eb = Tb.getUint32(16),
              eb = Tb.getUint32(20);
            if (Eb > Mb.imageSide || eb > Mb.imageSide) return `has a ${Eb} \xd7 ${eb} image (the limit is ${Mb.imageSide})`
          }
          return null
        }(bb, ab)
      } catch {
        return Yb
      }
    }

    function Fb(bb) {
      const ab = Ib(bb.byteLength);
      if (ab) return ab;
      try {
        const {
          json: ab,
          bin: Ub
        } = (0, Ab.v)(bb);
        return db(ab, Ub)
      } catch (Ub) {
        if (Ub instanceof Ab.j) return Ub.reason;
        throw Ub
      }
    }
  },
  8985: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Xb,
      g: () => Pb,
      h: () => Rb,
      i: () => Tb,
      j: () => Mb,
      k: () => jb,
      n: () => vb,
      r: () => Lb,
      s: () => Eb,
      v: () => eb
    });
    var Ab = Ub(8989);
    class Mb extends Error {
      constructor(bb) {
        super(`GLB refused: it ${bb}`), this.reason = bb, this.name = "GlbRefused"
      }
    }
    class Tb extends Error {
      constructor(bb) {
        super(bb), this.name = "GlbError"
      }
    }

    function Eb(bb) {
      return Reflect.get(bb, "scene")
    }
    const Yb = 5130562,
      Bb = "is not a binary glTF 2.0 file";

    function eb(bb) {
      var ab;
      const Ub = bb instanceof Uint8Array ? bb : new Uint8Array(bb),
        Tb = (0, Ab.e)(Ub);
      if (null === Tb) throw new Mb(Bb);
      const Eb = Tb.json,
        {
          jsonEnd: eb,
          length: vb
        } = Tb,
        Lb = new DataView(Ub.buffer, Ub.byteOffset, Ub.byteLength);
      let Pb = -1,
        Xb = 0;
      for (let kb = eb; kb < vb;) {
        if (kb + 8 > vb) throw new Mb(Bb);
        const bb = Lb.getUint32(kb, !0),
          ab = Lb.getUint32(kb + 4, !0);
        if (kb + 8 + bb > vb || ab === Ab.b || ab === Yb && -1 !== Pb) throw new Mb(Bb);
        ab === Yb && (Pb = kb + 8, Xb = bb), kb += 8 + bb
      }
      let jb = null;
      const Rb = null === (ab = Eb.buffers) || void 0 === ab ? void 0 : ab[0];
      if (-1 !== Pb && Rb && void 0 === Rb.uri) {
        if (!(Rb.byteLength >= 0) || Rb.byteLength > Xb) throw new Mb(Bb);
        jb = new Uint8Array(Ub.buffer, Ub.byteOffset + Pb, Rb.byteLength)
      }
      return {
        json: Eb,
        bin: jb,
        fileBytes: Ub.byteLength
      }
    }

    function vb(bb) {
      const ab = bb.slice(bb.indexOf(",") + 1),
        Ub = Uint8Array.fromBase64;
      if (Ub) return Ub(ab).buffer;
      const Ab = atob(ab),
        Mb = new Uint8Array(Ab.length);
      for (let Tb = 0; Tb < Ab.length; Tb++) Mb[Tb] = Ab.charCodeAt(Tb);
      return Mb.buffer
    }
    async function Lb(bb) {
      if (bb.startsWith("data:")) return vb(bb);
      const ab = await fetch(bb);
      if (!ab.ok) throw new Tb(`fetching ${bb} failed: ${ab.status} ${ab.statusText}`);
      return await ab.arrayBuffer()
    }
    const Pb = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      Xb = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      jb = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      Rb = [
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
  8989: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      e: () => Tb,
      f: () => Eb
    });
    const Ab = 1179937895,
      Mb = 1313821514;

    function Tb(bb) {
      const ab = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      if (bb.byteLength < 20 || ab.getUint32(0, !0) !== Ab || 2 !== ab.getUint32(4, !0)) return null;
      const Ub = Math.min(ab.getUint32(8, !0), bb.byteLength),
        Tb = ab.getUint32(12, !0);
      if (ab.getUint32(16, !0) !== Mb || 20 + Tb > Ub) return null;
      let Eb;
      try {
        Eb = JSON.parse((new TextDecoder).decode(bb.subarray(20, 20 + Tb)))
      } catch {
        return null
      }
      return "object" === typeof Eb && null !== Eb ? {
        json: Eb,
        jsonEnd: 20 + Tb,
        length: Ub
      } : null
    }

    function Eb(bb) {
      var ab;
      const Ub = null === (ab = Tb(bb)) || void 0 === ab ? void 0 : ab.json;
      if (void 0 === Ub || !Array.isArray(Ub.extensionsUsed) || !Ub.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Ab = Ub.meshes;
      return Array.isArray(Ab) && Ab.some((bb => {
        const ab = null === bb || void 0 === bb ? void 0 : bb.primitives;
        return Array.isArray(ab) && ab.some((bb => {
          const ab = null === bb || void 0 === bb ? void 0 : bb.extensions;
          return null != (null === ab || void 0 === ab ? void 0 : ab.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);