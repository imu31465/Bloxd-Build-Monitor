export const id = 195;
export const ids = [195];
export const modules = {
  9135: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => nu,
      h: () => Uu,
      j: () => Gu
    });
    var Eu = yu(9143);
    const Ku = {
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
      Qu = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      mu = 1048576,
      Ju = "is not a binary glTF 2.0 file",
      Nu = "loads data from outside the file",
      Xu = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      Vu = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      ru = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      Bu = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: ru,
        TEXCOORD_2: ru,
        TEXCOORD_3: ru,
        TEXCOORD_4: ru,
        TEXCOORD_5: ru
      },
      xu = new Set(Eu.h.map((uu => {
        let [Ru] = uu;
        return Ru
      }))),
      Su = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      pu = 5126;

    function Tu(uu) {
      return uu.toLocaleString("en-US")
    }

    function Wu(uu, Ru, yu) {
      return uu > Ru ? `has ${Tu(uu)} ${yu} (the limit is ${Tu(Ru)})` : null
    }

    function ju(uu, Ru) {
      return Number.isInteger(uu) && uu >= 0 && uu < (null !== Ru && void 0 !== Ru ? Ru : 0)
    }

    function Hu(uu) {
      return Number.isInteger(uu) && uu >= 0
    }

    function du(uu, Ru) {
      return void 0 !== uu && (!Array.isArray(uu) || uu.length > Ru)
    }

    function bu(uu, Ru) {
      return "object" === typeof uu && null !== uu && Object.keys(uu).length > Ru
    }

    function Cu(uu) {
      var Ru;
      return `${uu.normalized?"normalized ":""}${null!==(Ru=Eu.e[uu.componentType])&&void 0!==Ru?Ru:uu.componentType} ${uu.type}`
    }

    function ku(uu) {
      const Ru = Ru => {
        var yu;
        return null !== (yu = uu[Ru]) && void 0 !== yu ? yu : -1
      };
      return 255 === Ru(0) && 216 === Ru(1) ? "JPEG" : 82 === Ru(0) && 73 === Ru(1) && 87 === Ru(8) && 69 === Ru(9) ? "WebP" : 171 === Ru(0) && 75 === Ru(1) && 84 === Ru(2) && 88 === Ru(3) ? "KTX2" : "non-PNG"
    }

    function eu(uu) {
      return uu.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((Ru, yu) => uu[yu] === Ru)) && 73 === uu[12] && 72 === uu[13] && 68 === uu[14] && 82 === uu[15]
    }

    function Au(uu) {
      return /^[aeiou]/i.test(uu) ? `an ${uu}` : `a ${uu}`
    }

    function Du(uu) {
      const Ru = uu.byteStride;
      return void 0 === Ru || Number.isInteger(Ru) && Ru >= 4 && Ru <= 252 && Ru % 4 === 0
    }

    function Mu(uu, Ru, yu) {
      var Eu, Ku;
      const Qu = null === (Eu = uu.bufferViews) || void 0 === Eu ? void 0 : Eu[yu];
      if (!Qu || !Ru || 0 !== Qu.buffer) return null;
      const mu = null !== (Ku = Qu.byteOffset) && void 0 !== Ku ? Ku : 0;
      return !Hu(mu) || !Hu(Qu.byteLength) || mu + Qu.byteLength > Ru.byteLength ? null : Ru.subarray(mu, mu + Qu.byteLength)
    }

    function Iu(uu, Ru) {
      var yu, Ku, Qu;
      const mu = Eu.m[Ru.type],
        Ju = Eu.b[Ru.componentType];
      if (!mu || !Ju || !Number.isInteger(Ru.count) || Ru.count < 0) return !1;
      if (void 0 === Ru.bufferView) return !0;
      const Nu = null === (yu = uu.bufferViews) || void 0 === yu ? void 0 : yu[Ru.bufferView],
        Xu = null !== (Ku = Ru.byteOffset) && void 0 !== Ku ? Ku : 0;
      if (!Nu || !Hu(Xu) || Xu % Ju !== 0) return !1;
      const Vu = mu * Ju,
        ru = null !== (Qu = Nu.byteStride) && void 0 !== Qu ? Qu : Vu;
      if (ru < Vu) return !1;
      return (0 === Ru.count ? 0 : Xu + ru * (Ru.count - 1) + Vu) <= Nu.byteLength
    }

    function Gu(uu) {
      return uu > Ku.fileBytes ? `is ${(uu/mu).toFixed(1)} MiB (the limit is ${Ku.fileBytes/mu} MiB)` : null
    }

    function Uu(uu, Ru) {
      try {
        return function(uu, Ru) {
          var yu, mu, ru, Tu, Hu, Gu, Uu, nu, su, tu, lu, gu, cu, Lu, zu, Fu, wu;
          const Zu = Array.isArray(uu.extensionsUsed) && uu.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(uu, Ru) {
              var yu, Eu;
              const {
                items: Ku,
                perFile: mu,
                surfaces: Ju,
                few: Nu,
                bounds: Xu,
                attributeMembers: Vu
              } = Qu;
              if (du(uu.extensionsRequired, Nu) || du(uu.animations, 1 / 0) || du(uu.skins, 1 / 0)) return !0;
              if (null !== (yu = uu.animations) && void 0 !== yu && yu.length || null !== (Eu = uu.skins) && void 0 !== Eu && Eu.length) return !1;
              if ([
                  [uu.buffers, Nu],
                  [uu.scenes, Nu],
                  [uu.bufferViews, Ku],
                  [uu.accessors, Ku],
                  [uu.nodes, Ku],
                  [uu.meshes, Ku],
                  [uu.materials, Ju],
                  [uu.textures, Ju],
                  [uu.samplers, Ju],
                  [uu.images, Ju]
                ].some((uu => {
                  let [Ru, yu] = uu;
                  return du(Ru, yu)
                }))) return !0;
              for (const Qu of null !== (ru = uu.accessors) && void 0 !== ru ? ru : []) {
                var ru, Bu, xu;
                if (Number.isInteger(Qu.count) && (!Number.isSafeInteger(Qu.count) || Object.is(Qu.count, -0)) || du(null !== (Bu = Qu.min) && void 0 !== Bu ? Bu : void 0, Xu) || du(null !== (xu = Qu.max) && void 0 !== xu ? xu : void 0, Xu)) return !0
              }
              for (const Qu of null !== (Su = uu.scenes) && void 0 !== Su ? Su : []) {
                var Su;
                if (du(Qu.nodes, Ku)) return !0
              }
              let pu = 0;
              for (const Qu of null !== (Tu = uu.nodes) && void 0 !== Tu ? Tu : []) {
                var Tu, Wu, ju;
                if (du(Qu.children, mu)) return !0;
                pu += null !== (Wu = null === (ju = Qu.children) || void 0 === ju ? void 0 : ju.length) && void 0 !== Wu ? Wu : 0
              }
              if (pu > mu) return !0;
              let Hu = 0;
              for (const Qu of null !== (Cu = uu.meshes) && void 0 !== Cu ? Cu : []) {
                var Cu;
                if (!Array.isArray(Qu.primitives)) return !0;
                if (Hu += Qu.primitives.length, Hu > mu) return !0;
                for (const uu of Qu.primitives) {
                  var ku;
                  const yu = Ru ? null === (ku = uu.extensions) || void 0 === ku ? void 0 : ku.KHR_draco_mesh_compression : void 0;
                  if (bu(uu.attributes, Vu) || bu(null === yu || void 0 === yu ? void 0 : yu.attributes, Vu)) return !0
                }
              }
              return !1
            }(uu, Zu)) return Ju;
          const hu = null === (yu = uu.asset) || void 0 === yu ? void 0 : yu.version;
          if ("string" !== typeof hu || !/^2\.\d+/.test(hu)) return `uses glTF version ${null!==hu&&void 0!==hu?hu:"(none)"}`;
          const Pu = null === (mu = uu.asset) || void 0 === mu ? void 0 : mu.minVersion;
          if (void 0 !== Pu && "2.0" !== Pu) return `uses glTF version ${Pu}`;
          for (const Eu of null !== (iu = uu.extensionsRequired) && void 0 !== iu ? iu : []) {
            var iu;
            if (!Xu.has(Eu)) return `requires the glTF extension ${Eu}`
          }
          if (null !== (ru = uu.animations) && void 0 !== ru && ru.length) return "has animations";
          if (null !== (Tu = uu.skins) && void 0 !== Tu && Tu.length) return "uses skins";
          const Yu = null !== (Hu = uu.buffers) && void 0 !== Hu ? Hu : [];
          for (const [Eu, Ku] of Yu.entries()) {
            if (void 0 !== Ku.uri) return Nu;
            if (Eu > 0 || !Ru) return Ju
          }
          for (const [Eu, Ku] of(null !== (ou = uu.bufferViews) && void 0 !== ou ? ou : []).entries()) {
            var ou;
            if (!Mu(uu, Ru, Eu) || !Du(Ku)) return Ju
          }
          const qu = null !== (Gu = uu.accessors) && void 0 !== Gu ? Gu : [];
          for (const Eu of qu) {
            if (void 0 !== Eu.sparse) return "uses sparse accessors";
            const Ru = Number.isInteger(Eu.count) ? Wu(Eu.count, Ku.accessorElements, "elements in an accessor") : null;
            if (Ru) return Ru;
            if (!Iu(uu, Eu)) return Ju
          }
          const Ou = null !== (Uu = uu.scenes) && void 0 !== Uu ? Uu : [];
          if (1 !== Ou.length) return `has ${Ou.length} scenes`;
          const vu = (0, Eu.v)(uu);
          if (void 0 !== vu && 0 !== vu) return Ju;
          const au = null !== (nu = uu.nodes) && void 0 !== nu ? nu : [],
            fu = null !== (su = uu.meshes) && void 0 !== su ? su : [],
            uR = null !== (tu = uu.materials) && void 0 !== tu ? tu : [],
            RR = null !== (lu = uu.textures) && void 0 !== lu ? lu : [],
            yR = null !== (gu = uu.images) && void 0 !== gu ? gu : [],
            ER = null !== (cu = null !== (Lu = null !== (zu = Wu(au.length, Ku.nodes, "nodes")) && void 0 !== zu ? zu : Wu(fu.length, Ku.meshes, "meshes")) && void 0 !== Lu ? Lu : Wu(uR.length, Ku.materials, "materials")) && void 0 !== cu ? cu : Wu(yR.length, Ku.images, "images");
          if (ER) return ER;
          const KR = new Set;
          for (const Eu of au)
            for (const uu of null !== (QR = Eu.children) && void 0 !== QR ? QR : []) {
              var QR;
              if (!ju(uu, au.length) || KR.has(uu)) return Ju;
              KR.add(uu)
            }
          const mR = new Set,
            JR = uu => {
              var Ru;
              return !mR.has(uu) && (mR.add(uu), (null !== (Ru = au[uu].children) && void 0 !== Ru ? Ru : []).every(JR))
            };
          for (const Eu of null !== (NR = Ou[0].nodes) && void 0 !== NR ? NR : []) {
            var NR;
            if (!ju(Eu, au.length) || KR.has(Eu) || !JR(Eu)) return Ju
          }
          for (const Eu of au) {
            if (void 0 !== Eu.matrix) return "uses node matrices";
            if (void 0 !== Eu.skin) return "uses skins";
            if (void 0 !== Eu.weights) return "uses morph targets";
            if (void 0 !== Eu.mesh && !ju(Eu.mesh, fu.length)) return Ju;
            const uu = [
              [Eu.translation, 3],
              [Eu.rotation, 4],
              [Eu.scale, 3]
            ];
            for (const [Ru, yu] of uu)
              if (void 0 !== Ru && (!Array.isArray(Ru) || Ru.length !== yu || !Ru.every((uu => Number.isFinite(uu))))) return Ju
          }
          let XR = -1,
            VR = 0,
            rR = 0,
            BR = null;
          for (const Ku of fu) {
            if (void 0 !== Ku.weights) return "uses morph targets";
            if (0 === Ku.primitives.length) return Ju;
            for (const yu of Ku.primitives) {
              var xR, SR;
              const Ku = null !== (xR = yu.mode) && void 0 !== xR ? xR : 4;
              var pR;
              if (4 !== Ku && 0 !== Ku) return `uses ${null!==(pR=Su[Ku])&&void 0!==pR?pR:`mode ${Ku}`} primitives`;
              if (void 0 !== yu.targets) return "uses morph targets";
              if (void 0 !== yu.material && !ju(yu.material, uR.length)) return Ju;
              const Qu = Zu ? null === (SR = yu.extensions) || void 0 === SR ? void 0 : SR.KHR_draco_mesh_compression : void 0;
              if (Qu) {
                if (4 !== Ku) return "uses Draco-compressed points";
                if (!Mu(uu, Ru, Qu.bufferView) || "object" !== typeof Qu.attributes) return Ju
              }
              const mu = yu.attributes;
              if ("object" !== typeof mu || null === mu) return Ju;
              if (void 0 === mu.POSITION) return "has a primitive with no positions";
              if (!ju(mu.POSITION, qu.length)) return Ju;
              const Nu = qu[mu.POSITION].count;
              for (const [uu, Ru] of Object.entries(mu)) {
                if (!ju(Ru, qu.length)) return Ju;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(uu)) return "uses skins";
                const yu = qu[Ru],
                  Eu = Vu[uu];
                if (Eu && (yu.componentType !== pu || yu.normalized || yu.type !== Eu)) return `stores ${uu} as ${Cu(yu)}`;
                const Ku = Bu[uu];
                if (Ku && (yu.type !== Ku.type || !Ku.componentTypes.includes(yu.componentType) || yu.componentType === pu === !!yu.normalized)) return `stores ${uu} as ${Cu(yu)}`;
                if (xu.has(uu) && yu.count !== Nu) return "has vertex attributes of different lengths"
              }
              if (Qu) {
                if (void 0 === yu.indices) return Ju;
                for (const Ru in Qu.attributes)
                  if (xu.has(Ru) && void 0 === mu[Ru]) return Ju;
                if (void 0 === Qu.attributes.POSITION) return Ju;
                const uu = ju(yu.indices, qu.length) ? qu[yu.indices].count : -1;
                if (0 === uu) return Ju;
                if (-1 === XR) XR = Qu.bufferView, VR = Nu, rR = uu;
                else {
                  BR ??= new Map([
                    [XR, [VR, rR]]
                  ]);
                  const Ru = BR.get(Qu.bufferView);
                  if (Ru && (Ru[0] !== Nu || Ru[1] !== uu)) return Ju;
                  BR.set(Qu.bufferView, null !== Ru && void 0 !== Ru ? Ru : [Nu, uu])
                }
              }
              let Xu = Nu;
              if (void 0 !== yu.indices) {
                if (!ju(yu.indices, qu.length)) return Ju;
                const uu = qu[yu.indices];
                if ("SCALAR" !== uu.type) return Ju;
                if (5121 === uu.componentType) return "uses 8-bit indices";
                var TR;
                if (5123 !== uu.componentType && 5125 !== uu.componentType) return `stores indices as ${null!==(TR=Eu.e[uu.componentType])&&void 0!==TR?TR:uu.componentType}`;
                if (!Qu && void 0 === uu.bufferView) return Ju;
                Xu = uu.count
              }
              if (4 === Ku && Xu % 3 !== 0) return Ju
            }
          }
          let WR = 0,
            jR = 0,
            HR = 0;
          for (let Eu = 0; Eu < au.length; Eu++) {
            const uu = au[Eu].mesh;
            if (void 0 !== uu && mR.has(Eu))
              for (const Ru of fu[uu].primitives) HR++, WR += qu[Ru.attributes.POSITION].count, void 0 !== Ru.indices && (jR += qu[Ru.indices].count)
          }
          const dR = null !== (Fu = null !== (wu = Wu(WR, Ku.vertices, "vertices")) && void 0 !== wu ? wu : Wu(jR, Ku.indices, "indices")) && void 0 !== Fu ? Fu : Wu(HR, Ku.primitives, "primitives");
          if (dR) return dR;
          for (const Eu of uR) {
            var bR, CR;
            if (void 0 !== Eu.emissiveTexture) return "uses an emissive texture";
            const Ru = null !== (bR = Eu.alphaMode) && void 0 !== bR ? bR : "OPAQUE";
            if ("OPAQUE" !== Ru && "MASK" !== Ru && "BLEND" !== Ru) return Ju;
            const yu = null === (CR = Eu.pbrMetallicRoughness) || void 0 === CR ? void 0 : CR.baseColorTexture;
            if (yu) {
              var kR, eR, AR, DR, MR;
              const Ru = null !== (kR = uu.extensionsUsed) && void 0 !== kR && kR.includes("KHR_texture_transform") ? null === (eR = yu.extensions) || void 0 === eR ? void 0 : eR.KHR_texture_transform : void 0;
              if (0 !== (null !== (AR = yu.texCoord) && void 0 !== AR ? AR : 0) || 0 !== (null !== (DR = null === Ru || void 0 === Ru ? void 0 : Ru.texCoord) && void 0 !== DR ? DR : 0)) return "uses a second UV set";
              const Eu = RR[yu.index];
              if (!Eu || !ju(Eu.source, yR.length) || void 0 !== Eu.sampler && !ju(Eu.sampler, null === (MR = uu.samplers) || void 0 === MR ? void 0 : MR.length)) return Ju
            }
          }
          for (const Eu of yR) {
            if (void 0 !== Eu.uri) return Nu;
            if (void 0 === Eu.bufferView) return Ju;
            const yu = Mu(uu, Ru, Eu.bufferView);
            if (!yu) return Ju;
            if ("image/png" !== Eu.mimeType) {
              var IR, GR, UR;
              return `has ${Au(null!==(IR=null!==(GR={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(UR=Eu.mimeType)&&void 0!==UR?UR:""])&&void 0!==GR?GR:Eu.mimeType)&&void 0!==IR?IR:"untyped")} image`
            }
            if (!eu(yu)) return `has ${Au(ku(yu))} image`;
            const Qu = new DataView(yu.buffer, yu.byteOffset, yu.byteLength),
              mu = Qu.getUint32(16),
              Xu = Qu.getUint32(20);
            if (mu > Ku.imageSide || Xu > Ku.imageSide) return `has a ${mu} \xd7 ${Xu} image (the limit is ${Ku.imageSide})`
          }
          return null
        }(uu, Ru)
      } catch {
        return Ju
      }
    }

    function nu(uu) {
      const Ru = Gu(uu.byteLength);
      if (Ru) return Ru;
      try {
        const {
          json: Ru,
          bin: yu
        } = (0, Eu.y)(uu);
        return Uu(Ru, yu)
      } catch (yu) {
        if (yu instanceof Eu.k) return yu.reason;
        throw yu
      }
    }
  },
  9143: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => xu,
      e: () => Bu,
      h: () => pu,
      i: () => Qu,
      k: () => Ku,
      m: () => Su,
      o: () => Vu,
      s: () => ru,
      v: () => mu,
      y: () => Xu
    });
    var Eu = yu(9148);
    class Ku extends Error {
      constructor(uu) {
        super(`GLB refused: it ${uu}`), this.reason = uu, this.name = "GlbRefused"
      }
    }
    class Qu extends Error {
      constructor(uu) {
        super(uu), this.name = "GlbError"
      }
    }

    function mu(uu) {
      return Reflect.get(uu, "scene")
    }
    const Ju = 5130562,
      Nu = "is not a binary glTF 2.0 file";

    function Xu(uu) {
      var Ru;
      const yu = uu instanceof Uint8Array ? uu : new Uint8Array(uu),
        Qu = (0, Eu.g)(yu);
      if (null === Qu) throw new Ku(Nu);
      const mu = Qu.json,
        {
          jsonEnd: Xu,
          length: Vu
        } = Qu,
        ru = new DataView(yu.buffer, yu.byteOffset, yu.byteLength);
      let Bu = -1,
        xu = 0;
      for (let Tu = Xu; Tu < Vu;) {
        if (Tu + 8 > Vu) throw new Ku(Nu);
        const uu = ru.getUint32(Tu, !0),
          Ru = ru.getUint32(Tu + 4, !0);
        if (Tu + 8 + uu > Vu || Ru === Eu.c || Ru === Ju && -1 !== Bu) throw new Ku(Nu);
        Ru === Ju && (Bu = Tu + 8, xu = uu), Tu += 8 + uu
      }
      let Su = null;
      const pu = null === (Ru = mu.buffers) || void 0 === Ru ? void 0 : Ru[0];
      if (-1 !== Bu && pu && void 0 === pu.uri) {
        if (!(pu.byteLength >= 0) || pu.byteLength > xu) throw new Ku(Nu);
        Su = new Uint8Array(yu.buffer, yu.byteOffset + Bu, pu.byteLength)
      }
      return {
        json: mu,
        bin: Su,
        fileBytes: yu.byteLength
      }
    }

    function Vu(uu) {
      const Ru = uu.slice(uu.indexOf(",") + 1),
        yu = Uint8Array.fromBase64;
      if (yu) return yu(Ru).buffer;
      const Eu = atob(Ru),
        Ku = new Uint8Array(Eu.length);
      for (let Qu = 0; Qu < Eu.length; Qu++) Ku[Qu] = Eu.charCodeAt(Qu);
      return Ku.buffer
    }
    async function ru(uu) {
      if (uu.startsWith("data:")) return Vu(uu);
      const Ru = await fetch(uu);
      if (!Ru.ok) throw new Qu(`fetching ${uu} failed: ${Ru.status} ${Ru.statusText}`);
      return await Ru.arrayBuffer()
    }
    const Bu = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      xu = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      Su = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      pu = [
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
  9148: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku,
      g: () => Qu,
      j: () => mu
    });
    const Eu = 1179937895,
      Ku = 1313821514;

    function Qu(uu) {
      const Ru = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
      if (uu.byteLength < 20 || Ru.getUint32(0, !0) !== Eu || 2 !== Ru.getUint32(4, !0)) return null;
      const yu = Math.min(Ru.getUint32(8, !0), uu.byteLength),
        Qu = Ru.getUint32(12, !0);
      if (Ru.getUint32(16, !0) !== Ku || 20 + Qu > yu) return null;
      let mu;
      try {
        mu = JSON.parse((new TextDecoder).decode(uu.subarray(20, 20 + Qu)))
      } catch {
        return null
      }
      return "object" === typeof mu && null !== mu ? {
        json: mu,
        jsonEnd: 20 + Qu,
        length: yu
      } : null
    }

    function mu(uu) {
      var Ru;
      const yu = null === (Ru = Qu(uu)) || void 0 === Ru ? void 0 : Ru.json;
      if (void 0 === yu || !Array.isArray(yu.extensionsUsed) || !yu.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Eu = yu.meshes;
      return Array.isArray(Eu) && Eu.some((uu => {
        const Ru = null === uu || void 0 === uu ? void 0 : uu.primitives;
        return Array.isArray(Ru) && Ru.some((uu => {
          const Ru = null === uu || void 0 === uu ? void 0 : uu.extensions;
          return null != (null === Ru || void 0 === Ru ? void 0 : Ru.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);