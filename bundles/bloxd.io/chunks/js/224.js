export const id = 224;
export const ids = [224, 230, 233];
export const modules = {
  39676: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      e: () => kQ
    });
    var LQ = wQ(38203),
      qQ = wQ(39426),
      oQ = wQ(39642),
      DQ = {};
    class kQ {
      constructor(QQ) {
        this.attachedToElement = !1, this.attached = {}, this.camera = QQ, this.checkInputs = () => {}
      }
      add(QQ) {
        const FQ = QQ.getSimpleName();
        this.attached[FQ] ? LQ.c.Warn("camera input of type " + FQ + " already exists on camera") : (this.attached[FQ] = QQ, QQ.camera = this.camera, QQ.checkInputs && (this.checkInputs = this._addCheckInputs(QQ.checkInputs.bind(QQ))), this.attachedToElement && QQ.attachControl(this.noPreventDefault))
      }
      remove(QQ) {
        for (const FQ in this.attached) {
          const wQ = this.attached[FQ];
          if (wQ === QQ) return wQ.detachControl(), wQ.camera = null, delete this.attached[FQ], void this.rebuildInputCheck()
        }
      }
      removeByType(QQ) {
        for (const FQ in this.attached) {
          const wQ = this.attached[FQ];
          wQ.getClassName() === QQ && (wQ.detachControl(), wQ.camera = null, delete this.attached[FQ], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(QQ) {
        const FQ = this.checkInputs;
        return () => {
          FQ(), QQ()
        }
      }
      attachInput(QQ) {
        this.attachedToElement && QQ.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          QQ = !oQ.e.ForceAttachControlToAlwaysPreventDefault && QQ, this.attachedToElement = !0, this.noPreventDefault = QQ;
          for (const FQ in this.attached) this.attached[FQ].attachControl(QQ)
        }
      }
      detachElement() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const FQ in this.attached) this.attached[FQ].detachControl(), QQ && (this.attached[FQ].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const QQ in this.attached) {
          const FQ = this.attached[QQ];
          FQ.checkInputs && (this.checkInputs = this._addCheckInputs(FQ.checkInputs.bind(FQ)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(QQ) {
        const FQ = {};
        for (const wQ in this.attached) {
          const QQ = this.attached[wQ],
            LQ = qQ.c.Serialize(QQ);
          FQ[QQ.getClassName()] = LQ
        }
        QQ.inputsmgr = FQ
      }
      parse(QQ) {
        const FQ = QQ.inputsmgr;
        if (FQ) {
          this.clear();
          for (const QQ in FQ) {
            const wQ = DQ[QQ];
            if (wQ) {
              const LQ = FQ[QQ],
                oQ = qQ.c.Parse((() => new wQ), LQ, null);
              this.add(oQ)
            }
          }
        } else
          for (const wQ in this.attached) {
            const FQ = DQ[this.attached[wQ].getClassName()];
            if (FQ) {
              const LQ = qQ.c.Parse((() => new FQ), QQ, null);
              this.remove(this.attached[wQ]), this.add(LQ)
            }
          }
      }
    }
  },
  39678: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ.c
    });
    var LQ = wQ(39686);
    (0, LQ.e)()
  },
  39686: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => uQ,
      e: () => bQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(36696),
      DQ = wQ(36873),
      kQ = wQ(39690),
      vQ = wQ(39650),
      mQ = wQ(36741);
    let uQ = (() => {
        var QQ;
        let FQ, wQ, vQ = kQ.c,
          mQ = [],
          uQ = [],
          HQ = [],
          bQ = [];
        return QQ = class extends vQ {
          constructor(QQ, FQ, wQ, qQ) {
            super(QQ, wQ, qQ), this.groundColor = (0, LQ.l)(this, mQ, new DQ.b(0, 0, 0)), this.direction = ((0, LQ.l)(this, uQ), (0, LQ.l)(this, HQ, void 0)), (0, LQ.l)(this, bQ), this.direction = FQ || oQ.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(QQ) {
            return this.direction = oQ.p.Normalize(QQ.subtract(oQ.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(QQ, FQ) {
            const wQ = oQ.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", wQ.x, wQ.y, wQ.z, 0, FQ), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), FQ), this
          }
          transferToNodeMaterialEffect(QQ, FQ) {
            const wQ = oQ.p.Normalize(this.direction);
            return QQ.setFloat3(FQ, wQ.x, wQ.y, wQ.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = oQ.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return kQ.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(QQ, FQ) {
            QQ["HEMILIGHT" + FQ] = !0
          }
        }, (() => {
          const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(vQ[Symbol.metadata] ?? null) : void 0;
          FQ = [(0, qQ.m)()], wQ = [(0, qQ.F)()], (0, LQ.i)(null, null, FQ, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "groundColor" in QQ,
              get: QQ => QQ.groundColor,
              set: (QQ, FQ) => {
                QQ.groundColor = FQ
              }
            },
            metadata: oQ
          }, mQ, uQ), (0, LQ.i)(null, null, wQ, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: QQ => "direction" in QQ,
              get: QQ => QQ.direction,
              set: (QQ, FQ) => {
                QQ.direction = FQ
              }
            },
            metadata: oQ
          }, HQ, bQ), oQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oQ
          })
        })(), QQ
      })(),
      HQ = !1;

    function bQ() {
      HQ || (HQ = !0, vQ.c.AddNodeConstructor("Light_Type_3", ((QQ, FQ) => () => new uQ(QQ, oQ.p.Zero(), FQ))), (0, mQ.e)("BABYLON.HemisphericLight", uQ))
    }
  },
  36870: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      Color3: () => LQ.b,
      b: () => LQ.e
    });
    var LQ = wQ(36873);
    (0, LQ.h)()
  },
  37320: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    var LQ = wQ(37324);
    class qQ {
      static GetPlanes(QQ) {
        const FQ = [];
        for (let wQ = 0; wQ < 6; wQ++) FQ.push(new LQ.d(0, 0, 0, 0));
        return qQ.GetPlanesToRef(QQ, FQ), FQ
      }
      static GetNearPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[2], FQ.normal.y = wQ[7] + wQ[6], FQ.normal.z = wQ[11] + wQ[10], FQ.d = wQ[15] + wQ[14], FQ.normalize()
      }
      static GetFarPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[2], FQ.normal.y = wQ[7] - wQ[6], FQ.normal.z = wQ[11] - wQ[10], FQ.d = wQ[15] - wQ[14], FQ.normalize()
      }
      static GetLeftPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[0], FQ.normal.y = wQ[7] + wQ[4], FQ.normal.z = wQ[11] + wQ[8], FQ.d = wQ[15] + wQ[12], FQ.normalize()
      }
      static GetRightPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[0], FQ.normal.y = wQ[7] - wQ[4], FQ.normal.z = wQ[11] - wQ[8], FQ.d = wQ[15] - wQ[12], FQ.normalize()
      }
      static GetTopPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[1], FQ.normal.y = wQ[7] - wQ[5], FQ.normal.z = wQ[11] - wQ[9], FQ.d = wQ[15] - wQ[13], FQ.normalize()
      }
      static GetBottomPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[1], FQ.normal.y = wQ[7] + wQ[5], FQ.normal.z = wQ[11] + wQ[9], FQ.d = wQ[15] + wQ[13], FQ.normalize()
      }
      static GetPlanesToRef(QQ, FQ) {
        qQ.GetNearPlaneToRef(QQ, FQ[0]), qQ.GetFarPlaneToRef(QQ, FQ[1]), qQ.GetLeftPlaneToRef(QQ, FQ[2]), qQ.GetRightPlaneToRef(QQ, FQ[3]), qQ.GetTopPlaneToRef(QQ, FQ[4]), qQ.GetBottomPlaneToRef(QQ, FQ[5])
      }
      static IsPointInFrustum(QQ, FQ) {
        for (let wQ = 0; wQ < 6; wQ++)
          if (FQ[wQ].dotCoordinate(QQ) < 0) return !1;
        return !0
      }
    }
  },
  37324: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ
    });
    var LQ = wQ(36696);
    class qQ {
      constructor(QQ, FQ, wQ, qQ) {
        this.normal = new LQ.p(QQ, FQ, wQ), this.d = qQ
      }
      RLQ() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new qQ(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let QQ = this.normal.getHashCode();
        return QQ = 397 * QQ ^ this.d, QQ
      }
      normalize() {
        const QQ = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let FQ = 0;
        return 0 !== QQ && (FQ = 1 / QQ), this.normal.x *= FQ, this.normal.y *= FQ, this.normal.z *= FQ, this.d *= FQ, this
      }
      transform(QQ) {
        const FQ = qQ._TmpMatrix;
        QQ.invertToRef(FQ);
        const wQ = FQ.m,
          LQ = this.normal.x,
          oQ = this.normal.y,
          DQ = this.normal.z,
          kQ = this.d,
          vQ = LQ * wQ[0] + oQ * wQ[1] + DQ * wQ[2] + kQ * wQ[3],
          mQ = LQ * wQ[4] + oQ * wQ[5] + DQ * wQ[6] + kQ * wQ[7],
          uQ = LQ * wQ[8] + oQ * wQ[9] + DQ * wQ[10] + kQ * wQ[11],
          HQ = LQ * wQ[12] + oQ * wQ[13] + DQ * wQ[14] + kQ * wQ[15];
        return new qQ(vQ, mQ, uQ, HQ)
      }
      dotCoordinate(QQ) {
        return this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z + this.d
      }
      copyFromPoints(QQ, FQ, wQ) {
        const LQ = FQ.x - QQ.x,
          qQ = FQ.y - QQ.y,
          oQ = FQ.z - QQ.z,
          DQ = wQ.x - QQ.x,
          kQ = wQ.y - QQ.y,
          vQ = wQ.z - QQ.z,
          mQ = qQ * vQ - oQ * kQ,
          uQ = oQ * DQ - LQ * vQ,
          HQ = LQ * kQ - qQ * DQ,
          bQ = Math.sqrt(mQ * mQ + uQ * uQ + HQ * HQ);
        let YQ;
        return YQ = 0 !== bQ ? 1 / bQ : 0, this.normal.x = mQ * YQ, this.normal.y = uQ * YQ, this.normal.z = HQ * YQ, this.d = -(this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z), this
      }
      isFrontFacingTo(QQ, FQ) {
        return LQ.p.Dot(this.normal, QQ) <= FQ
      }
      signedDistanceTo(QQ) {
        return LQ.p.Dot(QQ, this.normal) + this.d
      }
      static FromArray(QQ) {
        return new qQ(QQ[0], QQ[1], QQ[2], QQ[3])
      }
      static FromPoints(QQ, FQ, wQ) {
        const LQ = new qQ(0, 0, 0, 0);
        return LQ.copyFromPoints(QQ, FQ, wQ), LQ
      }
      static FromPositionAndNormal(QQ, FQ) {
        const wQ = new qQ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(QQ, FQ, wQ)
      }
      static FromPositionAndNormalToRef(QQ, FQ, wQ) {
        return wQ.normal.Qs(FQ), wQ.normal.normalize(), wQ.d = -QQ.dot(wQ.normal), wQ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(QQ, FQ, wQ) {
        const qQ = -(FQ.x * QQ.x + FQ.y * QQ.y + FQ.z * QQ.z);
        return LQ.p.Dot(wQ, FQ) + qQ
      }
    }
    qQ._TmpMatrix = LQ.c.Identity()
  },
  36688: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      Matrix: () => LQ.c,
      Quaternion: () => LQ.e,
      RegisterMathVector: () => LQ.i,
      TmpVectors: () => LQ.k,
      Vector2: () => LQ.n,
      Ox: () => LQ.p,
      Vector4: () => LQ.t
    });
    var LQ = wQ(36696);
    (0, LQ.i)()
  },
  37631: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.x = QQ, this.y = FQ, this.width = wQ, this.height = LQ
      }
      toGlobal(QQ, FQ) {
        return new LQ(this.x * QQ, this.y * FQ, this.width * QQ, this.height * FQ)
      }
      toGlobalToRef(QQ, FQ, wQ) {
        return wQ.x = this.x * QQ, wQ.y = this.y * FQ, wQ.width = this.width * QQ, wQ.height = this.height * FQ, this
      }
      clone() {
        return new LQ(this.x, this.y, this.width, this.height)
      }
    }
  },
  39822: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => mQ
    });
    var LQ = wQ(36696),
      qQ = wQ(36873),
      oQ = wQ(39829),
      DQ = wQ(39835),
      kQ = wQ(39852);

    function vQ(QQ) {
      let FQ = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const wQ = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        oQ = [],
        vQ = QQ.width || QQ.size || 1,
        mQ = QQ.height || QQ.size || 1,
        uQ = QQ.depth || QQ.size || 1,
        HQ = QQ.wrap || !1;
      let bQ = void 0 === QQ.topBaseAt ? 1 : QQ.topBaseAt,
        YQ = void 0 === QQ.bottomBaseAt ? 0 : QQ.bottomBaseAt;
      bQ = (bQ + 4) % 4, YQ = (YQ + 4) % 4;
      let xQ = [2, 0, 3, 1][bQ],
        AQ = [2, 0, 1, 3][YQ],
        tQ = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (HQ) {
        FQ = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], tQ = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let QQ = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          wQ = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const LQ = [17, 18, 19, 16],
          qQ = [22, 23, 20, 21];
        for (; xQ > 0;) QQ.unshift(QQ.pop()), LQ.unshift(LQ.pop()), xQ--;
        for (; AQ > 0;) wQ.unshift(wQ.pop()), qQ.unshift(qQ.pop()), AQ--;
        QQ = QQ.flat(), wQ = wQ.flat(), tQ = tQ.concat(QQ).concat(wQ), FQ.push(LQ[0], LQ[2], LQ[3], LQ[0], LQ[1], LQ[2]), FQ.push(qQ[0], qQ[2], qQ[3], qQ[0], qQ[1], qQ[2])
      }
      const eQ = [vQ / 2, mQ / 2, uQ / 2],
        MQ = tQ.reduce(((QQ, FQ, wQ) => QQ.concat(FQ * eQ[wQ % 3])), []),
        GQ = 0 === QQ.sideOrientation ? 0 : QQ.sideOrientation || DQ.c.DEFAULTSIDE,
        pQ = QQ.faceUV || new Array(6),
        cQ = QQ.faceColors,
        CQ = [];
      for (let DQ = 0; DQ < 6; DQ++) void 0 === pQ[DQ] && (pQ[DQ] = new LQ.t(0, 0, 1, 1)), cQ && void 0 === cQ[DQ] && (cQ[DQ] = new qQ.e(1, 1, 1, 1));
      for (let LQ = 0; LQ < 6; LQ++)
        if (oQ.push(pQ[LQ].z, kQ.d ? 1 - pQ[LQ].w : pQ[LQ].w), oQ.push(pQ[LQ].x, kQ.d ? 1 - pQ[LQ].w : pQ[LQ].w), oQ.push(pQ[LQ].x, kQ.d ? 1 - pQ[LQ].y : pQ[LQ].y), oQ.push(pQ[LQ].z, kQ.d ? 1 - pQ[LQ].y : pQ[LQ].y), cQ)
          for (let QQ = 0; QQ < 4; QQ++) CQ.push(cQ[LQ].r, cQ[LQ].g, cQ[LQ].b, cQ[LQ].a);
      DQ.c._ComputeSides(GQ, MQ, FQ, wQ, oQ, QQ.frontUVs, QQ.backUVs);
      const SQ = new DQ.c;
      if (SQ.indices = FQ, SQ.positions = MQ, SQ.normals = wQ, SQ.uvs = oQ, cQ) {
        const QQ = GQ === DQ.c.DOUBLESIDE ? CQ.concat(CQ) : CQ;
        SQ.colors = QQ
      }
      return SQ
    }

    function mQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const LQ = new oQ.c(QQ, wQ);
      FQ.sideOrientation = oQ.c._GetDefaultSideOrientation(FQ.sideOrientation), LQ._originalBuilderSideOrientation = FQ.sideOrientation;
      return vQ(FQ).applyToMesh(LQ, FQ.updatable), LQ
    }
    let uQ = !1;
    uQ || (uQ = !0, DQ.c.CreateBox = vQ, oQ.c.CreateBox = function(QQ, FQ) {
      return mQ(QQ, {
        size: FQ,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  39872: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => HQ
    });
    var LQ = wQ(36696),
      qQ = wQ(39829),
      oQ = wQ(39835),
      DQ = wQ(39881),
      kQ = wQ(39561),
      vQ = wQ(38203);

    function mQ(QQ) {
      const FQ = [],
        wQ = [],
        LQ = QQ.lines,
        qQ = QQ.colors,
        DQ = [];
      let kQ = 0;
      for (let oQ = 0; oQ < LQ.length; oQ++) {
        const QQ = LQ[oQ];
        for (let LQ = 0; LQ < QQ.length; LQ++) {
          const {
            x: vQ,
            y: mQ,
            z: uQ
          } = QQ[LQ];
          if (wQ.push(vQ, mQ, uQ), qQ) {
            const QQ = qQ[oQ],
              {
                r: FQ,
                g: wQ,
                b: kQ,
                a: vQ
              } = QQ[LQ];
            DQ.push(FQ, wQ, kQ, vQ)
          }
          LQ > 0 && (FQ.push(kQ - 1), FQ.push(kQ)), kQ++
        }
      }
      const vQ = new oQ.c;
      return vQ.indices = FQ, vQ.positions = wQ, qQ && (vQ.colors = DQ), vQ
    }

    function uQ(QQ) {
      const FQ = QQ.dashSize || 3,
        wQ = QQ.gapSize || 1,
        qQ = QQ.dashNb || 200,
        DQ = QQ.points,
        kQ = [],
        vQ = [],
        mQ = LQ.p.Zero();
      let uQ, HQ, bQ, YQ = 0,
        xQ = 0;
      for (bQ = 0; bQ < DQ.length - 1; bQ++) DQ[bQ + 1].subtractToRef(DQ[bQ], mQ), YQ += mQ.length();
      const AQ = YQ / qQ,
        tQ = FQ * AQ / (FQ + wQ);
      for (bQ = 0; bQ < DQ.length - 1; bQ++) {
        DQ[bQ + 1].subtractToRef(DQ[bQ], mQ), uQ = Math.floor(mQ.length() / AQ), mQ.normalize();
        for (let QQ = 0; QQ < uQ; QQ++) HQ = AQ * QQ, kQ.push(DQ[bQ].x + HQ * mQ.x, DQ[bQ].y + HQ * mQ.y, DQ[bQ].z + HQ * mQ.z), kQ.push(DQ[bQ].x + (HQ + tQ) * mQ.x, DQ[bQ].y + (HQ + tQ) * mQ.y, DQ[bQ].z + (HQ + tQ) * mQ.z), vQ.push(xQ, xQ + 1), xQ += 2
      }
      const eQ = new oQ.c;
      return eQ.positions = kQ, eQ.indices = vQ, eQ
    }

    function HQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const LQ = FQ.instance,
        qQ = FQ.lines,
        oQ = FQ.colors;
      if (LQ) {
        const QQ = LQ.getVerticesData(kQ.h.PositionKind);
        let FQ, wQ;
        oQ && (FQ = LQ.getVerticesData(kQ.h.ColorKind));
        let DQ = 0,
          vQ = 0;
        for (let LQ = 0; LQ < qQ.length; LQ++) {
          const kQ = qQ[LQ];
          for (let qQ = 0; qQ < kQ.length; qQ++) QQ[DQ] = kQ[qQ].x, QQ[DQ + 1] = kQ[qQ].y, QQ[DQ + 2] = kQ[qQ].z, oQ && FQ && (wQ = oQ[LQ], FQ[vQ] = wQ[qQ].r, FQ[vQ + 1] = wQ[qQ].g, FQ[vQ + 2] = wQ[qQ].b, FQ[vQ + 3] = wQ[qQ].a, vQ += 4), DQ += 3
        }
        return LQ.updateVerticesData(kQ.h.PositionKind, QQ, !1, !1), oQ && FQ && LQ.updateVerticesData(kQ.h.ColorKind, FQ, !1, !1), LQ.refreshBoundingInfo(), LQ
      }
      const vQ = !!oQ,
        uQ = new DQ.b(QQ, wQ, null, void 0, void 0, vQ, FQ.useVertexAlpha, FQ.material);
      return mQ(FQ).applyToMesh(uQ, FQ.updatable), uQ
    }

    function bQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const LQ = FQ.colors ? [FQ.colors] : null;
      return HQ(QQ, {
        lines: [FQ.points],
        updatable: FQ.updatable,
        instance: FQ.instance,
        colors: LQ,
        useVertexAlpha: FQ.useVertexAlpha,
        material: FQ.material
      }, wQ)
    }

    function YQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const oQ = FQ.points,
        kQ = FQ.instance,
        mQ = FQ.gapSize || 1,
        HQ = FQ.dashSize || 3;
      if (kQ) {
        const QQ = QQ => {
          const FQ = LQ.p.Zero(),
            wQ = QQ.length / 6;
          let qQ, DQ, vQ, mQ, uQ = 0,
            HQ = 0;
          for (vQ = 0; vQ < oQ.length - 1; vQ++) oQ[vQ + 1].subtractToRef(oQ[vQ], FQ), uQ += FQ.length();
          const bQ = uQ / wQ,
            YQ = kQ._creationDataStorage.dashSize,
            xQ = YQ * bQ / (YQ + kQ._creationDataStorage.gapSize);
          for (vQ = 0; vQ < oQ.length - 1; vQ++)
            for (oQ[vQ + 1].subtractToRef(oQ[vQ], FQ), qQ = Math.floor(FQ.length() / bQ), FQ.normalize(), mQ = 0; mQ < qQ && HQ < QQ.length;) DQ = bQ * mQ, QQ[HQ] = oQ[vQ].x + DQ * FQ.x, QQ[HQ + 1] = oQ[vQ].y + DQ * FQ.y, QQ[HQ + 2] = oQ[vQ].z + DQ * FQ.z, QQ[HQ + 3] = oQ[vQ].x + (DQ + xQ) * FQ.x, QQ[HQ + 4] = oQ[vQ].y + (DQ + xQ) * FQ.y, QQ[HQ + 5] = oQ[vQ].z + (DQ + xQ) * FQ.z, HQ += 6, mQ++;
          for (; HQ < QQ.length;) QQ[HQ] = oQ[vQ].x, QQ[HQ + 1] = oQ[vQ].y, QQ[HQ + 2] = oQ[vQ].z, HQ += 3
        };
        return (FQ.dashNb || FQ.dashSize || FQ.gapSize || FQ.useVertexAlpha || FQ.material) && vQ.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), kQ.updateMeshPositions(QQ, !1), kQ
      }
      const bQ = new DQ.b(QQ, wQ, null, void 0, void 0, void 0, FQ.useVertexAlpha, FQ.material);
      return uQ(FQ).applyToMesh(bQ, FQ.updatable), bQ._creationDataStorage = new qQ.f, bQ._creationDataStorage.dashSize = HQ, bQ._creationDataStorage.gapSize = mQ, bQ
    }
    let xQ = !1;
    xQ || (xQ = !0, oQ.c.CreateLineSystem = mQ, oQ.c.CreateDashedLines = uQ, qQ.c.CreateLines = function(QQ, FQ) {
      return bQ(QQ, {
        points: FQ,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, qQ.c.CreateDashedLines = function(QQ, FQ, wQ, LQ, qQ) {
      return YQ(QQ, {
        points: FQ,
        dashSize: wQ,
        gapSize: LQ,
        dashNb: qQ,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  39881: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => bQ,
      f: () => AQ
    });
    var LQ, qQ, oQ = wQ(36873),
      DQ = wQ(39561),
      kQ = wQ(39829),
      vQ = wQ(39886),
      mQ = wQ(39717),
      uQ = wQ(39892),
      HQ = wQ(39277);
    class bQ extends kQ.c {
      _isShaderMaterial(QQ) {
        return !!QQ && "ShaderMaterial" === QQ.getClassName()
      }
      constructor(QQ) {
        let FQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          LQ = arguments.length > 5 ? arguments[5] : void 0,
          qQ = arguments.length > 6 ? arguments[6] : void 0,
          kQ = arguments.length > 7 ? arguments[7] : void 0;
        super(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, FQ, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = LQ, this.useVertexAlpha = qQ, this.color = new oQ.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, FQ && (this.color = FQ.color.clone(), this.alpha = FQ.alpha, this.useVertexColor = FQ.useVertexColor, this.useVertexAlpha = FQ.useVertexAlpha), this.intersectionThreshold = .1;
        const vQ = {
          attributes: [DQ.h.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? vQ.defines.push("#define VERTEXALPHA") : vQ.needAlphaBlending = !1, this.useVertexColor ? (vQ.defines.push("#define VERTEXCOLOR"), vQ.attributes.push(DQ.h.ColorKind)) : (vQ.uniforms.push("color"), this._color4 = new oQ.e), kQ) this.material = kQ;
        else {
          this.iN().Wx().isWebGPU && !bQ.ForceGLSL && (this._shaderLanguage = 1), vQ.shaderLanguage = this._shaderLanguage, vQ.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([wQ.e(335).then((() => wQ(41934))), wQ.e(341).then((() => wQ(41942)))]) : await Promise.all([wQ.e(317).then((() => wQ(41944))), wQ.e(323).then((() => wQ(41950)))])
          };
          const QQ = new uQ.q("colorShader", this.iN(), "color", vQ, !1);
          QQ.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(QQ)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(QQ) {
        const FQ = this.material;
        if (FQ === QQ) return;
        const wQ = FQ && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(QQ), wQ && FQ?.dispose()
      }
      _setInternalMaterial(QQ) {
        this._setMaterial(QQ), this.material && (this.material.fillMode = mQ.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(QQ) {}
      _bind(QQ, FQ) {
        if (!this._geometry) return this;
        const wQ = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(FQ, wQ) : this._geometry._bind(FQ, wQ, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: QQ,
            g: FQ,
            b: wQ
          } = this.color;
          this._color4.set(QQ, FQ, wQ, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(QQ, FQ, wQ) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const LQ = this.iN().Wx();
        return this._unIndexed ? LQ.drawArraysType(mQ.d.LineListDrawMode, QQ.verticesStart, QQ.verticesCount, wQ) : LQ.drawElementsType(mQ.d.LineListDrawMode, QQ.indexStart, QQ.indexCount, wQ), this
      }
      dispose(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || FQ) && this.material?.dispose(!1, !1, !0), super.dispose(QQ)
      }
      clone(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        if (FQ && void 0 === FQ._addToSceneRootNodes) {
          const wQ = FQ;
          return wQ.source = this, new bQ(QQ, this.iN(), wQ.parent, wQ.source, wQ.doNotCloneChildren)
        }
        return new bQ(QQ, this.iN(), FQ, this, wQ)
      }
      createInstance(QQ) {
        const FQ = new YQ(QQ, this);
        if (this.bK) {
          FQ.bK = {};
          for (const QQ in this.bK) FQ.bK[QQ] = this.bK[QQ]
        }
        return FQ
      }
      serialize(QQ) {
        super.serialize(QQ), QQ.color = this.color.RLQ(), QQ.alpha = this.alpha
      }
      static Parse(QQ, FQ) {
        const wQ = new bQ(QQ.name, FQ);
        return wQ.color = oQ.b.FromArray(QQ.color), wQ.alpha = QQ.alpha, wQ
      }
    }
    bQ.ForceGLSL = !1;
    class YQ extends vQ.c {
      constructor(QQ, FQ) {
        super(QQ, FQ), this.intersectionThreshold = FQ.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let xQ = !1;

    function AQ() {
      xQ || (xQ = !0, kQ.c._LinesMeshParser = (QQ, FQ) => bQ.Parse(QQ, FQ))
    }(LQ = bQ.prototype).enableEdgesRendering ?? (LQ.enableEdgesRendering = (0, HQ.g)("LinesMesh", "enableEdgesRendering")), (qQ = YQ.prototype).enableEdgesRendering ?? (qQ.enableEdgesRendering = (0, HQ.g)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38200: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(38203);
    const qQ = (QQ, FQ, wQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : wQ && "object" === typeof QQ ? {
      ...QQ
    } : null : QQ.clone(FQ) : null;
    class oQ {
      static DeepCopy(QQ, FQ, wQ, oQ) {
        let DQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const kQ = function(QQ) {
          const FQ = [];
          do {
            const wQ = Object.getOwnPropertyNames(QQ);
            for (const QQ of wQ) - 1 === FQ.indexOf(QQ) && FQ.push(QQ)
          } while (QQ = Object.getPrototypeOf(QQ));
          return FQ
        }(QQ);
        for (const mQ of kQ) {
          if ("_" === mQ[0] && (!oQ || -1 === oQ.indexOf(mQ))) continue;
          if (mQ.endsWith("Observable")) continue;
          if (wQ && -1 !== wQ.indexOf(mQ)) continue;
          const kQ = QQ[mQ],
            uQ = typeof kQ;
          if ("function" !== uQ) try {
            if ("object" === uQ)
              if (kQ instanceof Uint8Array) FQ[mQ] = Uint8Array.from(kQ);
              else if (kQ instanceof Array) {
              if (FQ[mQ] = [], kQ.length > 0)
                if ("object" == typeof kQ[0])
                  for (let QQ = 0; QQ < kQ.length; QQ++) {
                    const wQ = qQ(kQ[QQ], FQ, DQ); - 1 === FQ[mQ].indexOf(wQ) && FQ[mQ].push(wQ)
                  } else FQ[mQ] = kQ.slice(0)
            } else FQ[mQ] = qQ(kQ, FQ, DQ);
            else FQ[mQ] = kQ
          } catch (vQ) {
            LQ.c.Warn(vQ.message)
          }
        }
      }
    }
  },
  37452: (QQ, FQ, wQ) => {
    function LQ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
        const FQ = 16 * Math.random() | 0;
        return ("x" === QQ ? FQ : 3 & FQ | 8).toString(16)
      }))
    }
    wQ.d(FQ, {
      d: () => LQ
    })
  },
  38203: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      static _CheckLimit(QQ, FQ) {
        let wQ = LQ._LogLimitOutputs[QQ];
        return wQ ? wQ.current++ : (wQ = {
          limit: FQ,
          current: 1
        }, LQ._LogLimitOutputs[QQ] = wQ), wQ.current <= wQ.limit
      }
      static _GenerateLimitMessage(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const wQ = LQ._LogLimitOutputs[QQ];
        if (!wQ || !LQ.MessageLimitReached) return;
        const qQ = this._Levels[FQ];
        wQ.current === wQ.limit && LQ[qQ.name](LQ.MessageLimitReached.replace(/%LIMIT%/g, "" + wQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
      }
      static _AddLogEntry(QQ) {
        LQ._LogCache = QQ + LQ._LogCache, LQ.OnNewCacheEntry && LQ.OnNewCacheEntry(QQ)
      }
      static _FormatMessage(QQ) {
        const FQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
          wQ = new Date;
        return "[" + FQ(wQ.getHours()) + ":" + FQ(wQ.getMinutes()) + ":" + FQ(wQ.getSeconds()) + "]: " + QQ
      }
      static _LogDisabled(QQ, FQ) {}
      static _LogEnabled() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const qQ = Array.isArray(FQ) ? FQ[0] : FQ;
        if (void 0 !== wQ && !LQ._CheckLimit(qQ, wQ)) return;
        const oQ = LQ._FormatMessage(qQ),
          DQ = this._Levels[QQ],
          kQ = Array.isArray(FQ) ? FQ.slice(1) : [];
        DQ.logFunc && DQ.logFunc("BJS - " + oQ, ...kQ);
        const vQ = `<div style='color:${DQ.color}'>${oQ}</div><br>`;
        LQ._AddLogEntry(vQ), LQ._GenerateLimitMessage(qQ, QQ)
      }
      static get LogCache() {
        return LQ._LogCache
      }
      static ClearLogCache() {
        LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ.errorsCount = 0
      }
      static set LogLevels(QQ) {
        LQ.Log = LQ._LogDisabled, LQ.Warn = LQ._LogDisabled, LQ.Error = LQ._LogDisabled;
        const FQ = [LQ.MessageLogLevel, LQ.WarningLogLevel, LQ.ErrorLogLevel];
        for (const wQ of FQ)
          if ((QQ & wQ) === wQ) {
            const QQ = this._Levels[wQ];
            LQ[QQ.name] = LQ._LogEnabled.bind(LQ, wQ)
          }
      }
    }
    LQ.NoneLogLevel = 0, LQ.MessageLogLevel = 1, LQ.WarningLogLevel = 2, LQ.ErrorLogLevel = 4, LQ.AllLogLevel = 7, LQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ._Levels = [{}, {
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
    }], LQ.errorsCount = 0, LQ.Log = LQ._LogEnabled.bind(LQ, LQ.MessageLogLevel), LQ.Warn = LQ._LogEnabled.bind(LQ, LQ.WarningLogLevel), LQ.Error = LQ._LogEnabled.bind(LQ, LQ.ErrorLogLevel)
  },
  39491: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ.e
    });
    var LQ = wQ(39496);
    (0, LQ.c)()
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);