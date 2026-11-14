export const id = 204;
export const ids = [204, 209, 212];
export const modules = {
  38207: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF,
      d: () => bW
    });
    var CF = SF(37076),
      AF = SF(37994),
      uF = SF(38183),
      hF = {};
    class bW {
      constructor(FF) {
        this.attachedToElement = !1, this.attached = {}, this.camera = FF, this.checkInputs = () => {}
      }
      add(FF) {
        const WF = FF.getSimpleName();
        this.attached[WF] ? CF.b.Warn("camera input of type " + WF + " already exists on camera") : (this.attached[WF] = FF, FF.camera = this.camera, FF.checkInputs && (this.checkInputs = this._addCheckInputs(FF.checkInputs.bind(FF))), this.attachedToElement && FF.attachControl(this.noPreventDefault))
      }
      remove(FF) {
        for (const WF in this.attached) {
          const SF = this.attached[WF];
          if (SF === FF) return SF.detachControl(), SF.camera = null, delete this.attached[WF], void this.rebuildInputCheck()
        }
      }
      removeByType(FF) {
        for (const WF in this.attached) {
          const SF = this.attached[WF];
          SF.getClassName() === FF && (SF.detachControl(), SF.camera = null, delete this.attached[WF], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(FF) {
        const WF = this.checkInputs;
        return () => {
          WF(), FF()
        }
      }
      attachInput(FF) {
        this.attachedToElement && FF.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          FF = !uF.c.ForceAttachControlToAlwaysPreventDefault && FF, this.attachedToElement = !0, this.noPreventDefault = FF;
          for (const WF in this.attached) this.attached[WF].attachControl(FF)
        }
      }
      detachElement() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const WF in this.attached) this.attached[WF].detachControl(), FF && (this.attached[WF].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const FF in this.attached) {
          const WF = this.attached[FF];
          WF.checkInputs && (this.checkInputs = this._addCheckInputs(WF.checkInputs.bind(WF)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(FF) {
        const WF = {};
        for (const SF in this.attached) {
          const FF = this.attached[SF],
            CF = AF.e.Serialize(FF);
          WF[FF.getClassName()] = CF
        }
        FF.inputsmgr = WF
      }
      parse(FF) {
        const WF = FF.inputsmgr;
        if (WF) {
          this.clear();
          for (const FF in WF) {
            const SF = hF[FF];
            if (SF) {
              const CF = WF[FF],
                uF = AF.e.Parse((() => new SF), CF, null);
              this.add(uF)
            }
          }
        } else
          for (const SF in this.attached) {
            const WF = hF[this.attached[SF].getClassName()];
            if (WF) {
              const CF = AF.e.Parse((() => new WF), FF, null);
              this.remove(this.attached[SF]), this.add(CF)
            }
          }
      }
    }
  },
  38214: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF.c
    });
    var CF = SF(38223);
    (0, CF.g)()
  },
  38223: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => RF,
      g: () => eF
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(35623),
      hF = SF(35678),
      bW = SF(38230),
      dF = SF(38187),
      PF = SF(35660);
    let RF = (() => {
        var FF;
        let WF, SF, dF = bW.c,
          PF = [],
          RF = [],
          iW = [],
          eF = [];
        return FF = class extends dF {
          constructor(FF, WF, SF, AF) {
            super(FF, SF, AF), this.groundColor = (0, CF.k)(this, PF, new hF.e(0, 0, 0)), this.direction = ((0, CF.k)(this, RF), (0, CF.k)(this, iW, void 0)), (0, CF.k)(this, eF), this.direction = WF || uF.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(FF) {
            return this.direction = uF.r.Normalize(FF.subtract(uF.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(FF, WF) {
            const SF = uF.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", SF.x, SF.y, SF.z, 0, WF), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), WF), this
          }
          transferToNodeMaterialEffect(FF, WF) {
            const SF = uF.r.Normalize(this.direction);
            return FF.setFloat3(WF, SF.x, SF.y, SF.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = uF.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return bW.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(FF, WF) {
            FF["HEMILIGHT" + WF] = !0
          }
        }, (() => {
          const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(dF[Symbol.metadata] ?? null) : void 0;
          WF = [(0, AF.o)()], SF = [(0, AF.G)()], (0, CF.j)(null, null, WF, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "groundColor" in FF,
              get: FF => FF.groundColor,
              set: (FF, WF) => {
                FF.groundColor = WF
              }
            },
            metadata: uF
          }, PF, RF), (0, CF.j)(null, null, SF, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: FF => "direction" in FF,
              get: FF => FF.direction,
              set: (FF, WF) => {
                FF.direction = WF
              }
            },
            metadata: uF
          }, iW, eF), uF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uF
          })
        })(), FF
      })(),
      iW = !1;

    function eF() {
      iW || (iW = !0, dF.e.AddNodeConstructor("Light_Type_3", ((FF, WF) => () => new RF(FF, uF.r.Zero(), WF))), (0, PF.f)("BABYLON.HemisphericLight", RF))
    }
  },
  35671: (FF, WF, SF) => {
    SF.d(WF, {
      Color3: () => CF.e,
      d: () => CF.i
    });
    var CF = SF(35678);
    (0, CF.k)()
  },
  36173: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = SF(36181);
    class AF {
      static GetPlanes(FF) {
        const WF = [];
        for (let SF = 0; SF < 6; SF++) WF.push(new CF.d(0, 0, 0, 0));
        return AF.GetPlanesToRef(FF, WF), WF
      }
      static GetNearPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[2], WF.normal.y = SF[7] + SF[6], WF.normal.z = SF[11] + SF[10], WF.d = SF[15] + SF[14], WF.normalize()
      }
      static GetFarPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[2], WF.normal.y = SF[7] - SF[6], WF.normal.z = SF[11] - SF[10], WF.d = SF[15] - SF[14], WF.normalize()
      }
      static GetLeftPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[0], WF.normal.y = SF[7] + SF[4], WF.normal.z = SF[11] + SF[8], WF.d = SF[15] + SF[12], WF.normalize()
      }
      static GetRightPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[0], WF.normal.y = SF[7] - SF[4], WF.normal.z = SF[11] - SF[8], WF.d = SF[15] - SF[12], WF.normalize()
      }
      static GetTopPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[1], WF.normal.y = SF[7] - SF[5], WF.normal.z = SF[11] - SF[9], WF.d = SF[15] - SF[13], WF.normalize()
      }
      static GetBottomPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[1], WF.normal.y = SF[7] + SF[5], WF.normal.z = SF[11] + SF[9], WF.d = SF[15] + SF[13], WF.normalize()
      }
      static GetPlanesToRef(FF, WF) {
        AF.GetNearPlaneToRef(FF, WF[0]), AF.GetFarPlaneToRef(FF, WF[1]), AF.GetLeftPlaneToRef(FF, WF[2]), AF.GetRightPlaneToRef(FF, WF[3]), AF.GetTopPlaneToRef(FF, WF[4]), AF.GetBottomPlaneToRef(FF, WF[5])
      }
      static IsPointInFrustum(FF, WF) {
        for (let SF = 0; SF < 6; SF++)
          if (WF[SF].dotCoordinate(FF) < 0) return !1;
        return !0
      }
    }
  },
  36181: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF
    });
    var CF = SF(35623);
    class AF {
      constructor(FF, WF, SF, AF) {
        this.normal = new CF.r(FF, WF, SF), this.d = AF
      }
      kRF() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new AF(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let FF = this.normal.getHashCode();
        return FF = 397 * FF ^ this.d, FF
      }
      normalize() {
        const FF = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let WF = 0;
        return 0 !== FF && (WF = 1 / FF), this.normal.x *= WF, this.normal.y *= WF, this.normal.z *= WF, this.d *= WF, this
      }
      transform(FF) {
        const WF = AF._TmpMatrix;
        FF.invertToRef(WF);
        const SF = WF.m,
          CF = this.normal.x,
          uF = this.normal.y,
          hF = this.normal.z,
          bW = this.d,
          dF = CF * SF[0] + uF * SF[1] + hF * SF[2] + bW * SF[3],
          PF = CF * SF[4] + uF * SF[5] + hF * SF[6] + bW * SF[7],
          RF = CF * SF[8] + uF * SF[9] + hF * SF[10] + bW * SF[11],
          iW = CF * SF[12] + uF * SF[13] + hF * SF[14] + bW * SF[15];
        return new AF(dF, PF, RF, iW)
      }
      dotCoordinate(FF) {
        return this.normal.x * FF.x + this.normal.y * FF.y + this.normal.z * FF.z + this.d
      }
      copyFromPoints(FF, WF, SF) {
        const CF = WF.x - FF.x,
          AF = WF.y - FF.y,
          uF = WF.z - FF.z,
          hF = SF.x - FF.x,
          bW = SF.y - FF.y,
          dF = SF.z - FF.z,
          PF = AF * dF - uF * bW,
          RF = uF * hF - CF * dF,
          iW = CF * bW - AF * hF,
          eF = Math.sqrt(PF * PF + RF * RF + iW * iW);
        let EF;
        return EF = 0 !== eF ? 1 / eF : 0, this.normal.x = PF * EF, this.normal.y = RF * EF, this.normal.z = iW * EF, this.d = -(this.normal.x * FF.x + this.normal.y * FF.y + this.normal.z * FF.z), this
      }
      isFrontFacingTo(FF, WF) {
        return CF.r.Dot(this.normal, FF) <= WF
      }
      signedDistanceTo(FF) {
        return CF.r.Dot(FF, this.normal) + this.d
      }
      static FromArray(FF) {
        return new AF(FF[0], FF[1], FF[2], FF[3])
      }
      static FromPoints(FF, WF, SF) {
        const CF = new AF(0, 0, 0, 0);
        return CF.copyFromPoints(FF, WF, SF), CF
      }
      static FromPositionAndNormal(FF, WF) {
        const SF = new AF(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(FF, WF, SF)
      }
      static FromPositionAndNormalToRef(FF, WF, SF) {
        return SF.normal.fdF(WF), SF.normal.normalize(), SF.d = -FF.dot(SF.normal), SF
      }
      static SignedDistanceToPlaneFromPositionAndNormal(FF, WF, SF) {
        const AF = -(WF.x * FF.x + WF.y * FF.y + WF.z * FF.z);
        return CF.r.Dot(SF, WF) + AF
      }
    }
    AF._TmpMatrix = CF.b.Identity()
  },
  35617: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      Matrix: () => CF.b,
      Quaternion: () => CF.e,
      RegisterMathVector: () => CF.g,
      TmpVectors: () => CF.j,
      Vector2: () => CF.n,
      HC: () => CF.r,
      Vector4: () => CF.v
    });
    var CF = SF(35623);
    (0, CF.g)()
  },
  36545: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF
    });
    class CF {
      constructor(FF, WF, SF, CF) {
        this.x = FF, this.y = WF, this.width = SF, this.height = CF
      }
      toGlobal(FF, WF) {
        return new CF(this.x * FF, this.y * WF, this.width * FF, this.height * WF)
      }
      toGlobalToRef(FF, WF, SF) {
        return SF.x = this.x * FF, SF.y = this.y * WF, SF.width = this.width * FF, SF.height = this.height * WF, this
      }
      clone() {
        return new CF(this.x, this.y, this.width, this.height)
      }
    }
  },
  38384: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => PF
    });
    var CF = SF(35623),
      AF = SF(35678),
      uF = SF(38386),
      hF = SF(38393),
      bW = SF(38403);

    function dF(FF) {
      let WF = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const SF = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        uF = [],
        dF = FF.width || FF.size || 1,
        PF = FF.height || FF.size || 1,
        RF = FF.depth || FF.size || 1,
        iW = FF.wrap || !1;
      let eF = void 0 === FF.topBaseAt ? 1 : FF.topBaseAt,
        EF = void 0 === FF.bottomBaseAt ? 0 : FF.bottomBaseAt;
      eF = (eF + 4) % 4, EF = (EF + 4) % 4;
      let QF = [2, 0, 3, 1][eF],
        rW = [2, 0, 1, 3][EF],
        gW = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (iW) {
        WF = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], gW = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let FF = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          SF = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const CF = [17, 18, 19, 16],
          AF = [22, 23, 20, 21];
        for (; QF > 0;) FF.unshift(FF.pop()), CF.unshift(CF.pop()), QF--;
        for (; rW > 0;) SF.unshift(SF.pop()), AF.unshift(AF.pop()), rW--;
        FF = FF.flat(), SF = SF.flat(), gW = gW.concat(FF).concat(SF), WF.push(CF[0], CF[2], CF[3], CF[0], CF[1], CF[2]), WF.push(AF[0], AF[2], AF[3], AF[0], AF[1], AF[2])
      }
      const tW = [dF / 2, PF / 2, RF / 2],
        TF = gW.reduce(((FF, WF, SF) => FF.concat(WF * tW[SF % 3])), []),
        aW = 0 === FF.sideOrientation ? 0 : FF.sideOrientation || hF.b.DEFAULTSIDE,
        kW = FF.faceUV || new Array(6),
        qW = FF.faceColors,
        VF = [];
      for (let hF = 0; hF < 6; hF++) void 0 === kW[hF] && (kW[hF] = new CF.v(0, 0, 1, 1)), qW && void 0 === qW[hF] && (qW[hF] = new AF.i(1, 1, 1, 1));
      for (let CF = 0; CF < 6; CF++)
        if (uF.push(kW[CF].z, bW.b ? 1 - kW[CF].w : kW[CF].w), uF.push(kW[CF].x, bW.b ? 1 - kW[CF].w : kW[CF].w), uF.push(kW[CF].x, bW.b ? 1 - kW[CF].y : kW[CF].y), uF.push(kW[CF].z, bW.b ? 1 - kW[CF].y : kW[CF].y), qW)
          for (let FF = 0; FF < 4; FF++) VF.push(qW[CF].r, qW[CF].g, qW[CF].b, qW[CF].a);
      hF.b._ComputeSides(aW, TF, WF, SF, uF, FF.frontUVs, FF.backUVs);
      const NF = new hF.b;
      if (NF.indices = WF, NF.positions = TF, NF.normals = SF, NF.uvs = uF, qW) {
        const FF = aW === hF.b.DOUBLESIDE ? VF.concat(VF) : VF;
        NF.colors = FF
      }
      return NF
    }

    function PF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const CF = new uF.d(FF, SF);
      WF.sideOrientation = uF.d._GetDefaultSideOrientation(WF.sideOrientation), CF._originalBuilderSideOrientation = WF.sideOrientation;
      return dF(WF).applyToMesh(CF, WF.updatable), CF
    }
    let RF = !1;
    RF || (RF = !0, hF.b.CreateBox = dF, uF.d.CreateBox = function(FF, WF) {
      return PF(FF, {
        size: WF,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  38424: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => iW
    });
    var CF = SF(35623),
      AF = SF(38386),
      uF = SF(38393),
      hF = SF(38431),
      bW = SF(38109),
      dF = SF(37076);

    function PF(FF) {
      const WF = [],
        SF = [],
        CF = FF.lines,
        AF = FF.colors,
        hF = [];
      let bW = 0;
      for (let uF = 0; uF < CF.length; uF++) {
        const FF = CF[uF];
        for (let CF = 0; CF < FF.length; CF++) {
          const {
            x: dF,
            y: PF,
            z: RF
          } = FF[CF];
          if (SF.push(dF, PF, RF), AF) {
            const FF = AF[uF],
              {
                r: WF,
                g: SF,
                b: bW,
                a: dF
              } = FF[CF];
            hF.push(WF, SF, bW, dF)
          }
          CF > 0 && (WF.push(bW - 1), WF.push(bW)), bW++
        }
      }
      const dF = new uF.b;
      return dF.indices = WF, dF.positions = SF, AF && (dF.colors = hF), dF
    }

    function RF(FF) {
      const WF = FF.dashSize || 3,
        SF = FF.gapSize || 1,
        AF = FF.dashNb || 200,
        hF = FF.points,
        bW = [],
        dF = [],
        PF = CF.r.Zero();
      let RF, iW, eF, EF = 0,
        QF = 0;
      for (eF = 0; eF < hF.length - 1; eF++) hF[eF + 1].subtractToRef(hF[eF], PF), EF += PF.length();
      const rW = EF / AF,
        gW = WF * rW / (WF + SF);
      for (eF = 0; eF < hF.length - 1; eF++) {
        hF[eF + 1].subtractToRef(hF[eF], PF), RF = Math.floor(PF.length() / rW), PF.normalize();
        for (let FF = 0; FF < RF; FF++) iW = rW * FF, bW.push(hF[eF].x + iW * PF.x, hF[eF].y + iW * PF.y, hF[eF].z + iW * PF.z), bW.push(hF[eF].x + (iW + gW) * PF.x, hF[eF].y + (iW + gW) * PF.y, hF[eF].z + (iW + gW) * PF.z), dF.push(QF, QF + 1), QF += 2
      }
      const tW = new uF.b;
      return tW.positions = bW, tW.indices = dF, tW
    }

    function iW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const CF = WF.instance,
        AF = WF.lines,
        uF = WF.colors;
      if (CF) {
        const FF = CF.getVerticesData(bW.k.PositionKind);
        let WF, SF;
        uF && (WF = CF.getVerticesData(bW.k.ColorKind));
        let hF = 0,
          dF = 0;
        for (let CF = 0; CF < AF.length; CF++) {
          const bW = AF[CF];
          for (let AF = 0; AF < bW.length; AF++) FF[hF] = bW[AF].x, FF[hF + 1] = bW[AF].y, FF[hF + 2] = bW[AF].z, uF && WF && (SF = uF[CF], WF[dF] = SF[AF].r, WF[dF + 1] = SF[AF].g, WF[dF + 2] = SF[AF].b, WF[dF + 3] = SF[AF].a, dF += 4), hF += 3
        }
        return CF.updateVerticesData(bW.k.PositionKind, FF, !1, !1), uF && WF && CF.updateVerticesData(bW.k.ColorKind, WF, !1, !1), CF.refreshBoundingInfo(), CF
      }
      const dF = !!uF,
        RF = new hF.c(FF, SF, null, void 0, void 0, dF, WF.useVertexAlpha, WF.material);
      return PF(WF).applyToMesh(RF, WF.updatable), RF
    }

    function eF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const CF = WF.colors ? [WF.colors] : null;
      return iW(FF, {
        lines: [WF.points],
        updatable: WF.updatable,
        instance: WF.instance,
        colors: CF,
        useVertexAlpha: WF.useVertexAlpha,
        material: WF.material
      }, SF)
    }

    function EF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const uF = WF.points,
        bW = WF.instance,
        PF = WF.gapSize || 1,
        iW = WF.dashSize || 3;
      if (bW) {
        const FF = FF => {
          const WF = CF.r.Zero(),
            SF = FF.length / 6;
          let AF, hF, dF, PF, RF = 0,
            iW = 0;
          for (dF = 0; dF < uF.length - 1; dF++) uF[dF + 1].subtractToRef(uF[dF], WF), RF += WF.length();
          const eF = RF / SF,
            EF = bW._creationDataStorage.dashSize,
            QF = EF * eF / (EF + bW._creationDataStorage.gapSize);
          for (dF = 0; dF < uF.length - 1; dF++)
            for (uF[dF + 1].subtractToRef(uF[dF], WF), AF = Math.floor(WF.length() / eF), WF.normalize(), PF = 0; PF < AF && iW < FF.length;) hF = eF * PF, FF[iW] = uF[dF].x + hF * WF.x, FF[iW + 1] = uF[dF].y + hF * WF.y, FF[iW + 2] = uF[dF].z + hF * WF.z, FF[iW + 3] = uF[dF].x + (hF + QF) * WF.x, FF[iW + 4] = uF[dF].y + (hF + QF) * WF.y, FF[iW + 5] = uF[dF].z + (hF + QF) * WF.z, iW += 6, PF++;
          for (; iW < FF.length;) FF[iW] = uF[dF].x, FF[iW + 1] = uF[dF].y, FF[iW + 2] = uF[dF].z, iW += 3
        };
        return (WF.dashNb || WF.dashSize || WF.gapSize || WF.useVertexAlpha || WF.material) && dF.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), bW.updateMeshPositions(FF, !1), bW
      }
      const eF = new hF.c(FF, SF, null, void 0, void 0, void 0, WF.useVertexAlpha, WF.material);
      return RF(WF).applyToMesh(eF, WF.updatable), eF._creationDataStorage = new AF.l, eF._creationDataStorage.dashSize = iW, eF._creationDataStorage.gapSize = PF, eF
    }
    let QF = !1;
    QF || (QF = !0, uF.b.CreateLineSystem = PF, uF.b.CreateDashedLines = RF, AF.d.CreateLines = function(FF, WF) {
      return eF(FF, {
        points: WF,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, AF.d.CreateDashedLines = function(FF, WF, SF, CF, AF) {
      return EF(FF, {
        points: WF,
        dashSize: SF,
        gapSize: CF,
        dashNb: AF,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  38431: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => eF,
      d: () => rW
    });
    var CF, AF, uF = SF(35678),
      hF = SF(38109),
      bW = SF(38386),
      dF = SF(38434),
      PF = SF(38267),
      RF = SF(38440),
      iW = SF(37855);
    class eF extends bW.d {
      _isShaderMaterial(FF) {
        return !!FF && "ShaderMaterial" === FF.getClassName()
      }
      constructor(FF) {
        let WF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          CF = arguments.length > 5 ? arguments[5] : void 0,
          AF = arguments.length > 6 ? arguments[6] : void 0,
          bW = arguments.length > 7 ? arguments[7] : void 0;
        super(FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, WF, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = CF, this.useVertexAlpha = AF, this.color = new uF.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, WF && (this.color = WF.color.clone(), this.alpha = WF.alpha, this.useVertexColor = WF.useVertexColor, this.useVertexAlpha = WF.useVertexAlpha), this.intersectionThreshold = .1;
        const dF = {
          attributes: [hF.k.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? dF.defines.push("#define VERTEXALPHA") : dF.needAlphaBlending = !1, this.useVertexColor ? (dF.defines.push("#define VERTEXCOLOR"), dF.attributes.push(hF.k.ColorKind)) : (dF.uniforms.push("color"), this._color4 = new uF.i), bW) this.material = bW;
        else {
          this.OWF().sC().isWebGPU && !eF.ForceGLSL && (this._shaderLanguage = 1), dF.shaderLanguage = this._shaderLanguage, dF.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([SF.e(314).then((() => SF(40410))), SF.e(320).then((() => SF(40413)))]) : await Promise.all([SF.e(296).then((() => SF(40420))), SF.e(302).then((() => SF(40425)))])
          };
          const FF = new RF.p("colorShader", this.OWF(), "color", dF, !1);
          FF.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(FF)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(FF) {
        const WF = this.material;
        if (WF === FF) return;
        const SF = WF && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(FF), SF && WF?.dispose()
      }
      _setInternalMaterial(FF) {
        this._setMaterial(FF), this.material && (this.material.fillMode = PF.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(FF) {}
      _bind(FF, WF) {
        if (!this._geometry) return this;
        const SF = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(WF, SF) : this._geometry._bind(WF, SF, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: FF,
            g: WF,
            b: SF
          } = this.color;
          this._color4.set(FF, WF, SF, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(FF, WF, SF) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const CF = this.OWF().sC();
        return this._unIndexed ? CF.drawArraysType(PF.c.LineListDrawMode, FF.verticesStart, FF.verticesCount, SF) : CF.drawElementsType(PF.c.LineListDrawMode, FF.indexStart, FF.indexCount, SF), this
      }
      dispose(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || WF) && this.material?.dispose(!1, !1, !0), super.dispose(FF)
      }
      clone(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        if (WF && void 0 === WF._addToSceneRootNodes) {
          const SF = WF;
          return SF.source = this, new eF(FF, this.OWF(), SF.parent, SF.source, SF.doNotCloneChildren)
        }
        return new eF(FF, this.OWF(), WF, this, SF)
      }
      createInstance(FF) {
        const WF = new EF(FF, this);
        if (this.BWF) {
          WF.BWF = {};
          for (const FF in this.BWF) WF.BWF[FF] = this.BWF[FF]
        }
        return WF
      }
      serialize(FF) {
        super.serialize(FF), FF.color = this.color.kRF(), FF.alpha = this.alpha
      }
      static Parse(FF, WF) {
        const SF = new eF(FF.name, WF);
        return SF.color = uF.e.FromArray(FF.color), SF.alpha = FF.alpha, SF
      }
    }
    eF.ForceGLSL = !1;
    class EF extends dF.e {
      constructor(FF, WF) {
        super(FF, WF), this.intersectionThreshold = WF.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let QF = !1;

    function rW() {
      QF || (QF = !0, bW.d._LinesMeshParser = (FF, WF) => eF.Parse(FF, WF))
    }(CF = eF.prototype).enableEdgesRendering ?? (CF.enableEdgesRendering = (0, iW.j)("LinesMesh", "enableEdgesRendering")), (AF = EF.prototype).enableEdgesRendering ?? (AF.enableEdgesRendering = (0, iW.j)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  37069: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF
    });
    var CF = SF(37076);
    const AF = (FF, WF, SF) => FF ? FF.getClassName && "Mesh" === FF.getClassName() ? null : !FF.getClassName || "SubMesh" !== FF.getClassName() && "PhysicsBody" !== FF.getClassName() ? FF.clone ? FF.clone() : Array.isArray(FF) ? FF.slice() : SF && "object" === typeof FF ? {
      ...FF
    } : null : FF.clone(WF) : null;
    class uF {
      static DeepCopy(FF, WF, SF, uF) {
        let hF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bW = function(FF) {
          const WF = [];
          do {
            const SF = Object.getOwnPropertyNames(FF);
            for (const FF of SF) - 1 === WF.indexOf(FF) && WF.push(FF)
          } while (FF = Object.getPrototypeOf(FF));
          return WF
        }(FF);
        for (const PF of bW) {
          if ("_" === PF[0] && (!uF || -1 === uF.indexOf(PF))) continue;
          if (PF.endsWith("Observable")) continue;
          if (SF && -1 !== SF.indexOf(PF)) continue;
          const bW = FF[PF],
            RF = typeof bW;
          if ("function" !== RF) try {
            if ("object" === RF)
              if (bW instanceof Uint8Array) WF[PF] = Uint8Array.from(bW);
              else if (bW instanceof Array) {
              if (WF[PF] = [], bW.length > 0)
                if ("object" == typeof bW[0])
                  for (let FF = 0; FF < bW.length; FF++) {
                    const SF = AF(bW[FF], WF, hF); - 1 === WF[PF].indexOf(SF) && WF[PF].push(SF)
                  } else WF[PF] = bW.slice(0)
            } else WF[PF] = AF(bW, WF, hF);
            else WF[PF] = bW
          } catch (dF) {
            CF.b.Warn(dF.message)
          }
        }
      }
    }
  },
  36308: (FF, WF, SF) => {
    function CF() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (FF => {
        const WF = 16 * Math.random() | 0;
        return ("x" === FF ? WF : 3 & WF | 8).toString(16)
      }))
    }
    SF.d(WF, {
      b: () => CF
    })
  },
  37076: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    class CF {
      static _CheckLimit(FF, WF) {
        let SF = CF._LogLimitOutputs[FF];
        return SF ? SF.current++ : (SF = {
          limit: WF,
          current: 1
        }, CF._LogLimitOutputs[FF] = SF), SF.current <= SF.limit
      }
      static _GenerateLimitMessage(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const SF = CF._LogLimitOutputs[FF];
        if (!SF || !CF.MessageLimitReached) return;
        const AF = this._Levels[WF];
        SF.current === SF.limit && CF[AF.name](CF.MessageLimitReached.replace(/%LIMIT%/g, "" + SF.limit).replace(/%TYPE%/g, AF.name ?? ""))
      }
      static _AddLogEntry(FF) {
        CF._LogCache = FF + CF._LogCache, CF.OnNewCacheEntry && CF.OnNewCacheEntry(FF)
      }
      static _FormatMessage(FF) {
        const WF = FF => FF < 10 ? "0" + FF : "" + FF,
          SF = new Date;
        return "[" + WF(SF.getHours()) + ":" + WF(SF.getMinutes()) + ":" + WF(SF.getSeconds()) + "]: " + FF
      }
      static _LogDisabled(FF, WF) {}
      static _LogEnabled() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        const AF = Array.isArray(WF) ? WF[0] : WF;
        if (void 0 !== SF && !CF._CheckLimit(AF, SF)) return;
        const uF = CF._FormatMessage(AF),
          hF = this._Levels[FF],
          bW = Array.isArray(WF) ? WF.slice(1) : [];
        hF.logFunc && hF.logFunc("BJS - " + uF, ...bW);
        const dF = `<div style='color:${hF.color}'>${uF}</div><br>`;
        CF._AddLogEntry(dF), CF._GenerateLimitMessage(AF, FF)
      }
      static get LogCache() {
        return CF._LogCache
      }
      static ClearLogCache() {
        CF._LogCache = "", CF._LogLimitOutputs = {}, CF.errorsCount = 0
      }
      static set LogLevels(FF) {
        CF.Log = CF._LogDisabled, CF.Warn = CF._LogDisabled, CF.Error = CF._LogDisabled;
        const WF = [CF.MessageLogLevel, CF.WarningLogLevel, CF.ErrorLogLevel];
        for (const SF of WF)
          if ((FF & SF) === SF) {
            const FF = this._Levels[SF];
            CF[FF.name] = CF._LogEnabled.bind(CF, SF)
          }
      }
    }
    CF.NoneLogLevel = 0, CF.MessageLogLevel = 1, CF.WarningLogLevel = 2, CF.ErrorLogLevel = 4, CF.AllLogLevel = 7, CF.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", CF._LogCache = "", CF._LogLimitOutputs = {}, CF._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], CF.errorsCount = 0, CF.Log = CF._LogEnabled.bind(CF, CF.MessageLogLevel), CF.Warn = CF._LogEnabled.bind(CF, CF.WarningLogLevel), CF.Error = CF._LogEnabled.bind(CF, CF.ErrorLogLevel)
  },
  38053: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF.f
    });
    var CF = SF(38057);
    (0, CF.e)()
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);