export const id = 238;
export const ids = [238, 245, 248];
export const modules = {
  40515: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ,
      g: () => sQ
    });
    var wQ = XQ(38956),
      qQ = XQ(40286),
      TQ = XQ(40487),
      zQ = {};
    class sQ {
      constructor(QQ) {
        this.attachedToElement = !1, this.attached = {}, this.camera = QQ, this.checkInputs = () => {}
      }
      add(QQ) {
        const WQ = QQ.getSimpleName();
        this.attached[WQ] ? wQ.b.Warn("camera input of type " + WQ + " already exists on camera") : (this.attached[WQ] = QQ, QQ.camera = this.camera, QQ.checkInputs && (this.checkInputs = this._addCheckInputs(QQ.checkInputs.bind(QQ))), this.attachedToElement && QQ.attachControl(this.noPreventDefault))
      }
      remove(QQ) {
        for (const WQ in this.attached) {
          const XQ = this.attached[WQ];
          if (XQ === QQ) return XQ.detachControl(), XQ.camera = null, delete this.attached[WQ], void this.rebuildInputCheck()
        }
      }
      removeByType(QQ) {
        for (const WQ in this.attached) {
          const XQ = this.attached[WQ];
          XQ.getClassName() === QQ && (XQ.detachControl(), XQ.camera = null, delete this.attached[WQ], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(QQ) {
        const WQ = this.checkInputs;
        return () => {
          WQ(), QQ()
        }
      }
      attachInput(QQ) {
        this.attachedToElement && QQ.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          QQ = !TQ.d.ForceAttachControlToAlwaysPreventDefault && QQ, this.attachedToElement = !0, this.noPreventDefault = QQ;
          for (const WQ in this.attached) this.attached[WQ].attachControl(QQ)
        }
      }
      detachElement() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const WQ in this.attached) this.attached[WQ].detachControl(), QQ && (this.attached[WQ].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const QQ in this.attached) {
          const WQ = this.attached[QQ];
          WQ.checkInputs && (this.checkInputs = this._addCheckInputs(WQ.checkInputs.bind(WQ)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(QQ) {
        const WQ = {};
        for (const XQ in this.attached) {
          const QQ = this.attached[XQ],
            wQ = qQ.b.Serialize(QQ);
          WQ[QQ.getClassName()] = wQ
        }
        QQ.inputsmgr = WQ
      }
      parse(QQ) {
        const WQ = QQ.inputsmgr;
        if (WQ) {
          this.clear();
          for (const QQ in WQ) {
            const XQ = zQ[QQ];
            if (XQ) {
              const wQ = WQ[QQ],
                TQ = qQ.b.Parse((() => new XQ), wQ, null);
              this.add(TQ)
            }
          }
        } else
          for (const XQ in this.attached) {
            const WQ = zQ[this.attached[XQ].getClassName()];
            if (WQ) {
              const wQ = qQ.b.Parse((() => new WQ), QQ, null);
              this.remove(this.attached[XQ]), this.add(wQ)
            }
          }
      }
    }
  },
  40517: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ.e
    });
    var wQ = XQ(40519);
    (0, wQ.f)()
  },
  40519: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ,
      f: () => rQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(37370),
      zQ = XQ(37546),
      sQ = XQ(40525),
      FQ = XQ(40491),
      PQ = XQ(37418);
    let gQ = (() => {
        var QQ;
        let WQ, XQ, FQ = sQ.d,
          PQ = [],
          gQ = [],
          JQ = [],
          rQ = [];
        return QQ = class extends FQ {
          constructor(QQ, WQ, XQ, qQ) {
            super(QQ, XQ, qQ), this.groundColor = (0, wQ.n)(this, PQ, new zQ.b(0, 0, 0)), this.direction = ((0, wQ.n)(this, gQ), (0, wQ.n)(this, JQ, void 0)), (0, wQ.n)(this, rQ), this.direction = WQ || TQ.s.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(QQ) {
            return this.direction = TQ.s.Normalize(QQ.subtract(TQ.s.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(QQ, WQ) {
            const XQ = TQ.s.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", XQ.x, XQ.y, XQ.z, 0, WQ), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), WQ), this
          }
          transferToNodeMaterialEffect(QQ, WQ) {
            const XQ = TQ.s.Normalize(this.direction);
            return QQ.setFloat3(WQ, XQ.x, XQ.y, XQ.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = TQ.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return sQ.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(QQ, WQ) {
            QQ["HEMILIGHT" + WQ] = !0
          }
        }, (() => {
          const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(FQ[Symbol.metadata] ?? null) : void 0;
          WQ = [(0, qQ.l)()], XQ = [(0, qQ.F)()], (0, wQ.k)(null, null, WQ, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "groundColor" in QQ,
              get: QQ => QQ.groundColor,
              set: (QQ, WQ) => {
                QQ.groundColor = WQ
              }
            },
            metadata: TQ
          }, PQ, gQ), (0, wQ.k)(null, null, XQ, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: QQ => "direction" in QQ,
              get: QQ => QQ.direction,
              set: (QQ, WQ) => {
                QQ.direction = WQ
              }
            },
            metadata: TQ
          }, JQ, rQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TQ
          })
        })(), QQ
      })(),
      JQ = !1;

    function rQ() {
      JQ || (JQ = !0, FQ.e.AddNodeConstructor("Light_Type_3", ((QQ, WQ) => () => new gQ(QQ, TQ.s.Zero(), WQ))), (0, PQ.d)("BABYLON.HemisphericLight", gQ))
    }
  },
  37539: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      Color3: () => wQ.b,
      d: () => wQ.d
    });
    var wQ = XQ(37546);
    (0, wQ.h)()
  },
  38041: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    var wQ = XQ(38047);
    class qQ {
      static GetPlanes(QQ) {
        const WQ = [];
        for (let XQ = 0; XQ < 6; XQ++) WQ.push(new wQ.b(0, 0, 0, 0));
        return qQ.GetPlanesToRef(QQ, WQ), WQ
      }
      static GetNearPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[2], WQ.normal.y = XQ[7] + XQ[6], WQ.normal.z = XQ[11] + XQ[10], WQ.d = XQ[15] + XQ[14], WQ.normalize()
      }
      static GetFarPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[2], WQ.normal.y = XQ[7] - XQ[6], WQ.normal.z = XQ[11] - XQ[10], WQ.d = XQ[15] - XQ[14], WQ.normalize()
      }
      static GetLeftPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[0], WQ.normal.y = XQ[7] + XQ[4], WQ.normal.z = XQ[11] + XQ[8], WQ.d = XQ[15] + XQ[12], WQ.normalize()
      }
      static GetRightPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[0], WQ.normal.y = XQ[7] - XQ[4], WQ.normal.z = XQ[11] - XQ[8], WQ.d = XQ[15] - XQ[12], WQ.normalize()
      }
      static GetTopPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[1], WQ.normal.y = XQ[7] - XQ[5], WQ.normal.z = XQ[11] - XQ[9], WQ.d = XQ[15] - XQ[13], WQ.normalize()
      }
      static GetBottomPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[1], WQ.normal.y = XQ[7] + XQ[5], WQ.normal.z = XQ[11] + XQ[9], WQ.d = XQ[15] + XQ[13], WQ.normalize()
      }
      static GetPlanesToRef(QQ, WQ) {
        qQ.GetNearPlaneToRef(QQ, WQ[0]), qQ.GetFarPlaneToRef(QQ, WQ[1]), qQ.GetLeftPlaneToRef(QQ, WQ[2]), qQ.GetRightPlaneToRef(QQ, WQ[3]), qQ.GetTopPlaneToRef(QQ, WQ[4]), qQ.GetBottomPlaneToRef(QQ, WQ[5])
      }
      static IsPointInFrustum(QQ, WQ) {
        for (let XQ = 0; XQ < 6; XQ++)
          if (WQ[XQ].dotCoordinate(QQ) < 0) return !1;
        return !0
      }
    }
  },
  38047: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ
    });
    var wQ = XQ(37370);
    class qQ {
      constructor(QQ, WQ, XQ, qQ) {
        this.normal = new wQ.s(QQ, WQ, XQ), this.d = qQ
      }
      awQ() {
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
        let WQ = 0;
        return 0 !== QQ && (WQ = 1 / QQ), this.normal.x *= WQ, this.normal.y *= WQ, this.normal.z *= WQ, this.d *= WQ, this
      }
      transform(QQ) {
        const WQ = qQ._TmpMatrix;
        QQ.invertToRef(WQ);
        const XQ = WQ.m,
          wQ = this.normal.x,
          TQ = this.normal.y,
          zQ = this.normal.z,
          sQ = this.d,
          FQ = wQ * XQ[0] + TQ * XQ[1] + zQ * XQ[2] + sQ * XQ[3],
          PQ = wQ * XQ[4] + TQ * XQ[5] + zQ * XQ[6] + sQ * XQ[7],
          gQ = wQ * XQ[8] + TQ * XQ[9] + zQ * XQ[10] + sQ * XQ[11],
          JQ = wQ * XQ[12] + TQ * XQ[13] + zQ * XQ[14] + sQ * XQ[15];
        return new qQ(FQ, PQ, gQ, JQ)
      }
      dotCoordinate(QQ) {
        return this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z + this.d
      }
      copyFromPoints(QQ, WQ, XQ) {
        const wQ = WQ.x - QQ.x,
          qQ = WQ.y - QQ.y,
          TQ = WQ.z - QQ.z,
          zQ = XQ.x - QQ.x,
          sQ = XQ.y - QQ.y,
          FQ = XQ.z - QQ.z,
          PQ = qQ * FQ - TQ * sQ,
          gQ = TQ * zQ - wQ * FQ,
          JQ = wQ * sQ - qQ * zQ,
          rQ = Math.sqrt(PQ * PQ + gQ * gQ + JQ * JQ);
        let IQ;
        return IQ = 0 !== rQ ? 1 / rQ : 0, this.normal.x = PQ * IQ, this.normal.y = gQ * IQ, this.normal.z = JQ * IQ, this.d = -(this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z), this
      }
      isFrontFacingTo(QQ, WQ) {
        return wQ.s.Dot(this.normal, QQ) <= WQ
      }
      signedDistanceTo(QQ) {
        return wQ.s.Dot(QQ, this.normal) + this.d
      }
      static FromArray(QQ) {
        return new qQ(QQ[0], QQ[1], QQ[2], QQ[3])
      }
      static FromPoints(QQ, WQ, XQ) {
        const wQ = new qQ(0, 0, 0, 0);
        return wQ.copyFromPoints(QQ, WQ, XQ), wQ
      }
      static FromPositionAndNormal(QQ, WQ) {
        const XQ = new qQ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(QQ, WQ, XQ)
      }
      static FromPositionAndNormalToRef(QQ, WQ, XQ) {
        return XQ.normal.WH(WQ), XQ.normal.normalize(), XQ.d = -QQ.dot(XQ.normal), XQ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(QQ, WQ, XQ) {
        const qQ = -(WQ.x * QQ.x + WQ.y * QQ.y + WQ.z * QQ.z);
        return wQ.s.Dot(XQ, WQ) + qQ
      }
    }
    qQ._TmpMatrix = wQ.e.Identity()
  },
  37367: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      Matrix: () => wQ.e,
      Quaternion: () => wQ.h,
      RegisterMathVector: () => wQ.l,
      TmpVectors: () => wQ.m,
      Vector2: () => wQ.q,
      vj: () => wQ.s,
      Vector4: () => wQ.w
    });
    var wQ = XQ(37370);
    (0, wQ.l)()
  },
  38377: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    class wQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.x = QQ, this.y = WQ, this.width = XQ, this.height = wQ
      }
      toGlobal(QQ, WQ) {
        return new wQ(this.x * QQ, this.y * WQ, this.width * QQ, this.height * WQ)
      }
      toGlobalToRef(QQ, WQ, XQ) {
        return XQ.x = this.x * QQ, XQ.y = this.y * WQ, XQ.width = this.width * QQ, XQ.height = this.height * WQ, this
      }
      clone() {
        return new wQ(this.x, this.y, this.width, this.height)
      }
    }
  },
  40643: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => PQ
    });
    var wQ = XQ(37370),
      qQ = XQ(37546),
      TQ = XQ(40651),
      zQ = XQ(40661),
      sQ = XQ(40679);

    function FQ(QQ) {
      let WQ = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const XQ = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        TQ = [],
        FQ = QQ.width || QQ.size || 1,
        PQ = QQ.height || QQ.size || 1,
        gQ = QQ.depth || QQ.size || 1,
        JQ = QQ.wrap || !1;
      let rQ = void 0 === QQ.topBaseAt ? 1 : QQ.topBaseAt,
        IQ = void 0 === QQ.bottomBaseAt ? 0 : QQ.bottomBaseAt;
      rQ = (rQ + 4) % 4, IQ = (IQ + 4) % 4;
      let jQ = [2, 0, 3, 1][rQ],
        BQ = [2, 0, 1, 3][IQ],
        yQ = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (JQ) {
        WQ = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], yQ = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let QQ = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          XQ = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const wQ = [17, 18, 19, 16],
          qQ = [22, 23, 20, 21];
        for (; jQ > 0;) QQ.unshift(QQ.pop()), wQ.unshift(wQ.pop()), jQ--;
        for (; BQ > 0;) XQ.unshift(XQ.pop()), qQ.unshift(qQ.pop()), BQ--;
        QQ = QQ.flat(), XQ = XQ.flat(), yQ = yQ.concat(QQ).concat(XQ), WQ.push(wQ[0], wQ[2], wQ[3], wQ[0], wQ[1], wQ[2]), WQ.push(qQ[0], qQ[2], qQ[3], qQ[0], qQ[1], qQ[2])
      }
      const VQ = [FQ / 2, PQ / 2, gQ / 2],
        DQ = yQ.reduce(((QQ, WQ, XQ) => QQ.concat(WQ * VQ[XQ % 3])), []),
        pQ = 0 === QQ.sideOrientation ? 0 : QQ.sideOrientation || zQ.e.DEFAULTSIDE,
        GQ = QQ.faceUV || new Array(6),
        UQ = QQ.faceColors,
        bQ = [];
      for (let zQ = 0; zQ < 6; zQ++) void 0 === GQ[zQ] && (GQ[zQ] = new wQ.w(0, 0, 1, 1)), UQ && void 0 === UQ[zQ] && (UQ[zQ] = new qQ.d(1, 1, 1, 1));
      for (let wQ = 0; wQ < 6; wQ++)
        if (TQ.push(GQ[wQ].z, sQ.e ? 1 - GQ[wQ].w : GQ[wQ].w), TQ.push(GQ[wQ].x, sQ.e ? 1 - GQ[wQ].w : GQ[wQ].w), TQ.push(GQ[wQ].x, sQ.e ? 1 - GQ[wQ].y : GQ[wQ].y), TQ.push(GQ[wQ].z, sQ.e ? 1 - GQ[wQ].y : GQ[wQ].y), UQ)
          for (let QQ = 0; QQ < 4; QQ++) bQ.push(UQ[wQ].r, UQ[wQ].g, UQ[wQ].b, UQ[wQ].a);
      zQ.e._ComputeSides(pQ, DQ, WQ, XQ, TQ, QQ.frontUVs, QQ.backUVs);
      const vQ = new zQ.e;
      if (vQ.indices = WQ, vQ.positions = DQ, vQ.normals = XQ, vQ.uvs = TQ, UQ) {
        const QQ = pQ === zQ.e.DOUBLESIDE ? bQ.concat(bQ) : bQ;
        vQ.colors = QQ
      }
      return vQ
    }

    function PQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const wQ = new TQ.d(QQ, XQ);
      WQ.sideOrientation = TQ.d._GetDefaultSideOrientation(WQ.sideOrientation), wQ._originalBuilderSideOrientation = WQ.sideOrientation;
      return FQ(WQ).applyToMesh(wQ, WQ.updatable), wQ
    }
    let gQ = !1;
    gQ || (gQ = !0, zQ.e.CreateBox = FQ, TQ.d.CreateBox = function(QQ, WQ) {
      return PQ(QQ, {
        size: WQ,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40699: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => JQ
    });
    var wQ = XQ(37370),
      qQ = XQ(40651),
      TQ = XQ(40661),
      zQ = XQ(40705),
      sQ = XQ(40404),
      FQ = XQ(38956);

    function PQ(QQ) {
      const WQ = [],
        XQ = [],
        wQ = QQ.lines,
        qQ = QQ.colors,
        zQ = [];
      let sQ = 0;
      for (let TQ = 0; TQ < wQ.length; TQ++) {
        const QQ = wQ[TQ];
        for (let wQ = 0; wQ < QQ.length; wQ++) {
          const {
            x: FQ,
            y: PQ,
            z: gQ
          } = QQ[wQ];
          if (XQ.push(FQ, PQ, gQ), qQ) {
            const QQ = qQ[TQ],
              {
                r: WQ,
                g: XQ,
                b: sQ,
                a: FQ
              } = QQ[wQ];
            zQ.push(WQ, XQ, sQ, FQ)
          }
          wQ > 0 && (WQ.push(sQ - 1), WQ.push(sQ)), sQ++
        }
      }
      const FQ = new TQ.e;
      return FQ.indices = WQ, FQ.positions = XQ, qQ && (FQ.colors = zQ), FQ
    }

    function gQ(QQ) {
      const WQ = QQ.dashSize || 3,
        XQ = QQ.gapSize || 1,
        qQ = QQ.dashNb || 200,
        zQ = QQ.points,
        sQ = [],
        FQ = [],
        PQ = wQ.s.Zero();
      let gQ, JQ, rQ, IQ = 0,
        jQ = 0;
      for (rQ = 0; rQ < zQ.length - 1; rQ++) zQ[rQ + 1].subtractToRef(zQ[rQ], PQ), IQ += PQ.length();
      const BQ = IQ / qQ,
        yQ = WQ * BQ / (WQ + XQ);
      for (rQ = 0; rQ < zQ.length - 1; rQ++) {
        zQ[rQ + 1].subtractToRef(zQ[rQ], PQ), gQ = Math.floor(PQ.length() / BQ), PQ.normalize();
        for (let QQ = 0; QQ < gQ; QQ++) JQ = BQ * QQ, sQ.push(zQ[rQ].x + JQ * PQ.x, zQ[rQ].y + JQ * PQ.y, zQ[rQ].z + JQ * PQ.z), sQ.push(zQ[rQ].x + (JQ + yQ) * PQ.x, zQ[rQ].y + (JQ + yQ) * PQ.y, zQ[rQ].z + (JQ + yQ) * PQ.z), FQ.push(jQ, jQ + 1), jQ += 2
      }
      const VQ = new TQ.e;
      return VQ.positions = sQ, VQ.indices = FQ, VQ
    }

    function JQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const wQ = WQ.instance,
        qQ = WQ.lines,
        TQ = WQ.colors;
      if (wQ) {
        const QQ = wQ.getVerticesData(sQ.l.PositionKind);
        let WQ, XQ;
        TQ && (WQ = wQ.getVerticesData(sQ.l.ColorKind));
        let zQ = 0,
          FQ = 0;
        for (let wQ = 0; wQ < qQ.length; wQ++) {
          const sQ = qQ[wQ];
          for (let qQ = 0; qQ < sQ.length; qQ++) QQ[zQ] = sQ[qQ].x, QQ[zQ + 1] = sQ[qQ].y, QQ[zQ + 2] = sQ[qQ].z, TQ && WQ && (XQ = TQ[wQ], WQ[FQ] = XQ[qQ].r, WQ[FQ + 1] = XQ[qQ].g, WQ[FQ + 2] = XQ[qQ].b, WQ[FQ + 3] = XQ[qQ].a, FQ += 4), zQ += 3
        }
        return wQ.updateVerticesData(sQ.l.PositionKind, QQ, !1, !1), TQ && WQ && wQ.updateVerticesData(sQ.l.ColorKind, WQ, !1, !1), wQ.refreshBoundingInfo(), wQ
      }
      const FQ = !!TQ,
        gQ = new zQ.e(QQ, XQ, null, void 0, void 0, FQ, WQ.useVertexAlpha, WQ.material);
      return PQ(WQ).applyToMesh(gQ, WQ.updatable), gQ
    }

    function rQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const wQ = WQ.colors ? [WQ.colors] : null;
      return JQ(QQ, {
        lines: [WQ.points],
        updatable: WQ.updatable,
        instance: WQ.instance,
        colors: wQ,
        useVertexAlpha: WQ.useVertexAlpha,
        material: WQ.material
      }, XQ)
    }

    function IQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const TQ = WQ.points,
        sQ = WQ.instance,
        PQ = WQ.gapSize || 1,
        JQ = WQ.dashSize || 3;
      if (sQ) {
        const QQ = QQ => {
          const WQ = wQ.s.Zero(),
            XQ = QQ.length / 6;
          let qQ, zQ, FQ, PQ, gQ = 0,
            JQ = 0;
          for (FQ = 0; FQ < TQ.length - 1; FQ++) TQ[FQ + 1].subtractToRef(TQ[FQ], WQ), gQ += WQ.length();
          const rQ = gQ / XQ,
            IQ = sQ._creationDataStorage.dashSize,
            jQ = IQ * rQ / (IQ + sQ._creationDataStorage.gapSize);
          for (FQ = 0; FQ < TQ.length - 1; FQ++)
            for (TQ[FQ + 1].subtractToRef(TQ[FQ], WQ), qQ = Math.floor(WQ.length() / rQ), WQ.normalize(), PQ = 0; PQ < qQ && JQ < QQ.length;) zQ = rQ * PQ, QQ[JQ] = TQ[FQ].x + zQ * WQ.x, QQ[JQ + 1] = TQ[FQ].y + zQ * WQ.y, QQ[JQ + 2] = TQ[FQ].z + zQ * WQ.z, QQ[JQ + 3] = TQ[FQ].x + (zQ + jQ) * WQ.x, QQ[JQ + 4] = TQ[FQ].y + (zQ + jQ) * WQ.y, QQ[JQ + 5] = TQ[FQ].z + (zQ + jQ) * WQ.z, JQ += 6, PQ++;
          for (; JQ < QQ.length;) QQ[JQ] = TQ[FQ].x, QQ[JQ + 1] = TQ[FQ].y, QQ[JQ + 2] = TQ[FQ].z, JQ += 3
        };
        return (WQ.dashNb || WQ.dashSize || WQ.gapSize || WQ.useVertexAlpha || WQ.material) && FQ.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), sQ.updateMeshPositions(QQ, !1), sQ
      }
      const rQ = new zQ.e(QQ, XQ, null, void 0, void 0, void 0, WQ.useVertexAlpha, WQ.material);
      return gQ(WQ).applyToMesh(rQ, WQ.updatable), rQ._creationDataStorage = new qQ.k, rQ._creationDataStorage.dashSize = JQ, rQ._creationDataStorage.gapSize = PQ, rQ
    }
    let jQ = !1;
    jQ || (jQ = !0, TQ.e.CreateLineSystem = PQ, TQ.e.CreateDashedLines = gQ, qQ.d.CreateLines = function(QQ, WQ) {
      return rQ(QQ, {
        points: WQ,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, qQ.d.CreateDashedLines = function(QQ, WQ, XQ, wQ, qQ) {
      return IQ(QQ, {
        points: WQ,
        dashSize: XQ,
        gapSize: wQ,
        dashNb: qQ,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40705: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => rQ,
      f: () => BQ
    });
    var wQ, qQ, TQ = XQ(37546),
      zQ = XQ(40404),
      sQ = XQ(40651),
      FQ = XQ(40712),
      PQ = XQ(40551),
      gQ = XQ(40717),
      JQ = XQ(40153);
    class rQ extends sQ.d {
      _isShaderMaterial(QQ) {
        return !!QQ && "ShaderMaterial" === QQ.getClassName()
      }
      constructor(QQ) {
        let WQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          wQ = arguments.length > 5 ? arguments[5] : void 0,
          qQ = arguments.length > 6 ? arguments[6] : void 0,
          sQ = arguments.length > 7 ? arguments[7] : void 0;
        super(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, WQ, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = wQ, this.useVertexAlpha = qQ, this.color = new TQ.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, WQ && (this.color = WQ.color.clone(), this.alpha = WQ.alpha, this.useVertexColor = WQ.useVertexColor, this.useVertexAlpha = WQ.useVertexAlpha), this.intersectionThreshold = .1;
        const FQ = {
          attributes: [zQ.l.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? FQ.defines.push("#define VERTEXALPHA") : FQ.needAlphaBlending = !1, this.useVertexColor ? (FQ.defines.push("#define VERTEXCOLOR"), FQ.attributes.push(zQ.l.ColorKind)) : (FQ.uniforms.push("color"), this._color4 = new TQ.d), sQ) this.material = sQ;
        else {
          this.sE().Uj().isWebGPU && !rQ.ForceGLSL && (this._shaderLanguage = 1), FQ.shaderLanguage = this._shaderLanguage, FQ.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([XQ.e(353).then((() => XQ(42833))), XQ.e(359).then((() => XQ(42839)))]) : await Promise.all([XQ.e(335).then((() => XQ(42843))), XQ.e(341).then((() => XQ(42851)))])
          };
          const QQ = new gQ.t("colorShader", this.sE(), "color", FQ, !1);
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
        const WQ = this.material;
        if (WQ === QQ) return;
        const XQ = WQ && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(QQ), XQ && WQ?.dispose()
      }
      _setInternalMaterial(QQ) {
        this._setMaterial(QQ), this.material && (this.material.fillMode = PQ.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(QQ) {}
      _bind(QQ, WQ) {
        if (!this._geometry) return this;
        const XQ = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(WQ, XQ) : this._geometry._bind(WQ, XQ, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: QQ,
            g: WQ,
            b: XQ
          } = this.color;
          this._color4.set(QQ, WQ, XQ, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(QQ, WQ, XQ) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const wQ = this.sE().Uj();
        return this._unIndexed ? wQ.drawArraysType(PQ.b.LineListDrawMode, QQ.verticesStart, QQ.verticesCount, XQ) : wQ.drawElementsType(PQ.b.LineListDrawMode, QQ.indexStart, QQ.indexCount, XQ), this
      }
      dispose(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || WQ) && this.material?.dispose(!1, !1, !0), super.dispose(QQ)
      }
      clone(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        if (WQ && void 0 === WQ._addToSceneRootNodes) {
          const XQ = WQ;
          return XQ.source = this, new rQ(QQ, this.sE(), XQ.parent, XQ.source, XQ.doNotCloneChildren)
        }
        return new rQ(QQ, this.sE(), WQ, this, XQ)
      }
      createInstance(QQ) {
        const WQ = new IQ(QQ, this);
        if (this.bC) {
          WQ.bC = {};
          for (const QQ in this.bC) WQ.bC[QQ] = this.bC[QQ]
        }
        return WQ
      }
      serialize(QQ) {
        super.serialize(QQ), QQ.color = this.color.awQ(), QQ.alpha = this.alpha
      }
      static Parse(QQ, WQ) {
        const XQ = new rQ(QQ.name, WQ);
        return XQ.color = TQ.b.FromArray(QQ.color), XQ.alpha = QQ.alpha, XQ
      }
    }
    rQ.ForceGLSL = !1;
    class IQ extends FQ.b {
      constructor(QQ, WQ) {
        super(QQ, WQ), this.intersectionThreshold = WQ.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let jQ = !1;

    function BQ() {
      jQ || (jQ = !0, sQ.d._LinesMeshParser = (QQ, WQ) => rQ.Parse(QQ, WQ))
    }(wQ = rQ.prototype).enableEdgesRendering ?? (wQ.enableEdgesRendering = (0, JQ.h)("LinesMesh", "enableEdgesRendering")), (qQ = IQ.prototype).enableEdgesRendering ?? (qQ.enableEdgesRendering = (0, JQ.h)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38947: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(38956);
    const qQ = (QQ, WQ, XQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : XQ && "object" === typeof QQ ? {
      ...QQ
    } : null : QQ.clone(WQ) : null;
    class TQ {
      static DeepCopy(QQ, WQ, XQ, TQ) {
        let zQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const sQ = function(QQ) {
          const WQ = [];
          do {
            const XQ = Object.getOwnPropertyNames(QQ);
            for (const QQ of XQ) - 1 === WQ.indexOf(QQ) && WQ.push(QQ)
          } while (QQ = Object.getPrototypeOf(QQ));
          return WQ
        }(QQ);
        for (const PQ of sQ) {
          if ("_" === PQ[0] && (!TQ || -1 === TQ.indexOf(PQ))) continue;
          if (PQ.endsWith("Observable")) continue;
          if (XQ && -1 !== XQ.indexOf(PQ)) continue;
          const sQ = QQ[PQ],
            gQ = typeof sQ;
          if ("function" !== gQ) try {
            if ("object" === gQ)
              if (sQ instanceof Uint8Array) WQ[PQ] = Uint8Array.from(sQ);
              else if (sQ instanceof Array) {
              if (WQ[PQ] = [], sQ.length > 0)
                if ("object" == typeof sQ[0])
                  for (let QQ = 0; QQ < sQ.length; QQ++) {
                    const XQ = qQ(sQ[QQ], WQ, zQ); - 1 === WQ[PQ].indexOf(XQ) && WQ[PQ].push(XQ)
                  } else WQ[PQ] = sQ.slice(0)
            } else WQ[PQ] = qQ(sQ, WQ, zQ);
            else WQ[PQ] = sQ
          } catch (FQ) {
            wQ.b.Warn(FQ.message)
          }
        }
      }
    }
  },
  38191: (QQ, WQ, XQ) => {
    function wQ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
        const WQ = 16 * Math.random() | 0;
        return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
      }))
    }
    XQ.d(WQ, {
      d: () => wQ
    })
  },
  38956: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    class wQ {
      static _CheckLimit(QQ, WQ) {
        let XQ = wQ._LogLimitOutputs[QQ];
        return XQ ? XQ.current++ : (XQ = {
          limit: WQ,
          current: 1
        }, wQ._LogLimitOutputs[QQ] = XQ), XQ.current <= XQ.limit
      }
      static _GenerateLimitMessage(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const XQ = wQ._LogLimitOutputs[QQ];
        if (!XQ || !wQ.MessageLimitReached) return;
        const qQ = this._Levels[WQ];
        XQ.current === XQ.limit && wQ[qQ.name](wQ.MessageLimitReached.replace(/%LIMIT%/g, "" + XQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
      }
      static _AddLogEntry(QQ) {
        wQ._LogCache = QQ + wQ._LogCache, wQ.OnNewCacheEntry && wQ.OnNewCacheEntry(QQ)
      }
      static _FormatMessage(QQ) {
        const WQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
          XQ = new Date;
        return "[" + WQ(XQ.getHours()) + ":" + WQ(XQ.getMinutes()) + ":" + WQ(XQ.getSeconds()) + "]: " + QQ
      }
      static _LogDisabled(QQ, WQ) {}
      static _LogEnabled() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const qQ = Array.isArray(WQ) ? WQ[0] : WQ;
        if (void 0 !== XQ && !wQ._CheckLimit(qQ, XQ)) return;
        const TQ = wQ._FormatMessage(qQ),
          zQ = this._Levels[QQ],
          sQ = Array.isArray(WQ) ? WQ.slice(1) : [];
        zQ.logFunc && zQ.logFunc("BJS - " + TQ, ...sQ);
        const FQ = `<div style='color:${zQ.color}'>${TQ}</div><br>`;
        wQ._AddLogEntry(FQ), wQ._GenerateLimitMessage(qQ, QQ)
      }
      static get LogCache() {
        return wQ._LogCache
      }
      static ClearLogCache() {
        wQ._LogCache = "", wQ._LogLimitOutputs = {}, wQ.errorsCount = 0
      }
      static set LogLevels(QQ) {
        wQ.Log = wQ._LogDisabled, wQ.Warn = wQ._LogDisabled, wQ.Error = wQ._LogDisabled;
        const WQ = [wQ.MessageLogLevel, wQ.WarningLogLevel, wQ.ErrorLogLevel];
        for (const XQ of WQ)
          if ((QQ & XQ) === XQ) {
            const QQ = this._Levels[XQ];
            wQ[QQ.name] = wQ._LogEnabled.bind(wQ, XQ)
          }
      }
    }
    wQ.NoneLogLevel = 0, wQ.MessageLogLevel = 1, wQ.WarningLogLevel = 2, wQ.ErrorLogLevel = 4, wQ.AllLogLevel = 7, wQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wQ._LogCache = "", wQ._LogLimitOutputs = {}, wQ._Levels = [{}, {
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
    }], wQ.errorsCount = 0, wQ.Log = wQ._LogEnabled.bind(wQ, wQ.MessageLogLevel), wQ.Warn = wQ._LogEnabled.bind(wQ, wQ.WarningLogLevel), wQ.Error = wQ._LogEnabled.bind(wQ, wQ.ErrorLogLevel)
  },
  40349: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ.h
    });
    var wQ = XQ(40355);
    (0, wQ.e)()
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);