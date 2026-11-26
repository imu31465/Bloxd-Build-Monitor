export const id = 248;
export const ids = [248, 254, 258];
export const modules = {
  41323: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      h: () => FU
    });
    var cU = zU(39493),
      yU = zU(41134),
      QU = zU(41309),
      AU = {};
    class FU {
      constructor(UU) {
        this.attachedToElement = !1, this.attached = {}, this.camera = UU, this.checkInputs = () => {}
      }
      add(UU) {
        const XU = UU.getSimpleName();
        this.attached[XU] ? cU.b.Warn("camera input of type " + XU + " already exists on camera") : (this.attached[XU] = UU, UU.camera = this.camera, UU.checkInputs && (this.checkInputs = this._addCheckInputs(UU.checkInputs.bind(UU))), this.attachedToElement && UU.attachControl(this.noPreventDefault))
      }
      remove(UU) {
        for (const XU in this.attached) {
          const zU = this.attached[XU];
          if (zU === UU) return zU.detachControl(), zU.camera = null, delete this.attached[XU], void this.rebuildInputCheck()
        }
      }
      removeByType(UU) {
        for (const XU in this.attached) {
          const zU = this.attached[XU];
          zU.getClassName() === UU && (zU.detachControl(), zU.camera = null, delete this.attached[XU], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(UU) {
        const XU = this.checkInputs;
        return () => {
          XU(), UU()
        }
      }
      attachInput(UU) {
        this.attachedToElement && UU.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          UU = !QU.d.ForceAttachControlToAlwaysPreventDefault && UU, this.attachedToElement = !0, this.noPreventDefault = UU;
          for (const XU in this.attached) this.attached[XU].attachControl(UU)
        }
      }
      detachElement() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const XU in this.attached) this.attached[XU].detachControl(), UU && (this.attached[XU].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const UU in this.attached) {
          const XU = this.attached[UU];
          XU.checkInputs && (this.checkInputs = this._addCheckInputs(XU.checkInputs.bind(XU)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(UU) {
        const XU = {};
        for (const zU in this.attached) {
          const UU = this.attached[zU],
            cU = yU.b.Serialize(UU);
          XU[UU.getClassName()] = cU
        }
        UU.inputsmgr = XU
      }
      parse(UU) {
        const XU = UU.inputsmgr;
        if (XU) {
          this.clear();
          for (const UU in XU) {
            const zU = AU[UU];
            if (zU) {
              const cU = XU[UU],
                QU = yU.b.Parse((() => new zU), cU, null);
              this.add(QU)
            }
          }
        } else
          for (const zU in this.attached) {
            const XU = AU[this.attached[zU].getClassName()];
            if (XU) {
              const cU = yU.b.Parse((() => new XU), UU, null);
              this.remove(this.attached[zU]), this.add(cU)
            }
          }
      }
    }
  },
  41331: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU.d
    });
    var cU = zU(41340);
    (0, cU.f)()
  },
  41340: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU,
      f: () => NU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(37819),
      AU = zU(37923),
      FU = zU(41346),
      oU = zU(41314),
      DU = zU(37863);
    let EU = (() => {
        var UU;
        let XU, zU, oU = FU.b,
          DU = [],
          EU = [],
          YU = [],
          NU = [];
        return UU = class extends oU {
          constructor(UU, XU, zU, yU) {
            super(UU, zU, yU), this.groundColor = (0, cU.n)(this, DU, new AU.b(0, 0, 0)), this.direction = ((0, cU.n)(this, EU), (0, cU.n)(this, YU, void 0)), (0, cU.n)(this, NU), this.direction = XU || QU.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(UU) {
            return this.direction = QU.q.Normalize(UU.subtract(QU.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(UU, XU) {
            const zU = QU.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", zU.x, zU.y, zU.z, 0, XU), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), XU), this
          }
          transferToNodeMaterialEffect(UU, XU) {
            const zU = QU.q.Normalize(this.direction);
            return UU.setFloat3(XU, zU.x, zU.y, zU.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = QU.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return FU.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(UU, XU) {
            UU["HEMILIGHT" + XU] = !0
          }
        }, (() => {
          const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(oU[Symbol.metadata] ?? null) : void 0;
          XU = [(0, yU.m)()], zU = [(0, yU.F)()], (0, cU.j)(null, null, XU, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "groundColor" in UU,
              get: UU => UU.groundColor,
              set: (UU, XU) => {
                UU.groundColor = XU
              }
            },
            metadata: QU
          }, DU, EU), (0, cU.j)(null, null, zU, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: UU => "direction" in UU,
              get: UU => UU.direction,
              set: (UU, XU) => {
                UU.direction = XU
              }
            },
            metadata: QU
          }, YU, NU), QU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QU
          })
        })(), UU
      })(),
      YU = !1;

    function NU() {
      YU || (YU = !0, oU.e.AddNodeConstructor("Light_Type_3", ((UU, XU) => () => new EU(UU, QU.q.Zero(), XU))), (0, DU.h)("BABYLON.HemisphericLight", EU))
    }
  },
  37919: (UU, XU, zU) => {
    zU.d(XU, {
      Color3: () => cU.b,
      e: () => cU.e
    });
    var cU = zU(37923);
    (0, cU.f)()
  },
  38502: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(38505);
    class yU {
      static GetPlanes(UU) {
        const XU = [];
        for (let zU = 0; zU < 6; zU++) XU.push(new cU.d(0, 0, 0, 0));
        return yU.GetPlanesToRef(UU, XU), XU
      }
      static GetNearPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[2], XU.normal.y = zU[7] + zU[6], XU.normal.z = zU[11] + zU[10], XU.d = zU[15] + zU[14], XU.normalize()
      }
      static GetFarPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[2], XU.normal.y = zU[7] - zU[6], XU.normal.z = zU[11] - zU[10], XU.d = zU[15] - zU[14], XU.normalize()
      }
      static GetLeftPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[0], XU.normal.y = zU[7] + zU[4], XU.normal.z = zU[11] + zU[8], XU.d = zU[15] + zU[12], XU.normalize()
      }
      static GetRightPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[0], XU.normal.y = zU[7] - zU[4], XU.normal.z = zU[11] - zU[8], XU.d = zU[15] - zU[12], XU.normalize()
      }
      static GetTopPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[1], XU.normal.y = zU[7] - zU[5], XU.normal.z = zU[11] - zU[9], XU.d = zU[15] - zU[13], XU.normalize()
      }
      static GetBottomPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[1], XU.normal.y = zU[7] + zU[5], XU.normal.z = zU[11] + zU[9], XU.d = zU[15] + zU[13], XU.normalize()
      }
      static GetPlanesToRef(UU, XU) {
        yU.GetNearPlaneToRef(UU, XU[0]), yU.GetFarPlaneToRef(UU, XU[1]), yU.GetLeftPlaneToRef(UU, XU[2]), yU.GetRightPlaneToRef(UU, XU[3]), yU.GetTopPlaneToRef(UU, XU[4]), yU.GetBottomPlaneToRef(UU, XU[5])
      }
      static IsPointInFrustum(UU, XU) {
        for (let zU = 0; zU < 6; zU++)
          if (XU[zU].dotCoordinate(UU) < 0) return !1;
        return !0
      }
    }
  },
  38505: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(37819);
    class yU {
      constructor(UU, XU, zU, yU) {
        this.normal = new cU.q(UU, XU, zU), this.d = yU
      }
      cyU() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new yU(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let UU = this.normal.getHashCode();
        return UU = 397 * UU ^ this.d, UU
      }
      normalize() {
        const UU = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let XU = 0;
        return 0 !== UU && (XU = 1 / UU), this.normal.x *= XU, this.normal.y *= XU, this.normal.z *= XU, this.d *= XU, this
      }
      transform(UU) {
        const XU = yU._TmpMatrix;
        UU.invertToRef(XU);
        const zU = XU.m,
          cU = this.normal.x,
          QU = this.normal.y,
          AU = this.normal.z,
          FU = this.d,
          oU = cU * zU[0] + QU * zU[1] + AU * zU[2] + FU * zU[3],
          DU = cU * zU[4] + QU * zU[5] + AU * zU[6] + FU * zU[7],
          EU = cU * zU[8] + QU * zU[9] + AU * zU[10] + FU * zU[11],
          YU = cU * zU[12] + QU * zU[13] + AU * zU[14] + FU * zU[15];
        return new yU(oU, DU, EU, YU)
      }
      dotCoordinate(UU) {
        return this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z + this.d
      }
      copyFromPoints(UU, XU, zU) {
        const cU = XU.x - UU.x,
          yU = XU.y - UU.y,
          QU = XU.z - UU.z,
          AU = zU.x - UU.x,
          FU = zU.y - UU.y,
          oU = zU.z - UU.z,
          DU = yU * oU - QU * FU,
          EU = QU * AU - cU * oU,
          YU = cU * FU - yU * AU,
          NU = Math.sqrt(DU * DU + EU * EU + YU * YU);
        let IU;
        return IU = 0 !== NU ? 1 / NU : 0, this.normal.x = DU * IU, this.normal.y = EU * IU, this.normal.z = YU * IU, this.d = -(this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z), this
      }
      isFrontFacingTo(UU, XU) {
        return cU.q.Dot(this.normal, UU) <= XU
      }
      signedDistanceTo(UU) {
        return cU.q.Dot(UU, this.normal) + this.d
      }
      static FromArray(UU) {
        return new yU(UU[0], UU[1], UU[2], UU[3])
      }
      static FromPoints(UU, XU, zU) {
        const cU = new yU(0, 0, 0, 0);
        return cU.copyFromPoints(UU, XU, zU), cU
      }
      static FromPositionAndNormal(UU, XU) {
        const zU = new yU(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(UU, XU, zU)
      }
      static FromPositionAndNormalToRef(UU, XU, zU) {
        return zU.normal.YL(XU), zU.normal.normalize(), zU.d = -UU.dot(zU.normal), zU
      }
      static SignedDistanceToPlaneFromPositionAndNormal(UU, XU, zU) {
        const yU = -(XU.x * UU.x + XU.y * UU.y + XU.z * UU.z);
        return cU.q.Dot(zU, XU) + yU
      }
    }
    yU._TmpMatrix = cU.e.Identity()
  },
  37814: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      Matrix: () => cU.e,
      Quaternion: () => cU.f,
      RegisterMathVector: () => cU.h,
      TmpVectors: () => cU.l,
      Vector2: () => cU.m,
      Sp: () => cU.q,
      Vector4: () => cU.t
    });
    var cU = zU(37819);
    (0, cU.h)()
  },
  38845: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    class cU {
      constructor(UU, XU, zU, cU) {
        this.x = UU, this.y = XU, this.width = zU, this.height = cU
      }
      toGlobal(UU, XU) {
        return new cU(this.x * UU, this.y * XU, this.width * UU, this.height * XU)
      }
      toGlobalToRef(UU, XU, zU) {
        return zU.x = this.x * UU, zU.y = this.y * XU, zU.width = this.width * UU, zU.height = this.height * XU, this
      }
      clone() {
        return new cU(this.x, this.y, this.width, this.height)
      }
    }
  },
  41473: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => DU
    });
    var cU = zU(37819),
      yU = zU(37923),
      QU = zU(41481),
      AU = zU(41493),
      FU = zU(41508);

    function oU(UU) {
      let XU = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const zU = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        QU = [],
        oU = UU.width || UU.size || 1,
        DU = UU.height || UU.size || 1,
        EU = UU.depth || UU.size || 1,
        YU = UU.wrap || !1;
      let NU = void 0 === UU.topBaseAt ? 1 : UU.topBaseAt,
        IU = void 0 === UU.bottomBaseAt ? 0 : UU.bottomBaseAt;
      NU = (NU + 4) % 4, IU = (IU + 4) % 4;
      let pU = [2, 0, 3, 1][NU],
        aU = [2, 0, 1, 3][IU],
        tU = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (YU) {
        XU = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], tU = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let UU = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          zU = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const cU = [17, 18, 19, 16],
          yU = [22, 23, 20, 21];
        for (; pU > 0;) UU.unshift(UU.pop()), cU.unshift(cU.pop()), pU--;
        for (; aU > 0;) zU.unshift(zU.pop()), yU.unshift(yU.pop()), aU--;
        UU = UU.flat(), zU = zU.flat(), tU = tU.concat(UU).concat(zU), XU.push(cU[0], cU[2], cU[3], cU[0], cU[1], cU[2]), XU.push(yU[0], yU[2], yU[3], yU[0], yU[1], yU[2])
      }
      const gU = [oU / 2, DU / 2, EU / 2],
        kU = tU.reduce(((UU, XU, zU) => UU.concat(XU * gU[zU % 3])), []),
        GU = 0 === UU.sideOrientation ? 0 : UU.sideOrientation || AU.c.DEFAULTSIDE,
        BU = UU.faceUV || new Array(6),
        ZU = UU.faceColors,
        RU = [];
      for (let AU = 0; AU < 6; AU++) void 0 === BU[AU] && (BU[AU] = new cU.t(0, 0, 1, 1)), ZU && void 0 === ZU[AU] && (ZU[AU] = new yU.e(1, 1, 1, 1));
      for (let cU = 0; cU < 6; cU++)
        if (QU.push(BU[cU].z, FU.c ? 1 - BU[cU].w : BU[cU].w), QU.push(BU[cU].x, FU.c ? 1 - BU[cU].w : BU[cU].w), QU.push(BU[cU].x, FU.c ? 1 - BU[cU].y : BU[cU].y), QU.push(BU[cU].z, FU.c ? 1 - BU[cU].y : BU[cU].y), ZU)
          for (let UU = 0; UU < 4; UU++) RU.push(ZU[cU].r, ZU[cU].g, ZU[cU].b, ZU[cU].a);
      AU.c._ComputeSides(GU, kU, XU, zU, QU, UU.frontUVs, UU.backUVs);
      const PU = new AU.c;
      if (PU.indices = XU, PU.positions = kU, PU.normals = zU, PU.uvs = QU, ZU) {
        const UU = GU === AU.c.DOUBLESIDE ? RU.concat(RU) : RU;
        PU.colors = UU
      }
      return PU
    }

    function DU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const cU = new QU.b(UU, zU);
      XU.sideOrientation = QU.b._GetDefaultSideOrientation(XU.sideOrientation), cU._originalBuilderSideOrientation = XU.sideOrientation;
      return oU(XU).applyToMesh(cU, XU.updatable), cU
    }
    let EU = !1;
    EU || (EU = !0, AU.c.CreateBox = oU, QU.b.CreateBox = function(UU, XU) {
      return DU(UU, {
        size: XU,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  41532: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => YU
    });
    var cU = zU(37819),
      yU = zU(41481),
      QU = zU(41493),
      AU = zU(41536),
      FU = zU(41237),
      oU = zU(39493);

    function DU(UU) {
      const XU = [],
        zU = [],
        cU = UU.lines,
        yU = UU.colors,
        AU = [];
      let FU = 0;
      for (let QU = 0; QU < cU.length; QU++) {
        const UU = cU[QU];
        for (let cU = 0; cU < UU.length; cU++) {
          const {
            x: oU,
            y: DU,
            z: EU
          } = UU[cU];
          if (zU.push(oU, DU, EU), yU) {
            const UU = yU[QU],
              {
                r: XU,
                g: zU,
                b: FU,
                a: oU
              } = UU[cU];
            AU.push(XU, zU, FU, oU)
          }
          cU > 0 && (XU.push(FU - 1), XU.push(FU)), FU++
        }
      }
      const oU = new QU.c;
      return oU.indices = XU, oU.positions = zU, yU && (oU.colors = AU), oU
    }

    function EU(UU) {
      const XU = UU.dashSize || 3,
        zU = UU.gapSize || 1,
        yU = UU.dashNb || 200,
        AU = UU.points,
        FU = [],
        oU = [],
        DU = cU.q.Zero();
      let EU, YU, NU, IU = 0,
        pU = 0;
      for (NU = 0; NU < AU.length - 1; NU++) AU[NU + 1].subtractToRef(AU[NU], DU), IU += DU.length();
      const aU = IU / yU,
        tU = XU * aU / (XU + zU);
      for (NU = 0; NU < AU.length - 1; NU++) {
        AU[NU + 1].subtractToRef(AU[NU], DU), EU = Math.floor(DU.length() / aU), DU.normalize();
        for (let UU = 0; UU < EU; UU++) YU = aU * UU, FU.push(AU[NU].x + YU * DU.x, AU[NU].y + YU * DU.y, AU[NU].z + YU * DU.z), FU.push(AU[NU].x + (YU + tU) * DU.x, AU[NU].y + (YU + tU) * DU.y, AU[NU].z + (YU + tU) * DU.z), oU.push(pU, pU + 1), pU += 2
      }
      const gU = new QU.c;
      return gU.positions = FU, gU.indices = oU, gU
    }

    function YU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const cU = XU.instance,
        yU = XU.lines,
        QU = XU.colors;
      if (cU) {
        const UU = cU.getVerticesData(FU.h.PositionKind);
        let XU, zU;
        QU && (XU = cU.getVerticesData(FU.h.ColorKind));
        let AU = 0,
          oU = 0;
        for (let cU = 0; cU < yU.length; cU++) {
          const FU = yU[cU];
          for (let yU = 0; yU < FU.length; yU++) UU[AU] = FU[yU].x, UU[AU + 1] = FU[yU].y, UU[AU + 2] = FU[yU].z, QU && XU && (zU = QU[cU], XU[oU] = zU[yU].r, XU[oU + 1] = zU[yU].g, XU[oU + 2] = zU[yU].b, XU[oU + 3] = zU[yU].a, oU += 4), AU += 3
        }
        return cU.updateVerticesData(FU.h.PositionKind, UU, !1, !1), QU && XU && cU.updateVerticesData(FU.h.ColorKind, XU, !1, !1), cU.refreshBoundingInfo(), cU
      }
      const oU = !!QU,
        EU = new AU.d(UU, zU, null, void 0, void 0, oU, XU.useVertexAlpha, XU.material);
      return DU(XU).applyToMesh(EU, XU.updatable), EU
    }

    function NU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const cU = XU.colors ? [XU.colors] : null;
      return YU(UU, {
        lines: [XU.points],
        updatable: XU.updatable,
        instance: XU.instance,
        colors: cU,
        useVertexAlpha: XU.useVertexAlpha,
        material: XU.material
      }, zU)
    }

    function IU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const QU = XU.points,
        FU = XU.instance,
        DU = XU.gapSize || 1,
        YU = XU.dashSize || 3;
      if (FU) {
        const UU = UU => {
          const XU = cU.q.Zero(),
            zU = UU.length / 6;
          let yU, AU, oU, DU, EU = 0,
            YU = 0;
          for (oU = 0; oU < QU.length - 1; oU++) QU[oU + 1].subtractToRef(QU[oU], XU), EU += XU.length();
          const NU = EU / zU,
            IU = FU._creationDataStorage.dashSize,
            pU = IU * NU / (IU + FU._creationDataStorage.gapSize);
          for (oU = 0; oU < QU.length - 1; oU++)
            for (QU[oU + 1].subtractToRef(QU[oU], XU), yU = Math.floor(XU.length() / NU), XU.normalize(), DU = 0; DU < yU && YU < UU.length;) AU = NU * DU, UU[YU] = QU[oU].x + AU * XU.x, UU[YU + 1] = QU[oU].y + AU * XU.y, UU[YU + 2] = QU[oU].z + AU * XU.z, UU[YU + 3] = QU[oU].x + (AU + pU) * XU.x, UU[YU + 4] = QU[oU].y + (AU + pU) * XU.y, UU[YU + 5] = QU[oU].z + (AU + pU) * XU.z, YU += 6, DU++;
          for (; YU < UU.length;) UU[YU] = QU[oU].x, UU[YU + 1] = QU[oU].y, UU[YU + 2] = QU[oU].z, YU += 3
        };
        return (XU.dashNb || XU.dashSize || XU.gapSize || XU.useVertexAlpha || XU.material) && oU.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), FU.updateMeshPositions(UU, !1), FU
      }
      const NU = new AU.d(UU, zU, null, void 0, void 0, void 0, XU.useVertexAlpha, XU.material);
      return EU(XU).applyToMesh(NU, XU.updatable), NU._creationDataStorage = new yU.d, NU._creationDataStorage.dashSize = YU, NU._creationDataStorage.gapSize = DU, NU
    }
    let pU = !1;
    pU || (pU = !0, QU.c.CreateLineSystem = DU, QU.c.CreateDashedLines = EU, yU.b.CreateLines = function(UU, XU) {
      return NU(UU, {
        points: XU,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, yU.b.CreateDashedLines = function(UU, XU, zU, cU, yU) {
      return IU(UU, {
        points: XU,
        dashSize: zU,
        gapSize: cU,
        dashNb: yU,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  41536: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => NU,
      e: () => aU
    });
    var cU, yU, QU = zU(37923),
      AU = zU(41237),
      FU = zU(41481),
      oU = zU(41540),
      DU = zU(41374),
      EU = zU(41549),
      YU = zU(40989);
    class NU extends FU.b {
      _isShaderMaterial(UU) {
        return !!UU && "ShaderMaterial" === UU.getClassName()
      }
      constructor(UU) {
        let XU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          cU = arguments.length > 5 ? arguments[5] : void 0,
          yU = arguments.length > 6 ? arguments[6] : void 0,
          FU = arguments.length > 7 ? arguments[7] : void 0;
        super(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, XU, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = cU, this.useVertexAlpha = yU, this.color = new QU.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, XU && (this.color = XU.color.clone(), this.alpha = XU.alpha, this.useVertexColor = XU.useVertexColor, this.useVertexAlpha = XU.useVertexAlpha), this.intersectionThreshold = .1;
        const oU = {
          attributes: [AU.h.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? oU.defines.push("#define VERTEXALPHA") : oU.needAlphaBlending = !1, this.useVertexColor ? (oU.defines.push("#define VERTEXCOLOR"), oU.attributes.push(AU.h.ColorKind)) : (oU.uniforms.push("color"), this._color4 = new QU.e), FU) this.material = FU;
        else {
          this.nS().qp().isWebGPU && !NU.ForceGLSL && (this._shaderLanguage = 1), oU.shaderLanguage = this._shaderLanguage, oU.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([zU.e(650).then((() => zU(45224))), zU.e(656).then((() => zU(45229)))]) : await Promise.all([zU.e(632).then((() => zU(45233))), zU.e(638).then((() => zU(45242)))])
          };
          const UU = new EU.o("colorShader", this.nS(), "color", oU, !1);
          UU.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(UU)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(UU) {
        const XU = this.material;
        if (XU === UU) return;
        const zU = XU && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(UU), zU && XU?.dispose()
      }
      _setInternalMaterial(UU) {
        this._setMaterial(UU), this.material && (this.material.fillMode = DU.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(UU) {}
      _bind(UU, XU) {
        if (!this._geometry) return this;
        const zU = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(XU, zU) : this._geometry._bind(XU, zU, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: UU,
            g: XU,
            b: zU
          } = this.color;
          this._color4.set(UU, XU, zU, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(UU, XU, zU) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const cU = this.nS().qp();
        return this._unIndexed ? cU.drawArraysType(DU.c.LineListDrawMode, UU.verticesStart, UU.verticesCount, zU) : cU.drawElementsType(DU.c.LineListDrawMode, UU.indexStart, UU.indexCount, zU), this
      }
      dispose(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || XU) && this.material?.dispose(!1, !1, !0), super.dispose(UU)
      }
      clone(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        if (XU && void 0 === XU._addToSceneRootNodes) {
          const zU = XU;
          return zU.source = this, new NU(UU, this.nS(), zU.parent, zU.source, zU.doNotCloneChildren)
        }
        return new NU(UU, this.nS(), XU, this, zU)
      }
      createInstance(UU) {
        const XU = new IU(UU, this);
        if (this.XM) {
          XU.XM = {};
          for (const UU in this.XM) XU.XM[UU] = this.XM[UU]
        }
        return XU
      }
      serialize(UU) {
        super.serialize(UU), UU.color = this.color.cyU(), UU.alpha = this.alpha
      }
      static Parse(UU, XU) {
        const zU = new NU(UU.name, XU);
        return zU.color = QU.b.FromArray(UU.color), zU.alpha = UU.alpha, zU
      }
    }
    NU.ForceGLSL = !1;
    class IU extends oU.b {
      constructor(UU, XU) {
        super(UU, XU), this.intersectionThreshold = XU.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let pU = !1;

    function aU() {
      pU || (pU = !0, FU.b._LinesMeshParser = (UU, XU) => NU.Parse(UU, XU))
    }(cU = NU.prototype).enableEdgesRendering ?? (cU.enableEdgesRendering = (0, YU.k)("LinesMesh", "enableEdgesRendering")), (yU = IU.prototype).enableEdgesRendering ?? (yU.enableEdgesRendering = (0, YU.k)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  39486: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(39493);
    const yU = (UU, XU, zU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : zU && "object" === typeof UU ? {
      ...UU
    } : null : UU.clone(XU) : null;
    class QU {
      static DeepCopy(UU, XU, zU, QU) {
        let AU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const FU = function(UU) {
          const XU = [];
          do {
            const zU = Object.getOwnPropertyNames(UU);
            for (const UU of zU) - 1 === XU.indexOf(UU) && XU.push(UU)
          } while (UU = Object.getPrototypeOf(UU));
          return XU
        }(UU);
        for (const DU of FU) {
          if ("_" === DU[0] && (!QU || -1 === QU.indexOf(DU))) continue;
          if (DU.endsWith("Observable")) continue;
          if (zU && -1 !== zU.indexOf(DU)) continue;
          const FU = UU[DU],
            EU = typeof FU;
          if ("function" !== EU) try {
            if ("object" === EU)
              if (FU instanceof Uint8Array) XU[DU] = Uint8Array.from(FU);
              else if (FU instanceof Array) {
              if (XU[DU] = [], FU.length > 0)
                if ("object" == typeof FU[0])
                  for (let UU = 0; UU < FU.length; UU++) {
                    const zU = yU(FU[UU], XU, AU); - 1 === XU[DU].indexOf(zU) && XU[DU].push(zU)
                  } else XU[DU] = FU.slice(0)
            } else XU[DU] = yU(FU, XU, AU);
            else XU[DU] = FU
          } catch (oU) {
            cU.b.Warn(oU.message)
          }
        }
      }
    }
  },
  38649: (UU, XU, zU) => {
    function cU() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
        const XU = 16 * Math.random() | 0;
        return ("x" === UU ? XU : 3 & XU | 8).toString(16)
      }))
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  39493: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {
      static _CheckLimit(UU, XU) {
        let zU = cU._LogLimitOutputs[UU];
        return zU ? zU.current++ : (zU = {
          limit: XU,
          current: 1
        }, cU._LogLimitOutputs[UU] = zU), zU.current <= zU.limit
      }
      static _GenerateLimitMessage(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const zU = cU._LogLimitOutputs[UU];
        if (!zU || !cU.MessageLimitReached) return;
        const yU = this._Levels[XU];
        zU.current === zU.limit && cU[yU.name](cU.MessageLimitReached.replace(/%LIMIT%/g, "" + zU.limit).replace(/%TYPE%/g, yU.name ?? ""))
      }
      static _AddLogEntry(UU) {
        cU._LogCache = UU + cU._LogCache, cU.OnNewCacheEntry && cU.OnNewCacheEntry(UU)
      }
      static _FormatMessage(UU) {
        const XU = UU => UU < 10 ? "0" + UU : "" + UU,
          zU = new Date;
        return "[" + XU(zU.getHours()) + ":" + XU(zU.getMinutes()) + ":" + XU(zU.getSeconds()) + "]: " + UU
      }
      static _LogDisabled(UU, XU) {}
      static _LogEnabled() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const yU = Array.isArray(XU) ? XU[0] : XU;
        if (void 0 !== zU && !cU._CheckLimit(yU, zU)) return;
        const QU = cU._FormatMessage(yU),
          AU = this._Levels[UU],
          FU = Array.isArray(XU) ? XU.slice(1) : [];
        AU.logFunc && AU.logFunc("BJS - " + QU, ...FU);
        const oU = `<div style='color:${AU.color}'>${QU}</div><br>`;
        cU._AddLogEntry(oU), cU._GenerateLimitMessage(yU, UU)
      }
      static get LogCache() {
        return cU._LogCache
      }
      static ClearLogCache() {
        cU._LogCache = "", cU._LogLimitOutputs = {}, cU.errorsCount = 0
      }
      static set LogLevels(UU) {
        cU.Log = cU._LogDisabled, cU.Warn = cU._LogDisabled, cU.Error = cU._LogDisabled;
        const XU = [cU.MessageLogLevel, cU.WarningLogLevel, cU.ErrorLogLevel];
        for (const zU of XU)
          if ((UU & zU) === zU) {
            const UU = this._Levels[zU];
            cU[UU.name] = cU._LogEnabled.bind(cU, zU)
          }
      }
    }
    cU.NoneLogLevel = 0, cU.MessageLogLevel = 1, cU.WarningLogLevel = 2, cU.ErrorLogLevel = 4, cU.AllLogLevel = 7, cU.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", cU._LogCache = "", cU._LogLimitOutputs = {}, cU._Levels = [{}, {
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
    }], cU.errorsCount = 0, cU.Log = cU._LogEnabled.bind(cU, cU.MessageLogLevel), cU.Warn = cU._LogEnabled.bind(cU, cU.WarningLogLevel), cU.Error = cU._LogEnabled.bind(cU, cU.ErrorLogLevel)
  },
  41199: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU.d
    });
    var cU = zU(41202);
    (0, cU.b)()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);