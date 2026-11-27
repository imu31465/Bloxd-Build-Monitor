export const id = 273;
export const ids = [273];
export const modules = {
  42184: (ee, ie, He) => {
    He.d(ie, {
      c: () => qe,
      f: () => Je,
      h: () => Re,
      i: () => oe,
      k: () => ke
    });
    var ye = He(1169),
      be = He(2278),
      Me = He(37987),
      Ke = He(38351);
    class Ue {
      constructor(ee, ie) {
        this.pose = ee, this.nodes = void 0, this.nodes = ee.boneNames.map((ee => ie.get(ee)))
      }
      write(ee) {
        this.pose.pose(ee), (0, Ke.o)(this.pose, this.nodes)
      }
    }

    function Fe(ee) {
      ee.unfreezeWorldMatrix();
      for (const ie of ee.getChildren()) Fe(ie)
    }
    async function Je(ee, ie, He, ye) {
      let {
        keepTransforms: be,
        backFaceCulling: Ke
      } = ye;
      const Ue = await (0, Me.o)(ie, ee),
        Je = (0, Me.i)(null !== He && void 0 !== He ? He : ie, ee, void 0, Ke);
      (0, Me.q)(Ue, Je, {
        keepTransforms: be,
        backFaceCulling: Ke,
        onProcessedMesh: ie => {
          ee.Nbe(ie, !1), ie.isVisible = !1
        }
      });
      for (const Me of Ue.rootNodes) Fe(Me);
      return Ue
    }

    function oe(ee, ie) {
      ee.isVisible = ie;
      for (const He of ee.getChildMeshes()) He.isVisible = ie
    }

    function Re(ee) {
      const ie = new Map;
      for (const He of ee.getNodes()) ie.set(He.name, He);
      return ie
    }

    function ke(ee, ie, He, ye) {
      oe(ee, !0), (0, Me.x)(ee, ie.overlayColour), He.attachTransformNode(ee, ye, He.getNamedNode(ye, ie.destNode))
    }
    class qe {
      constructor(ee, ie, He) {
        this.yp = ee, this.thinInstMgr = ie, this.Ix = He, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(ee, ie, He) {
        const ye = (0, Me.m)(ee, ie);
        return ye in this.modelCache || (this.modelCache[ye] = (async () => {
          try {
            const ye = Re(await Je(this.yp, ee, ie, {
                keepTransforms: void 0 !== He,
                backFaceCulling: !1
              })),
              be = void 0 === He ? null : (0, Ke.k)(He, (ee => {
                const ie = ye.get(ee);
                return ie ? (0, Ke.g)(ie) : null
              }));
            return {
              nodesByName: ye,
              bones: null === be ? null : new Ue(be, ye)
            }
          } catch (be) {
            throw delete this.modelCache[ye], console.error(`Failed to load preview attachment ${ye}:`, be), be
          }
        })()), this.modelCache[ye]
      }
      async update(ee, ie) {
        var He;
        const {
          thinInstMgr: Me,
          Ix: Ke
        } = this;
        this.cosmeticNames[ee] = ie;
        const Ue = this.attachmentsByType[ee];
        if (Ue)
          for (const {
              mesh: be,
              destNode: Je,
              bones: Re
            }
            of Ue) {
            null !== Re && (0, ye.mb)(this.shownBones, Re), oe(be, !1);
            const ee = Me.getNamedNode(Ke, Je);
            Me.detachTransformNodeIfFound(be, Ke, ee)
          }
        this.attachmentsByType[ee] = [];
        const Fe = (0, be.h)(ee, ie);
        if (null !== Fe && void 0 !== Fe && null !== (He = Fe.attachments) && void 0 !== He && He.length)
          for (const ye of Fe.attachments) {
            let He;
            try {
              He = await this.loadModel(ye.modelGlb, ye.texture, ye.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[ee] !== ie) return;
            const be = He.nodesByName.get(ye.modelNode);
            be ? (ke(be, ye, Me, Ke), this.attachmentsByType[ee].push({
              mesh: be,
              destNode: ye.destNode,
              bones: He.bones
            }), null !== He.bones && this.shownBones.push(He.bones)) : console.error(`Preview attachment node ${ye.modelNode} not found in ${ye.modelGlb}`)
          }
      }
      writePoses(ee) {
        for (const ie of this.shownBones) ie.write(ee)
      }
    }
  },
  42155: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      openMobLineupPreview: () => je,
      openMobPreview: () => ne,
      openPetPreview: () => se
    });
    var ye = He(40913),
      be = He(41195),
      Me = He(42157),
      Ke = He(38020),
      Ue = He(37913),
      Fe = He(41357),
      Je = He(42177),
      oe = He(39259),
      Re = He(37979),
      ke = He(37963),
      qe = He(37908),
      fe = He(39173),
      Te = He(39169),
      pe = He(38927),
      Xe = He(37987),
      ze = He(2969),
      Be = He(42184),
      Ee = He(2278);
    const ge = new Map;

    function Oe(ee, ie) {
      const He = function(ee) {
        return ee.flatMap((ee => {
          var ie;
          let [He, ye] = ee;
          const be = void 0 === ye || null === (ie = (0, Ee.h)(He, ye)) || void 0 === ie ? void 0 : ie.attachments;
          return null !== be && void 0 !== be ? be : []
        }))
      }(ie).map((ie => function(ee, ie) {
        let {
          modelGlb: He,
          texture: ye,
          animation: be
        } = ie;
        const Me = void 0 !== be,
          Ke = `${(0,Xe.m)(He,ye)}|${Me}`;
        let Ue = ge.get(Ke);
        return Ue || (Ue = (0, Be.f)(ee, He, ye, {
          keepTransforms: Me,
          backFaceCulling: !1
        }).then(Be.h, (ee => {
          throw ge.delete(Ke), ee
        })), ge.set(Ke, Ue)), Ue
      }(ee, ie).then((ee => ({
        attachment: ie,
        nodes: ee
      })), (ee => (console.error(`Mob preview: could not load ${ie.modelGlb}`, ee), null)))));
      return Promise.all(He).then((ee => ee.filter((ee => null !== ee))))
    }
    var de = He(38958),
      We = He(38940),
      te = He(38621),
      Ze = He(38447);
    He(42193), He(41601), He(42196);
    const we = 22,
      De = 13,
      Pe = Math.PI - Math.PI / 16,
      Ae = 6,
      Ye = Math.PI / 4;
    let Ve = null;
    const ae = {},
      ce = new Map;

    function xe() {
      if (null !== Ve) return Ve;
      const ee = document.createElement("canvas");
      ee.classList.add("MobPreviewCanvas");
      const ie = new ye.b(ee, !0, {
        preserveDrawingBuffer: !0
      });
      ie.Gbe = (0, ze.h)().PR.engine.Gbe;
      const He = new be.b(ie);
      He.clearColor = new Ke.e(0, 0, 0, 0), He.ambientColor = new Ke.Color3(1, 1, 1);
      const Je = new Me.b("iX", Math.PI / 2, Math.PI / 2, we, Ue.rf.Zero(), He),
        oe = new Fe.c("light", new Ue.rf(-.1, 1, -.3), He);
      return oe.diffuse = new Ke.Color3(1, 1, 1), oe.specular = new Ke.Color3(1, 1, 1), oe.groundColor = new Ke.Color3(.5, .5, .5), Ve = {
        engine: ie,
        yp: He,
        canvas: ee,
        camera: Je
      }, Ve
    }

    function Le(ee) {
      return ae[ee] ??= (0, pe.s)(ee, xe().yp, !0).catch((ie => {
        throw delete ae[ee], ie
      })), ae[ee]
    }

    function Ce(ee) {
      let ie = ce.get(ee);
      return ie || (ie = te.A[ee].loadModel(xe().yp, !1).then((ee => (ee.JY(!1), ee)), (ie => {
        throw ce.delete(ee), ie
      })), ce.set(ee, ie)), ie
    }

    function ve(ee) {
      var ie, He, ye;
      let {
        mobType: be,
        variation: Me,
        animation: Ke
      } = ee, Fe = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, Ee = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const ge = null !== (ie = null === Fe || void 0 === Fe ? void 0 : Fe.size) && void 0 !== ie ? ie : 1,
        we = null !== (He = null === Fe || void 0 === Fe ? void 0 : Fe.cosmetics) && void 0 !== He ? He : [],
        Ae = null !== (ye = null === Fe || void 0 === Fe ? void 0 : Fe.OW) && void 0 !== ye ? ye : null;
      let Ye = !1,
        Ve = null,
        ae = null;
      const {
        engine: ce,
        yp: ve
      } = xe(), ue = ve.onBeforeRenderObservable.add((() => {
        var ee;
        null === (ee = ae) || void 0 === ee || ee.render(ce.getDeltaTime())
      })), me = null === Ae ? null : Ce(Ae).catch((ee => (console.error(`Mob preview: could not load ${Ae}`, ee), null)));
      return Promise.all([Le(be), me, Oe(xe().yp, we)]).then((ee => {
        var ie, He, ye;
        let [Fe, Oe, ce] = ee;
        if (Ye) return;
        const Le = (0, ze.h)().PR.vx,
          {
            hitBoxDimensions: Ce
          } = (0, oe.d)(be),
          ve = De / Math.max(Ce.height, Ce.width);
        if (Ve = (0, pe.i)(be, ve * ge, !0, !0), Le.setPosition(Ve, Ee, -Ce.height * ve / 2, 0), Le.setRotationEulerY(Ve, Pe), Fe.meshApi instanceof We.b && we.length > 0) {
          for (const [ee, ie] of we) Fe.meshApi.updatePlayerCosmetic(null, Ve, ee, ie, !0);
          ! function(ee, ie) {
            const He = (0, ze.h)().PR.vx;
            for (const {
                attachment: ye,
                nodes: be
              }
              of ee) {
              const ee = be.get(ye.modelNode);
              ee ? (0, Be.k)((0, Xe.e)(ee, `${ee.name}Worn`), ye, He, ie) : console.error(`Mob preview: attachment node ${ye.modelNode} not found in ${ye.modelGlb}`)
            }
          }(ce, Ve)
        } else Fe.meshApi.updateVariation(Ve, be, null !== Me && void 0 !== Me ? Me : "default");
        null !== Ae && null !== Oe && function(ee, ie, He, ye) {
          var be;
          const Me = te.A[ee],
            Ke = (0, fe.j)();
          (0, fe.f)(Me, null === (be = (0, de.b)(He).meshMetadata.heldItemPositionParams) || void 0 === be ? void 0 : be.itemOffset, Ke);
          const Fe = Ze.b * Ke.wR.y,
            oe = Ke.usesQuaternion ? Ke.quaternion : Ue.Quaternion.FromEulerVector(Ke.rotation),
            Re = new Je.b(`${ie.name}Hand`, xe().yp);
          Re.position.jD((0, Te.e)(Ke.position, oe, Fe, Me.heldModelOffsetY())), Re.rotationQuaternion = oe, Re.wR.set(Ke.wR.x, Fe, Ke.wR.z), ie.clone(`${ie.name}Held`, Re).JY(!0);
          const ke = (0, ze.h)().PR.vx;
          ke.attachTransformNode(Re, ye, ke.getNamedNode(ye, "ArmRightMesh"))
        }(Ae, Oe, be, Ve), Le.set(Ve, "aOpacity", 1);
        const ue = null !== (ie = (0, de.b)(be).meshMetadata.lifeformTypeForModelOverride) && void 0 !== ie ? ie : be;
        ae = new qe.AnimatorState, ae.thinInstMgr = Le, ae.Ix = Ve, ae.Xbe = Le.Abe(Ve, 0), ae.modelLifeformType = ue, ae.nodeNameAliases = null !== (He = null === (ye = (0, Re.d)(ue)) || void 0 === ye ? void 0 : ye.nodeNameAliases) && void 0 !== He ? He : null, ae.startAnimation(Ke, ke.c.Movement)
      })).catch((ee => {
        console.error(`Mob preview: could not load ${be}`, ee)
      })), () => {
        Ye = !0, ve.onBeforeRenderObservable.remove(ue), null !== Ve && (0, ze.h)().PR.vx.delete(Ve)
      }
    }

    function ue(ee, ie) {
      return ve({
        mobType: "NPC",
        variation: null,
        animation: ee.animation
      }, ee, ie)
    }

    function me(ee) {
      let {
        mobType: ie,
        variation: He,
        metaInfo: ye,
        tamed: be
      } = ee, Me = !1, Ke = null, Ue = 0;
      const Fe = (0, ze.h)(),
        Je = Fe.PR.vx,
        oe = ee => {
          Ue += Ye * (ee / 1e3) % (2 * Math.PI), Je.setRotationEulerY(Ke, Ue)
        };
      return Le(ie).then((ee => {
        if (Me) return;
        Ke = (0, pe.i)(ie, Ae, !0, !0), Je.setPosition(Ke, 0, -Ae, 0), ee.meshApi.updateVariation(Ke, ie, He);
        const Ue = {
          wool: "Sheared" !== ye,
          saddle: "Saddled" === ye,
          antlers: "Antlers" === ye,
          collar: be
        };
        for (const [ie, He] of Object.entries(Ue)) Je.hasGroup(Ke, ie) && ee.meshApi.setMeshGroupVisibility(Ke, ie, He);
        Je.set(Ke, "aOpacity", 1), Fe.on("renderTickBegin", oe)
      })).catch((ee => {
        console.error(`Pet preview: could not load ${ie}`, ee)
      })), () => {
        Me = !0, Fe.off("renderTickBegin", oe), null !== Ke && Je.delete(Ke)
      }
    }
    class le {
      constructor(ee, ie) {
        this.place = ie, this.remove = null;
        const {
          engine: He,
          yp: ye,
          canvas: be
        } = xe();
        ee.appendChild(be), He.resize(), He.runRenderLoop((() => {
          ye.render()
        }))
      }
      show(ee) {
        var ie;
        null === (ie = this.remove) || void 0 === ie || ie.call(this), this.remove = this.place(ee)
      }
      resize(ee, ie) {
        const {
          engine: He,
          canvas: ye
        } = xe();
        ye.width = ee, ye.height = ie, He.resize()
      }
      close() {
        var ee;
        xe().engine.stopRenderLoop(), null === (ee = this.remove) || void 0 === ee || ee.call(this), this.remove = null
      }
    }
    class Se {
      constructor(ee) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new le(ee, (() => () => {}))
      }
      show(ee) {
        ee.figures !== this.view.figures && this.preload(ee.figures), this.view = ee, this.place()
      }
      resize(ee, ie) {
        this.preview.resize(ee, ie), this.aspect = ee / ie, this.place()
      }
      close() {
        this.preview.close();
        for (const ee of this.placed) null === ee || void 0 === ee || ee.remove();
        this.placed = []
      }
      preload(ee) {
        const ie = () => {};
        Le("NPC").catch(ie);
        for (const {
            OW: He,
            cosmetics: ye
          }
          of ee) null !== He && Ce(He).catch(ie), Oe(xe().yp, ye).catch(ie)
      }
      place() {
        const {
          figures: ee,
          shown: ie
        } = this.view, He = ee.map(((He, ye) => {
          var be;
          const Me = null !== (be = this.placed[ye]) && void 0 !== be ? be : null;
          if (!ie[ye]) return null === Me || void 0 === Me || Me.remove(), null;
          const Ke = (Ue = (ye + .5) / ee.length, Fe = this.aspect, (.5 - Ue) * (2 * we * Math.tan(xe().camera.fov / 2)) * Fe);
          var Ue, Fe;
          return null !== Me && Me.figure === He && Me.x === Ke ? Me : (null === Me || void 0 === Me || Me.remove(), {
            figure: He,
            x: Ke,
            remove: ue(He, Ke)
          })
        }));
        for (const ye of this.placed.slice(ee.length)) null === ye || void 0 === ye || ye.remove();
        this.placed = He
      }
    }

    function ne(ee) {
      return new le(ee, ve)
    }

    function je(ee) {
      return new Se(ee)
    }

    function se(ee) {
      return new le(ee, me)
    }
  },
  39577: (ee, ie, He) => {
    He.d(ie, {
      c: () => ke
    });
    var ye = He(38032),
      be = He(38133),
      Me = He(38162),
      Ke = He(38045),
      Ue = He(38034);

    function Fe(ee) {
      return `\n\t\t\t\t${(0,Ue.v)(ee,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, Ue.C)(ee, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, Ue.C)(ee, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, Ue.o)(ee, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Je(ee, ie) {
      let He = (0, Ue.zb)(ee, "skele" + (ie - 1));
      for (let be = ie - 2; be >= 0; be--) He = (0, Ue.pb)(ee, `boneIdx == ${be}`, (0, Ue.zb)(ee, `skele${be}`), He);
      const ye = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,Ue.C)(ee,"int","boneIdx",(0,Ue.xb)(ee,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,Ue.C)(ee,"vec3","bone",He)}\n\t\t\t\t${(0,Ue.C)(ee,"vec2","pivot",(0,Ue.o)(ee,"vec2","0.0",`${(0,Ue.Fb)(ee,"position")}.z`))}\n\t\t\t\t${(0,Ue.Z)(ee)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${ye}));`:`positionUpdated.yz += ${ye};`}\n\t\t`
    }

    function oe(ee) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,Ue.o)(ee,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Re = {
        x: 0,
        y: 0,
        z: 0,
        MR(ee, ie) {
          return this.x = ee[ie], this.y = ee[ie + 1], this.z = ee[ie + 2], this
        }
      },
      ke = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (ee, ie) => ({
          ...(0, ye.c)("CAPE"),
          BLOXD_CAPE_BONES: `${ee}`,
          BLOXD_CAPE_MAX_Y: (0, be.mb)(ie)
        }),
        getUniforms(ee) {
          return (0, Me.b)(function(ee) {
            const ie = [];
            for (let He = 0; He < ee; He++) ie.push({
              name: `skele${He}`,
              type: "highp vec3"
            });
            return ie
          }(this.skeleLen), "vertex", ee)
        },
        bind(ee) {
          for (let ie = 0; ie < this.skeleLen; ie++) ee.updateVector3(`skele${ie}`, Re.MR(this.skele, 3 * ie))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(ee, ie) {
          return "vertex" !== ee ? null : {
            CUSTOM_VERTEX_DEFINITIONS: Fe(ie),
            CUSTOM_VERTEX_UPDATE_POSITION: Je(ie, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: oe(ie)
          }
        }
      };
    (0, Ke.m)(ke)
  },
  39479: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      g: () => Re
    });
    var ye = He(38032),
      be = He(38162),
      Me = He(38034),
      Ke = He(38045);
    const Ue = "bloxdTextLodBias",
      Fe = [{
        name: Ue,
        type: "float"
      }],
      Je = "bloxdTextSample",
      oe = {
        planes: -.5,
        boards: -.5
      },
      Re = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, ye.c)("TEXT_SAMPLER"),
        getUniforms: ee => (0, be.b)(Fe, "fragment", ee),
        bind(ee) {
          ee.updateFloat(Ue, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(ee, ie) {
          if ("fragment" !== ee) return null;
          const He = (0, Me.J)(ie, `vec4 ${Je}(sampler2D s, vec2 uv, float bias)`, `fn ${Je}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            ye = (0, Me.J)(ie, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            be = `${(0,Me.S)(ie,"vDiffuseUV")} + uvOffset`,
            Ke = (0, Me.J)(ie, `${Je}(diffuseSampler, ${be}, ${(0,Me.zb)(ie,Ue)})`, `${Je}(diffuseSampler, diffuseSamplerSampler, ${be}, ${(0,Me.zb)(ie,Ue)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${He} {\n\t\t\t\t\t${(0,Me.C)(ie,"vec4","texel",ye)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Me.o)(ie,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Me.o)(ie,"vec3","0.0")}, ${(0,Me.o)(ie,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Me.F)(ie)]: `baseColor = ${Ke};`
          }
        }
      };
    (0, Ke.m)(Re)
  },
  42196: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      CapeMaterialPlugin: () => Ee,
      HueTintMaterialPlugin: () => ge,
      LifeformMaterialPlugin: () => Oe,
      OverlayMaterialPlugin: () => de
    });
    var ye = He(42201),
      be = He(38850);
    class Me extends((0, ye.e)(be.c)) {}(0, ye.h)(be.c, Me);
    var Ke = He(38126);
    class Ue extends((0, ye.e)(Ke.f)) {}(0, ye.h)(Ke.f, Ue);
    var Fe = He(38685);
    class Je extends((0, ye.e)(Fe.g)) {}(0, ye.h)(Fe.g, Je);
    var oe = He(38146),
      Re = He(41380),
      ke = He(38141);
    class qe extends((0, ye.e)(ke.f)) {
      constructor(ee, ie, He) {
        super(ee, ie, He), (0, oe.i)(ee)
      }
      dispose(ee) {
        (0, oe.m)(this._material), super.dispose(ee)
      }
    }(0, ye.h)(ke.f, qe), (0, ke.j)({
      disableUnusedSpecularTerm: ye.d,
      isLightingDisabled: ee => ee instanceof Re.StandardMaterial && ee.disableLighting
    });
    var fe = He(39479);
    class Te extends((0, ye.e)(fe.g)) {}(0, ye.h)(fe.g, Te);
    var pe = He(39577),
      Xe = He(38026),
      ze = He(38949),
      Be = He(38137);
    class Ee extends((0, ye.e)(pe.c)) {}(0, ye.h)(pe.c, Ee);
    class ge extends((0, ye.e)(Xe.b)) {}(0, ye.h)(Xe.b, ge);
    class Oe extends((0, ye.e)(ze.m)) {}(0, ye.h)(ze.m, Oe);
    class de extends((0, ye.e)(Be.d)) {}(0, ye.h)(Be.d, de)
  },
  42201: (ee, ie, He) => {
    He.d(ie, {
      d: () => me,
      e: () => ze,
      h: () => Ie
    });
    var ye = He(41380),
      be = He(42210),
      Me = He(42250),
      Ke = He(42217),
      Ue = He(38650),
      Fe = He(38659),
      Je = He(38664),
      oe = He(38673),
      Re = He(38070),
      ke = He(38075),
      qe = He(42219),
      fe = He(38045),
      Te = He(38057),
      pe = He(38034);

    function Xe(ee, ie) {
      return Object.assign((function(ee, He, ye, be) {
        return ie(this.featureState, ee, He, ye, be)
      }), {
        oR: ee
      })
    }

    function ze(ee) {
      const ie = class extends qe.e {
          constructor(ie, He) {
            const ye = (0, Te.V)(ie),
              be = ye && (0, Te.y)(ye, ee.name);
            for (var Me = arguments.length, Ke = new Array(Me > 2 ? Me - 2 : 0), Ue = 2; Ue < Me; Ue++) Ke[Ue - 2] = arguments[Ue];
            super(ie, ee.name, ee.priority, be ? be.defines : ee.defines(...Ke), !1), this.featureState = void 0, this.featureState = He, this._pluginManager._addPlugin(this), this._enable(!0), (0, Te.A)(this._material, ee, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return ee.className
          }
          isCompatible(ee) {
            return ee === pe.b.GLSL || ee === pe.b.WGSL
          }
        },
        He = (0, fe.e)(ee);
      for (const [ye, be] of Object.entries(fe.c)) {
        const Me = ee[ye];
        if (Me) {
          const ee = He[ye];
          Object.defineProperty(ie.prototype, be, {
            value: Xe(Me, ee),
            writable: !0,
            configurable: !0
          })
        }
      }
      return ie
    }
    class Be extends(ze(Ue.e)) {}
    var Ee = He(40913),
      ge = He(42223),
      Oe = He(42229);

    function de(ee, ie, He) {
      return (0, Oe.e)(He, ie.urls, (() => async function(ee, ie, He) {
        const {
          width: ye
        } = ee[0].getSize(), be = ee.map(((ee, He) => {
          var be;
          const Me = Math.round(ee.getSize().height / ye),
            Ke = null === ie || void 0 === ie ? void 0 : ie[He];
          return {
            pixels: Ke && Ke.byteLength === ye * ye * Me * 4 ? Ke : null !== (be = We.get(ee.getInternalTexture())) && void 0 !== be ? be : ee._readPixelsSync(),
            layers: Me
          }
        })), Me = Math.min(He.Nf().getCaps().texture2DArrayMaxLayerCount, 256), Ue = (0, Oe.c)(be, ye, Me).map((ee => {
          let {
            pixels: ie,
            layers: be
          } = ee;
          return {
            atlas: new ge.c(ie, ye, ye, be, Ee.b.TEXTUREFORMAT_RGBA, He, !0, !1, Ke.d.NEAREST_NEAREST_MIPLINEAR),
            layers: be
          }
        }));
        return ee.forEach(((ee, ie) => {
          const ye = ee.getInternalTexture();
          We.has(ye) || (! function(ee, ie) {
            const He = ie.createRawTexture(new Uint8Array(4), 1, 1, Ee.b.TEXTUREFORMAT_RGBA, !1, !1, Ke.d.NEAREST_SAMPLINGMODE);
            ee._hardwareTexture.release(), ie.unbindAllTextures(), He._swapAndDie(ee, !1)
          }(ye, He.Nf()), We.set(ye, be[ie].pixels))
        })), Ue
      }(ee, ie.pixels, He)))
    }
    const We = new WeakMap;
    var te = He(38682);
    class Ze extends(ze(Fe.k)) {
      constructor(ee, ie) {
        super(ee, ie), this.loaded = new Set, this.mirrors = void 0, this.mirrors = ie.textures.map((ee => ee.mirror)), ie.useWebGL2 && !ie.imagesPerAtlas.length && ie.textureAtlases.splice(0, ie.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((ee, ie) => {
          ee.onLoadObservable.add((ee => {
            this.setTextureArrayData(ee, ie).catch((ee => {
              console.error(`Failed to build the texture arrays, at atlas ${ie}`, ee)
            }))
          }))
        })), (0, te.l)(ie, ee.shaderLanguage)
      }
      async setTextureArrayData(ee, ie) {
        const He = this.featureState,
          {
            width: ye,
            height: be
          } = ee.getSize(),
          Me = this._material.shaderLanguage;
        if (!He.useWebGL2) return void(0, te.f)(this._material, He, ie, ye, Math.round(be / ye), Me);
        if (this.loaded.add(ie), this.loaded.size < this.mirrors.length) return;
        const Ke = await de(this.mirrors, He.sources, this._material.Xx());
        (0, te.d)(this._material, He, Ke, ye, Me)
      }
    }
    var we = He(42233),
      De = He(41429),
      Pe = He(37913),
      Ae = He(42240),
      Ye = He(41535),
      Ve = He(41421),
      ae = He(42177),
      ce = He(38314),
      xe = He(42244);
    class Le extends we.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Ce = {
      Mesh: Ae.e,
      TransformNode: ae.b,
      bR: we.c,
      VertexBuffer: we.f,
      BoundingInfo: De.c,
      rf: Pe.rf,
      ArenaBuffer: Le,
      SubMesh: Ve.b,
      VertexData: Ye.e,
      MirroredGeometry: xe.b,
      meshFromArrays: xe.f,
      plainMeshFromArrays: xe.h
    };
    (0, ce.f)(Ce);
    var ve = He(38146);
    class ue extends(ze(oe.e)) {
      constructor(ee, ie) {
        if (super(ee, ie), ee instanceof ye.StandardMaterial && ie.dirLightCount > 0) {
          const ie = ee,
            He = ie._blockDirtyMechanism;
          ie._blockDirtyMechanism = !0, ee.disableLighting = !0, ie._blockDirtyMechanism = He;
          const ye = (0, Te.V)(ee);
          ye && (ye.disableLighting = !0, (0, Te.S)(ye))
        }(0, ve.i)(ee)
      }
      dispose(ee) {
        (0, ve.m)(this._material), super.dispose(ee)
      }
    }

    function me(ee, ie) {
      if (!(ie instanceof ye.StandardMaterial) || ie.specularTexture) return;
      const {
        r: He,
        g: be,
        b: Me
      } = ie.specularColor;
      0 === He && 0 === be && 0 === Me && (ee.SPECULARTERM = !1)
    }(0, oe.d)({
      disableUnusedSpecularTerm: me
    });
    var le = He(38081),
      Se = He(38330);
    const ne = new RegExp(`^#define ${Je.c}\\s*$`, "m");
    class je extends(ze(Je.h)) {
      constructor(ee, ie) {
        super(ee, ie), this.xf = !1, ie.ditherOnlyWhileFading && (Se.f.add(ee), this.prewarmDitherTwins(ee))
      }
      prewarmDitherTwins(ee) {
        const ie = new WeakSet;
        ee.onEffectCreatedObservable.add((He => {
          let {
            effect: ye,
            subMesh: be
          } = He;
          if (this.featureState.prewarmingDither || ie.has(ye)) return;
          ie.add(ye);
          const Me = null === be || void 0 === be ? void 0 : be.getMesh();
          Me && !ne.test(ye.defines) && ee.Xx().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Me) || ie.delete(ye)
          }))
        }))
      }
      prewarmDither(ee) {
        if (this.xf || ee.RZ()) return !1;
        const ie = new Ve.b(0, 0, 0, 0, 0, ee, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(ee, ie)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== ie.effect
      }
      dispose(ee) {
        this.xf = !0, super.dispose(ee)
      }
    }
    const se = new Map;

    function Ie(ee, ie) {
      se.set(ee, ie)
    }
    Ie(Ue.e, Be), Ie(Fe.k, Ze), Ie(Je.h, je), Ie(oe.e, ue), (0, Re.d)({
      create: (ee, ie) => {
        const He = new ye.StandardMaterial(ee.name, ie);
        return (0, le.o)(ee, He), He.detailMap._pluginDefineNames
      },
      write: (ee, ie, He) => {
        (0, le.S)(ee.mirror, ie, He)
      },
      addFeature: (ee, ie, He) => {
        const ye = se.get(ie.feature);
        if (!ye) throw new Error(`${ie.feature.name} has no plugin class (registerPluginClass)`);
        new ye(ee.mirror, ie.state, ...He)
      },
      texture: (ee, ie, He) => {
        let {
          url: ye,
          noMipmap: be,
          invertY: Me,
          samplingMode: Ue,
          data: Fe,
          sets: Je
        } = He;
        if (!Fe) {
          const He = new Ke.d(ye, ie, be, Me, Ue);
          return Object.assign(He, Je), void(0, ke.F)(ee, He)
        }
        const oe = {},
          Re = new Promise(((ee, ie) => {
            oe.onLoad = ee, oe.onError = (ee, He) => {
              ie(new Error(`${Fe.context}: ${(null===He||void 0===He?void 0:He.message)||ee||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: qe,
            bytes: fe,
            label: Te
          } = Fe,
          pe = {
            noMipmap: be,
            invertY: !1,
            samplingMode: Ue,
            ...oe,
            mimeType: qe,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Xe = new Ke.d(null, ie, pe);
        le.q.set(Xe, Re), Object.assign(Xe, Je), Xe.updateURL(ye, fe);
        const ze = Xe.getInternalTexture();
        ze && (ze.label = Te), ee.uvSet = Xe.coordinatesIndex, ee.matrix.set((0, le.L)(Xe)), (0, ke.F)(ee, Xe)
      },
      cube: (ee, ie, He) => {
        let {
          rootUrl: ye,
          files: Me,
          noMipmap: Ue,
          luminance: Fe
        } = He;
        const {
          samplingMode: Je
        } = ee.sampler, oe = Je === (0, ke.y)(Ue) ? null : () => {
          (0, le.K)(Re, Je)
        }, Re = new be.c(ye, ie, null, Ue, Me, oe, null, (0, ke.u)(Fe));
        Re.coordinatesMode = Ke.d.SKYBOX_MODE, (0, ke.F)(ee, Re)
      },
      canvas: (ee, ie, He) => {
        let {
          width: ye,
          height: be,
          mipmaps: Ue,
          samplingMode: Fe,
          hasAlpha: Je = !1,
          wrap: oe = Ke.d.CLAMP_ADDRESSMODE
        } = He;
        const Re = new Me.d(ie, {
          width: ye,
          height: be
        }, ee, Ue, Fe);
        Re.hasAlpha = Je, Re.wrapU = oe, Re.wrapV = oe;
        const ke = (0, le.y)(Re);
        return (0, le.C)(ke, Re), ke
      }
    })
  },
  42244: (ee, ie, He) => {
    He.d(ie, {
      b: () => oe,
      f: () => Re,
      h: () => ke
    });
    var ye = He(42233),
      be = He(41175),
      Me = He(41429),
      Ke = He(41540),
      Ue = He(42240),
      Fe = He(41535),
      Je = He(38195);
    class oe extends Ke.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (ee, ie) => {
          this.releaseUnlessInstanced(ie)
        }, this.onLinked = null
      }
      link(ee) {
        var ie;
        (0, Je.k)(ee), this.model = ee, null === (ie = this.onLinked) || void 0 === ie || ie.call(this, ee)
      }
      relink() {
        this.release();
        const ee = [];
        for (const be of Object.values(this._vertexBuffers))
          if (!be.getIsInstanced()) {
            const {
              byteOffset: ie,
              byteStride: He,
              type: ye,
              normalized: Me
            } = be;
            ee.push({
              kind: be.getKind(),
              data: be.getData(),
              offset: ie,
              stride: He,
              components: be.getSize(),
              glType: ye,
              isNormalized: Me
            })
          } const ie = this._indices.length ? this._indices : null,
          {
            minimum: He,
            maximum: ye
          } = this.extend;
        this.link(new Je.c(ee, ie, this.getTotalVertices(), new Float64Array(He.Qbe()), new Float64Array(ye.Qbe())))
      }
      copy(ee) {
        if (!this.model) return super.copy(ee);
        const ie = new oe(ee, this.Xx()),
          He = this.eMe(void 0, !0);
        He && ie.setIndices(He);
        let Ke = !1;
        for (const Me in this._vertexBuffers) {
          const ee = this._vertexBuffers[Me],
            He = ee.getData();
          if (!He) continue;
          const Ue = ee.getSize(),
            {
              type: Fe,
              byteOffset: Je,
              byteStride: oe,
              normalized: Re
            } = ee;
          Ke ||= ee.isUpdatable();
          const ke = ee.getIsInstanced() ? (He instanceof Array ? 4 * He.length : He.byteLength) / oe : this.getTotalVertices(),
            qe = (0, be.s)(He, Ue, Fe, Je, oe, ke, !0),
            fe = {
              updatable: ee.isUpdatable(),
              stride: Ue,
              type: Fe,
              normalized: Re,
              takeBufferOwnership: !0,
              instanced: ee.getIsInstanced()
            };
          ie.setVerticesBuffer(new ye.f(this.Nf(), qe, Me, fe), ke)
        }
        return ie._updatable = Ke, ie._boundingInfo = new Me.c(this.extend.minimum, this.extend.maximum), ie.relink(), ie
      }
      static mergeMeshes(ee, ie, He, ye, be, Me) {
        const Fe = ee[0].Xx(),
          Je = new Ue.e(ee[0].name + "_merged", Fe),
          Re = new oe(Ke.b.RandomId(), Fe, void 0, !1, Je);
        try {
          if (!Ue.e.MergeMeshes(ee, ie, He, Je, be, Me)) return Je.dispose(), null
        } catch (ke) {
          throw Je.dispose(), ke
        }
        return Re.relink(), Je
      }
      removeVerticesData(ee) {
        this.releaseUnlessInstanced(ee), super.removeVerticesData(ee)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(ee) {
        var ie;
        ee && null !== (ie = this.getVertexBuffer(ee)) && void 0 !== ie && ie.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Je.q)(this.model), this.model = null)
      }
    }

    function Re(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ue.e(ee, He);
      const be = (0, Je.h)(ie),
        {
          positions: Me,
          normals: Re,
          uvs: ke,
          indices: qe,
          named: fe = {}
        } = ie,
        Te = new Fe.e;
      Te.positions = Me, Te.normals = null !== Re && void 0 !== Re ? Re : null, Te.uvs = null !== ke && void 0 !== ke ? ke : null, Te.indices = qe;
      const pe = new oe(Ke.b.RandomId(), He, Te, !1, ye);
      for (const {
          kind: Ke,
          components: Ue
        }
        of be.vertexAttributes) Ke in fe && ye.setVerticesData(Ke, fe[Ke], !1, Ue);
      return pe.link(be), ye
    }

    function ke(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const be = new Ue.e(ee, He),
        {
          positions: Me,
          normals: Ke,
          uvs: Je,
          indices: oe
        } = ie;
      return Object.assign(new Fe.e, {
        positions: Me,
        normals: Ke,
        uvs: Je,
        indices: oe
      }).applyToMesh(be, ye), be
    }
  },
  42229: (ee, ie, He) => {
    function ye(ee, ie, He) {
      const ye = ie * ie * 4,
        be = ee[0].layers,
        Me = be * (ee.length - 1) + ee[ee.length - 1].layers,
        Ke = new Uint8Array(Me * ye);
      ee.forEach(((ie, He) => {
        const Me = He + 1 < ee.length ? Math.min(ie.layers, be) : ie.layers;
        Ke.set(new Uint8Array(ie.pixels.buffer, ie.pixels.byteOffset, Me * ye), He * be * ye)
      }));
      const Ue = Math.max(1, Math.min(Me, He || Me));
      if (Ue === Me) return [{
        pixels: Ke,
        layers: Me
      }];
      const Fe = [];
      for (let Je = 0; Je < Me; Je += Ue) {
        const ee = Math.min(Me, Je + Ue);
        Fe.push({
          pixels: Ke.slice(Je * ye, ee * ye),
          layers: ee - Je
        })
      }
      return Fe
    }
    He.d(ie, {
      c: () => ye,
      e: () => Me
    });
    const be = new WeakMap;

    function Me(ee, ie, He) {
      var ye, Me;
      const Ke = null !== (ye = be.get(ee)) && void 0 !== ye ? ye : new Map;
      be.set(ee, Ke);
      const Ue = null !== (Me = Ke.get(ie[0])) && void 0 !== Me ? Me : [];
      Ke.set(ie[0], Ue);
      const Fe = Ue.find((ee => ee.urls.length === ie.length && ee.urls.every(((ee, He) => ee === ie[He]))));
      if (Fe) return Fe.built;
      const Je = {
        urls: [...ie],
        built: He()
      };
      return Ue.push(Je), Je.built.catch((() => {
        Ue.splice(Ue.indexOf(Je), 1)
      })), Je.built
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);