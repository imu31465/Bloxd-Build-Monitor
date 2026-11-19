export const id = 220;
export const ids = [220, 225, 228];
export const modules = {
  39016: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT,
      e: () => XT
    });
    var iT = IT(37660),
      zT = IT(38799),
      kT = IT(38986),
      WT = {};
    class XT {
      constructor(TT) {
        this.attachedToElement = !1, this.attached = {}, this.camera = TT, this.checkInputs = () => {}
      }
      add(TT) {
        const oT = TT.getSimpleName();
        this.attached[oT] ? iT.d.Warn("camera input of type " + oT + " already exists on camera") : (this.attached[oT] = TT, TT.camera = this.camera, TT.checkInputs && (this.checkInputs = this._addCheckInputs(TT.checkInputs.bind(TT))), this.attachedToElement && TT.attachControl(this.noPreventDefault))
      }
      remove(TT) {
        for (const oT in this.attached) {
          const IT = this.attached[oT];
          if (IT === TT) return IT.detachControl(), IT.camera = null, delete this.attached[oT], void this.rebuildInputCheck()
        }
      }
      removeByType(TT) {
        for (const oT in this.attached) {
          const IT = this.attached[oT];
          IT.getClassName() === TT && (IT.detachControl(), IT.camera = null, delete this.attached[oT], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(TT) {
        const oT = this.checkInputs;
        return () => {
          oT(), TT()
        }
      }
      attachInput(TT) {
        this.attachedToElement && TT.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          TT = !kT.c.ForceAttachControlToAlwaysPreventDefault && TT, this.attachedToElement = !0, this.noPreventDefault = TT;
          for (const oT in this.attached) this.attached[oT].attachControl(TT)
        }
      }
      detachElement() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const oT in this.attached) this.attached[oT].detachControl(), TT && (this.attached[oT].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const TT in this.attached) {
          const oT = this.attached[TT];
          oT.checkInputs && (this.checkInputs = this._addCheckInputs(oT.checkInputs.bind(oT)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(TT) {
        const oT = {};
        for (const IT in this.attached) {
          const TT = this.attached[IT],
            iT = zT.c.Serialize(TT);
          oT[TT.getClassName()] = iT
        }
        TT.inputsmgr = oT
      }
      parse(TT) {
        const oT = TT.inputsmgr;
        if (oT) {
          this.clear();
          for (const TT in oT) {
            const IT = WT[TT];
            if (IT) {
              const iT = oT[TT],
                kT = zT.c.Parse((() => new IT), iT, null);
              this.add(kT)
            }
          }
        } else
          for (const IT in this.attached) {
            const oT = WT[this.attached[IT].getClassName()];
            if (oT) {
              const iT = zT.c.Parse((() => new oT), TT, null);
              this.remove(this.attached[IT]), this.add(iT)
            }
          }
      }
    }
  },
  39021: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT.e
    });
    var iT = IT(39024);
    (0, iT.g)()
  },
  39024: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => ST,
      g: () => LT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(36118),
      WT = IT(36177),
      XT = IT(39031),
      BT = IT(38994),
      FT = IT(36166);
    let ST = (() => {
        var TT;
        let oT, IT, BT = XT.b,
          FT = [],
          ST = [],
          DT = [],
          LT = [];
        return TT = class extends BT {
          constructor(TT, oT, IT, zT) {
            super(TT, IT, zT), this.groundColor = (0, iT.j)(this, FT, new WT.e(0, 0, 0)), this.direction = ((0, iT.j)(this, ST), (0, iT.j)(this, DT, void 0)), (0, iT.j)(this, LT), this.direction = oT || kT.m.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(TT) {
            return this.direction = kT.m.Normalize(TT.subtract(kT.m.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(TT, oT) {
            const IT = kT.m.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", IT.x, IT.y, IT.z, 0, oT), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), oT), this
          }
          transferToNodeMaterialEffect(TT, oT) {
            const IT = kT.m.Normalize(this.direction);
            return TT.setFloat3(oT, IT.x, IT.y, IT.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = kT.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return XT.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(TT, oT) {
            TT["HEMILIGHT" + oT] = !0
          }
        }, (() => {
          const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(BT[Symbol.metadata] ?? null) : void 0;
          oT = [(0, zT.q)()], IT = [(0, zT.M)()], (0, iT.h)(null, null, oT, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "groundColor" in TT,
              get: TT => TT.groundColor,
              set: (TT, oT) => {
                TT.groundColor = oT
              }
            },
            metadata: kT
          }, FT, ST), (0, iT.h)(null, null, IT, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: TT => "direction" in TT,
              get: TT => TT.direction,
              set: (TT, oT) => {
                TT.direction = oT
              }
            },
            metadata: kT
          }, DT, LT), kT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kT
          })
        })(), TT
      })(),
      DT = !1;

    function LT() {
      DT || (DT = !0, BT.c.AddNodeConstructor("Light_Type_3", ((TT, oT) => () => new ST(TT, kT.m.Zero(), oT))), (0, FT.h)("BABYLON.HemisphericLight", ST))
    }
  },
  36175: (TT, oT, IT) => {
    IT.d(oT, {
      Color3: () => iT.e,
      b: () => iT.i
    });
    var iT = IT(36177);
    (0, iT.j)()
  },
  36710: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = IT(36717);
    class zT {
      static GetPlanes(TT) {
        const oT = [];
        for (let IT = 0; IT < 6; IT++) oT.push(new iT.b(0, 0, 0, 0));
        return zT.GetPlanesToRef(TT, oT), oT
      }
      static GetNearPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[2], oT.normal.y = IT[7] + IT[6], oT.normal.z = IT[11] + IT[10], oT.d = IT[15] + IT[14], oT.normalize()
      }
      static GetFarPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[2], oT.normal.y = IT[7] - IT[6], oT.normal.z = IT[11] - IT[10], oT.d = IT[15] - IT[14], oT.normalize()
      }
      static GetLeftPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[0], oT.normal.y = IT[7] + IT[4], oT.normal.z = IT[11] + IT[8], oT.d = IT[15] + IT[12], oT.normalize()
      }
      static GetRightPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[0], oT.normal.y = IT[7] - IT[4], oT.normal.z = IT[11] - IT[8], oT.d = IT[15] - IT[12], oT.normalize()
      }
      static GetTopPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[1], oT.normal.y = IT[7] - IT[5], oT.normal.z = IT[11] - IT[9], oT.d = IT[15] - IT[13], oT.normalize()
      }
      static GetBottomPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[1], oT.normal.y = IT[7] + IT[5], oT.normal.z = IT[11] + IT[9], oT.d = IT[15] + IT[13], oT.normalize()
      }
      static GetPlanesToRef(TT, oT) {
        zT.GetNearPlaneToRef(TT, oT[0]), zT.GetFarPlaneToRef(TT, oT[1]), zT.GetLeftPlaneToRef(TT, oT[2]), zT.GetRightPlaneToRef(TT, oT[3]), zT.GetTopPlaneToRef(TT, oT[4]), zT.GetBottomPlaneToRef(TT, oT[5])
      }
      static IsPointInFrustum(TT, oT) {
        for (let IT = 0; IT < 6; IT++)
          if (oT[IT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  36717: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = IT(36118);
    class zT {
      constructor(TT, oT, IT, zT) {
        this.normal = new iT.m(TT, oT, IT), this.d = zT
      }
      bIT() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new zT(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let TT = this.normal.getHashCode();
        return TT = 397 * TT ^ this.d, TT
      }
      normalize() {
        const TT = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let oT = 0;
        return 0 !== TT && (oT = 1 / TT), this.normal.x *= oT, this.normal.y *= oT, this.normal.z *= oT, this.d *= oT, this
      }
      transform(TT) {
        const oT = zT._TmpMatrix;
        TT.invertToRef(oT);
        const IT = oT.m,
          iT = this.normal.x,
          kT = this.normal.y,
          WT = this.normal.z,
          XT = this.d,
          BT = iT * IT[0] + kT * IT[1] + WT * IT[2] + XT * IT[3],
          FT = iT * IT[4] + kT * IT[5] + WT * IT[6] + XT * IT[7],
          ST = iT * IT[8] + kT * IT[9] + WT * IT[10] + XT * IT[11],
          DT = iT * IT[12] + kT * IT[13] + WT * IT[14] + XT * IT[15];
        return new zT(BT, FT, ST, DT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, oT, IT) {
        const iT = oT.x - TT.x,
          zT = oT.y - TT.y,
          kT = oT.z - TT.z,
          WT = IT.x - TT.x,
          XT = IT.y - TT.y,
          BT = IT.z - TT.z,
          FT = zT * BT - kT * XT,
          ST = kT * WT - iT * BT,
          DT = iT * XT - zT * WT,
          LT = Math.sqrt(FT * FT + ST * ST + DT * DT);
        let xT;
        return xT = 0 !== LT ? 1 / LT : 0, this.normal.x = FT * xT, this.normal.y = ST * xT, this.normal.z = DT * xT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, oT) {
        return iT.m.Dot(this.normal, TT) <= oT
      }
      signedDistanceTo(TT) {
        return iT.m.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new zT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, oT, IT) {
        const iT = new zT(0, 0, 0, 0);
        return iT.copyFromPoints(TT, oT, IT), iT
      }
      static FromPositionAndNormal(TT, oT) {
        const IT = new zT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, oT, IT)
      }
      static FromPositionAndNormalToRef(TT, oT, IT) {
        return IT.normal.SIT(oT), IT.normal.normalize(), IT.d = -TT.dot(IT.normal), IT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, oT, IT) {
        const zT = -(oT.x * TT.x + oT.y * TT.y + oT.z * TT.z);
        return iT.m.Dot(IT, oT) + zT
      }
    }
    zT._TmpMatrix = iT.b.Identity()
  },
  36114: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      Matrix: () => iT.b,
      Quaternion: () => iT.c,
      RegisterMathVector: () => iT.g,
      TmpVectors: () => iT.i,
      Vector2: () => iT.j,
      sc: () => iT.m,
      Vector4: () => iT.n
    });
    var iT = IT(36118);
    (0, iT.g)()
  },
  37105: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    class iT {
      constructor(TT, oT, IT, iT) {
        this.x = TT, this.y = oT, this.width = IT, this.height = iT
      }
      toGlobal(TT, oT) {
        return new iT(this.x * TT, this.y * oT, this.width * TT, this.height * oT)
      }
      toGlobalToRef(TT, oT, IT) {
        return IT.x = this.x * TT, IT.y = this.y * oT, IT.width = this.width * TT, IT.height = this.height * oT, this
      }
      clone() {
        return new iT(this.x, this.y, this.width, this.height)
      }
    }
  },
  39187: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => FT
    });
    var iT = IT(36118),
      zT = IT(36177),
      kT = IT(39192),
      WT = IT(39210),
      XT = IT(39223);

    function BT(TT) {
      let oT = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const IT = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        kT = [],
        BT = TT.width || TT.size || 1,
        FT = TT.height || TT.size || 1,
        ST = TT.depth || TT.size || 1,
        DT = TT.wrap || !1;
      let LT = void 0 === TT.topBaseAt ? 1 : TT.topBaseAt,
        xT = void 0 === TT.bottomBaseAt ? 0 : TT.bottomBaseAt;
      LT = (LT + 4) % 4, xT = (xT + 4) % 4;
      let cT = [2, 0, 3, 1][LT],
        KT = [2, 0, 1, 3][xT],
        MT = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (DT) {
        oT = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], MT = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let TT = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          IT = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const iT = [17, 18, 19, 16],
          zT = [22, 23, 20, 21];
        for (; cT > 0;) TT.unshift(TT.pop()), iT.unshift(iT.pop()), cT--;
        for (; KT > 0;) IT.unshift(IT.pop()), zT.unshift(zT.pop()), KT--;
        TT = TT.flat(), IT = IT.flat(), MT = MT.concat(TT).concat(IT), oT.push(iT[0], iT[2], iT[3], iT[0], iT[1], iT[2]), oT.push(zT[0], zT[2], zT[3], zT[0], zT[1], zT[2])
      }
      const rT = [BT / 2, FT / 2, ST / 2],
        AT = MT.reduce(((TT, oT, IT) => TT.concat(oT * rT[IT % 3])), []),
        gT = 0 === TT.sideOrientation ? 0 : TT.sideOrientation || WT.c.DEFAULTSIDE,
        hT = TT.faceUV || new Array(6),
        wT = TT.faceColors,
        mT = [];
      for (let WT = 0; WT < 6; WT++) void 0 === hT[WT] && (hT[WT] = new iT.n(0, 0, 1, 1)), wT && void 0 === wT[WT] && (wT[WT] = new zT.i(1, 1, 1, 1));
      for (let iT = 0; iT < 6; iT++)
        if (kT.push(hT[iT].z, XT.d ? 1 - hT[iT].w : hT[iT].w), kT.push(hT[iT].x, XT.d ? 1 - hT[iT].w : hT[iT].w), kT.push(hT[iT].x, XT.d ? 1 - hT[iT].y : hT[iT].y), kT.push(hT[iT].z, XT.d ? 1 - hT[iT].y : hT[iT].y), wT)
          for (let TT = 0; TT < 4; TT++) mT.push(wT[iT].r, wT[iT].g, wT[iT].b, wT[iT].a);
      WT.c._ComputeSides(gT, AT, oT, IT, kT, TT.frontUVs, TT.backUVs);
      const eT = new WT.c;
      if (eT.indices = oT, eT.positions = AT, eT.normals = IT, eT.uvs = kT, wT) {
        const TT = gT === WT.c.DOUBLESIDE ? mT.concat(mT) : mT;
        eT.colors = TT
      }
      return eT
    }

    function FT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const iT = new kT.e(TT, IT);
      oT.sideOrientation = kT.e._GetDefaultSideOrientation(oT.sideOrientation), iT._originalBuilderSideOrientation = oT.sideOrientation;
      return BT(oT).applyToMesh(iT, oT.updatable), iT
    }
    let ST = !1;
    ST || (ST = !0, WT.c.CreateBox = BT, kT.e.CreateBox = function(TT, oT) {
      return FT(TT, {
        size: oT,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  39242: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => DT
    });
    var iT = IT(36118),
      zT = IT(39192),
      kT = IT(39210),
      WT = IT(39247),
      XT = IT(38923),
      BT = IT(37660);

    function FT(TT) {
      const oT = [],
        IT = [],
        iT = TT.lines,
        zT = TT.colors,
        WT = [];
      let XT = 0;
      for (let kT = 0; kT < iT.length; kT++) {
        const TT = iT[kT];
        for (let iT = 0; iT < TT.length; iT++) {
          const {
            x: BT,
            y: FT,
            z: ST
          } = TT[iT];
          if (IT.push(BT, FT, ST), zT) {
            const TT = zT[kT],
              {
                r: oT,
                g: IT,
                b: XT,
                a: BT
              } = TT[iT];
            WT.push(oT, IT, XT, BT)
          }
          iT > 0 && (oT.push(XT - 1), oT.push(XT)), XT++
        }
      }
      const BT = new kT.c;
      return BT.indices = oT, BT.positions = IT, zT && (BT.colors = WT), BT
    }

    function ST(TT) {
      const oT = TT.dashSize || 3,
        IT = TT.gapSize || 1,
        zT = TT.dashNb || 200,
        WT = TT.points,
        XT = [],
        BT = [],
        FT = iT.m.Zero();
      let ST, DT, LT, xT = 0,
        cT = 0;
      for (LT = 0; LT < WT.length - 1; LT++) WT[LT + 1].subtractToRef(WT[LT], FT), xT += FT.length();
      const KT = xT / zT,
        MT = oT * KT / (oT + IT);
      for (LT = 0; LT < WT.length - 1; LT++) {
        WT[LT + 1].subtractToRef(WT[LT], FT), ST = Math.floor(FT.length() / KT), FT.normalize();
        for (let TT = 0; TT < ST; TT++) DT = KT * TT, XT.push(WT[LT].x + DT * FT.x, WT[LT].y + DT * FT.y, WT[LT].z + DT * FT.z), XT.push(WT[LT].x + (DT + MT) * FT.x, WT[LT].y + (DT + MT) * FT.y, WT[LT].z + (DT + MT) * FT.z), BT.push(cT, cT + 1), cT += 2
      }
      const rT = new kT.c;
      return rT.positions = XT, rT.indices = BT, rT
    }

    function DT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const iT = oT.instance,
        zT = oT.lines,
        kT = oT.colors;
      if (iT) {
        const TT = iT.getVerticesData(XT.i.PositionKind);
        let oT, IT;
        kT && (oT = iT.getVerticesData(XT.i.ColorKind));
        let WT = 0,
          BT = 0;
        for (let iT = 0; iT < zT.length; iT++) {
          const XT = zT[iT];
          for (let zT = 0; zT < XT.length; zT++) TT[WT] = XT[zT].x, TT[WT + 1] = XT[zT].y, TT[WT + 2] = XT[zT].z, kT && oT && (IT = kT[iT], oT[BT] = IT[zT].r, oT[BT + 1] = IT[zT].g, oT[BT + 2] = IT[zT].b, oT[BT + 3] = IT[zT].a, BT += 4), WT += 3
        }
        return iT.updateVerticesData(XT.i.PositionKind, TT, !1, !1), kT && oT && iT.updateVerticesData(XT.i.ColorKind, oT, !1, !1), iT.refreshBoundingInfo(), iT
      }
      const BT = !!kT,
        ST = new WT.e(TT, IT, null, void 0, void 0, BT, oT.useVertexAlpha, oT.material);
      return FT(oT).applyToMesh(ST, oT.updatable), ST
    }

    function LT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const iT = oT.colors ? [oT.colors] : null;
      return DT(TT, {
        lines: [oT.points],
        updatable: oT.updatable,
        instance: oT.instance,
        colors: iT,
        useVertexAlpha: oT.useVertexAlpha,
        material: oT.material
      }, IT)
    }

    function xT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const kT = oT.points,
        XT = oT.instance,
        FT = oT.gapSize || 1,
        DT = oT.dashSize || 3;
      if (XT) {
        const TT = TT => {
          const oT = iT.m.Zero(),
            IT = TT.length / 6;
          let zT, WT, BT, FT, ST = 0,
            DT = 0;
          for (BT = 0; BT < kT.length - 1; BT++) kT[BT + 1].subtractToRef(kT[BT], oT), ST += oT.length();
          const LT = ST / IT,
            xT = XT._creationDataStorage.dashSize,
            cT = xT * LT / (xT + XT._creationDataStorage.gapSize);
          for (BT = 0; BT < kT.length - 1; BT++)
            for (kT[BT + 1].subtractToRef(kT[BT], oT), zT = Math.floor(oT.length() / LT), oT.normalize(), FT = 0; FT < zT && DT < TT.length;) WT = LT * FT, TT[DT] = kT[BT].x + WT * oT.x, TT[DT + 1] = kT[BT].y + WT * oT.y, TT[DT + 2] = kT[BT].z + WT * oT.z, TT[DT + 3] = kT[BT].x + (WT + cT) * oT.x, TT[DT + 4] = kT[BT].y + (WT + cT) * oT.y, TT[DT + 5] = kT[BT].z + (WT + cT) * oT.z, DT += 6, FT++;
          for (; DT < TT.length;) TT[DT] = kT[BT].x, TT[DT + 1] = kT[BT].y, TT[DT + 2] = kT[BT].z, DT += 3
        };
        return (oT.dashNb || oT.dashSize || oT.gapSize || oT.useVertexAlpha || oT.material) && BT.d.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), XT.updateMeshPositions(TT, !1), XT
      }
      const LT = new WT.e(TT, IT, null, void 0, void 0, void 0, oT.useVertexAlpha, oT.material);
      return ST(oT).applyToMesh(LT, oT.updatable), LT._creationDataStorage = new zT.j, LT._creationDataStorage.dashSize = DT, LT._creationDataStorage.gapSize = FT, LT
    }
    let cT = !1;
    cT || (cT = !0, kT.c.CreateLineSystem = FT, kT.c.CreateDashedLines = ST, zT.e.CreateLines = function(TT, oT) {
      return LT(TT, {
        points: oT,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, zT.e.CreateDashedLines = function(TT, oT, IT, iT, zT) {
      return xT(TT, {
        points: oT,
        dashSize: IT,
        gapSize: iT,
        dashNb: zT,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  39247: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => LT,
      g: () => KT
    });
    var iT, zT, kT = IT(36177),
      WT = IT(38923),
      XT = IT(39192),
      BT = IT(39256),
      FT = IT(39068),
      ST = IT(39262),
      DT = IT(38643);
    class LT extends XT.e {
      _isShaderMaterial(TT) {
        return !!TT && "ShaderMaterial" === TT.getClassName()
      }
      constructor(TT) {
        let oT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          iT = arguments.length > 5 ? arguments[5] : void 0,
          zT = arguments.length > 6 ? arguments[6] : void 0,
          XT = arguments.length > 7 ? arguments[7] : void 0;
        super(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, oT, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = iT, this.useVertexAlpha = zT, this.color = new kT.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, oT && (this.color = oT.color.clone(), this.alpha = oT.alpha, this.useVertexColor = oT.useVertexColor, this.useVertexAlpha = oT.useVertexAlpha), this.intersectionThreshold = .1;
        const BT = {
          attributes: [WT.i.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? BT.defines.push("#define VERTEXALPHA") : BT.needAlphaBlending = !1, this.useVertexColor ? (BT.defines.push("#define VERTEXCOLOR"), BT.attributes.push(WT.i.ColorKind)) : (BT.uniforms.push("color"), this._color4 = new kT.i), XT) this.material = XT;
        else {
          this.pC().Zc().isWebGPU && !LT.ForceGLSL && (this._shaderLanguage = 1), BT.shaderLanguage = this._shaderLanguage, BT.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([IT.e(334).then((() => IT(41360))), IT.e(340).then((() => IT(41366)))]) : await Promise.all([IT.e(316).then((() => IT(41368))), IT.e(322).then((() => IT(41373)))])
          };
          const TT = new ST.r("colorShader", this.pC(), "color", BT, !1);
          TT.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(TT)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(TT) {
        const oT = this.material;
        if (oT === TT) return;
        const IT = oT && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(TT), IT && oT?.dispose()
      }
      _setInternalMaterial(TT) {
        this._setMaterial(TT), this.material && (this.material.fillMode = FT.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(TT) {}
      _bind(TT, oT) {
        if (!this._geometry) return this;
        const IT = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(oT, IT) : this._geometry._bind(oT, IT, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: TT,
            g: oT,
            b: IT
          } = this.color;
          this._color4.set(TT, oT, IT, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(TT, oT, IT) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const iT = this.pC().Zc();
        return this._unIndexed ? iT.drawArraysType(FT.c.LineListDrawMode, TT.verticesStart, TT.verticesCount, IT) : iT.drawElementsType(FT.c.LineListDrawMode, TT.indexStart, TT.indexCount, IT), this
      }
      dispose(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || oT) && this.material?.dispose(!1, !1, !0), super.dispose(TT)
      }
      clone(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        if (oT && void 0 === oT._addToSceneRootNodes) {
          const IT = oT;
          return IT.source = this, new LT(TT, this.pC(), IT.parent, IT.source, IT.doNotCloneChildren)
        }
        return new LT(TT, this.pC(), oT, this, IT)
      }
      createInstance(TT) {
        const oT = new xT(TT, this);
        if (this.HJ) {
          oT.HJ = {};
          for (const TT in this.HJ) oT.HJ[TT] = this.HJ[TT]
        }
        return oT
      }
      serialize(TT) {
        super.serialize(TT), TT.color = this.color.bIT(), TT.alpha = this.alpha
      }
      static Parse(TT, oT) {
        const IT = new LT(TT.name, oT);
        return IT.color = kT.e.FromArray(TT.color), IT.alpha = TT.alpha, IT
      }
    }
    LT.ForceGLSL = !1;
    class xT extends BT.c {
      constructor(TT, oT) {
        super(TT, oT), this.intersectionThreshold = oT.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let cT = !1;

    function KT() {
      cT || (cT = !0, XT.e._LinesMeshParser = (TT, oT) => LT.Parse(TT, oT))
    }(iT = LT.prototype).enableEdgesRendering ?? (iT.enableEdgesRendering = (0, DT.i)("LinesMesh", "enableEdgesRendering")), (zT = xT.prototype).enableEdgesRendering ?? (zT.enableEdgesRendering = (0, DT.i)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  37658: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT
    });
    var iT = IT(37660);
    const zT = (TT, oT, IT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : IT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(oT) : null;
    class kT {
      static DeepCopy(TT, oT, IT, kT) {
        let WT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const XT = function(TT) {
          const oT = [];
          do {
            const IT = Object.getOwnPropertyNames(TT);
            for (const TT of IT) - 1 === oT.indexOf(TT) && oT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return oT
        }(TT);
        for (const FT of XT) {
          if ("_" === FT[0] && (!kT || -1 === kT.indexOf(FT))) continue;
          if (FT.endsWith("Observable")) continue;
          if (IT && -1 !== IT.indexOf(FT)) continue;
          const XT = TT[FT],
            ST = typeof XT;
          if ("function" !== ST) try {
            if ("object" === ST)
              if (XT instanceof Uint8Array) oT[FT] = Uint8Array.from(XT);
              else if (XT instanceof Array) {
              if (oT[FT] = [], XT.length > 0)
                if ("object" == typeof XT[0])
                  for (let TT = 0; TT < XT.length; TT++) {
                    const IT = zT(XT[TT], oT, WT); - 1 === oT[FT].indexOf(IT) && oT[FT].push(IT)
                  } else oT[FT] = XT.slice(0)
            } else oT[FT] = zT(XT, oT, WT);
            else oT[FT] = XT
          } catch (BT) {
            iT.d.Warn(BT.message)
          }
        }
      }
    }
  },
  36851: (TT, oT, IT) => {
    function iT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const oT = 16 * Math.random() | 0;
        return ("x" === TT ? oT : 3 & oT | 8).toString(16)
      }))
    }
    IT.d(oT, {
      e: () => iT
    })
  },
  37660: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {
      static _CheckLimit(TT, oT) {
        let IT = iT._LogLimitOutputs[TT];
        return IT ? IT.current++ : (IT = {
          limit: oT,
          current: 1
        }, iT._LogLimitOutputs[TT] = IT), IT.current <= IT.limit
      }
      static _GenerateLimitMessage(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const IT = iT._LogLimitOutputs[TT];
        if (!IT || !iT.MessageLimitReached) return;
        const zT = this._Levels[oT];
        IT.current === IT.limit && iT[zT.name](iT.MessageLimitReached.replace(/%LIMIT%/g, "" + IT.limit).replace(/%TYPE%/g, zT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        iT._LogCache = TT + iT._LogCache, iT.OnNewCacheEntry && iT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const oT = TT => TT < 10 ? "0" + TT : "" + TT,
          IT = new Date;
        return "[" + oT(IT.getHours()) + ":" + oT(IT.getMinutes()) + ":" + oT(IT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, oT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const zT = Array.isArray(oT) ? oT[0] : oT;
        if (void 0 !== IT && !iT._CheckLimit(zT, IT)) return;
        const kT = iT._FormatMessage(zT),
          WT = this._Levels[TT],
          XT = Array.isArray(oT) ? oT.slice(1) : [];
        WT.logFunc && WT.logFunc("BJS - " + kT, ...XT);
        const BT = `<div style='color:${WT.color}'>${kT}</div><br>`;
        iT._AddLogEntry(BT), iT._GenerateLimitMessage(zT, TT)
      }
      static get LogCache() {
        return iT._LogCache
      }
      static ClearLogCache() {
        iT._LogCache = "", iT._LogLimitOutputs = {}, iT.errorsCount = 0
      }
      static set LogLevels(TT) {
        iT.Log = iT._LogDisabled, iT.Warn = iT._LogDisabled, iT.Error = iT._LogDisabled;
        const oT = [iT.MessageLogLevel, iT.WarningLogLevel, iT.ErrorLogLevel];
        for (const IT of oT)
          if ((TT & IT) === IT) {
            const TT = this._Levels[IT];
            iT[TT.name] = iT._LogEnabled.bind(iT, IT)
          }
      }
    }
    iT.NoneLogLevel = 0, iT.MessageLogLevel = 1, iT.WarningLogLevel = 2, iT.ErrorLogLevel = 4, iT.AllLogLevel = 7, iT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", iT._LogCache = "", iT._LogLimitOutputs = {}, iT._Levels = [{}, {
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
    }], iT.errorsCount = 0, iT.Log = iT._LogEnabled.bind(iT, iT.MessageLogLevel), iT.Warn = iT._LogEnabled.bind(iT, iT.WarningLogLevel), iT.Error = iT._LogEnabled.bind(iT, iT.ErrorLogLevel)
  },
  38874: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT.d
    });
    var iT = IT(38882);
    (0, iT.b)()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);