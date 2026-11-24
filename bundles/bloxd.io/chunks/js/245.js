export const id = 245;
export const ids = [245];
export const modules = {
  41223: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      openCharacterPreview: () => tm
    });
    var hm = fm(38159),
      Am = fm(2760),
      am = fm(641),
      xm = fm(37243),
      wm = fm(2216),
      Dm = fm(37233),
      im = fm(39930),
      Rm = fm(40196),
      pm = fm(41143),
      Em = fm(37181),
      om = fm(40344),
      Om = fm(37330),
      Ym = fm(40357),
      qm = fm(41194),
      jm = fm(37175),
      Vm = fm(1235),
      Im = fm(2208),
      Km = fm(37303),
      Qm = fm(37382);
    class nm {
      constructor(mm, Tm) {
        this.pose = mm, this.nodes = void 0, this.nodes = mm.boneNames.map((mm => Tm.get(mm)))
      }
      write(mm) {
        this.pose.pose(mm);
        const {
          rotations: Tm
        } = this.pose;
        for (let fm = 0; fm < this.nodes.length; fm++) {
          const mm = 4 * fm;
          this.nodes[fm].rotationQuaternion.set(Tm[mm], Tm[mm + 1], Tm[mm + 2], Tm[mm + 3])
        }
      }
    }

    function Jm(mm) {
      mm.unfreezeWorldMatrix();
      for (const Tm of mm.getChildren()) Jm(Tm)
    }

    function cm(mm, Tm) {
      mm.isVisible = Tm;
      for (const fm of mm.getChildMeshes()) fm.isVisible = Tm
    }
    class zm {
      constructor(mm, Tm, fm) {
        this.Aq = mm, this.thinInstMgr = Tm, this.QG = fm, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(mm, Tm, fm) {
        const hm = (0, Km.g)(mm, Tm);
        return hm in this.modelCache || (this.modelCache[hm] = (async () => {
          try {
            const hm = await (0, Km.h)(mm, this.Aq),
              Am = new Map;
            for (const mm of hm.getNodes()) Am.set(mm.name, mm);
            const am = (0, Km.d)(null !== Tm && void 0 !== Tm ? Tm : mm, this.Aq);
            (0, Km.k)(hm, am, {
              keepTransforms: void 0 !== fm,
              onProcessedMesh: mm => {
                (0, Km.n)(mm), this.Aq.whm(mm, !1), mm.isVisible = !1
              }
            });
            for (const mm of hm.rootNodes) Jm(mm);
            const xm = void 0 === fm ? null : (0, Qm.e)(fm, (mm => {
              var Tm, fm;
              return null !== (Tm = null === (fm = Am.get(mm)) || void 0 === fm ? void 0 : fm.rotationQuaternion) && void 0 !== Tm ? Tm : null
            }));
            return {
              nodesByName: Am,
              bones: null === xm ? null : new nm(xm, Am)
            }
          } catch (Am) {
            throw delete this.modelCache[hm], console.error(`Failed to load preview attachment ${hm}:`, Am), Am
          }
        })()), this.modelCache[hm]
      }
      async update(mm, Tm) {
        var fm;
        const {
          thinInstMgr: hm,
          QG: Am
        } = this;
        this.cosmeticNames[mm] = Tm;
        const am = this.attachmentsByType[mm];
        if (am)
          for (const {
              mesh: wm,
              destNode: Dm,
              bones: im
            }
            of am) {
            null !== im && (0, Vm.bb)(this.shownBones, im), cm(wm, !1);
            const mm = hm.getNamedNode(Am, Dm);
            hm.detachTransformNodeIfFound(wm, Am, mm)
          }
        this.attachmentsByType[mm] = [];
        const xm = (0, Im.g)(mm, Tm);
        if (null !== xm && void 0 !== xm && null !== (fm = xm.attachments) && void 0 !== fm && fm.length)
          for (const wm of xm.attachments) {
            let fm;
            try {
              fm = await this.loadModel(wm.modelGlb, wm.texture, wm.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[mm] !== Tm) return;
            const am = fm.nodesByName.get(wm.modelNode);
            if (!am) {
              console.error(`Preview attachment node ${wm.modelNode} not found in ${wm.modelGlb}`);
              continue
            }
            cm(am, !0), (0, Km.r)(am, wm.overlayColour);
            const xm = hm.getNamedNode(Am, wm.destNode);
            hm.attachTransformNode(am, Am, xm), this.attachmentsByType[mm].push({
              mesh: am,
              destNode: wm.destNode,
              bones: fm.bones
            }), null !== fm.bones && this.shownBones.push(fm.bones)
          }
      }
      writePoses(mm) {
        for (const Tm of this.shownBones) Tm.write(mm)
      }
    }
    var Zm = fm(37245),
      km = (fm(41173), fm(40590), fm(41176), fm(34322));
    let bm, Sm, em, Nm, Gm, Xm, Pm, Hm, ym, Cm;
    const rm = document.createElement("canvas");
    async function sm() {
      await new Promise((mm => {
        setTimeout((() => {
          mm()
        }), 100)
      }))
    }
    rm.classList.add("CharCustomisationPreviewCanvas");
    const lm = {};

    function Mm(mm, Tm) {
      rm.width = mm, rm.height = Tm, bm.resize()
    }
    let um = 0;
    class Bm {
      constructor(mm, Tm) {
        this.framing = Tm, this.ready = Cm, this.dev = {
          canvas: () => rm,
          isolateHead(mm) {
            const Tm = Xm.getNodeNames(Pm);
            for (let fm = 0; fm < Tm.length; fm++) "HeadMesh" !== Tm[fm] && "__root__" !== Tm[fm] && "TorsoNode" !== Tm[fm] && Xm.setNodeEnabled(Pm, fm, !1);
            if (mm) {
              const mm = Xm.getNamedNode(Pm, "HeadMesh");
              Xm.setNodeDisableColorWrite(Pm, mm, !0, (mm => {
                const Tm = new Ym.StandardMaterial(`${mm.name}_depthOnly`, mm.wG());
                return Tm.disableColorWrite = !0, Tm
              }))
            }
            Xm.setPosition(Pm, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const fm = mm.getBoundingClientRect();
        Mm(fm.width, fm.height), um++, bm.stopRenderLoop(), bm.runRenderLoop((() => {
          var mm, Tm;
          null === (mm = Hm) || void 0 === mm || mm.render(bm.getDeltaTime()), null === (Tm = ym) || void 0 === Tm || Tm.writePoses(performance.now() / 1e3), em.render()
        }))
      }
      isReady() {
        return !!Nm
      }
      setCosmetic(mm, Tm) {
        ! function(mm, Tm) {
          if (!Nm) return;
          const xm = (0, Am.d)();
          xm.nS(!1), hm.e.Player.meshApi.updatePlayerCosmetic(xm.xH, Pm, mm, Tm, !0), "cape" === mm && (Tm === am.f ? Gm.Dk(!1) : (Gm.Dk(!0), Gm.material.diffuseTexture = new qm.c(fm(38893)(`./cape_${Tm}.png`), Gm.wG(), {
            invertY: !1,
            samplingMode: qm.c.NEAREST_NEAREST_MIPLINEAR
          })));
          lm[mm] = ym.update(mm, Tm)
        }(mm, Tm)
      }
      playEmote(mm) {
        if (!Hm) return;
        if (!mm) return void Hm.stopAnimation(Dm.h.Emote);
        const Tm = (0, xm.c)((0, wm.i)(mm).animation);
        Hm.startAnimation(Tm, Dm.h.Emote, 0, wm.c)
      }
      async untilDrawn(mm) {
        if (await sm(), "cape" === mm && Gm) {
          const mm = Gm.material,
            Tm = null === mm || void 0 === mm ? void 0 : mm.diffuseTexture;
          Tm && !Tm.isReady() && (await new Promise((mm => {
            Tm.onLoadObservable.addOnce((() => {
              mm()
            }))
          })), await sm())
        }
        lm[mm] && (await lm[mm], await sm()), await em.whenReadyAsync(), await new Promise((mm => {
          em.onAfterRenderObservable.addOnce((() => {
            mm()
          }))
        }))
      }
      setOrbit(mm) {
        Lm(mm)
      }
      resetCamera() {
        Sm.inertialAlphaOffset = 0, Sm.inertialBetaOffset = 0, Sm.inertialRadiusOffset = 0, Lm(km.c[this.framing])
      }
      resize(mm, Tm) {
        Mm(mm, Tm)
      }
      close() {
        this.closed || (this.closed = !0, um--, 0 === um && bm.stopRenderLoop())
      }
    }

    function Lm(mm) {
      let {
        yaw: Tm,
        pitch: fm,
        radius: hm,
        target: Am
      } = mm;
      Sm.alpha = Tm, Sm.beta = fm, hm && (Sm.radius = hm), Am && Sm.target.set(Am[0], Am[1], Am[2])
    }

    function tm(mm, Tm) {
      return mm.appendChild(rm), bm || function() {
        bm = new im.d(rm, !0, {
          preserveDrawingBuffer: !0
        });
        const mm = (0, Am.d)();
        bm.fhm = mm.qY.engine.fhm, em = new Rm.c(bm), em.clearColor = new Om.e(0, 0, 0, 0), em.ambientColor = new Om.Color3(1, 1, 1), Sm = new pm.e("Bq", 0, 0, 1, Em.WO.Zero(), em), Sm.attachControl(rm, !0), Sm.panningSensibility = 0, Cm = (0, hm.B)("Player", em, !0).then((Tm => {
          Nm = Tm.meshApi, Gm = Tm.capeMesh, Xm = mm.qY.YG;
          const fm = 8.33;
          Pm = (0, hm.o)("Player", fm, !0, !0), Xm.setPosition(Pm, 0, -8.33, 0);
          const Am = Xm.getNamedNode(Pm, "BodyMesh");
          Xm.attachTransformNode(Gm, Pm, Am), Xm.set(Pm, "aOpacity", 1), Xm.iH(Pm, "aOpacity", 1), ym = new zm(em, Xm, Pm), Hm = new jm.AnimatorState, Hm.IE = mm, Hm.thinInstMgr = Xm, Hm.QG = Pm, Hm.kfm = Xm.hhm(Pm, 0), Hm.modelLifeformType = "Player", Hm.nodeNameAliases = (0, Zm.c)("Player").nodeNameAliases;
          const am = Gm.DH().boundingBox;
          Gm.position.y = ((24 - am.maximum.y + am.minimum.y) / 2 - 1 / 32) / fm, Gm.position.z = -1 / fm, Gm.rotationQuaternion = null;
          const xm = Math.PI / 18,
            wm = am.maximum.y / fm;
          Gm.rotation.x = xm;
          const Dm = Math.cos(xm),
            im = Math.sin(xm);
          Gm.position.y += wm * (1 - Dm) + 0 * im, Gm.position.z -= wm * im + 0 * (1 - Dm);
          const Rm = new Ym.StandardMaterial("capeMaterial", Gm.wG());
          Gm.material = Rm;
          const pm = new Om.Color3(1, 1, 1);
          Rm.diffuseColor = new Om.Color3, Rm.specularColor = new Om.Color3, Rm.emissiveColor = new Om.Color3, Rm.ambientColor = new Om.Color3, pm.scaleToRef(.43, Rm.diffuseColor), pm.scaleToRef(1.75, Rm.ambientColor), Rm.freeze();
          const qm = new om.c("light", new Em.WO(-.1, 1, -.3), em);
          qm.diffuse = new Om.Color3(1, 1, 1), qm.specular = new Om.Color3(1, 1, 1), qm.groundColor = new Om.Color3(.5, .5, .5)
        }))
      }(), new Bm(mm, Tm)
    }
  },
  38890: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Em
    });
    var hm = fm(37255),
      Am = fm(37267),
      am = fm(37507),
      xm = fm(37274),
      wm = fm(37260);

    function Dm(mm) {
      return `\n\t\t\t\t${(0,wm.r)(mm,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, wm.u)(mm, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, wm.u)(mm, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, wm.j)(mm, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function im(mm, Tm) {
      let fm = (0, wm.Ab)(mm, "skele" + (Tm - 1));
      for (let Am = Tm - 2; Am >= 0; Am--) fm = (0, wm.nb)(mm, `boneIdx == ${Am}`, (0, wm.Ab)(mm, `skele${Am}`), fm);
      const hm = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,wm.u)(mm,"int","boneIdx",(0,wm.tb)(mm,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,wm.u)(mm,"vec3","bone",fm)}\n\t\t\t\t${(0,wm.u)(mm,"vec2","pivot",(0,wm.j)(mm,"vec2","0.0",`${(0,wm.Ib)(mm,"position")}.z`))}\n\t\t\t\t${(0,wm.T)(mm)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${hm}));`:`positionUpdated.yz += ${hm};`}\n\t\t`
    }

    function Rm(mm) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,wm.j)(mm,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const pm = {
        x: 0,
        y: 0,
        z: 0,
        UTm(mm, Tm) {
          return this.x = mm[Tm], this.y = mm[Tm + 1], this.z = mm[Tm + 2], this
        }
      },
      Em = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (mm, Tm) => ({
          ...(0, hm.b)("CAPE"),
          BLOXD_CAPE_BONES: `${mm}`,
          BLOXD_CAPE_MAX_Y: (0, Am.qb)(Tm)
        }),
        getUniforms(mm) {
          return (0, am.c)(function(mm) {
            const Tm = [];
            for (let fm = 0; fm < mm; fm++) Tm.push({
              name: `skele${fm}`,
              type: "highp vec3"
            });
            return Tm
          }(this.skeleLen), "vertex", mm)
        },
        bind(mm) {
          for (let Tm = 0; Tm < this.skeleLen; Tm++) mm.updateVector3(`skele${Tm}`, pm.UTm(this.skele, 3 * Tm))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(mm, Tm) {
          return "vertex" !== mm ? null : {
            CUSTOM_VERTEX_DEFINITIONS: Dm(Tm),
            CUSTOM_VERTEX_UPDATE_POSITION: im(Tm, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Rm(Tm)
          }
        }
      };
    (0, xm.n)(Em)
  },
  38781: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Rm,
      d: () => pm
    });
    var hm = fm(37255),
      Am = fm(37507),
      am = fm(37260),
      xm = fm(37274);
    const wm = "bloxdTextLodBias",
      Dm = [{
        name: wm,
        type: "float"
      }],
      im = "bloxdTextSample",
      Rm = {
        planes: -.5,
        boards: -.5
      },
      pm = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, hm.b)("TEXT_SAMPLER"),
        getUniforms: mm => (0, Am.c)(Dm, "fragment", mm),
        bind(mm) {
          mm.updateFloat(wm, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(mm, Tm) {
          if ("fragment" !== mm) return null;
          const fm = (0, am.B)(Tm, `vec4 ${im}(sampler2D s, vec2 uv, float bias)`, `fn ${im}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            hm = (0, am.B)(Tm, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Am = `${(0,am.O)(Tm,"vDiffuseUV")} + uvOffset`,
            xm = (0, am.B)(Tm, `${im}(diffuseSampler, ${Am}, ${(0,am.Ab)(Tm,wm)})`, `${im}(diffuseSampler, diffuseSamplerSampler, ${Am}, ${(0,am.Ab)(Tm,wm)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${fm} {\n\t\t\t\t\t${(0,am.u)(Tm,"vec4","texel",hm)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,am.j)(Tm,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,am.j)(Tm,"vec3","0.0")}, ${(0,am.j)(Tm,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, am.w)(Tm)]: `baseColor = ${xm};`
          }
        }
      };
    (0, xm.n)(pm)
  },
  41176: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      CapeMaterialPlugin: () => Km,
      HueTintMaterialPlugin: () => Qm,
      LifeformMaterialPlugin: () => nm,
      OverlayMaterialPlugin: () => Jm
    });
    var hm = fm(41178),
      Am = fm(38070);
    class am extends((0, hm.h)(Am.b)) {}(0, hm.j)(Am.b, am);
    var xm = fm(37250);
    class wm extends((0, hm.h)(xm.d)) {}(0, hm.j)(xm.d, wm);
    var Dm = fm(37905);
    class im extends((0, hm.h)(Dm.f)) {}(0, hm.j)(Dm.f, im);
    var Rm = fm(37488),
      pm = fm(40357),
      Em = fm(37479);
    class om extends((0, hm.h)(Em.i)) {
      constructor(mm, Tm, fm) {
        super(mm, Tm, fm), (0, Rm.e)(mm)
      }
      dispose(mm) {
        (0, Rm.i)(this._material), super.dispose(mm)
      }
    }(0, hm.j)(Em.i, om), (0, Em.k)({
      disableUnusedSpecularTerm: hm.d,
      isLightingDisabled: mm => mm instanceof pm.StandardMaterial && mm.disableLighting
    });
    var Om = fm(38781);
    class Ym extends((0, hm.h)(Om.d)) {}(0, hm.j)(Om.d, Ym);
    var qm = fm(38890),
      jm = fm(37341),
      Vm = fm(38196),
      Im = fm(37294);
    class Km extends((0, hm.h)(qm.d)) {}(0, hm.j)(qm.d, Km);
    class Qm extends((0, hm.h)(jm.b)) {}(0, hm.j)(jm.b, Qm);
    class nm extends((0, hm.h)(Vm.n)) {}(0, hm.j)(Vm.n, nm);
    class Jm extends((0, hm.h)(Im.b)) {}(0, hm.j)(Im.b, Jm)
  },
  41178: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => lm,
      h: () => Vm,
      j: () => Um
    });
    var hm = fm(40357),
      Am = fm(41186),
      am = fm(41220),
      xm = fm(41194),
      wm = fm(37872),
      Dm = fm(37880),
      im = fm(37888),
      Rm = fm(37894),
      pm = fm(37286),
      Em = fm(37290),
      om = fm(41198),
      Om = fm(37274),
      Ym = fm(37276),
      qm = fm(37260);

    function jm(mm, Tm) {
      return Object.assign((function(mm, fm, hm, Am) {
        return Tm(this.featureState, mm, fm, hm, Am)
      }), {
        nO: mm
      })
    }

    function Vm(mm) {
      const Tm = class extends om.e {
          constructor(Tm, fm) {
            const hm = (0, Ym.cb)(Tm),
              Am = hm && (0, Ym.y)(hm, mm.name);
            for (var am = arguments.length, xm = new Array(am > 2 ? am - 2 : 0), wm = 2; wm < am; wm++) xm[wm - 2] = arguments[wm];
            super(Tm, mm.name, mm.priority, Am ? Am.defines : mm.defines(...xm), !1), this.featureState = void 0, this.featureState = fm, this._pluginManager._addPlugin(this), this._enable(!0), (0, Ym.A)(this._material, mm, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return mm.className
          }
          isCompatible(mm) {
            return mm === qm.b.GLSL || mm === qm.b.WGSL
          }
        },
        fm = (0, Om.i)(mm);
      for (const [hm, Am] of Object.entries(Om.d)) {
        const am = mm[hm];
        if (am) {
          const mm = fm[hm];
          Object.defineProperty(Tm.prototype, Am, {
            value: jm(am, mm),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Tm
    }
    class Im extends(Vm(wm.e)) {}
    var Km = fm(39930),
      Qm = fm(41201);
    const nm = new WeakMap;

    function Jm(mm, Tm, fm) {
      let hm = nm.get(fm);
      hm || (hm = new Map, nm.set(fm, hm));
      const {
        url: Am
      } = mm;
      let am = hm.get(Am);
      return am || (am = async function(mm, Tm, fm) {
        var hm;
        const {
          width: Am,
          height: am
        } = mm.getSize(), wm = Math.round(am / Am), Dm = mm.getInternalTexture(), im = Tm && Tm.byteLength === Am * Am * wm * 4 ? Tm : null !== (hm = cm.get(Dm)) && void 0 !== hm ? hm : mm._readPixelsSync(), Rm = new Qm.c(im, Am, Am, wm, Km.d.TEXTUREFORMAT_RGBA, fm, !0, !1, xm.c.NEAREST_NEAREST_MIPLINEAR);
        cm.has(Dm) || (! function(mm, Tm) {
          const fm = Tm.createRawTexture(new Uint8Array(4), 1, 1, Km.d.TEXTUREFORMAT_RGBA, !1, !1, xm.c.NEAREST_SAMPLINGMODE);
          mm._hardwareTexture.release(), Tm.unbindAllTextures(), fm._swapAndDie(mm, !1)
        }(Dm, fm.dO()), cm.set(Dm, im));
        return Rm
      }(mm, Tm, fm), hm.set(Am, am), am.catch((() => {
        hm.delete(Am)
      }))), am
    }
    const cm = new WeakMap;
    var zm = fm(37903);
    class Zm extends(Vm(Dm.j)) {
      constructor(mm, Tm) {
        super(mm, Tm), Tm.textures.forEach(((mm, Tm) => {
          mm.mirror.onLoadObservable.add((mm => {
            this.setTextureArrayData(mm, Tm).catch((mm => {
              console.error(`Failed to build texture array for atlas ${Tm}`, mm)
            }))
          }))
        })), (0, zm.h)(Tm, mm.shaderLanguage)
      }
      async setTextureArrayData(mm, Tm) {
        var fm, hm;
        const Am = this.featureState,
          {
            width: am,
            height: xm
          } = mm.getSize(),
          wm = Am.useWebGL2 ? await Jm(mm, null !== (fm = null === (hm = Am.sources.pixels) || void 0 === hm ? void 0 : hm[Tm]) && void 0 !== fm ? fm : null, this._material.wG()) : null;
        (0, zm.c)(this._material, Am, Tm, wm, am, Math.round(xm / am), this._material.shaderLanguage)
      }
    }
    var km = fm(41203),
      bm = fm(40404),
      Sm = fm(37181),
      em = fm(41212),
      Nm = fm(40527),
      Gm = fm(40391),
      Xm = fm(41166),
      Pm = fm(37661),
      Hm = fm(41218);
    class ym extends km.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Cm = {
      Mesh: em.c,
      TransformNode: Xm.c,
      XO: km.e,
      VertexBuffer: km.g,
      BoundingInfo: bm.b,
      WO: Sm.WO,
      ArenaBuffer: ym,
      SubMesh: Gm.e,
      VertexData: Nm.c,
      MirroredGeometry: Hm.d,
      meshFromArrays: Hm.f,
      plainMeshFromArrays: Hm.h
    };
    (0, Pm.f)(Cm);
    var rm = fm(37488);
    class sm extends(Vm(Rm.g)) {
      constructor(mm, Tm) {
        if (super(mm, Tm), mm instanceof hm.StandardMaterial && Tm.dirLightCount > 0) {
          const Tm = mm,
            fm = Tm._blockDirtyMechanism;
          Tm._blockDirtyMechanism = !0, mm.disableLighting = !0, Tm._blockDirtyMechanism = fm;
          const hm = (0, Ym.cb)(mm);
          hm && (hm.disableLighting = !0, (0, Ym.$)(hm))
        }(0, rm.e)(mm)
      }
      dispose(mm) {
        (0, rm.i)(this._material), super.dispose(mm)
      }
    }

    function lm(mm, Tm) {
      if (!(Tm instanceof hm.StandardMaterial) || Tm.specularTexture) return;
      const {
        r: fm,
        g: Am,
        b: am
      } = Tm.specularColor;
      0 === fm && 0 === Am && 0 === am && (mm.SPECULARTERM = !1)
    }(0, Rm.d)({
      disableUnusedSpecularTerm: lm
    });
    var Mm = fm(37357),
      um = fm(37671);
    const Bm = new RegExp(`^#define ${im.c}\\s*$`, "m");
    class Lm extends(Vm(im.j)) {
      constructor(mm, Tm) {
        super(mm, Tm), this.PO = !1, Tm.ditherOnlyWhileFading && (um.e.add(mm), this.prewarmDitherTwins(mm))
      }
      prewarmDitherTwins(mm) {
        const Tm = new WeakSet;
        mm.onEffectCreatedObservable.add((fm => {
          let {
            effect: hm,
            subMesh: Am
          } = fm;
          if (this.featureState.prewarmingDither || Tm.has(hm)) return;
          Tm.add(hm);
          const am = null === Am || void 0 === Am ? void 0 : Am.getMesh();
          am && !Bm.test(hm.defines) && mm.wG().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(am) || Tm.delete(hm)
          }))
        }))
      }
      prewarmDither(mm) {
        if (this.PO || mm.aJ()) return !1;
        const Tm = new Gm.e(0, 0, 0, 0, 0, mm, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(mm, Tm)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Tm.effect
      }
      dispose(mm) {
        this.PO = !0, super.dispose(mm)
      }
    }
    const tm = new Map;

    function Um(mm, Tm) {
      tm.set(mm, Tm)
    }
    Um(wm.e, Im), Um(Dm.j, Zm), Um(im.j, Lm), Um(Rm.g, sm), (0, pm.d)({
      create: (mm, Tm) => {
        const fm = new hm.StandardMaterial(mm.name, Tm);
        return (0, Mm.s)(mm, fm), fm.detailMap._pluginDefineNames
      },
      write: (mm, Tm, fm) => {
        (0, Mm.W)(mm.mirror, Tm, fm)
      },
      addFeature: (mm, Tm, fm) => {
        const hm = tm.get(Tm.feature);
        if (!hm) throw new Error(`${Tm.feature.name} has no plugin class (registerPluginClass)`);
        new hm(mm.mirror, Tm.state, ...fm)
      },
      texture: (mm, Tm, fm) => {
        let {
          url: hm,
          noMipmap: Am,
          invertY: am,
          samplingMode: wm,
          data: Dm,
          sets: im
        } = fm;
        if (!Dm) {
          const fm = new xm.c(hm, Tm, Am, am, wm);
          return Object.assign(fm, im), void(0, Em.H)(mm, fm)
        }
        const Rm = {},
          pm = new Promise(((mm, Tm) => {
            Rm.onLoad = mm, Rm.onError = (mm, fm) => {
              Tm(new Error(`${Dm.context}: ${(null===fm||void 0===fm?void 0:fm.message)||mm||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: om,
            bytes: Om,
            label: Ym
          } = Dm,
          qm = {
            noMipmap: Am,
            invertY: !1,
            samplingMode: wm,
            ...Rm,
            mimeType: om,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          jm = new xm.c(null, Tm, qm);
        Mm.w.set(jm, pm), Object.assign(jm, im), jm.updateURL(hm, Om);
        const Vm = jm.getInternalTexture();
        Vm && (Vm.label = Ym), mm.uvSet = jm.coordinatesIndex, mm.matrix.set((0, Mm.P)(jm)), (0, Em.H)(mm, jm)
      },
      cube: (mm, Tm, fm) => {
        let {
          rootUrl: hm,
          files: am,
          noMipmap: wm,
          luminance: Dm
        } = fm;
        const {
          samplingMode: im
        } = mm.sampler, Rm = im === (0, Em.y)(wm) ? null : () => {
          (0, Mm.L)(pm, im)
        }, pm = new Am.b(hm, Tm, null, wm, am, Rm, null, (0, Em.w)(Dm));
        pm.coordinatesMode = xm.c.SKYBOX_MODE, (0, Em.H)(mm, pm)
      },
      canvas: (mm, Tm, fm) => {
        let {
          width: hm,
          height: Am,
          mipmaps: wm,
          samplingMode: Dm,
          hasAlpha: im = !1,
          wrap: Rm = xm.c.CLAMP_ADDRESSMODE
        } = fm;
        const pm = new am.b(Tm, {
          width: hm,
          height: Am
        }, mm, wm, Dm);
        pm.hasAlpha = im, pm.wrapU = Rm, pm.wrapV = Rm;
        const Em = (0, Mm.B)(pm);
        return (0, Mm.F)(Em, pm), Em
      }
    })
  },
  41218: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Rm,
      f: () => pm,
      h: () => Em
    });
    var hm = fm(41203),
      Am = fm(40180),
      am = fm(40404),
      xm = fm(40529),
      wm = fm(41212),
      Dm = fm(40527),
      im = fm(37545);
    class Rm extends xm.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (mm, Tm) => {
          this.releaseUnlessInstanced(Tm)
        }, this.onLinked = null
      }
      link(mm) {
        var Tm;
        (0, im.i)(mm), this.model = mm, null === (Tm = this.onLinked) || void 0 === Tm || Tm.call(this, mm)
      }
      relink() {
        this.release();
        const mm = [];
        for (const Am of Object.values(this._vertexBuffers))
          if (!Am.getIsInstanced()) {
            const {
              byteOffset: Tm,
              byteStride: fm,
              type: hm,
              normalized: am
            } = Am;
            mm.push({
              kind: Am.getKind(),
              data: Am.getData(),
              offset: Tm,
              stride: fm,
              components: Am.getSize(),
              glType: hm,
              isNormalized: am
            })
          } const Tm = this._indices.length ? this._indices : null,
          {
            minimum: fm,
            maximum: hm
          } = this.extend;
        this.link(new im.e(mm, Tm, this.getTotalVertices(), new Float64Array(fm.ahm()), new Float64Array(hm.ahm())))
      }
      copy(mm) {
        if (!this.model) return super.copy(mm);
        const Tm = new Rm(mm, this.wG()),
          fm = this.xhm(void 0, !0);
        fm && Tm.setIndices(fm);
        let xm = !1;
        for (const am in this._vertexBuffers) {
          const mm = this._vertexBuffers[am],
            fm = mm.getData();
          if (!fm) continue;
          const wm = mm.getSize(),
            {
              type: Dm,
              byteOffset: im,
              byteStride: Rm,
              normalized: pm
            } = mm;
          xm ||= mm.isUpdatable();
          const Em = mm.getIsInstanced() ? (fm instanceof Array ? 4 * fm.length : fm.byteLength) / Rm : this.getTotalVertices(),
            om = (0, Am.u)(fm, wm, Dm, im, Rm, Em, !0),
            Om = {
              updatable: mm.isUpdatable(),
              stride: wm,
              type: Dm,
              normalized: pm,
              takeBufferOwnership: !0,
              instanced: mm.getIsInstanced()
            };
          Tm.setVerticesBuffer(new hm.g(this.dO(), om, am, Om), Em)
        }
        return Tm._updatable = xm, Tm._boundingInfo = new am.b(this.extend.minimum, this.extend.maximum), Tm.relink(), Tm
      }
      static mergeMeshes(mm, Tm, fm, hm, Am, am) {
        const Dm = mm[0].wG(),
          im = new wm.c(mm[0].name + "_merged", Dm),
          pm = new Rm(xm.d.RandomId(), Dm, void 0, !1, im);
        try {
          if (!wm.c.MergeMeshes(mm, Tm, fm, im, Am, am)) return im.dispose(), null
        } catch (Em) {
          throw im.dispose(), Em
        }
        return pm.relink(), im
      }
      removeVerticesData(mm) {
        this.releaseUnlessInstanced(mm), super.removeVerticesData(mm)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(mm) {
        var Tm;
        mm && null !== (Tm = this.getVertexBuffer(mm)) && void 0 !== Tm && Tm.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, im.m)(this.model), this.model = null)
      }
    }

    function pm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new wm.c(mm, fm);
      const Am = (0, im.g)(Tm),
        {
          positions: am,
          normals: pm,
          uvs: Em,
          indices: om,
          named: Om = {}
        } = Tm,
        Ym = new Dm.c;
      Ym.positions = am, Ym.normals = null !== pm && void 0 !== pm ? pm : null, Ym.uvs = null !== Em && void 0 !== Em ? Em : null, Ym.indices = om;
      const qm = new Rm(xm.d.RandomId(), fm, Ym, !1, hm);
      for (const {
          kind: xm,
          components: wm
        }
        of Am.vertexAttributes) xm in Om && hm.setVerticesData(xm, Om[xm], !1, wm);
      return qm.link(Am), hm
    }

    function Em(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Am = new wm.c(mm, fm),
        {
          positions: am,
          normals: xm,
          uvs: im,
          indices: Rm
        } = Tm;
      return Object.assign(new Dm.c, {
        positions: am,
        normals: xm,
        uvs: im,
        indices: Rm
      }).applyToMesh(Am, hm), Am
    }
  },
  38893: (mm, Tm, fm) => {
    var hm = {
      "./cape_cow_cream.png": 27808,
      "./cape_cow_normal.png": 27811,
      "./cape_creator_level1.png": 27818,
      "./cape_creator_level2.png": 27826,
      "./cape_creator_level3.png": 27833,
      "./cape_none.png": 27838,
      "./cape_pig.png": 27841,
      "./cape_sheep.png": 27846,
      "./cape_super.png": 27855,
      "./cape_super_inverted.png": 27857,
      "./cape_youtuber.png": 27866
    };

    function Am(mm) {
      var Tm = am(mm);
      return fm(Tm)
    }

    function am(mm) {
      if (!fm.o(hm, mm)) {
        var Tm = new Error("Cannot find module '" + mm + "'");
        throw Tm.code = "MODULE_NOT_FOUND", Tm
      }
      return hm[mm]
    }
    Am.keys = function() {
      return Object.keys(hm)
    }, Am.resolve = am, mm.exports = Am, Am.id = 38893
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);