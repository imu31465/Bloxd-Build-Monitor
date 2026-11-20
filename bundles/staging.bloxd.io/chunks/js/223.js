export const id = 223;
export const ids = [223, 229, 232];
export const modules = {
  39629: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      f: () => TU
    });
    var tU = gU(38236),
      pU = gU(39395),
      EU = gU(39603),
      PU = {};
    class TU {
      constructor(UU) {
        this.attachedToElement = !1, this.attached = {}, this.camera = UU, this.checkInputs = () => {}
      }
      add(UU) {
        const RU = UU.getSimpleName();
        this.attached[RU] ? tU.e.Warn("camera input of type " + RU + " already exists on camera") : (this.attached[RU] = UU, UU.camera = this.camera, UU.checkInputs && (this.checkInputs = this._addCheckInputs(UU.checkInputs.bind(UU))), this.attachedToElement && UU.attachControl(this.noPreventDefault))
      }
      remove(UU) {
        for (const RU in this.attached) {
          const gU = this.attached[RU];
          if (gU === UU) return gU.detachControl(), gU.camera = null, delete this.attached[RU], void this.rebuildInputCheck()
        }
      }
      removeByType(UU) {
        for (const RU in this.attached) {
          const gU = this.attached[RU];
          gU.getClassName() === UU && (gU.detachControl(), gU.camera = null, delete this.attached[RU], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(UU) {
        const RU = this.checkInputs;
        return () => {
          RU(), UU()
        }
      }
      attachInput(UU) {
        this.attachedToElement && UU.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          UU = !EU.d.ForceAttachControlToAlwaysPreventDefault && UU, this.attachedToElement = !0, this.noPreventDefault = UU;
          for (const RU in this.attached) this.attached[RU].attachControl(UU)
        }
      }
      detachElement() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const RU in this.attached) this.attached[RU].detachControl(), UU && (this.attached[RU].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const UU in this.attached) {
          const RU = this.attached[UU];
          RU.checkInputs && (this.checkInputs = this._addCheckInputs(RU.checkInputs.bind(RU)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(UU) {
        const RU = {};
        for (const gU in this.attached) {
          const UU = this.attached[gU],
            tU = pU.b.Serialize(UU);
          RU[UU.getClassName()] = tU
        }
        UU.inputsmgr = RU
      }
      parse(UU) {
        const RU = UU.inputsmgr;
        if (RU) {
          this.clear();
          for (const UU in RU) {
            const gU = PU[UU];
            if (gU) {
              const tU = RU[UU],
                EU = pU.b.Parse((() => new gU), tU, null);
              this.add(EU)
            }
          }
        } else
          for (const gU in this.attached) {
            const RU = PU[this.attached[gU].getClassName()];
            if (RU) {
              const tU = pU.b.Parse((() => new RU), UU, null);
              this.remove(this.attached[gU]), this.add(tU)
            }
          }
      }
    }
  },
  39636: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU.b
    });
    var tU = gU(39643);
    (0, tU.e)()
  },
  39643: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => cU,
      e: () => jU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(36600),
      PU = gU(36761),
      TU = gU(39645),
      qU = gU(39610),
      KU = gU(36639);
    let cU = (() => {
        var UU;
        let RU, gU, qU = TU.e,
          KU = [],
          cU = [],
          GU = [],
          jU = [];
        return UU = class extends qU {
          constructor(UU, RU, gU, pU) {
            super(UU, gU, pU), this.groundColor = (0, tU.j)(this, KU, new PU.e(0, 0, 0)), this.direction = ((0, tU.j)(this, cU), (0, tU.j)(this, GU, void 0)), (0, tU.j)(this, jU), this.direction = RU || EU.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(UU) {
            return this.direction = EU.n.Normalize(UU.subtract(EU.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(UU, RU) {
            const gU = EU.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", gU.x, gU.y, gU.z, 0, RU), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), RU), this
          }
          transferToNodeMaterialEffect(UU, RU) {
            const gU = EU.n.Normalize(this.direction);
            return UU.setFloat3(RU, gU.x, gU.y, gU.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = EU.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return TU.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(UU, RU) {
            UU["HEMILIGHT" + RU] = !0
          }
        }, (() => {
          const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(qU[Symbol.metadata] ?? null) : void 0;
          RU = [(0, pU.l)()], gU = [(0, pU.I)()], (0, tU.i)(null, null, RU, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "groundColor" in UU,
              get: UU => UU.groundColor,
              set: (UU, RU) => {
                UU.groundColor = RU
              }
            },
            metadata: EU
          }, KU, cU), (0, tU.i)(null, null, gU, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: UU => "direction" in UU,
              get: UU => UU.direction,
              set: (UU, RU) => {
                UU.direction = RU
              }
            },
            metadata: EU
          }, GU, jU), EU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EU
          })
        })(), UU
      })(),
      GU = !1;

    function jU() {
      GU || (GU = !0, qU.b.AddNodeConstructor("Light_Type_3", ((UU, RU) => () => new cU(UU, EU.n.Zero(), RU))), (0, KU.g)("BABYLON.HemisphericLight", cU))
    }
  },
  36754: (UU, RU, gU) => {
    gU.d(RU, {
      Color3: () => tU.e,
      c: () => tU.g
    });
    var tU = gU(36761);
    (0, tU.k)()
  },
  37301: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    var tU = gU(37308);
    class pU {
      static GetPlanes(UU) {
        const RU = [];
        for (let gU = 0; gU < 6; gU++) RU.push(new tU.e(0, 0, 0, 0));
        return pU.GetPlanesToRef(UU, RU), RU
      }
      static GetNearPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[2], RU.normal.y = gU[7] + gU[6], RU.normal.z = gU[11] + gU[10], RU.d = gU[15] + gU[14], RU.normalize()
      }
      static GetFarPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[2], RU.normal.y = gU[7] - gU[6], RU.normal.z = gU[11] - gU[10], RU.d = gU[15] - gU[14], RU.normalize()
      }
      static GetLeftPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[0], RU.normal.y = gU[7] + gU[4], RU.normal.z = gU[11] + gU[8], RU.d = gU[15] + gU[12], RU.normalize()
      }
      static GetRightPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[0], RU.normal.y = gU[7] - gU[4], RU.normal.z = gU[11] - gU[8], RU.d = gU[15] - gU[12], RU.normalize()
      }
      static GetTopPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[1], RU.normal.y = gU[7] - gU[5], RU.normal.z = gU[11] - gU[9], RU.d = gU[15] - gU[13], RU.normalize()
      }
      static GetBottomPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[1], RU.normal.y = gU[7] + gU[5], RU.normal.z = gU[11] + gU[9], RU.d = gU[15] + gU[13], RU.normalize()
      }
      static GetPlanesToRef(UU, RU) {
        pU.GetNearPlaneToRef(UU, RU[0]), pU.GetFarPlaneToRef(UU, RU[1]), pU.GetLeftPlaneToRef(UU, RU[2]), pU.GetRightPlaneToRef(UU, RU[3]), pU.GetTopPlaneToRef(UU, RU[4]), pU.GetBottomPlaneToRef(UU, RU[5])
      }
      static IsPointInFrustum(UU, RU) {
        for (let gU = 0; gU < 6; gU++)
          if (RU[gU].dotCoordinate(UU) < 0) return !1;
        return !0
      }
    }
  },
  37308: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    var tU = gU(36600);
    class pU {
      constructor(UU, RU, gU, pU) {
        this.normal = new tU.n(UU, RU, gU), this.d = pU
      }
      vgU() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new pU(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let RU = 0;
        return 0 !== UU && (RU = 1 / UU), this.normal.x *= RU, this.normal.y *= RU, this.normal.z *= RU, this.d *= RU, this
      }
      transform(UU) {
        const RU = pU._TmpMatrix;
        UU.invertToRef(RU);
        const gU = RU.m,
          tU = this.normal.x,
          EU = this.normal.y,
          PU = this.normal.z,
          TU = this.d,
          qU = tU * gU[0] + EU * gU[1] + PU * gU[2] + TU * gU[3],
          KU = tU * gU[4] + EU * gU[5] + PU * gU[6] + TU * gU[7],
          cU = tU * gU[8] + EU * gU[9] + PU * gU[10] + TU * gU[11],
          GU = tU * gU[12] + EU * gU[13] + PU * gU[14] + TU * gU[15];
        return new pU(qU, KU, cU, GU)
      }
      dotCoordinate(UU) {
        return this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z + this.d
      }
      copyFromPoints(UU, RU, gU) {
        const tU = RU.x - UU.x,
          pU = RU.y - UU.y,
          EU = RU.z - UU.z,
          PU = gU.x - UU.x,
          TU = gU.y - UU.y,
          qU = gU.z - UU.z,
          KU = pU * qU - EU * TU,
          cU = EU * PU - tU * qU,
          GU = tU * TU - pU * PU,
          jU = Math.sqrt(KU * KU + cU * cU + GU * GU);
        let uU;
        return uU = 0 !== jU ? 1 / jU : 0, this.normal.x = KU * uU, this.normal.y = cU * uU, this.normal.z = GU * uU, this.d = -(this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z), this
      }
      isFrontFacingTo(UU, RU) {
        return tU.n.Dot(this.normal, UU) <= RU
      }
      signedDistanceTo(UU) {
        return tU.n.Dot(UU, this.normal) + this.d
      }
      static FromArray(UU) {
        return new pU(UU[0], UU[1], UU[2], UU[3])
      }
      static FromPoints(UU, RU, gU) {
        const tU = new pU(0, 0, 0, 0);
        return tU.copyFromPoints(UU, RU, gU), tU
      }
      static FromPositionAndNormal(UU, RU) {
        const gU = new pU(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(UU, RU, gU)
      }
      static FromPositionAndNormalToRef(UU, RU, gU) {
        return gU.normal.PgU(RU), gU.normal.normalize(), gU.d = -UU.dot(gU.normal), gU
      }
      static SignedDistanceToPlaneFromPositionAndNormal(UU, RU, gU) {
        const pU = -(RU.x * UU.x + RU.y * UU.y + RU.z * UU.z);
        return tU.n.Dot(gU, RU) + pU
      }
    }
    pU._TmpMatrix = tU.c.Identity()
  },
  36593: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      Matrix: () => tU.c,
      Quaternion: () => tU.d,
      RegisterMathVector: () => tU.g,
      TmpVectors: () => tU.h,
      Vector2: () => tU.l,
      xC: () => tU.n,
      Vector4: () => tU.q
    });
    var tU = gU(36600);
    (0, tU.g)()
  },
  37641: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    class tU {
      constructor(UU, RU, gU, tU) {
        this.x = UU, this.y = RU, this.width = gU, this.height = tU
      }
      toGlobal(UU, RU) {
        return new tU(this.x * UU, this.y * RU, this.width * UU, this.height * RU)
      }
      toGlobalToRef(UU, RU, gU) {
        return gU.x = this.x * UU, gU.y = this.y * RU, gU.width = this.width * UU, gU.height = this.height * RU, this
      }
      clone() {
        return new tU(this.x, this.y, this.width, this.height)
      }
    }
  },
  39780: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => KU
    });
    var tU = gU(36600),
      pU = gU(36761),
      EU = gU(39782),
      PU = gU(39792),
      TU = gU(39812);

    function qU(UU) {
      let RU = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const gU = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        EU = [],
        qU = UU.width || UU.size || 1,
        KU = UU.height || UU.size || 1,
        cU = UU.depth || UU.size || 1,
        GU = UU.wrap || !1;
      let jU = void 0 === UU.topBaseAt ? 1 : UU.topBaseAt,
        uU = void 0 === UU.bottomBaseAt ? 0 : UU.bottomBaseAt;
      jU = (jU + 4) % 4, uU = (uU + 4) % 4;
      let CU = [2, 0, 3, 1][jU],
        hU = [2, 0, 1, 3][uU],
        QU = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (GU) {
        RU = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], QU = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let UU = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          gU = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const tU = [17, 18, 19, 16],
          pU = [22, 23, 20, 21];
        for (; CU > 0;) UU.unshift(UU.pop()), tU.unshift(tU.pop()), CU--;
        for (; hU > 0;) gU.unshift(gU.pop()), pU.unshift(pU.pop()), hU--;
        UU = UU.flat(), gU = gU.flat(), QU = QU.concat(UU).concat(gU), RU.push(tU[0], tU[2], tU[3], tU[0], tU[1], tU[2]), RU.push(pU[0], pU[2], pU[3], pU[0], pU[1], pU[2])
      }
      const eU = [qU / 2, KU / 2, cU / 2],
        WU = QU.reduce(((UU, RU, gU) => UU.concat(RU * eU[gU % 3])), []),
        fU = 0 === UU.sideOrientation ? 0 : UU.sideOrientation || PU.b.DEFAULTSIDE,
        xU = UU.faceUV || new Array(6),
        mU = UU.faceColors,
        IU = [];
      for (let PU = 0; PU < 6; PU++) void 0 === xU[PU] && (xU[PU] = new tU.q(0, 0, 1, 1)), mU && void 0 === mU[PU] && (mU[PU] = new pU.g(1, 1, 1, 1));
      for (let tU = 0; tU < 6; tU++)
        if (EU.push(xU[tU].z, TU.c ? 1 - xU[tU].w : xU[tU].w), EU.push(xU[tU].x, TU.c ? 1 - xU[tU].w : xU[tU].w), EU.push(xU[tU].x, TU.c ? 1 - xU[tU].y : xU[tU].y), EU.push(xU[tU].z, TU.c ? 1 - xU[tU].y : xU[tU].y), mU)
          for (let UU = 0; UU < 4; UU++) IU.push(mU[tU].r, mU[tU].g, mU[tU].b, mU[tU].a);
      PU.b._ComputeSides(fU, WU, RU, gU, EU, UU.frontUVs, UU.backUVs);
      const JU = new PU.b;
      if (JU.indices = RU, JU.positions = WU, JU.normals = gU, JU.uvs = EU, mU) {
        const UU = fU === PU.b.DOUBLESIDE ? IU.concat(IU) : IU;
        JU.colors = UU
      }
      return JU
    }

    function KU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const tU = new EU.c(UU, gU);
      RU.sideOrientation = EU.c._GetDefaultSideOrientation(RU.sideOrientation), tU._originalBuilderSideOrientation = RU.sideOrientation;
      return qU(RU).applyToMesh(tU, RU.updatable), tU
    }
    let cU = !1;
    cU || (cU = !0, PU.b.CreateBox = qU, EU.c.CreateBox = function(UU, RU) {
      return KU(UU, {
        size: RU,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  39833: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => GU
    });
    var tU = gU(36600),
      pU = gU(39782),
      EU = gU(39792),
      PU = gU(39835),
      TU = gU(39517),
      qU = gU(38236);

    function KU(UU) {
      const RU = [],
        gU = [],
        tU = UU.lines,
        pU = UU.colors,
        PU = [];
      let TU = 0;
      for (let EU = 0; EU < tU.length; EU++) {
        const UU = tU[EU];
        for (let tU = 0; tU < UU.length; tU++) {
          const {
            x: qU,
            y: KU,
            z: cU
          } = UU[tU];
          if (gU.push(qU, KU, cU), pU) {
            const UU = pU[EU],
              {
                r: RU,
                g: gU,
                b: TU,
                a: qU
              } = UU[tU];
            PU.push(RU, gU, TU, qU)
          }
          tU > 0 && (RU.push(TU - 1), RU.push(TU)), TU++
        }
      }
      const qU = new EU.b;
      return qU.indices = RU, qU.positions = gU, pU && (qU.colors = PU), qU
    }

    function cU(UU) {
      const RU = UU.dashSize || 3,
        gU = UU.gapSize || 1,
        pU = UU.dashNb || 200,
        PU = UU.points,
        TU = [],
        qU = [],
        KU = tU.n.Zero();
      let cU, GU, jU, uU = 0,
        CU = 0;
      for (jU = 0; jU < PU.length - 1; jU++) PU[jU + 1].subtractToRef(PU[jU], KU), uU += KU.length();
      const hU = uU / pU,
        QU = RU * hU / (RU + gU);
      for (jU = 0; jU < PU.length - 1; jU++) {
        PU[jU + 1].subtractToRef(PU[jU], KU), cU = Math.floor(KU.length() / hU), KU.normalize();
        for (let UU = 0; UU < cU; UU++) GU = hU * UU, TU.push(PU[jU].x + GU * KU.x, PU[jU].y + GU * KU.y, PU[jU].z + GU * KU.z), TU.push(PU[jU].x + (GU + QU) * KU.x, PU[jU].y + (GU + QU) * KU.y, PU[jU].z + (GU + QU) * KU.z), qU.push(CU, CU + 1), CU += 2
      }
      const eU = new EU.b;
      return eU.positions = TU, eU.indices = qU, eU
    }

    function GU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const tU = RU.instance,
        pU = RU.lines,
        EU = RU.colors;
      if (tU) {
        const UU = tU.getVerticesData(TU.l.PositionKind);
        let RU, gU;
        EU && (RU = tU.getVerticesData(TU.l.ColorKind));
        let PU = 0,
          qU = 0;
        for (let tU = 0; tU < pU.length; tU++) {
          const TU = pU[tU];
          for (let pU = 0; pU < TU.length; pU++) UU[PU] = TU[pU].x, UU[PU + 1] = TU[pU].y, UU[PU + 2] = TU[pU].z, EU && RU && (gU = EU[tU], RU[qU] = gU[pU].r, RU[qU + 1] = gU[pU].g, RU[qU + 2] = gU[pU].b, RU[qU + 3] = gU[pU].a, qU += 4), PU += 3
        }
        return tU.updateVerticesData(TU.l.PositionKind, UU, !1, !1), EU && RU && tU.updateVerticesData(TU.l.ColorKind, RU, !1, !1), tU.refreshBoundingInfo(), tU
      }
      const qU = !!EU,
        cU = new PU.e(UU, gU, null, void 0, void 0, qU, RU.useVertexAlpha, RU.material);
      return KU(RU).applyToMesh(cU, RU.updatable), cU
    }

    function jU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const tU = RU.colors ? [RU.colors] : null;
      return GU(UU, {
        lines: [RU.points],
        updatable: RU.updatable,
        instance: RU.instance,
        colors: tU,
        useVertexAlpha: RU.useVertexAlpha,
        material: RU.material
      }, gU)
    }

    function uU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const EU = RU.points,
        TU = RU.instance,
        KU = RU.gapSize || 1,
        GU = RU.dashSize || 3;
      if (TU) {
        const UU = UU => {
          const RU = tU.n.Zero(),
            gU = UU.length / 6;
          let pU, PU, qU, KU, cU = 0,
            GU = 0;
          for (qU = 0; qU < EU.length - 1; qU++) EU[qU + 1].subtractToRef(EU[qU], RU), cU += RU.length();
          const jU = cU / gU,
            uU = TU._creationDataStorage.dashSize,
            CU = uU * jU / (uU + TU._creationDataStorage.gapSize);
          for (qU = 0; qU < EU.length - 1; qU++)
            for (EU[qU + 1].subtractToRef(EU[qU], RU), pU = Math.floor(RU.length() / jU), RU.normalize(), KU = 0; KU < pU && GU < UU.length;) PU = jU * KU, UU[GU] = EU[qU].x + PU * RU.x, UU[GU + 1] = EU[qU].y + PU * RU.y, UU[GU + 2] = EU[qU].z + PU * RU.z, UU[GU + 3] = EU[qU].x + (PU + CU) * RU.x, UU[GU + 4] = EU[qU].y + (PU + CU) * RU.y, UU[GU + 5] = EU[qU].z + (PU + CU) * RU.z, GU += 6, KU++;
          for (; GU < UU.length;) UU[GU] = EU[qU].x, UU[GU + 1] = EU[qU].y, UU[GU + 2] = EU[qU].z, GU += 3
        };
        return (RU.dashNb || RU.dashSize || RU.gapSize || RU.useVertexAlpha || RU.material) && qU.e.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), TU.updateMeshPositions(UU, !1), TU
      }
      const jU = new PU.e(UU, gU, null, void 0, void 0, void 0, RU.useVertexAlpha, RU.material);
      return cU(RU).applyToMesh(jU, RU.updatable), jU._creationDataStorage = new pU.h, jU._creationDataStorage.dashSize = GU, jU._creationDataStorage.gapSize = KU, jU
    }
    let CU = !1;
    CU || (CU = !0, EU.b.CreateLineSystem = KU, EU.b.CreateDashedLines = cU, pU.c.CreateLines = function(UU, RU) {
      return jU(UU, {
        points: RU,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, pU.c.CreateDashedLines = function(UU, RU, gU, tU, pU) {
      return uU(UU, {
        points: RU,
        dashSize: gU,
        gapSize: tU,
        dashNb: pU,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  39835: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => jU,
      i: () => hU
    });
    var tU, pU, EU = gU(36761),
      PU = gU(39517),
      TU = gU(39782),
      qU = gU(39844),
      KU = gU(39676),
      cU = gU(39847),
      GU = gU(39256);
    class jU extends TU.c {
      _isShaderMaterial(UU) {
        return !!UU && "ShaderMaterial" === UU.getClassName()
      }
      constructor(UU) {
        let RU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          tU = arguments.length > 5 ? arguments[5] : void 0,
          pU = arguments.length > 6 ? arguments[6] : void 0,
          TU = arguments.length > 7 ? arguments[7] : void 0;
        super(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, RU, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = tU, this.useVertexAlpha = pU, this.color = new EU.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, RU && (this.color = RU.color.clone(), this.alpha = RU.alpha, this.useVertexColor = RU.useVertexColor, this.useVertexAlpha = RU.useVertexAlpha), this.intersectionThreshold = .1;
        const qU = {
          attributes: [PU.l.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? qU.defines.push("#define VERTEXALPHA") : qU.needAlphaBlending = !1, this.useVertexColor ? (qU.defines.push("#define VERTEXCOLOR"), qU.attributes.push(PU.l.ColorKind)) : (qU.uniforms.push("color"), this._color4 = new EU.g), TU) this.material = TU;
        else {
          this.aZ().WC().isWebGPU && !jU.ForceGLSL && (this._shaderLanguage = 1), qU.shaderLanguage = this._shaderLanguage, qU.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([gU.e(334).then((() => gU(41887))), gU.e(340).then((() => gU(41895)))]) : await Promise.all([gU.e(316).then((() => gU(41903))), gU.e(322).then((() => gU(41912)))])
          };
          const UU = new cU.l("colorShader", this.aZ(), "color", qU, !1);
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
        const RU = this.material;
        if (RU === UU) return;
        const gU = RU && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(UU), gU && RU?.dispose()
      }
      _setInternalMaterial(UU) {
        this._setMaterial(UU), this.material && (this.material.fillMode = KU.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(UU) {}
      _bind(UU, RU) {
        if (!this._geometry) return this;
        const gU = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(RU, gU) : this._geometry._bind(RU, gU, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: UU,
            g: RU,
            b: gU
          } = this.color;
          this._color4.set(UU, RU, gU, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(UU, RU, gU) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const tU = this.aZ().WC();
        return this._unIndexed ? tU.drawArraysType(KU.c.LineListDrawMode, UU.verticesStart, UU.verticesCount, gU) : tU.drawElementsType(KU.c.LineListDrawMode, UU.indexStart, UU.indexCount, gU), this
      }
      dispose(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || RU) && this.material?.dispose(!1, !1, !0), super.dispose(UU)
      }
      clone(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        if (RU && void 0 === RU._addToSceneRootNodes) {
          const gU = RU;
          return gU.source = this, new jU(UU, this.aZ(), gU.parent, gU.source, gU.doNotCloneChildren)
        }
        return new jU(UU, this.aZ(), RU, this, gU)
      }
      createInstance(UU) {
        const RU = new uU(UU, this);
        if (this.kY) {
          RU.kY = {};
          for (const UU in this.kY) RU.kY[UU] = this.kY[UU]
        }
        return RU
      }
      serialize(UU) {
        super.serialize(UU), UU.color = this.color.vgU(), UU.alpha = this.alpha
      }
      static Parse(UU, RU) {
        const gU = new jU(UU.name, RU);
        return gU.color = EU.e.FromArray(UU.color), gU.alpha = UU.alpha, gU
      }
    }
    jU.ForceGLSL = !1;
    class uU extends qU.c {
      constructor(UU, RU) {
        super(UU, RU), this.intersectionThreshold = RU.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let CU = !1;

    function hU() {
      CU || (CU = !0, TU.c._LinesMeshParser = (UU, RU) => jU.Parse(UU, RU))
    }(tU = jU.prototype).enableEdgesRendering ?? (tU.enableEdgesRendering = (0, GU.m)("LinesMesh", "enableEdgesRendering")), (pU = uU.prototype).enableEdgesRendering ?? (pU.enableEdgesRendering = (0, GU.m)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38234: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(38236);
    const pU = (UU, RU, gU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : gU && "object" === typeof UU ? {
      ...UU
    } : null : UU.clone(RU) : null;
    class EU {
      static DeepCopy(UU, RU, gU, EU) {
        let PU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const TU = function(UU) {
          const RU = [];
          do {
            const gU = Object.getOwnPropertyNames(UU);
            for (const UU of gU) - 1 === RU.indexOf(UU) && RU.push(UU)
          } while (UU = Object.getPrototypeOf(UU));
          return RU
        }(UU);
        for (const KU of TU) {
          if ("_" === KU[0] && (!EU || -1 === EU.indexOf(KU))) continue;
          if (KU.endsWith("Observable")) continue;
          if (gU && -1 !== gU.indexOf(KU)) continue;
          const TU = UU[KU],
            cU = typeof TU;
          if ("function" !== cU) try {
            if ("object" === cU)
              if (TU instanceof Uint8Array) RU[KU] = Uint8Array.from(TU);
              else if (TU instanceof Array) {
              if (RU[KU] = [], TU.length > 0)
                if ("object" == typeof TU[0])
                  for (let UU = 0; UU < TU.length; UU++) {
                    const gU = pU(TU[UU], RU, PU); - 1 === RU[KU].indexOf(gU) && RU[KU].push(gU)
                  } else RU[KU] = TU.slice(0)
            } else RU[KU] = pU(TU, RU, PU);
            else RU[KU] = TU
          } catch (qU) {
            tU.e.Warn(qU.message)
          }
        }
      }
    }
  },
  37439: (UU, RU, gU) => {
    function tU() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
        const RU = 16 * Math.random() | 0;
        return ("x" === UU ? RU : 3 & RU | 8).toString(16)
      }))
    }
    gU.d(RU, {
      b: () => tU
    })
  },
  38236: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    class tU {
      static _CheckLimit(UU, RU) {
        let gU = tU._LogLimitOutputs[UU];
        return gU ? gU.current++ : (gU = {
          limit: RU,
          current: 1
        }, tU._LogLimitOutputs[UU] = gU), gU.current <= gU.limit
      }
      static _GenerateLimitMessage(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gU = tU._LogLimitOutputs[UU];
        if (!gU || !tU.MessageLimitReached) return;
        const pU = this._Levels[RU];
        gU.current === gU.limit && tU[pU.name](tU.MessageLimitReached.replace(/%LIMIT%/g, "" + gU.limit).replace(/%TYPE%/g, pU.name ?? ""))
      }
      static _AddLogEntry(UU) {
        tU._LogCache = UU + tU._LogCache, tU.OnNewCacheEntry && tU.OnNewCacheEntry(UU)
      }
      static _FormatMessage(UU) {
        const RU = UU => UU < 10 ? "0" + UU : "" + UU,
          gU = new Date;
        return "[" + RU(gU.getHours()) + ":" + RU(gU.getMinutes()) + ":" + RU(gU.getSeconds()) + "]: " + UU
      }
      static _LogDisabled(UU, RU) {}
      static _LogEnabled() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const pU = Array.isArray(RU) ? RU[0] : RU;
        if (void 0 !== gU && !tU._CheckLimit(pU, gU)) return;
        const EU = tU._FormatMessage(pU),
          PU = this._Levels[UU],
          TU = Array.isArray(RU) ? RU.slice(1) : [];
        PU.logFunc && PU.logFunc("BJS - " + EU, ...TU);
        const qU = `<div style='color:${PU.color}'>${EU}</div><br>`;
        tU._AddLogEntry(qU), tU._GenerateLimitMessage(pU, UU)
      }
      static get LogCache() {
        return tU._LogCache
      }
      static ClearLogCache() {
        tU._LogCache = "", tU._LogLimitOutputs = {}, tU.errorsCount = 0
      }
      static set LogLevels(UU) {
        tU.Log = tU._LogDisabled, tU.Warn = tU._LogDisabled, tU.Error = tU._LogDisabled;
        const RU = [tU.MessageLogLevel, tU.WarningLogLevel, tU.ErrorLogLevel];
        for (const gU of RU)
          if ((UU & gU) === gU) {
            const UU = this._Levels[gU];
            tU[UU.name] = tU._LogEnabled.bind(tU, gU)
          }
      }
    }
    tU.NoneLogLevel = 0, tU.MessageLogLevel = 1, tU.WarningLogLevel = 2, tU.ErrorLogLevel = 4, tU.AllLogLevel = 7, tU.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", tU._LogCache = "", tU._LogLimitOutputs = {}, tU._Levels = [{}, {
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
    }], tU.errorsCount = 0, tU.Log = tU._LogEnabled.bind(tU, tU.MessageLogLevel), tU.Warn = tU._LogEnabled.bind(tU, tU.WarningLogLevel), tU.Error = tU._LogEnabled.bind(tU, tU.ErrorLogLevel)
  },
  39460: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU.f
    });
    var tU = gU(39468);
    (0, tU.c)()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);