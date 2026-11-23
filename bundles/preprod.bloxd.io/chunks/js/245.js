export const id = 245;
export const ids = [245];
export const modules = {
  38631: (CC, zC, ZC) => {
    var QC = {
      "./cape_cow_cream.png": 27940,
      "./cape_cow_normal.png": 27949,
      "./cape_creator_level1.png": 27958,
      "./cape_creator_level2.png": 27960,
      "./cape_creator_level3.png": 27965,
      "./cape_none.png": 27970,
      "./cape_pig.png": 27978,
      "./cape_sheep.png": 27981,
      "./cape_super.png": 27987,
      "./cape_super_inverted.png": 27996,
      "./cape_youtuber.png": 28e3
    };

    function wC(CC) {
      var zC = bC(CC);
      return ZC(zC)
    }

    function bC(CC) {
      if (!ZC.o(QC, CC)) {
        var zC = new Error("Cannot find module '" + CC + "'");
        throw zC.code = "MODULE_NOT_FOUND", zC
      }
      return QC[CC]
    }
    wC.keys = function() {
      return Object.keys(QC)
    }, wC.resolve = bC, CC.exports = wC, wC.id = 38631
  },
  41e3: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      openCharacterPreview: () => yC
    });
    var QC = ZC(37934),
      wC = ZC(2753),
      bC = ZC(583),
      nC = ZC(37023),
      fC = ZC(2173),
      oC = ZC(37014),
      qC = ZC(39635),
      FC = ZC(39902),
      WC = ZC(40925),
      NC = ZC(36961),
      MC = ZC(40076),
      gC = ZC(37138),
      SC = ZC(40092),
      pC = ZC(40968),
      PC = ZC(36952),
      GC = ZC(1169),
      RC = ZC(2166),
      AC = ZC(37095),
      xC = ZC(37201);
    class JC {
      constructor(CC, zC) {
        this.pose = CC, this.nodes = void 0, this.nodes = CC.boneNames.map((CC => zC.get(CC)))
      }
      write(CC) {
        this.pose.pose(CC);
        const {
          rotations: zC
        } = this.pose;
        for (let ZC = 0; ZC < this.nodes.length; ZC++) {
          const CC = 4 * ZC;
          this.nodes[ZC].rotationQuaternion.set(zC[CC], zC[CC + 1], zC[CC + 2], zC[CC + 3])
        }
      }
    }

    function IC(CC) {
      CC.unfreezeWorldMatrix();
      for (const zC of CC.getChildren()) IC(zC)
    }

    function iC(CC, zC) {
      CC.isVisible = zC;
      for (const ZC of CC.getChildMeshes()) ZC.isVisible = zC
    }
    class vC {
      constructor(CC, zC, ZC) {
        this.sS = CC, this.thinInstMgr = zC, this.WH = ZC, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(CC, zC, ZC) {
        const QC = (0, AC.e)(CC, zC);
        return QC in this.modelCache || (this.modelCache[QC] = (async () => {
          try {
            const QC = await (0, AC.f)(CC, this.sS),
              wC = new Map;
            for (const CC of QC.getNodes()) wC.set(CC.name, CC);
            const bC = (0, AC.b)(null !== zC && void 0 !== zC ? zC : CC, this.sS);
            (0, AC.i)(QC, bC, {
              keepTransforms: void 0 !== ZC,
              onProcessedMesh: CC => {
                (0, AC.l)(CC), this.sS.zQC(CC, !1), CC.isVisible = !1
              }
            });
            for (const CC of QC.rootNodes) IC(CC);
            const nC = void 0 === ZC ? null : (0, xC.d)(ZC, (CC => {
              var zC, ZC;
              return null !== (zC = null === (ZC = wC.get(CC)) || void 0 === ZC ? void 0 : ZC.rotationQuaternion) && void 0 !== zC ? zC : null
            }));
            return {
              nodesByName: wC,
              bones: null === nC ? null : new JC(nC, wC)
            }
          } catch (wC) {
            throw delete this.modelCache[QC], console.error(`Failed to load preview attachment ${QC}:`, wC), wC
          }
        })()), this.modelCache[QC]
      }
      async update(CC, zC) {
        var ZC;
        const {
          thinInstMgr: QC,
          WH: wC
        } = this;
        this.cosmeticNames[CC] = zC;
        const bC = this.attachmentsByType[CC];
        if (bC)
          for (const {
              mesh: fC,
              destNode: oC,
              bones: qC
            }
            of bC) {
            null !== qC && (0, GC.qb)(this.shownBones, qC), iC(fC, !1);
            const CC = QC.getNamedNode(wC, oC);
            QC.detachTransformNodeIfFound(fC, wC, CC)
          }
        this.attachmentsByType[CC] = [];
        const nC = (0, RC.j)(CC, zC);
        if (null !== nC && void 0 !== nC && null !== (ZC = nC.attachments) && void 0 !== ZC && ZC.length)
          for (const fC of nC.attachments) {
            let ZC;
            try {
              ZC = await this.loadModel(fC.modelGlb, fC.texture, fC.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[CC] !== zC) return;
            const bC = ZC.nodesByName.get(fC.modelNode);
            if (!bC) {
              console.error(`Preview attachment node ${fC.modelNode} not found in ${fC.modelGlb}`);
              continue
            }
            iC(bC, !0), (0, AC.q)(bC, fC.overlayColour);
            const nC = QC.getNamedNode(wC, fC.destNode);
            QC.attachTransformNode(bC, wC, nC), this.attachmentsByType[CC].push({
              mesh: bC,
              destNode: fC.destNode,
              bones: ZC.bones
            }), null !== ZC.bones && this.shownBones.push(ZC.bones)
          }
      }
      writePoses(CC) {
        for (const zC of this.shownBones) zC.write(CC)
      }
    }
    var eC = ZC(37032),
      hC = (ZC(40948), ZC(40308), ZC(40956), ZC(34194));
    let KC, YC, dC, mC, HC, EC, lC, XC, cC, uC;
    const rC = document.createElement("canvas");
    async function sC() {
      await new Promise((CC => {
        setTimeout((() => {
          CC()
        }), 100)
      }))
    }
    rC.classList.add("CharCustomisationPreviewCanvas");
    const TC = {};

    function aC(CC, zC) {
      rC.width = CC, rC.height = zC, KC.resize()
    }
    let tC = 0;
    class DC {
      constructor(CC, zC) {
        this.framing = zC, this.ready = uC, this.dev = {
          canvas: () => rC,
          isolateHead(CC) {
            const zC = EC.getNodeNames(lC);
            for (let ZC = 0; ZC < zC.length; ZC++) "HeadMesh" !== zC[ZC] && "__root__" !== zC[ZC] && "TorsoNode" !== zC[ZC] && EC.setNodeEnabled(lC, ZC, !1);
            if (CC) {
              const CC = EC.getNamedNode(lC, "HeadMesh");
              EC.setNodeDisableColorWrite(lC, CC, !0, (CC => {
                const zC = new SC.StandardMaterial(`${CC.name}_depthOnly`, CC.Km());
                return zC.disableColorWrite = !0, zC
              }))
            }
            EC.setPosition(lC, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const ZC = CC.getBoundingClientRect();
        aC(ZC.width, ZC.height), tC++, KC.stopRenderLoop(), KC.runRenderLoop((() => {
          var CC, zC;
          null === (CC = XC) || void 0 === CC || CC.render(KC.getDeltaTime()), null === (zC = cC) || void 0 === zC || zC.writePoses(performance.now() / 1e3), dC.render()
        }))
      }
      isReady() {
        return !!mC
      }
      setCosmetic(CC, zC) {
        ! function(CC, zC) {
          if (!mC) return;
          const nC = (0, wC.e)();
          nC.qY(!1), QC.b.Player.meshApi.updatePlayerCosmetic(nC.qE, lC, CC, zC, !0), "cape" === CC && (zC === bC.h ? HC.IK(!1) : (HC.IK(!0), HC.material.diffuseTexture = new pC.e(ZC(38631)(`./cape_${zC}.png`), HC.Km(), {
            invertY: !1,
            samplingMode: pC.e.NEAREST_NEAREST_MIPLINEAR
          })));
          TC[CC] = cC.update(CC, zC)
        }(CC, zC)
      }
      playEmote(CC) {
        if (!XC) return;
        if (!CC) return void XC.stopAnimation(oC.d.Emote);
        const zC = (0, nC.f)((0, fC.h)(CC).animation);
        XC.startAnimation(zC, oC.d.Emote, 0, fC.d)
      }
      async untilDrawn(CC) {
        if (await sC(), "cape" === CC && HC) {
          const CC = HC.material,
            zC = null === CC || void 0 === CC ? void 0 : CC.diffuseTexture;
          zC && !zC.isReady() && (await new Promise((CC => {
            zC.onLoadObservable.addOnce((() => {
              CC()
            }))
          })), await sC())
        }
        TC[CC] && (await TC[CC], await sC()), await dC.whenReadyAsync(), await new Promise((CC => {
          dC.onAfterRenderObservable.addOnce((() => {
            CC()
          }))
        }))
      }
      setOrbit(CC) {
        jC(CC)
      }
      resetCamera() {
        YC.inertialAlphaOffset = 0, YC.inertialBetaOffset = 0, YC.inertialRadiusOffset = 0, jC(hC.d[this.framing])
      }
      resize(CC, zC) {
        aC(CC, zC)
      }
      close() {
        this.closed || (this.closed = !0, tC--, 0 === tC && KC.stopRenderLoop())
      }
    }

    function jC(CC) {
      let {
        yaw: zC,
        pitch: ZC,
        radius: QC,
        target: wC
      } = CC;
      YC.alpha = zC, YC.beta = ZC, QC && (YC.radius = QC), wC && YC.target.set(wC[0], wC[1], wC[2])
    }

    function yC(CC, zC) {
      return CC.appendChild(rC), KC || function() {
        KC = new qC.d(rC, !0, {
          preserveDrawingBuffer: !0
        });
        const CC = (0, wC.e)();
        KC.BZC = CC.Vg.engine.BZC, dC = new FC.e(KC), dC.clearColor = new gC.e(0, 0, 0, 0), dC.ambientColor = new gC.Color3(1, 1, 1), YC = new WC.d("cp", 0, 0, 1, NC.Eg.Zero(), dC), YC.attachControl(rC, !0), YC.panningSensibility = 0, uC = (0, QC.t)("Player", dC, !0).then((zC => {
          mC = zC.meshApi, HC = zC.capeMesh, EC = CC.Vg.nH;
          const ZC = 8.33;
          lC = (0, QC.l)("Player", ZC, !0, !0), EC.setPosition(lC, 0, -8.33, 0);
          const wC = EC.getNamedNode(lC, "BodyMesh");
          EC.attachTransformNode(HC, lC, wC), EC.set(lC, "aOpacity", 1), EC.pE(lC, "aOpacity", 1), cC = new vC(dC, EC, lC), XC = new PC.AnimatorState, XC.MN = CC, XC.thinInstMgr = EC, XC.WH = lC, XC.AZC = EC.OZC(lC, 0), XC.modelLifeformType = "Player", XC.nodeNameAliases = (0, eC.b)("Player").nodeNameAliases;
          const bC = HC.WE().boundingBox;
          HC.position.y = ((24 - bC.maximum.y + bC.minimum.y) / 2 - 1 / 32) / ZC, HC.position.z = -1 / ZC, HC.rotationQuaternion = null;
          const nC = Math.PI / 18,
            fC = bC.maximum.y / ZC;
          HC.rotation.x = nC;
          const oC = Math.cos(nC),
            qC = Math.sin(nC);
          HC.position.y += fC * (1 - oC) + 0 * qC, HC.position.z -= fC * qC + 0 * (1 - oC);
          const FC = new SC.StandardMaterial("capeMaterial", HC.Km());
          HC.material = FC;
          const WC = new gC.Color3(1, 1, 1);
          FC.diffuseColor = new gC.Color3, FC.specularColor = new gC.Color3, FC.emissiveColor = new gC.Color3, FC.ambientColor = new gC.Color3, WC.scaleToRef(.43, FC.diffuseColor), WC.scaleToRef(1.75, FC.ambientColor), FC.freeze();
          const pC = new MC.e("light", new NC.Eg(-.1, 1, -.3), dC);
          pC.diffuse = new gC.Color3(1, 1, 1), pC.specular = new gC.Color3(1, 1, 1), pC.groundColor = new gC.Color3(.5, .5, .5)
        }))
      }(), new DC(CC, zC)
    }
  },
  38623: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => NC
    });
    var QC = ZC(37044),
      wC = ZC(37059),
      bC = ZC(37301),
      nC = ZC(37061),
      fC = ZC(37050);

    function oC(CC) {
      return `\n\t\t\t\t${(0,fC.u)(CC,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, fC.w)(CC, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, fC.w)(CC, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, fC.l)(CC, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function qC(CC, zC) {
      let ZC = (0, fC.ob)(CC, "skele" + (zC - 1));
      for (let wC = zC - 2; wC >= 0; wC--) ZC = (0, fC.fb)(CC, `boneIdx == ${wC}`, (0, fC.ob)(CC, `skele${wC}`), ZC);
      const QC = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,fC.w)(CC,"int","boneIdx",(0,fC.jb)(CC,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,fC.w)(CC,"vec3","bone",ZC)}\n\t\t\t\t${(0,fC.w)(CC,"vec2","pivot",(0,fC.l)(CC,"vec2","0.0",`${(0,fC.wb)(CC,"position")}.z`))}\n\t\t\t\t${(0,fC.S)(CC)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${QC}));`:`positionUpdated.yz += ${QC};`}\n\t\t`
    }

    function FC(CC) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,fC.l)(CC,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const WC = {
        x: 0,
        y: 0,
        z: 0,
        azC(CC, zC) {
          return this.x = CC[zC], this.y = CC[zC + 1], this.z = CC[zC + 2], this
        }
      },
      NC = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (CC, zC) => ({
          ...(0, QC.b)("CAPE"),
          BLOXD_CAPE_BONES: `${CC}`,
          BLOXD_CAPE_MAX_Y: (0, wC.vb)(zC)
        }),
        getUniforms(CC) {
          return (0, bC.d)(function(CC) {
            const zC = [];
            for (let ZC = 0; ZC < CC; ZC++) zC.push({
              name: `skele${ZC}`,
              type: "highp vec3"
            });
            return zC
          }(this.skeleLen), "vertex", CC)
        },
        bind(CC) {
          for (let zC = 0; zC < this.skeleLen; zC++) CC.updateVector3(`skele${zC}`, WC.azC(this.skele, 3 * zC))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(CC, zC) {
          return "vertex" !== CC ? null : {
            CUSTOM_VERTEX_DEFINITIONS: oC(zC),
            CUSTOM_VERTEX_UPDATE_POSITION: qC(zC, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: FC(zC)
          }
        }
      };
    (0, nC.o)(NC)
  },
  38517: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      c: () => WC
    });
    var QC = ZC(37044),
      wC = ZC(37301),
      bC = ZC(37050),
      nC = ZC(37061);
    const fC = "bloxdTextLodBias",
      oC = [{
        name: fC,
        type: "float"
      }],
      qC = "bloxdTextSample",
      FC = {
        planes: -.5,
        boards: -.5
      },
      WC = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, QC.b)("TEXT_SAMPLER"),
        getUniforms: CC => (0, wC.d)(oC, "fragment", CC),
        bind(CC) {
          CC.updateFloat(fC, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(CC, zC) {
          if ("fragment" !== CC) return null;
          const ZC = (0, bC.B)(zC, `vec4 ${qC}(sampler2D s, vec2 uv, float bias)`, `fn ${qC}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            QC = (0, bC.B)(zC, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            wC = `${(0,bC.J)(zC,"vDiffuseUV")} + uvOffset`,
            nC = (0, bC.B)(zC, `${qC}(diffuseSampler, ${wC}, ${(0,bC.ob)(zC,fC)})`, `${qC}(diffuseSampler, diffuseSamplerSampler, ${wC}, ${(0,bC.ob)(zC,fC)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${ZC} {\n\t\t\t\t\t${(0,bC.w)(zC,"vec4","texel",QC)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,bC.l)(zC,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,bC.l)(zC,"vec3","0.0")}, ${(0,bC.l)(zC,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, bC.x)(zC)]: `baseColor = ${nC};`
          }
        }
      };
    (0, nC.o)(WC)
  },
  40956: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      CapeMaterialPlugin: () => AC,
      HueTintMaterialPlugin: () => xC,
      LifeformMaterialPlugin: () => JC,
      OverlayMaterialPlugin: () => IC
    });
    var QC = ZC(40958),
      wC = ZC(37849);
    class bC extends((0, QC.g)(wC.e)) {}(0, QC.i)(wC.e, bC);
    var nC = ZC(37040);
    class fC extends((0, QC.g)(nC.f)) {}(0, QC.i)(nC.f, fC);
    var oC = ZC(37677);
    class qC extends((0, QC.g)(oC.d)) {}(0, QC.i)(oC.d, qC);
    var FC = ZC(37290),
      WC = ZC(40092),
      NC = ZC(37285);
    class MC extends((0, QC.g)(NC.d)) {
      constructor(CC, zC, ZC) {
        super(CC, zC, ZC), (0, FC.g)(CC)
      }
      dispose(CC) {
        (0, FC.k)(this._material), super.dispose(CC)
      }
    }(0, QC.i)(NC.d, MC), (0, NC.f)({
      disableUnusedSpecularTerm: QC.c,
      isLightingDisabled: CC => CC instanceof WC.StandardMaterial && CC.disableLighting
    });
    var gC = ZC(38517);
    class SC extends((0, QC.g)(gC.c)) {}(0, QC.i)(gC.c, SC);
    var pC = ZC(38623),
      PC = ZC(37149),
      GC = ZC(37973),
      RC = ZC(37086);
    class AC extends((0, QC.g)(pC.e)) {}(0, QC.i)(pC.e, AC);
    class xC extends((0, QC.g)(PC.b)) {}(0, QC.i)(PC.b, xC);
    class JC extends((0, QC.g)(GC.q)) {}(0, QC.i)(GC.q, JC);
    class IC extends((0, QC.g)(RC.e)) {}(0, QC.i)(RC.e, IC)
  },
  40958: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => TC,
      g: () => GC,
      i: () => LC
    });
    var QC = ZC(40092),
      wC = ZC(40963),
      bC = ZC(40994),
      nC = ZC(40968),
      fC = ZC(37648),
      oC = ZC(37660),
      qC = ZC(37666),
      FC = ZC(37670),
      WC = ZC(37076),
      NC = ZC(37083),
      MC = ZC(40970),
      gC = ZC(37061),
      SC = ZC(37063),
      pC = ZC(37050);

    function PC(CC, zC) {
      return Object.assign((function(CC, ZC, QC, wC) {
        return zC(this.featureState, CC, ZC, QC, wC)
      }), {
        Qg: CC
      })
    }

    function GC(CC) {
      const zC = class extends MC.e {
          constructor(zC, ZC) {
            const QC = (0, SC.Y)(zC),
              wC = QC && (0, SC.x)(QC, CC.name);
            for (var bC = arguments.length, nC = new Array(bC > 2 ? bC - 2 : 0), fC = 2; fC < bC; fC++) nC[fC - 2] = arguments[fC];
            super(zC, CC.name, CC.priority, wC ? wC.defines : CC.defines(...nC), !1), this.featureState = void 0, this.featureState = ZC, this._pluginManager._addPlugin(this), this._enable(!0), (0, SC.B)(this._material, CC, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return CC.className
          }
          isCompatible(CC) {
            return CC === pC.e.GLSL || CC === pC.e.WGSL
          }
        },
        ZC = (0, gC.l)(CC);
      for (const [QC, wC] of Object.entries(gC.e)) {
        const bC = CC[QC];
        if (bC) {
          const CC = ZC[QC];
          Object.defineProperty(zC.prototype, wC, {
            value: PC(bC, CC),
            writable: !0,
            configurable: !0
          })
        }
      }
      return zC
    }
    class RC extends(GC(fC.d)) {}
    var AC = ZC(39635),
      xC = ZC(40977);
    const JC = new WeakMap;

    function IC(CC, zC, ZC) {
      let QC = JC.get(ZC);
      QC || (QC = new Map, JC.set(ZC, QC));
      const {
        url: wC
      } = CC;
      let bC = QC.get(wC);
      return bC || (bC = async function(CC, zC, ZC) {
        var QC;
        const {
          width: wC,
          height: bC
        } = CC.getSize(), fC = Math.round(bC / wC), oC = CC.getInternalTexture(), qC = zC && zC.byteLength === wC * wC * fC * 4 ? zC : null !== (QC = iC.get(oC)) && void 0 !== QC ? QC : CC._readPixelsSync(), FC = new xC.d(qC, wC, wC, fC, AC.d.TEXTUREFORMAT_RGBA, ZC, !0, !1, nC.e.NEAREST_NEAREST_MIPLINEAR);
        iC.has(oC) || (! function(CC, zC) {
          const ZC = zC.createRawTexture(new Uint8Array(4), 1, 1, AC.d.TEXTUREFORMAT_RGBA, !1, !1, nC.e.NEAREST_SAMPLINGMODE);
          CC._hardwareTexture.release(), zC.unbindAllTextures(), ZC._swapAndDie(CC, !1)
        }(oC, ZC.mg()), iC.set(oC, qC));
        return FC
      }(CC, zC, ZC), QC.set(wC, bC), bC.catch((() => {
        QC.delete(wC)
      }))), bC
    }
    const iC = new WeakMap;
    var vC = ZC(37673);
    class eC extends(GC(oC.j)) {
      constructor(CC, zC) {
        super(CC, zC), zC.textures.forEach(((CC, zC) => {
          CC.mirror.onLoadObservable.add((CC => {
            this.setTextureArrayData(CC, zC).catch((CC => {
              console.error(`Failed to build texture array for atlas ${zC}`, CC)
            }))
          }))
        })), (0, vC.k)(zC, CC.shaderLanguage)
      }
      async setTextureArrayData(CC, zC) {
        var ZC, QC;
        const wC = this.featureState,
          {
            width: bC,
            height: nC
          } = CC.getSize(),
          fC = wC.useWebGL2 ? await IC(CC, null !== (ZC = null === (QC = wC.sources.pixels) || void 0 === QC ? void 0 : QC[zC]) && void 0 !== ZC ? ZC : null, this._material.Km()) : null;
        (0, vC.d)(this._material, wC, zC, fC, bC, Math.round(nC / bC), this._material.shaderLanguage)
      }
    }
    var hC = ZC(40985),
      KC = ZC(40127),
      YC = ZC(36961),
      dC = ZC(40988),
      mC = ZC(40235),
      HC = ZC(40119),
      EC = ZC(40946),
      lC = ZC(37432),
      XC = ZC(40992);
    class cC extends hC.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const uC = {
      Mesh: dC.e,
      TransformNode: EC.c,
      gg: hC.c,
      VertexBuffer: hC.f,
      BoundingInfo: KC.d,
      Eg: YC.Eg,
      ArenaBuffer: cC,
      SubMesh: HC.d,
      VertexData: mC.e,
      MirroredGeometry: XC.d,
      meshFromArrays: XC.e,
      plainMeshFromArrays: XC.f
    };
    (0, lC.e)(uC);
    var rC = ZC(37290);
    class sC extends(GC(FC.f)) {
      constructor(CC, zC) {
        if (super(CC, zC), CC instanceof QC.StandardMaterial && zC.dirLightCount > 0) {
          const zC = CC,
            ZC = zC._blockDirtyMechanism;
          zC._blockDirtyMechanism = !0, CC.disableLighting = !0, zC._blockDirtyMechanism = ZC;
          const QC = (0, SC.Y)(CC);
          QC && (QC.disableLighting = !0, (0, SC.W)(QC))
        }(0, rC.g)(CC)
      }
      dispose(CC) {
        (0, rC.k)(this._material), super.dispose(CC)
      }
    }

    function TC(CC, zC) {
      if (!(zC instanceof QC.StandardMaterial) || zC.specularTexture) return;
      const {
        r: ZC,
        g: wC,
        b: bC
      } = zC.specularColor;
      0 === ZC && 0 === wC && 0 === bC && (CC.SPECULARTERM = !1)
    }(0, FC.d)({
      disableUnusedSpecularTerm: TC
    });
    var aC = ZC(37175),
      tC = ZC(37450);
    const DC = new RegExp(`^#define ${qC.e}\\s*$`, "m");
    class jC extends(GC(qC.g)) {
      constructor(CC, zC) {
        super(CC, zC), this.Sg = !1, zC.ditherOnlyWhileFading && (tC.g.add(CC), this.prewarmDitherTwins(CC))
      }
      prewarmDitherTwins(CC) {
        const zC = new WeakSet;
        CC.onEffectCreatedObservable.add((ZC => {
          let {
            effect: QC,
            subMesh: wC
          } = ZC;
          if (this.featureState.prewarmingDither || zC.has(QC)) return;
          zC.add(QC);
          const bC = null === wC || void 0 === wC ? void 0 : wC.getMesh();
          bC && !DC.test(QC.defines) && CC.Km().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(bC) || zC.delete(QC)
          }))
        }))
      }
      prewarmDither(CC) {
        if (this.Sg || CC.GJ()) return !1;
        const zC = new HC.d(0, 0, 0, 0, 0, CC, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(CC, zC)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== zC.effect
      }
      dispose(CC) {
        this.Sg = !0, super.dispose(CC)
      }
    }
    const yC = new Map;

    function LC(CC, zC) {
      yC.set(CC, zC)
    }
    LC(fC.d, RC), LC(oC.j, eC), LC(qC.g, jC), LC(FC.f, sC), (0, WC.c)({
      create: (CC, zC) => {
        const ZC = new QC.StandardMaterial(CC.name, zC);
        return (0, aC.u)(CC, ZC), ZC.detailMap._pluginDefineNames
      },
      write: (CC, zC, ZC) => {
        (0, aC.X)(CC.mirror, zC, ZC)
      },
      addFeature: (CC, zC, ZC) => {
        const QC = yC.get(zC.feature);
        if (!QC) throw new Error(`${zC.feature.name} has no plugin class (registerPluginClass)`);
        new QC(CC.mirror, zC.state, ...ZC)
      },
      texture: (CC, zC, ZC) => {
        let {
          url: QC,
          noMipmap: wC,
          invertY: bC,
          samplingMode: fC,
          data: oC,
          sets: qC
        } = ZC;
        if (!oC) {
          const ZC = new nC.e(QC, zC, wC, bC, fC);
          return Object.assign(ZC, qC), void(0, NC.L)(CC, ZC)
        }
        const FC = {},
          WC = new Promise(((CC, zC) => {
            FC.onLoad = CC, FC.onError = (CC, ZC) => {
              zC(new Error(`${oC.context}: ${(null===ZC||void 0===ZC?void 0:ZC.message)||CC||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: MC,
            bytes: gC,
            label: SC
          } = oC,
          pC = {
            noMipmap: wC,
            invertY: !1,
            samplingMode: fC,
            ...FC,
            mimeType: MC,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          PC = new nC.e(null, zC, pC);
        aC.w.set(PC, WC), Object.assign(PC, qC), PC.updateURL(QC, gC);
        const GC = PC.getInternalTexture();
        GC && (GC.label = SC), CC.uvSet = PC.coordinatesIndex, CC.matrix.set((0, aC.P)(PC)), (0, NC.L)(CC, PC)
      },
      cube: (CC, zC, ZC) => {
        let {
          rootUrl: QC,
          files: bC,
          noMipmap: fC,
          luminance: oC
        } = ZC;
        const {
          samplingMode: qC
        } = CC.sampler, FC = qC === (0, NC.y)(fC) ? null : () => {
          (0, aC.L)(WC, qC)
        }, WC = new wC.c(QC, zC, null, fC, bC, FC, null, (0, NC.u)(oC));
        WC.coordinatesMode = nC.e.SKYBOX_MODE, (0, NC.L)(CC, WC)
      },
      canvas: (CC, zC, ZC) => {
        let {
          width: QC,
          height: wC,
          mipmaps: fC,
          samplingMode: oC,
          hasAlpha: qC = !1,
          wrap: FC = nC.e.CLAMP_ADDRESSMODE
        } = ZC;
        const WC = new bC.d(zC, {
          width: QC,
          height: wC
        }, CC, fC, oC);
        WC.hasAlpha = qC, WC.wrapU = FC, WC.wrapV = FC;
        const NC = (0, aC.C)(WC);
        return (0, aC.F)(NC, WC), NC
      }
    })
  },
  40992: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => FC,
      e: () => WC,
      f: () => NC
    });
    var QC = ZC(40985),
      wC = ZC(39882),
      bC = ZC(40127),
      nC = ZC(40244),
      fC = ZC(40988),
      oC = ZC(40235),
      qC = ZC(37339);
    class FC extends nC.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (CC, zC) => {
          this.releaseUnlessInstanced(zC)
        }, this.onLinked = null
      }
      link(CC) {
        var zC;
        (0, qC.n)(CC), this.model = CC, null === (zC = this.onLinked) || void 0 === zC || zC.call(this, CC)
      }
      relink() {
        this.release();
        const CC = [];
        for (const wC of Object.values(this._vertexBuffers))
          if (!wC.getIsInstanced()) {
            const {
              byteOffset: zC,
              byteStride: ZC,
              type: QC,
              normalized: bC
            } = wC;
            CC.push({
              kind: wC.getKind(),
              data: wC.getData(),
              offset: zC,
              stride: ZC,
              components: wC.getSize(),
              glType: QC,
              isNormalized: bC
            })
          } const zC = this._indices.length ? this._indices : null,
          {
            minimum: ZC,
            maximum: QC
          } = this.extend;
        this.link(new qC.f(CC, zC, this.getTotalVertices(), new Float64Array(ZC.VZC()), new Float64Array(QC.VZC())))
      }
      copy(CC) {
        if (!this.model) return super.copy(CC);
        const zC = new FC(CC, this.Km()),
          ZC = this.CQC(void 0, !0);
        ZC && zC.setIndices(ZC);
        let nC = !1;
        for (const bC in this._vertexBuffers) {
          const CC = this._vertexBuffers[bC],
            ZC = CC.getData();
          if (!ZC) continue;
          const fC = CC.getSize(),
            {
              type: oC,
              byteOffset: qC,
              byteStride: FC,
              normalized: WC
            } = CC;
          nC ||= CC.isUpdatable();
          const NC = CC.getIsInstanced() ? (ZC instanceof Array ? 4 * ZC.length : ZC.byteLength) / FC : this.getTotalVertices(),
            MC = (0, wC.o)(ZC, fC, oC, qC, FC, NC, !0),
            gC = {
              updatable: CC.isUpdatable(),
              stride: fC,
              type: oC,
              normalized: WC,
              takeBufferOwnership: !0,
              instanced: CC.getIsInstanced()
            };
          zC.setVerticesBuffer(new QC.f(this.mg(), MC, bC, gC), NC)
        }
        return zC._updatable = nC, zC._boundingInfo = new bC.d(this.extend.minimum, this.extend.maximum), zC.relink(), zC
      }
      static mergeMeshes(CC, zC, ZC, QC, wC, bC) {
        const oC = CC[0].Km(),
          qC = new fC.e(CC[0].name + "_merged", oC),
          WC = new FC(nC.c.RandomId(), oC, void 0, !1, qC);
        try {
          if (!fC.e.MergeMeshes(CC, zC, ZC, qC, wC, bC)) return qC.dispose(), null
        } catch (NC) {
          throw qC.dispose(), NC
        }
        return WC.relink(), qC
      }
      removeVerticesData(CC) {
        this.releaseUnlessInstanced(CC), super.removeVerticesData(CC)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(CC) {
        var zC;
        CC && null !== (zC = this.getVertexBuffer(CC)) && void 0 !== zC && zC.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, qC.x)(this.model), this.model = null)
      }
    }

    function WC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fC.e(CC, ZC);
      const wC = (0, qC.j)(zC),
        {
          positions: bC,
          normals: WC,
          uvs: NC,
          indices: MC,
          named: gC = {}
        } = zC,
        SC = new oC.e;
      SC.positions = bC, SC.normals = null !== WC && void 0 !== WC ? WC : null, SC.uvs = null !== NC && void 0 !== NC ? NC : null, SC.indices = MC;
      const pC = new FC(nC.c.RandomId(), ZC, SC, !1, QC);
      for (const {
          kind: nC,
          components: fC
        }
        of wC.vertexAttributes) nC in gC && QC.setVerticesData(nC, gC[nC], !1, fC);
      return pC.link(wC), QC
    }

    function NC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const wC = new fC.e(CC, ZC),
        {
          positions: bC,
          normals: nC,
          uvs: qC,
          indices: FC
        } = zC;
      return Object.assign(new oC.e, {
        positions: bC,
        normals: nC,
        uvs: qC,
        indices: FC
      }).applyToMesh(wC, QC), wC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);