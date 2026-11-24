export const id = 206;
export const ids = [206];
export const modules = {
  34493: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => lp,
      e: () => Xp,
      f: () => Ep
    });
    var Op = cp(34496);
    const op = {
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
      Ip = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      Sp = 1048576,
      xp = "is not a binary glTF 2.0 file",
      Lp = "loads data from outside the file",
      Yp = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      Dp = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      Ap = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      Pp = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: Ap,
        TEXCOORD_2: Ap,
        TEXCOORD_3: Ap,
        TEXCOORD_4: Ap,
        TEXCOORD_5: Ap
      },
      Wp = new Set(Op.h.map((pp => {
        let [ip] = pp;
        return ip
      }))),
      yp = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      Up = 5126;

    function wp(pp) {
      return pp.toLocaleString("en-US")
    }

    function vp(pp, ip, cp) {
      return pp > ip ? `has ${wp(pp)} ${cp} (the limit is ${wp(ip)})` : null
    }

    function tp(pp, ip) {
      return Number.isInteger(pp) && pp >= 0 && pp < (null !== ip && void 0 !== ip ? ip : 0)
    }

    function Hp(pp) {
      return Number.isInteger(pp) && pp >= 0
    }

    function dp(pp, ip) {
      return void 0 !== pp && (!Array.isArray(pp) || pp.length > ip)
    }

    function ep(pp, ip) {
      return "object" === typeof pp && null !== pp && Object.keys(pp).length > ip
    }

    function jp(pp) {
      var ip;
      return `${pp.normalized?"normalized ":""}${null!==(ip=Op.f[pp.componentType])&&void 0!==ip?ip:pp.componentType} ${pp.type}`
    }

    function kp(pp) {
      const ip = ip => {
        var cp;
        return null !== (cp = pp[ip]) && void 0 !== cp ? cp : -1
      };
      return 255 === ip(0) && 216 === ip(1) ? "JPEG" : 82 === ip(0) && 73 === ip(1) && 87 === ip(8) && 69 === ip(9) ? "WebP" : 171 === ip(0) && 75 === ip(1) && 84 === ip(2) && 88 === ip(3) ? "KTX2" : "non-PNG"
    }

    function mp(pp) {
      return pp.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((ip, cp) => pp[cp] === ip)) && 73 === pp[12] && 72 === pp[13] && 68 === pp[14] && 82 === pp[15]
    }

    function Rp(pp) {
      return /^[aeiou]/i.test(pp) ? `an ${pp}` : `a ${pp}`
    }

    function qp(pp) {
      const ip = pp.byteStride;
      return void 0 === ip || Number.isInteger(ip) && ip >= 4 && ip <= 252 && ip % 4 === 0
    }

    function Mp(pp, ip, cp) {
      var Op, op;
      const Ip = null === (Op = pp.bufferViews) || void 0 === Op ? void 0 : Op[cp];
      if (!Ip || !ip || 0 !== Ip.buffer) return null;
      const Sp = null !== (op = Ip.byteOffset) && void 0 !== op ? op : 0;
      return !Hp(Sp) || !Hp(Ip.byteLength) || Sp + Ip.byteLength > ip.byteLength ? null : ip.subarray(Sp, Sp + Ip.byteLength)
    }

    function Cp(pp, ip) {
      var cp, op, Ip;
      const Sp = Op.r[ip.type],
        xp = Op.c[ip.componentType];
      if (!Sp || !xp || !Number.isInteger(ip.count) || ip.count < 0) return !1;
      if (void 0 === ip.bufferView) return !0;
      const Lp = null === (cp = pp.bufferViews) || void 0 === cp ? void 0 : cp[ip.bufferView],
        Yp = null !== (op = ip.byteOffset) && void 0 !== op ? op : 0;
      if (!Lp || !Hp(Yp) || Yp % xp !== 0) return !1;
      const Dp = Sp * xp,
        Ap = null !== (Ip = Lp.byteStride) && void 0 !== Ip ? Ip : Dp;
      if (Ap < Dp) return !1;
      return (0 === ip.count ? 0 : Yp + Ap * (ip.count - 1) + Dp) <= Lp.byteLength
    }

    function Ep(pp) {
      return pp > op.fileBytes ? `is ${(pp/Sp).toFixed(1)} MiB (the limit is ${op.fileBytes/Sp} MiB)` : null
    }

    function Xp(pp, ip) {
      try {
        return function(pp, ip) {
          var cp, Sp, Ap, wp, Hp, Ep, Xp, lp, Qp, Jp, Bp, Np, Tp, fp, bp, hp, ap;
          const np = Array.isArray(pp.extensionsUsed) && pp.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(pp, ip) {
              var cp, Op;
              const {
                items: op,
                perFile: Sp,
                surfaces: xp,
                few: Lp,
                bounds: Yp,
                attributeMembers: Dp
              } = Ip;
              if (dp(pp.extensionsRequired, Lp) || dp(pp.animations, 1 / 0) || dp(pp.skins, 1 / 0)) return !0;
              if (null !== (cp = pp.animations) && void 0 !== cp && cp.length || null !== (Op = pp.skins) && void 0 !== Op && Op.length) return !1;
              if ([
                  [pp.buffers, Lp],
                  [pp.scenes, Lp],
                  [pp.bufferViews, op],
                  [pp.accessors, op],
                  [pp.nodes, op],
                  [pp.meshes, op],
                  [pp.materials, xp],
                  [pp.textures, xp],
                  [pp.samplers, xp],
                  [pp.images, xp]
                ].some((pp => {
                  let [ip, cp] = pp;
                  return dp(ip, cp)
                }))) return !0;
              for (const Ip of null !== (Ap = pp.accessors) && void 0 !== Ap ? Ap : []) {
                var Ap, Pp, Wp;
                if (Number.isInteger(Ip.count) && (!Number.isSafeInteger(Ip.count) || Object.is(Ip.count, -0)) || dp(null !== (Pp = Ip.min) && void 0 !== Pp ? Pp : void 0, Yp) || dp(null !== (Wp = Ip.max) && void 0 !== Wp ? Wp : void 0, Yp)) return !0
              }
              for (const Ip of null !== (yp = pp.scenes) && void 0 !== yp ? yp : []) {
                var yp;
                if (dp(Ip.nodes, op)) return !0
              }
              let Up = 0;
              for (const Ip of null !== (wp = pp.nodes) && void 0 !== wp ? wp : []) {
                var wp, vp, tp;
                if (dp(Ip.children, Sp)) return !0;
                Up += null !== (vp = null === (tp = Ip.children) || void 0 === tp ? void 0 : tp.length) && void 0 !== vp ? vp : 0
              }
              if (Up > Sp) return !0;
              let Hp = 0;
              for (const Ip of null !== (jp = pp.meshes) && void 0 !== jp ? jp : []) {
                var jp;
                if (!Array.isArray(Ip.primitives)) return !0;
                if (Hp += Ip.primitives.length, Hp > Sp) return !0;
                for (const pp of Ip.primitives) {
                  var kp;
                  const cp = ip ? null === (kp = pp.extensions) || void 0 === kp ? void 0 : kp.KHR_draco_mesh_compression : void 0;
                  if (ep(pp.attributes, Dp) || ep(null === cp || void 0 === cp ? void 0 : cp.attributes, Dp)) return !0
                }
              }
              return !1
            }(pp, np)) return xp;
          const Fp = null === (cp = pp.asset) || void 0 === cp ? void 0 : cp.version;
          if ("string" !== typeof Fp || !/^2\.\d+/.test(Fp)) return `uses glTF version ${null!==Fp&&void 0!==Fp?Fp:"(none)"}`;
          const gp = null === (Sp = pp.asset) || void 0 === Sp ? void 0 : Sp.minVersion;
          if (void 0 !== gp && "2.0" !== gp) return `uses glTF version ${gp}`;
          for (const Op of null !== (Gp = pp.extensionsRequired) && void 0 !== Gp ? Gp : []) {
            var Gp;
            if (!Yp.has(Op)) return `requires the glTF extension ${Op}`
          }
          if (null !== (Ap = pp.animations) && void 0 !== Ap && Ap.length) return "has animations";
          if (null !== (wp = pp.skins) && void 0 !== wp && wp.length) return "uses skins";
          const rp = null !== (Hp = pp.buffers) && void 0 !== Hp ? Hp : [];
          for (const [Op, op] of rp.entries()) {
            if (void 0 !== op.uri) return Lp;
            if (Op > 0 || !ip) return xp
          }
          for (const [Op, op] of(null !== (Zp = pp.bufferViews) && void 0 !== Zp ? Zp : []).entries()) {
            var Zp;
            if (!Mp(pp, ip, Op) || !qp(op)) return xp
          }
          const zp = null !== (Ep = pp.accessors) && void 0 !== Ep ? Ep : [];
          for (const Op of zp) {
            if (void 0 !== Op.sparse) return "uses sparse accessors";
            const ip = Number.isInteger(Op.count) ? vp(Op.count, op.accessorElements, "elements in an accessor") : null;
            if (ip) return ip;
            if (!Cp(pp, Op)) return xp
          }
          const sp = null !== (Xp = pp.scenes) && void 0 !== Xp ? Xp : [];
          if (1 !== sp.length) return `has ${sp.length} scenes`;
          const Kp = (0, Op.y)(pp);
          if (void 0 !== Kp && 0 !== Kp) return xp;
          const Vp = null !== (lp = pp.nodes) && void 0 !== lp ? lp : [],
            ii = null !== (Qp = pp.meshes) && void 0 !== Qp ? Qp : [],
            ci = null !== (Jp = pp.materials) && void 0 !== Jp ? Jp : [],
            Oi = null !== (Bp = pp.textures) && void 0 !== Bp ? Bp : [],
            oi = null !== (Np = pp.images) && void 0 !== Np ? Np : [],
            Ii = null !== (Tp = null !== (fp = null !== (bp = vp(Vp.length, op.nodes, "nodes")) && void 0 !== bp ? bp : vp(ii.length, op.meshes, "meshes")) && void 0 !== fp ? fp : vp(ci.length, op.materials, "materials")) && void 0 !== Tp ? Tp : vp(oi.length, op.images, "images");
          if (Ii) return Ii;
          const Si = new Set;
          for (const Op of Vp)
            for (const pp of null !== (xi = Op.children) && void 0 !== xi ? xi : []) {
              var xi;
              if (!tp(pp, Vp.length) || Si.has(pp)) return xp;
              Si.add(pp)
            }
          const Li = new Set,
            Yi = pp => {
              var ip;
              return !Li.has(pp) && (Li.add(pp), (null !== (ip = Vp[pp].children) && void 0 !== ip ? ip : []).every(Yi))
            };
          for (const Op of null !== (Di = sp[0].nodes) && void 0 !== Di ? Di : []) {
            var Di;
            if (!tp(Op, Vp.length) || Si.has(Op) || !Yi(Op)) return xp
          }
          for (const Op of Vp) {
            if (void 0 !== Op.matrix) return "uses node matrices";
            if (void 0 !== Op.skin) return "uses skins";
            if (void 0 !== Op.weights) return "uses morph targets";
            if (void 0 !== Op.mesh && !tp(Op.mesh, ii.length)) return xp;
            const pp = [
              [Op.translation, 3],
              [Op.rotation, 4],
              [Op.scale, 3]
            ];
            for (const [ip, cp] of pp)
              if (void 0 !== ip && (!Array.isArray(ip) || ip.length !== cp || !ip.every((pp => Number.isFinite(pp))))) return xp
          }
          let Ai = -1,
            Pi = 0,
            Wi = 0,
            yi = null;
          for (const op of ii) {
            if (void 0 !== op.weights) return "uses morph targets";
            if (0 === op.primitives.length) return xp;
            for (const cp of op.primitives) {
              var Ui, wi;
              const op = null !== (Ui = cp.mode) && void 0 !== Ui ? Ui : 4;
              var vi;
              if (4 !== op && 0 !== op) return `uses ${null!==(vi=yp[op])&&void 0!==vi?vi:`mode ${op}`} primitives`;
              if (void 0 !== cp.targets) return "uses morph targets";
              if (void 0 !== cp.material && !tp(cp.material, ci.length)) return xp;
              const Ip = np ? null === (wi = cp.extensions) || void 0 === wi ? void 0 : wi.KHR_draco_mesh_compression : void 0;
              if (Ip) {
                if (4 !== op) return "uses Draco-compressed points";
                if (!Mp(pp, ip, Ip.bufferView) || "object" !== typeof Ip.attributes) return xp
              }
              const Sp = cp.attributes;
              if ("object" !== typeof Sp || null === Sp) return xp;
              if (void 0 === Sp.POSITION) return "has a primitive with no positions";
              if (!tp(Sp.POSITION, zp.length)) return xp;
              const Lp = zp[Sp.POSITION].count;
              for (const [pp, ip] of Object.entries(Sp)) {
                if (!tp(ip, zp.length)) return xp;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(pp)) return "uses skins";
                const cp = zp[ip],
                  Op = Dp[pp];
                if (Op && (cp.componentType !== Up || cp.normalized || cp.type !== Op)) return `stores ${pp} as ${jp(cp)}`;
                const op = Pp[pp];
                if (op && (cp.type !== op.type || !op.componentTypes.includes(cp.componentType) || cp.componentType === Up === !!cp.normalized)) return `stores ${pp} as ${jp(cp)}`;
                if (Wp.has(pp) && cp.count !== Lp) return "has vertex attributes of different lengths"
              }
              if (Ip) {
                if (void 0 === cp.indices) return xp;
                for (const ip in Ip.attributes)
                  if (Wp.has(ip) && void 0 === Sp[ip]) return xp;
                if (void 0 === Ip.attributes.POSITION) return xp;
                const pp = tp(cp.indices, zp.length) ? zp[cp.indices].count : -1;
                if (0 === pp) return xp;
                if (-1 === Ai) Ai = Ip.bufferView, Pi = Lp, Wi = pp;
                else {
                  yi ??= new Map([
                    [Ai, [Pi, Wi]]
                  ]);
                  const ip = yi.get(Ip.bufferView);
                  if (ip && (ip[0] !== Lp || ip[1] !== pp)) return xp;
                  yi.set(Ip.bufferView, null !== ip && void 0 !== ip ? ip : [Lp, pp])
                }
              }
              let Yp = Lp;
              if (void 0 !== cp.indices) {
                if (!tp(cp.indices, zp.length)) return xp;
                const pp = zp[cp.indices];
                if ("SCALAR" !== pp.type) return xp;
                if (5121 === pp.componentType) return "uses 8-bit indices";
                var ti;
                if (5123 !== pp.componentType && 5125 !== pp.componentType) return `stores indices as ${null!==(ti=Op.f[pp.componentType])&&void 0!==ti?ti:pp.componentType}`;
                if (!Ip && void 0 === pp.bufferView) return xp;
                Yp = pp.count
              }
              if (4 === op && Yp % 3 !== 0) return xp
            }
          }
          let Hi = 0,
            di = 0,
            ei = 0;
          for (let Op = 0; Op < Vp.length; Op++) {
            const pp = Vp[Op].mesh;
            if (void 0 !== pp && Li.has(Op))
              for (const ip of ii[pp].primitives) ei++, Hi += zp[ip.attributes.POSITION].count, void 0 !== ip.indices && (di += zp[ip.indices].count)
          }
          const ui = null !== (hp = null !== (ap = vp(Hi, op.vertices, "vertices")) && void 0 !== ap ? ap : vp(di, op.indices, "indices")) && void 0 !== hp ? hp : vp(ei, op.primitives, "primitives");
          if (ui) return ui;
          for (const Op of ci) {
            var ji, ki;
            if (void 0 !== Op.emissiveTexture) return "uses an emissive texture";
            const ip = null !== (ji = Op.alphaMode) && void 0 !== ji ? ji : "OPAQUE";
            if ("OPAQUE" !== ip && "MASK" !== ip && "BLEND" !== ip) return xp;
            const cp = null === (ki = Op.pbrMetallicRoughness) || void 0 === ki ? void 0 : ki.baseColorTexture;
            if (cp) {
              var mi, Ri, qi, Mi, Ci;
              const ip = null !== (mi = pp.extensionsUsed) && void 0 !== mi && mi.includes("KHR_texture_transform") ? null === (Ri = cp.extensions) || void 0 === Ri ? void 0 : Ri.KHR_texture_transform : void 0;
              if (0 !== (null !== (qi = cp.texCoord) && void 0 !== qi ? qi : 0) || 0 !== (null !== (Mi = null === ip || void 0 === ip ? void 0 : ip.texCoord) && void 0 !== Mi ? Mi : 0)) return "uses a second UV set";
              const Op = Oi[cp.index];
              if (!Op || !tp(Op.source, oi.length) || void 0 !== Op.sampler && !tp(Op.sampler, null === (Ci = pp.samplers) || void 0 === Ci ? void 0 : Ci.length)) return xp
            }
          }
          for (const Op of oi) {
            if (void 0 !== Op.uri) return Lp;
            if (void 0 === Op.bufferView) return xp;
            const cp = Mp(pp, ip, Op.bufferView);
            if (!cp) return xp;
            if ("image/png" !== Op.mimeType) {
              var Ei, Xi, li;
              return `has ${Rp(null!==(Ei=null!==(Xi={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(li=Op.mimeType)&&void 0!==li?li:""])&&void 0!==Xi?Xi:Op.mimeType)&&void 0!==Ei?Ei:"untyped")} image`
            }
            if (!mp(cp)) return `has ${Rp(kp(cp))} image`;
            const Ip = new DataView(cp.buffer, cp.byteOffset, cp.byteLength),
              Sp = Ip.getUint32(16),
              Yp = Ip.getUint32(20);
            if (Sp > op.imageSide || Yp > op.imageSide) return `has a ${Sp} \xd7 ${Yp} image (the limit is ${op.imageSide})`
          }
          return null
        }(pp, ip)
      } catch {
        return xp
      }
    }

    function lp(pp) {
      const ip = Ep(pp.byteLength);
      if (ip) return ip;
      try {
        const {
          json: ip,
          bin: cp
        } = (0, Op.B)(pp);
        return Xp(ip, cp)
      } catch (cp) {
        if (cp instanceof Op.o) return cp.reason;
        throw cp
      }
    }
  },
  34496: (pp, ip, cp) => {
    cp.d(ip, {
      B: () => Yp,
      c: () => Wp,
      f: () => Pp,
      h: () => Up,
      k: () => Ip,
      o: () => op,
      r: () => yp,
      s: () => Dp,
      w: () => Ap,
      y: () => Sp
    });
    var Op = cp(34503);
    class op extends Error {
      constructor(pp) {
        super(`GLB refused: it ${pp}`), this.reason = pp, this.name = "GlbRefused"
      }
    }
    class Ip extends Error {
      constructor(pp) {
        super(pp), this.name = "GlbError"
      }
    }

    function Sp(pp) {
      return Reflect.get(pp, "scene")
    }
    const xp = 5130562,
      Lp = "is not a binary glTF 2.0 file";

    function Yp(pp) {
      var ip;
      const cp = pp instanceof Uint8Array ? pp : new Uint8Array(pp),
        Ip = (0, Op.f)(cp);
      if (null === Ip) throw new op(Lp);
      const Sp = Ip.json,
        {
          jsonEnd: Yp,
          length: Dp
        } = Ip,
        Ap = new DataView(cp.buffer, cp.byteOffset, cp.byteLength);
      let Pp = -1,
        Wp = 0;
      for (let wp = Yp; wp < Dp;) {
        if (wp + 8 > Dp) throw new op(Lp);
        const pp = Ap.getUint32(wp, !0),
          ip = Ap.getUint32(wp + 4, !0);
        if (wp + 8 + pp > Dp || ip === Op.b || ip === xp && -1 !== Pp) throw new op(Lp);
        ip === xp && (Pp = wp + 8, Wp = pp), wp += 8 + pp
      }
      let yp = null;
      const Up = null === (ip = Sp.buffers) || void 0 === ip ? void 0 : ip[0];
      if (-1 !== Pp && Up && void 0 === Up.uri) {
        if (!(Up.byteLength >= 0) || Up.byteLength > Wp) throw new op(Lp);
        yp = new Uint8Array(cp.buffer, cp.byteOffset + Pp, Up.byteLength)
      }
      return {
        json: Sp,
        bin: yp,
        fileBytes: cp.byteLength
      }
    }

    function Dp(pp) {
      const ip = pp.slice(pp.indexOf(",") + 1),
        cp = Uint8Array.fromBase64;
      if (cp) return cp(ip).buffer;
      const Op = atob(ip),
        op = new Uint8Array(Op.length);
      for (let Ip = 0; Ip < Op.length; Ip++) op[Ip] = Op.charCodeAt(Ip);
      return op.buffer
    }
    async function Ap(pp) {
      if (pp.startsWith("data:")) return Dp(pp);
      const ip = await fetch(pp);
      if (!ip.ok) throw new Ip(`fetching ${pp} failed: ${ip.status} ${ip.statusText}`);
      return await ip.arrayBuffer()
    }
    const Pp = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      Wp = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      yp = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      Up = [
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
  34503: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op,
      f: () => Ip,
      h: () => Sp
    });
    const Op = 1179937895,
      op = 1313821514;

    function Ip(pp) {
      const ip = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
      if (pp.byteLength < 20 || ip.getUint32(0, !0) !== Op || 2 !== ip.getUint32(4, !0)) return null;
      const cp = Math.min(ip.getUint32(8, !0), pp.byteLength),
        Ip = ip.getUint32(12, !0);
      if (ip.getUint32(16, !0) !== op || 20 + Ip > cp) return null;
      let Sp;
      try {
        Sp = JSON.parse((new TextDecoder).decode(pp.subarray(20, 20 + Ip)))
      } catch {
        return null
      }
      return "object" === typeof Sp && null !== Sp ? {
        json: Sp,
        jsonEnd: 20 + Ip,
        length: cp
      } : null
    }

    function Sp(pp) {
      var ip;
      const cp = null === (ip = Ip(pp)) || void 0 === ip ? void 0 : ip.json;
      if (void 0 === cp || !Array.isArray(cp.extensionsUsed) || !cp.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Op = cp.meshes;
      return Array.isArray(Op) && Op.some((pp => {
        const ip = null === pp || void 0 === pp ? void 0 : pp.primitives;
        return Array.isArray(ip) && ip.some((pp => {
          const ip = null === pp || void 0 === pp ? void 0 : pp.extensions;
          return null != (null === ip || void 0 === ip ? void 0 : ip.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);