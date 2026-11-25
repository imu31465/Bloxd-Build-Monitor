export const id = 206;
export const ids = [206];
export const modules = {
  34617: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => vu,
      h: () => mu,
      k: () => ku
    });
    var su = ju(34621);
    const Uu = {
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
      Zu = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      Xu = 1048576,
      lu = "is not a binary glTF 2.0 file",
      qu = "loads data from outside the file",
      fu = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      Cu = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      bu = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      cu = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: bu,
        TEXCOORD_2: bu,
        TEXCOORD_3: bu,
        TEXCOORD_4: bu,
        TEXCOORD_5: bu
      },
      Nu = new Set(su.j.map((uu => {
        let [Eu] = uu;
        return Eu
      }))),
      Ou = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      Yu = 5126;

    function hu(uu) {
      return uu.toLocaleString("en-US")
    }

    function Du(uu, Eu, ju) {
      return uu > Eu ? `has ${hu(uu)} ${ju} (the limit is ${hu(Eu)})` : null
    }

    function gu(uu, Eu) {
      return Number.isInteger(uu) && uu >= 0 && uu < (null !== Eu && void 0 !== Eu ? Eu : 0)
    }

    function Mu(uu) {
      return Number.isInteger(uu) && uu >= 0
    }

    function eu(uu, Eu) {
      return void 0 !== uu && (!Array.isArray(uu) || uu.length > Eu)
    }

    function Gu(uu, Eu) {
      return "object" === typeof uu && null !== uu && Object.keys(uu).length > Eu
    }

    function pu(uu) {
      var Eu;
      return `${uu.normalized?"normalized ":""}${null!==(Eu=su.f[uu.componentType])&&void 0!==Eu?Eu:uu.componentType} ${uu.type}`
    }

    function wu(uu) {
      const Eu = Eu => {
        var ju;
        return null !== (ju = uu[Eu]) && void 0 !== ju ? ju : -1
      };
      return 255 === Eu(0) && 216 === Eu(1) ? "JPEG" : 82 === Eu(0) && 73 === Eu(1) && 87 === Eu(8) && 69 === Eu(9) ? "WebP" : 171 === Eu(0) && 75 === Eu(1) && 84 === Eu(2) && 88 === Eu(3) ? "KTX2" : "non-PNG"
    }

    function Ju(uu) {
      return uu.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((Eu, ju) => uu[ju] === Eu)) && 73 === uu[12] && 72 === uu[13] && 68 === uu[14] && 82 === uu[15]
    }

    function du(uu) {
      return /^[aeiou]/i.test(uu) ? `an ${uu}` : `a ${uu}`
    }

    function au(uu) {
      const Eu = uu.byteStride;
      return void 0 === Eu || Number.isInteger(Eu) && Eu >= 4 && Eu <= 252 && Eu % 4 === 0
    }

    function Pu(uu, Eu, ju) {
      var su, Uu;
      const Zu = null === (su = uu.bufferViews) || void 0 === su ? void 0 : su[ju];
      if (!Zu || !Eu || 0 !== Zu.buffer) return null;
      const Xu = null !== (Uu = Zu.byteOffset) && void 0 !== Uu ? Uu : 0;
      return !Mu(Xu) || !Mu(Zu.byteLength) || Xu + Zu.byteLength > Eu.byteLength ? null : Eu.subarray(Xu, Xu + Zu.byteLength)
    }

    function ou(uu, Eu) {
      var ju, Uu, Zu;
      const Xu = su.r[Eu.type],
        lu = su.d[Eu.componentType];
      if (!Xu || !lu || !Number.isInteger(Eu.count) || Eu.count < 0) return !1;
      if (void 0 === Eu.bufferView) return !0;
      const qu = null === (ju = uu.bufferViews) || void 0 === ju ? void 0 : ju[Eu.bufferView],
        fu = null !== (Uu = Eu.byteOffset) && void 0 !== Uu ? Uu : 0;
      if (!qu || !Mu(fu) || fu % lu !== 0) return !1;
      const Cu = Xu * lu,
        bu = null !== (Zu = qu.byteStride) && void 0 !== Zu ? Zu : Cu;
      if (bu < Cu) return !1;
      return (0 === Eu.count ? 0 : fu + bu * (Eu.count - 1) + Cu) <= qu.byteLength
    }

    function ku(uu) {
      return uu > Uu.fileBytes ? `is ${(uu/Xu).toFixed(1)} MiB (the limit is ${Uu.fileBytes/Xu} MiB)` : null
    }

    function mu(uu, Eu) {
      try {
        return function(uu, Eu) {
          var ju, Xu, bu, hu, Mu, ku, mu, vu, Ku, Vu, ru, Qu, iu, Wu, Su, Iu, Fu;
          const Bu = Array.isArray(uu.extensionsUsed) && uu.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(uu, Eu) {
              var ju, su;
              const {
                items: Uu,
                perFile: Xu,
                surfaces: lu,
                few: qu,
                bounds: fu,
                attributeMembers: Cu
              } = Zu;
              if (eu(uu.extensionsRequired, qu) || eu(uu.animations, 1 / 0) || eu(uu.skins, 1 / 0)) return !0;
              if (null !== (ju = uu.animations) && void 0 !== ju && ju.length || null !== (su = uu.skins) && void 0 !== su && su.length) return !1;
              if ([
                  [uu.buffers, qu],
                  [uu.scenes, qu],
                  [uu.bufferViews, Uu],
                  [uu.accessors, Uu],
                  [uu.nodes, Uu],
                  [uu.meshes, Uu],
                  [uu.materials, lu],
                  [uu.textures, lu],
                  [uu.samplers, lu],
                  [uu.images, lu]
                ].some((uu => {
                  let [Eu, ju] = uu;
                  return eu(Eu, ju)
                }))) return !0;
              for (const Zu of null !== (bu = uu.accessors) && void 0 !== bu ? bu : []) {
                var bu, cu, Nu;
                if (Number.isInteger(Zu.count) && (!Number.isSafeInteger(Zu.count) || Object.is(Zu.count, -0)) || eu(null !== (cu = Zu.min) && void 0 !== cu ? cu : void 0, fu) || eu(null !== (Nu = Zu.max) && void 0 !== Nu ? Nu : void 0, fu)) return !0
              }
              for (const Zu of null !== (Ou = uu.scenes) && void 0 !== Ou ? Ou : []) {
                var Ou;
                if (eu(Zu.nodes, Uu)) return !0
              }
              let Yu = 0;
              for (const Zu of null !== (hu = uu.nodes) && void 0 !== hu ? hu : []) {
                var hu, Du, gu;
                if (eu(Zu.children, Xu)) return !0;
                Yu += null !== (Du = null === (gu = Zu.children) || void 0 === gu ? void 0 : gu.length) && void 0 !== Du ? Du : 0
              }
              if (Yu > Xu) return !0;
              let Mu = 0;
              for (const Zu of null !== (pu = uu.meshes) && void 0 !== pu ? pu : []) {
                var pu;
                if (!Array.isArray(Zu.primitives)) return !0;
                if (Mu += Zu.primitives.length, Mu > Xu) return !0;
                for (const uu of Zu.primitives) {
                  var wu;
                  const ju = Eu ? null === (wu = uu.extensions) || void 0 === wu ? void 0 : wu.KHR_draco_mesh_compression : void 0;
                  if (Gu(uu.attributes, Cu) || Gu(null === ju || void 0 === ju ? void 0 : ju.attributes, Cu)) return !0
                }
              }
              return !1
            }(uu, Bu)) return lu;
          const Lu = null === (ju = uu.asset) || void 0 === ju ? void 0 : ju.version;
          if ("string" !== typeof Lu || !/^2\.\d+/.test(Lu)) return `uses glTF version ${null!==Lu&&void 0!==Lu?Lu:"(none)"}`;
          const tu = null === (Xu = uu.asset) || void 0 === Xu ? void 0 : Xu.minVersion;
          if (void 0 !== tu && "2.0" !== tu) return `uses glTF version ${tu}`;
          for (const su of null !== (xu = uu.extensionsRequired) && void 0 !== xu ? xu : []) {
            var xu;
            if (!fu.has(su)) return `requires the glTF extension ${su}`
          }
          if (null !== (bu = uu.animations) && void 0 !== bu && bu.length) return "has animations";
          if (null !== (hu = uu.skins) && void 0 !== hu && hu.length) return "uses skins";
          const Tu = null !== (Mu = uu.buffers) && void 0 !== Mu ? Mu : [];
          for (const [su, Uu] of Tu.entries()) {
            if (void 0 !== Uu.uri) return qu;
            if (su > 0 || !Eu) return lu
          }
          for (const [su, Uu] of(null !== (Hu = uu.bufferViews) && void 0 !== Hu ? Hu : []).entries()) {
            var Hu;
            if (!Pu(uu, Eu, su) || !au(Uu)) return lu
          }
          const Au = null !== (ku = uu.accessors) && void 0 !== ku ? ku : [];
          for (const su of Au) {
            if (void 0 !== su.sparse) return "uses sparse accessors";
            const Eu = Number.isInteger(su.count) ? Du(su.count, Uu.accessorElements, "elements in an accessor") : null;
            if (Eu) return Eu;
            if (!ou(uu, su)) return lu
          }
          const nu = null !== (mu = uu.scenes) && void 0 !== mu ? mu : [];
          if (1 !== nu.length) return `has ${nu.length} scenes`;
          const yu = (0, su.A)(uu);
          if (void 0 !== yu && 0 !== yu) return lu;
          const zu = null !== (vu = uu.nodes) && void 0 !== vu ? vu : [],
            Ru = null !== (Ku = uu.meshes) && void 0 !== Ku ? Ku : [],
            uE = null !== (Vu = uu.materials) && void 0 !== Vu ? Vu : [],
            EE = null !== (ru = uu.textures) && void 0 !== ru ? ru : [],
            jE = null !== (Qu = uu.images) && void 0 !== Qu ? Qu : [],
            sE = null !== (iu = null !== (Wu = null !== (Su = Du(zu.length, Uu.nodes, "nodes")) && void 0 !== Su ? Su : Du(Ru.length, Uu.meshes, "meshes")) && void 0 !== Wu ? Wu : Du(uE.length, Uu.materials, "materials")) && void 0 !== iu ? iu : Du(jE.length, Uu.images, "images");
          if (sE) return sE;
          const UE = new Set;
          for (const su of zu)
            for (const uu of null !== (ZE = su.children) && void 0 !== ZE ? ZE : []) {
              var ZE;
              if (!gu(uu, zu.length) || UE.has(uu)) return lu;
              UE.add(uu)
            }
          const XE = new Set,
            lE = uu => {
              var Eu;
              return !XE.has(uu) && (XE.add(uu), (null !== (Eu = zu[uu].children) && void 0 !== Eu ? Eu : []).every(lE))
            };
          for (const su of null !== (qE = nu[0].nodes) && void 0 !== qE ? qE : []) {
            var qE;
            if (!gu(su, zu.length) || UE.has(su) || !lE(su)) return lu
          }
          for (const su of zu) {
            if (void 0 !== su.matrix) return "uses node matrices";
            if (void 0 !== su.skin) return "uses skins";
            if (void 0 !== su.weights) return "uses morph targets";
            if (void 0 !== su.mesh && !gu(su.mesh, Ru.length)) return lu;
            const uu = [
              [su.translation, 3],
              [su.rotation, 4],
              [su.scale, 3]
            ];
            for (const [Eu, ju] of uu)
              if (void 0 !== Eu && (!Array.isArray(Eu) || Eu.length !== ju || !Eu.every((uu => Number.isFinite(uu))))) return lu
          }
          let fE = -1,
            CE = 0,
            bE = 0,
            cE = null;
          for (const Uu of Ru) {
            if (void 0 !== Uu.weights) return "uses morph targets";
            if (0 === Uu.primitives.length) return lu;
            for (const ju of Uu.primitives) {
              var NE, OE;
              const Uu = null !== (NE = ju.mode) && void 0 !== NE ? NE : 4;
              var YE;
              if (4 !== Uu && 0 !== Uu) return `uses ${null!==(YE=Ou[Uu])&&void 0!==YE?YE:`mode ${Uu}`} primitives`;
              if (void 0 !== ju.targets) return "uses morph targets";
              if (void 0 !== ju.material && !gu(ju.material, uE.length)) return lu;
              const Zu = Bu ? null === (OE = ju.extensions) || void 0 === OE ? void 0 : OE.KHR_draco_mesh_compression : void 0;
              if (Zu) {
                if (4 !== Uu) return "uses Draco-compressed points";
                if (!Pu(uu, Eu, Zu.bufferView) || "object" !== typeof Zu.attributes) return lu
              }
              const Xu = ju.attributes;
              if ("object" !== typeof Xu || null === Xu) return lu;
              if (void 0 === Xu.POSITION) return "has a primitive with no positions";
              if (!gu(Xu.POSITION, Au.length)) return lu;
              const qu = Au[Xu.POSITION].count;
              for (const [uu, Eu] of Object.entries(Xu)) {
                if (!gu(Eu, Au.length)) return lu;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(uu)) return "uses skins";
                const ju = Au[Eu],
                  su = Cu[uu];
                if (su && (ju.componentType !== Yu || ju.normalized || ju.type !== su)) return `stores ${uu} as ${pu(ju)}`;
                const Uu = cu[uu];
                if (Uu && (ju.type !== Uu.type || !Uu.componentTypes.includes(ju.componentType) || ju.componentType === Yu === !!ju.normalized)) return `stores ${uu} as ${pu(ju)}`;
                if (Nu.has(uu) && ju.count !== qu) return "has vertex attributes of different lengths"
              }
              if (Zu) {
                if (void 0 === ju.indices) return lu;
                for (const Eu in Zu.attributes)
                  if (Nu.has(Eu) && void 0 === Xu[Eu]) return lu;
                if (void 0 === Zu.attributes.POSITION) return lu;
                const uu = gu(ju.indices, Au.length) ? Au[ju.indices].count : -1;
                if (0 === uu) return lu;
                if (-1 === fE) fE = Zu.bufferView, CE = qu, bE = uu;
                else {
                  cE ??= new Map([
                    [fE, [CE, bE]]
                  ]);
                  const Eu = cE.get(Zu.bufferView);
                  if (Eu && (Eu[0] !== qu || Eu[1] !== uu)) return lu;
                  cE.set(Zu.bufferView, null !== Eu && void 0 !== Eu ? Eu : [qu, uu])
                }
              }
              let fu = qu;
              if (void 0 !== ju.indices) {
                if (!gu(ju.indices, Au.length)) return lu;
                const uu = Au[ju.indices];
                if ("SCALAR" !== uu.type) return lu;
                if (5121 === uu.componentType) return "uses 8-bit indices";
                var hE;
                if (5123 !== uu.componentType && 5125 !== uu.componentType) return `stores indices as ${null!==(hE=su.f[uu.componentType])&&void 0!==hE?hE:uu.componentType}`;
                if (!Zu && void 0 === uu.bufferView) return lu;
                fu = uu.count
              }
              if (4 === Uu && fu % 3 !== 0) return lu
            }
          }
          let DE = 0,
            gE = 0,
            ME = 0;
          for (let su = 0; su < zu.length; su++) {
            const uu = zu[su].mesh;
            if (void 0 !== uu && XE.has(su))
              for (const Eu of Ru[uu].primitives) ME++, DE += Au[Eu.attributes.POSITION].count, void 0 !== Eu.indices && (gE += Au[Eu.indices].count)
          }
          const eE = null !== (Iu = null !== (Fu = Du(DE, Uu.vertices, "vertices")) && void 0 !== Fu ? Fu : Du(gE, Uu.indices, "indices")) && void 0 !== Iu ? Iu : Du(ME, Uu.primitives, "primitives");
          if (eE) return eE;
          for (const su of uE) {
            var GE, pE;
            if (void 0 !== su.emissiveTexture) return "uses an emissive texture";
            const Eu = null !== (GE = su.alphaMode) && void 0 !== GE ? GE : "OPAQUE";
            if ("OPAQUE" !== Eu && "MASK" !== Eu && "BLEND" !== Eu) return lu;
            const ju = null === (pE = su.pbrMetallicRoughness) || void 0 === pE ? void 0 : pE.baseColorTexture;
            if (ju) {
              var wE, JE, dE, aE, PE;
              const Eu = null !== (wE = uu.extensionsUsed) && void 0 !== wE && wE.includes("KHR_texture_transform") ? null === (JE = ju.extensions) || void 0 === JE ? void 0 : JE.KHR_texture_transform : void 0;
              if (0 !== (null !== (dE = ju.texCoord) && void 0 !== dE ? dE : 0) || 0 !== (null !== (aE = null === Eu || void 0 === Eu ? void 0 : Eu.texCoord) && void 0 !== aE ? aE : 0)) return "uses a second UV set";
              const su = EE[ju.index];
              if (!su || !gu(su.source, jE.length) || void 0 !== su.sampler && !gu(su.sampler, null === (PE = uu.samplers) || void 0 === PE ? void 0 : PE.length)) return lu
            }
          }
          for (const su of jE) {
            if (void 0 !== su.uri) return qu;
            if (void 0 === su.bufferView) return lu;
            const ju = Pu(uu, Eu, su.bufferView);
            if (!ju) return lu;
            if ("image/png" !== su.mimeType) {
              var oE, kE, mE;
              return `has ${du(null!==(oE=null!==(kE={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(mE=su.mimeType)&&void 0!==mE?mE:""])&&void 0!==kE?kE:su.mimeType)&&void 0!==oE?oE:"untyped")} image`
            }
            if (!Ju(ju)) return `has ${du(wu(ju))} image`;
            const Zu = new DataView(ju.buffer, ju.byteOffset, ju.byteLength),
              Xu = Zu.getUint32(16),
              fu = Zu.getUint32(20);
            if (Xu > Uu.imageSide || fu > Uu.imageSide) return `has a ${Xu} \xd7 ${fu} image (the limit is ${Uu.imageSide})`
          }
          return null
        }(uu, Eu)
      } catch {
        return lu
      }
    }

    function vu(uu) {
      const Eu = ku(uu.byteLength);
      if (Eu) return Eu;
      try {
        const {
          json: Eu,
          bin: ju
        } = (0, su.C)(uu);
        return mu(Eu, ju)
      } catch (ju) {
        if (ju instanceof su.o) return ju.reason;
        throw ju
      }
    }
  },
  34621: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => Xu,
      C: () => fu,
      d: () => Nu,
      f: () => cu,
      j: () => Yu,
      k: () => Zu,
      o: () => Uu,
      r: () => Ou,
      u: () => Cu,
      x: () => bu
    });
    var su = ju(34628);
    class Uu extends Error {
      constructor(uu) {
        super(`GLB refused: it ${uu}`), this.reason = uu, this.name = "GlbRefused"
      }
    }
    class Zu extends Error {
      constructor(uu) {
        super(uu), this.name = "GlbError"
      }
    }

    function Xu(uu) {
      return Reflect.get(uu, "scene")
    }
    const lu = 5130562,
      qu = "is not a binary glTF 2.0 file";

    function fu(uu) {
      var Eu;
      const ju = uu instanceof Uint8Array ? uu : new Uint8Array(uu),
        Zu = (0, su.d)(ju);
      if (null === Zu) throw new Uu(qu);
      const Xu = Zu.json,
        {
          jsonEnd: fu,
          length: Cu
        } = Zu,
        bu = new DataView(ju.buffer, ju.byteOffset, ju.byteLength);
      let cu = -1,
        Nu = 0;
      for (let hu = fu; hu < Cu;) {
        if (hu + 8 > Cu) throw new Uu(qu);
        const uu = bu.getUint32(hu, !0),
          Eu = bu.getUint32(hu + 4, !0);
        if (hu + 8 + uu > Cu || Eu === su.c || Eu === lu && -1 !== cu) throw new Uu(qu);
        Eu === lu && (cu = hu + 8, Nu = uu), hu += 8 + uu
      }
      let Ou = null;
      const Yu = null === (Eu = Xu.buffers) || void 0 === Eu ? void 0 : Eu[0];
      if (-1 !== cu && Yu && void 0 === Yu.uri) {
        if (!(Yu.byteLength >= 0) || Yu.byteLength > Nu) throw new Uu(qu);
        Ou = new Uint8Array(ju.buffer, ju.byteOffset + cu, Yu.byteLength)
      }
      return {
        json: Xu,
        bin: Ou,
        fileBytes: ju.byteLength
      }
    }

    function Cu(uu) {
      const Eu = uu.slice(uu.indexOf(",") + 1),
        ju = Uint8Array.fromBase64;
      if (ju) return ju(Eu).buffer;
      const su = atob(Eu),
        Uu = new Uint8Array(su.length);
      for (let Zu = 0; Zu < su.length; Zu++) Uu[Zu] = su.charCodeAt(Zu);
      return Uu.buffer
    }
    async function bu(uu) {
      if (uu.startsWith("data:")) return Cu(uu);
      const Eu = await fetch(uu);
      if (!Eu.ok) throw new Zu(`fetching ${uu} failed: ${Eu.status} ${Eu.statusText}`);
      return await Eu.arrayBuffer()
    }
    const cu = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      Nu = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      Ou = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      Yu = [
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
  34628: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      d: () => Zu,
      e: () => Xu
    });
    const su = 1179937895,
      Uu = 1313821514;

    function Zu(uu) {
      const Eu = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
      if (uu.byteLength < 20 || Eu.getUint32(0, !0) !== su || 2 !== Eu.getUint32(4, !0)) return null;
      const ju = Math.min(Eu.getUint32(8, !0), uu.byteLength),
        Zu = Eu.getUint32(12, !0);
      if (Eu.getUint32(16, !0) !== Uu || 20 + Zu > ju) return null;
      let Xu;
      try {
        Xu = JSON.parse((new TextDecoder).decode(uu.subarray(20, 20 + Zu)))
      } catch {
        return null
      }
      return "object" === typeof Xu && null !== Xu ? {
        json: Xu,
        jsonEnd: 20 + Zu,
        length: ju
      } : null
    }

    function Xu(uu) {
      var Eu;
      const ju = null === (Eu = Zu(uu)) || void 0 === Eu ? void 0 : Eu.json;
      if (void 0 === ju || !Array.isArray(ju.extensionsUsed) || !ju.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const su = ju.meshes;
      return Array.isArray(su) && su.some((uu => {
        const Eu = null === uu || void 0 === uu ? void 0 : uu.primitives;
        return Array.isArray(Eu) && Eu.some((uu => {
          const Eu = null === uu || void 0 === uu ? void 0 : uu.extensions;
          return null != (null === Eu || void 0 === Eu ? void 0 : Eu.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);