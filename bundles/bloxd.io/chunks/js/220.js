export const id = 220;
export const ids = [220, 225, 228];
export const modules = {
  39367: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY,
      e: () => OY
    });
    var FY = DY(38040),
      AY = DY(39144),
      IY = DY(39342),
      RY = {};
    class OY {
      constructor(YY) {
        this.attachedToElement = !1, this.attached = {}, this.camera = YY, this.checkInputs = () => {}
      }
      add(YY) {
        const rY = YY.getSimpleName();
        this.attached[rY] ? FY.d.Warn("camera input of type " + rY + " already exists on camera") : (this.attached[rY] = YY, YY.camera = this.camera, YY.checkInputs && (this.checkInputs = this._addCheckInputs(YY.checkInputs.bind(YY))), this.attachedToElement && YY.attachControl(this.noPreventDefault))
      }
      remove(YY) {
        for (const rY in this.attached) {
          const DY = this.attached[rY];
          if (DY === YY) return DY.detachControl(), DY.camera = null, delete this.attached[rY], void this.rebuildInputCheck()
        }
      }
      removeByType(YY) {
        for (const rY in this.attached) {
          const DY = this.attached[rY];
          DY.getClassName() === YY && (DY.detachControl(), DY.camera = null, delete this.attached[rY], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(YY) {
        const rY = this.checkInputs;
        return () => {
          rY(), YY()
        }
      }
      attachInput(YY) {
        this.attachedToElement && YY.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          YY = !IY.e.ForceAttachControlToAlwaysPreventDefault && YY, this.attachedToElement = !0, this.noPreventDefault = YY;
          for (const rY in this.attached) this.attached[rY].attachControl(YY)
        }
      }
      detachElement() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const rY in this.attached) this.attached[rY].detachControl(), YY && (this.attached[rY].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const YY in this.attached) {
          const rY = this.attached[YY];
          rY.checkInputs && (this.checkInputs = this._addCheckInputs(rY.checkInputs.bind(rY)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(YY) {
        const rY = {};
        for (const DY in this.attached) {
          const YY = this.attached[DY],
            FY = AY.b.Serialize(YY);
          rY[YY.getClassName()] = FY
        }
        YY.inputsmgr = rY
      }
      parse(YY) {
        const rY = YY.inputsmgr;
        if (rY) {
          this.clear();
          for (const YY in rY) {
            const DY = RY[YY];
            if (DY) {
              const FY = rY[YY],
                IY = AY.b.Parse((() => new DY), FY, null);
              this.add(IY)
            }
          }
        } else
          for (const DY in this.attached) {
            const rY = RY[this.attached[DY].getClassName()];
            if (rY) {
              const FY = AY.b.Parse((() => new rY), YY, null);
              this.remove(this.attached[DY]), this.add(FY)
            }
          }
      }
    }
  },
  39375: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY.e
    });
    var FY = DY(39383);
    (0, FY.h)()
  },
  39383: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => vY,
      h: () => sY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(36524),
      RY = DY(36588),
      OY = DY(39387),
      gY = DY(39347),
      aY = DY(36569);
    let vY = (() => {
        var YY;
        let rY, DY, gY = OY.c,
          aY = [],
          vY = [],
          uY = [],
          sY = [];
        return YY = class extends gY {
          constructor(YY, rY, DY, AY) {
            super(YY, DY, AY), this.groundColor = (0, FY.j)(this, aY, new RY.c(0, 0, 0)), this.direction = ((0, FY.j)(this, vY), (0, FY.j)(this, uY, void 0)), (0, FY.j)(this, sY), this.direction = rY || IY.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(YY) {
            return this.direction = IY.r.Normalize(YY.subtract(IY.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(YY, rY) {
            const DY = IY.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", DY.x, DY.y, DY.z, 0, rY), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), rY), this
          }
          transferToNodeMaterialEffect(YY, rY) {
            const DY = IY.r.Normalize(this.direction);
            return YY.setFloat3(rY, DY.x, DY.y, DY.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = IY.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return OY.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(YY, rY) {
            YY["HEMILIGHT" + rY] = !0
          }
        }, (() => {
          const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(gY[Symbol.metadata] ?? null) : void 0;
          rY = [(0, AY.o)()], DY = [(0, AY.J)()], (0, FY.i)(null, null, rY, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "groundColor" in YY,
              get: YY => YY.groundColor,
              set: (YY, rY) => {
                YY.groundColor = rY
              }
            },
            metadata: IY
          }, aY, vY), (0, FY.i)(null, null, DY, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: YY => "direction" in YY,
              get: YY => YY.direction,
              set: (YY, rY) => {
                YY.direction = rY
              }
            },
            metadata: IY
          }, uY, sY), IY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IY
          })
        })(), YY
      })(),
      uY = !1;

    function sY() {
      uY || (uY = !0, gY.b.AddNodeConstructor("Light_Type_3", ((YY, rY) => () => new vY(YY, IY.r.Zero(), rY))), (0, aY.i)("BABYLON.HemisphericLight", vY))
    }
  },
  36586: (YY, rY, DY) => {
    DY.d(rY, {
      Color3: () => FY.c,
      c: () => FY.d
    });
    var FY = DY(36588);
    (0, FY.f)()
  },
  37105: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    var FY = DY(37107);
    class AY {
      static GetPlanes(YY) {
        const rY = [];
        for (let DY = 0; DY < 6; DY++) rY.push(new FY.c(0, 0, 0, 0));
        return AY.GetPlanesToRef(YY, rY), rY
      }
      static GetNearPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[2], rY.normal.y = DY[7] + DY[6], rY.normal.z = DY[11] + DY[10], rY.d = DY[15] + DY[14], rY.normalize()
      }
      static GetFarPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[2], rY.normal.y = DY[7] - DY[6], rY.normal.z = DY[11] - DY[10], rY.d = DY[15] - DY[14], rY.normalize()
      }
      static GetLeftPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[0], rY.normal.y = DY[7] + DY[4], rY.normal.z = DY[11] + DY[8], rY.d = DY[15] + DY[12], rY.normalize()
      }
      static GetRightPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[0], rY.normal.y = DY[7] - DY[4], rY.normal.z = DY[11] - DY[8], rY.d = DY[15] - DY[12], rY.normalize()
      }
      static GetTopPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[1], rY.normal.y = DY[7] - DY[5], rY.normal.z = DY[11] - DY[9], rY.d = DY[15] - DY[13], rY.normalize()
      }
      static GetBottomPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[1], rY.normal.y = DY[7] + DY[5], rY.normal.z = DY[11] + DY[9], rY.d = DY[15] + DY[13], rY.normalize()
      }
      static GetPlanesToRef(YY, rY) {
        AY.GetNearPlaneToRef(YY, rY[0]), AY.GetFarPlaneToRef(YY, rY[1]), AY.GetLeftPlaneToRef(YY, rY[2]), AY.GetRightPlaneToRef(YY, rY[3]), AY.GetTopPlaneToRef(YY, rY[4]), AY.GetBottomPlaneToRef(YY, rY[5])
      }
      static IsPointInFrustum(YY, rY) {
        for (let DY = 0; DY < 6; DY++)
          if (rY[DY].dotCoordinate(YY) < 0) return !1;
        return !0
      }
    }
  },
  37107: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY
    });
    var FY = DY(36524);
    class AY {
      constructor(YY, rY, DY, AY) {
        this.normal = new FY.r(YY, rY, DY), this.d = AY
      }
      VDY() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new AY(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let YY = this.normal.getHashCode();
        return YY = 397 * YY ^ this.d, YY
      }
      normalize() {
        const YY = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let rY = 0;
        return 0 !== YY && (rY = 1 / YY), this.normal.x *= rY, this.normal.y *= rY, this.normal.z *= rY, this.d *= rY, this
      }
      transform(YY) {
        const rY = AY._TmpMatrix;
        YY.invertToRef(rY);
        const DY = rY.m,
          FY = this.normal.x,
          IY = this.normal.y,
          RY = this.normal.z,
          OY = this.d,
          gY = FY * DY[0] + IY * DY[1] + RY * DY[2] + OY * DY[3],
          aY = FY * DY[4] + IY * DY[5] + RY * DY[6] + OY * DY[7],
          vY = FY * DY[8] + IY * DY[9] + RY * DY[10] + OY * DY[11],
          uY = FY * DY[12] + IY * DY[13] + RY * DY[14] + OY * DY[15];
        return new AY(gY, aY, vY, uY)
      }
      dotCoordinate(YY) {
        return this.normal.x * YY.x + this.normal.y * YY.y + this.normal.z * YY.z + this.d
      }
      copyFromPoints(YY, rY, DY) {
        const FY = rY.x - YY.x,
          AY = rY.y - YY.y,
          IY = rY.z - YY.z,
          RY = DY.x - YY.x,
          OY = DY.y - YY.y,
          gY = DY.z - YY.z,
          aY = AY * gY - IY * OY,
          vY = IY * RY - FY * gY,
          uY = FY * OY - AY * RY,
          sY = Math.sqrt(aY * aY + vY * vY + uY * uY);
        let iY;
        return iY = 0 !== sY ? 1 / sY : 0, this.normal.x = aY * iY, this.normal.y = vY * iY, this.normal.z = uY * iY, this.d = -(this.normal.x * YY.x + this.normal.y * YY.y + this.normal.z * YY.z), this
      }
      isFrontFacingTo(YY, rY) {
        return FY.r.Dot(this.normal, YY) <= rY
      }
      signedDistanceTo(YY) {
        return FY.r.Dot(YY, this.normal) + this.d
      }
      static FromArray(YY) {
        return new AY(YY[0], YY[1], YY[2], YY[3])
      }
      static FromPoints(YY, rY, DY) {
        const FY = new AY(0, 0, 0, 0);
        return FY.copyFromPoints(YY, rY, DY), FY
      }
      static FromPositionAndNormal(YY, rY) {
        const DY = new AY(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(YY, rY, DY)
      }
      static FromPositionAndNormalToRef(YY, rY, DY) {
        return DY.normal.brY(rY), DY.normal.normalize(), DY.d = -YY.dot(DY.normal), DY
      }
      static SignedDistanceToPlaneFromPositionAndNormal(YY, rY, DY) {
        const AY = -(rY.x * YY.x + rY.y * YY.y + rY.z * YY.z);
        return FY.r.Dot(DY, rY) + AY
      }
    }
    AY._TmpMatrix = FY.e.Identity()
  },
  36518: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      Matrix: () => FY.e,
      Quaternion: () => FY.g,
      RegisterMathVector: () => FY.j,
      TmpVectors: () => FY.n,
      Vector2: () => FY.q,
      xy: () => FY.r,
      Vector4: () => FY.v
    });
    var FY = DY(36524);
    (0, FY.j)()
  },
  37493: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    class FY {
      constructor(YY, rY, DY, FY) {
        this.x = YY, this.y = rY, this.width = DY, this.height = FY
      }
      toGlobal(YY, rY) {
        return new FY(this.x * YY, this.y * rY, this.width * YY, this.height * rY)
      }
      toGlobalToRef(YY, rY, DY) {
        return DY.x = this.x * YY, DY.y = this.y * rY, DY.width = this.width * YY, DY.height = this.height * rY, this
      }
      clone() {
        return new FY(this.x, this.y, this.width, this.height)
      }
    }
  },
  39512: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => aY
    });
    var FY = DY(36524),
      AY = DY(36588),
      IY = DY(39514),
      RY = DY(39530),
      OY = DY(39546);

    function gY(YY) {
      let rY = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const DY = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        IY = [],
        gY = YY.width || YY.size || 1,
        aY = YY.height || YY.size || 1,
        vY = YY.depth || YY.size || 1,
        uY = YY.wrap || !1;
      let sY = void 0 === YY.topBaseAt ? 1 : YY.topBaseAt,
        iY = void 0 === YY.bottomBaseAt ? 0 : YY.bottomBaseAt;
      sY = (sY + 4) % 4, iY = (iY + 4) % 4;
      let yY = [2, 0, 3, 1][sY],
        QY = [2, 0, 1, 3][iY],
        oY = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (uY) {
        rY = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], oY = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let YY = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          DY = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const FY = [17, 18, 19, 16],
          AY = [22, 23, 20, 21];
        for (; yY > 0;) YY.unshift(YY.pop()), FY.unshift(FY.pop()), yY--;
        for (; QY > 0;) DY.unshift(DY.pop()), AY.unshift(AY.pop()), QY--;
        YY = YY.flat(), DY = DY.flat(), oY = oY.concat(YY).concat(DY), rY.push(FY[0], FY[2], FY[3], FY[0], FY[1], FY[2]), rY.push(AY[0], AY[2], AY[3], AY[0], AY[1], AY[2])
      }
      const WY = [gY / 2, aY / 2, vY / 2],
        EY = oY.reduce(((YY, rY, DY) => YY.concat(rY * WY[DY % 3])), []),
        mY = 0 === YY.sideOrientation ? 0 : YY.sideOrientation || RY.c.DEFAULTSIDE,
        VY = YY.faceUV || new Array(6),
        SY = YY.faceColors,
        lY = [];
      for (let RY = 0; RY < 6; RY++) void 0 === VY[RY] && (VY[RY] = new FY.v(0, 0, 1, 1)), SY && void 0 === SY[RY] && (SY[RY] = new AY.d(1, 1, 1, 1));
      for (let FY = 0; FY < 6; FY++)
        if (IY.push(VY[FY].z, OY.e ? 1 - VY[FY].w : VY[FY].w), IY.push(VY[FY].x, OY.e ? 1 - VY[FY].w : VY[FY].w), IY.push(VY[FY].x, OY.e ? 1 - VY[FY].y : VY[FY].y), IY.push(VY[FY].z, OY.e ? 1 - VY[FY].y : VY[FY].y), SY)
          for (let YY = 0; YY < 4; YY++) lY.push(SY[FY].r, SY[FY].g, SY[FY].b, SY[FY].a);
      RY.c._ComputeSides(mY, EY, rY, DY, IY, YY.frontUVs, YY.backUVs);
      const TY = new RY.c;
      if (TY.indices = rY, TY.positions = EY, TY.normals = DY, TY.uvs = IY, SY) {
        const YY = mY === RY.c.DOUBLESIDE ? lY.concat(lY) : lY;
        TY.colors = YY
      }
      return TY
    }

    function aY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const FY = new IY.c(YY, DY);
      rY.sideOrientation = IY.c._GetDefaultSideOrientation(rY.sideOrientation), FY._originalBuilderSideOrientation = rY.sideOrientation;
      return gY(rY).applyToMesh(FY, rY.updatable), FY
    }
    let vY = !1;
    vY || (vY = !0, RY.c.CreateBox = gY, IY.c.CreateBox = function(YY, rY) {
      return aY(YY, {
        size: rY,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  39574: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => uY
    });
    var FY = DY(36524),
      AY = DY(39514),
      IY = DY(39530),
      RY = DY(39576),
      OY = DY(39270),
      gY = DY(38040);

    function aY(YY) {
      const rY = [],
        DY = [],
        FY = YY.lines,
        AY = YY.colors,
        RY = [];
      let OY = 0;
      for (let IY = 0; IY < FY.length; IY++) {
        const YY = FY[IY];
        for (let FY = 0; FY < YY.length; FY++) {
          const {
            x: gY,
            y: aY,
            z: vY
          } = YY[FY];
          if (DY.push(gY, aY, vY), AY) {
            const YY = AY[IY],
              {
                r: rY,
                g: DY,
                b: OY,
                a: gY
              } = YY[FY];
            RY.push(rY, DY, OY, gY)
          }
          FY > 0 && (rY.push(OY - 1), rY.push(OY)), OY++
        }
      }
      const gY = new IY.c;
      return gY.indices = rY, gY.positions = DY, AY && (gY.colors = RY), gY
    }

    function vY(YY) {
      const rY = YY.dashSize || 3,
        DY = YY.gapSize || 1,
        AY = YY.dashNb || 200,
        RY = YY.points,
        OY = [],
        gY = [],
        aY = FY.r.Zero();
      let vY, uY, sY, iY = 0,
        yY = 0;
      for (sY = 0; sY < RY.length - 1; sY++) RY[sY + 1].subtractToRef(RY[sY], aY), iY += aY.length();
      const QY = iY / AY,
        oY = rY * QY / (rY + DY);
      for (sY = 0; sY < RY.length - 1; sY++) {
        RY[sY + 1].subtractToRef(RY[sY], aY), vY = Math.floor(aY.length() / QY), aY.normalize();
        for (let YY = 0; YY < vY; YY++) uY = QY * YY, OY.push(RY[sY].x + uY * aY.x, RY[sY].y + uY * aY.y, RY[sY].z + uY * aY.z), OY.push(RY[sY].x + (uY + oY) * aY.x, RY[sY].y + (uY + oY) * aY.y, RY[sY].z + (uY + oY) * aY.z), gY.push(yY, yY + 1), yY += 2
      }
      const WY = new IY.c;
      return WY.positions = OY, WY.indices = gY, WY
    }

    function uY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const FY = rY.instance,
        AY = rY.lines,
        IY = rY.colors;
      if (FY) {
        const YY = FY.getVerticesData(OY.l.PositionKind);
        let rY, DY;
        IY && (rY = FY.getVerticesData(OY.l.ColorKind));
        let RY = 0,
          gY = 0;
        for (let FY = 0; FY < AY.length; FY++) {
          const OY = AY[FY];
          for (let AY = 0; AY < OY.length; AY++) YY[RY] = OY[AY].x, YY[RY + 1] = OY[AY].y, YY[RY + 2] = OY[AY].z, IY && rY && (DY = IY[FY], rY[gY] = DY[AY].r, rY[gY + 1] = DY[AY].g, rY[gY + 2] = DY[AY].b, rY[gY + 3] = DY[AY].a, gY += 4), RY += 3
        }
        return FY.updateVerticesData(OY.l.PositionKind, YY, !1, !1), IY && rY && FY.updateVerticesData(OY.l.ColorKind, rY, !1, !1), FY.refreshBoundingInfo(), FY
      }
      const gY = !!IY,
        vY = new RY.d(YY, DY, null, void 0, void 0, gY, rY.useVertexAlpha, rY.material);
      return aY(rY).applyToMesh(vY, rY.updatable), vY
    }

    function sY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const FY = rY.colors ? [rY.colors] : null;
      return uY(YY, {
        lines: [rY.points],
        updatable: rY.updatable,
        instance: rY.instance,
        colors: FY,
        useVertexAlpha: rY.useVertexAlpha,
        material: rY.material
      }, DY)
    }

    function iY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const IY = rY.points,
        OY = rY.instance,
        aY = rY.gapSize || 1,
        uY = rY.dashSize || 3;
      if (OY) {
        const YY = YY => {
          const rY = FY.r.Zero(),
            DY = YY.length / 6;
          let AY, RY, gY, aY, vY = 0,
            uY = 0;
          for (gY = 0; gY < IY.length - 1; gY++) IY[gY + 1].subtractToRef(IY[gY], rY), vY += rY.length();
          const sY = vY / DY,
            iY = OY._creationDataStorage.dashSize,
            yY = iY * sY / (iY + OY._creationDataStorage.gapSize);
          for (gY = 0; gY < IY.length - 1; gY++)
            for (IY[gY + 1].subtractToRef(IY[gY], rY), AY = Math.floor(rY.length() / sY), rY.normalize(), aY = 0; aY < AY && uY < YY.length;) RY = sY * aY, YY[uY] = IY[gY].x + RY * rY.x, YY[uY + 1] = IY[gY].y + RY * rY.y, YY[uY + 2] = IY[gY].z + RY * rY.z, YY[uY + 3] = IY[gY].x + (RY + yY) * rY.x, YY[uY + 4] = IY[gY].y + (RY + yY) * rY.y, YY[uY + 5] = IY[gY].z + (RY + yY) * rY.z, uY += 6, aY++;
          for (; uY < YY.length;) YY[uY] = IY[gY].x, YY[uY + 1] = IY[gY].y, YY[uY + 2] = IY[gY].z, uY += 3
        };
        return (rY.dashNb || rY.dashSize || rY.gapSize || rY.useVertexAlpha || rY.material) && gY.d.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), OY.updateMeshPositions(YY, !1), OY
      }
      const sY = new RY.d(YY, DY, null, void 0, void 0, void 0, rY.useVertexAlpha, rY.material);
      return vY(rY).applyToMesh(sY, rY.updatable), sY._creationDataStorage = new AY.i, sY._creationDataStorage.dashSize = uY, sY._creationDataStorage.gapSize = aY, sY
    }
    let yY = !1;
    yY || (yY = !0, IY.c.CreateLineSystem = aY, IY.c.CreateDashedLines = vY, AY.c.CreateLines = function(YY, rY) {
      return sY(YY, {
        points: rY,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, AY.c.CreateDashedLines = function(YY, rY, DY, FY, AY) {
      return iY(YY, {
        points: rY,
        dashSize: DY,
        gapSize: FY,
        dashNb: AY,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  39576: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => sY,
      h: () => QY
    });
    var FY, AY, IY = DY(36588),
      RY = DY(39270),
      OY = DY(39514),
      gY = DY(39582),
      aY = DY(39414),
      vY = DY(39587),
      uY = DY(39029);
    class sY extends OY.c {
      _isShaderMaterial(YY) {
        return !!YY && "ShaderMaterial" === YY.getClassName()
      }
      constructor(YY) {
        let rY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          FY = arguments.length > 5 ? arguments[5] : void 0,
          AY = arguments.length > 6 ? arguments[6] : void 0,
          OY = arguments.length > 7 ? arguments[7] : void 0;
        super(YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, rY, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = FY, this.useVertexAlpha = AY, this.color = new IY.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, rY && (this.color = rY.color.clone(), this.alpha = rY.alpha, this.useVertexColor = rY.useVertexColor, this.useVertexAlpha = rY.useVertexAlpha), this.intersectionThreshold = .1;
        const gY = {
          attributes: [RY.l.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? gY.defines.push("#define VERTEXALPHA") : gY.needAlphaBlending = !1, this.useVertexColor ? (gY.defines.push("#define VERTEXCOLOR"), gY.attributes.push(RY.l.ColorKind)) : (gY.uniforms.push("color"), this._color4 = new IY.d), OY) this.material = OY;
        else {
          this.hT().ky().isWebGPU && !sY.ForceGLSL && (this._shaderLanguage = 1), gY.shaderLanguage = this._shaderLanguage, gY.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([DY.e(334).then((() => DY(41603))), DY.e(340).then((() => DY(41605)))]) : await Promise.all([DY.e(316).then((() => DY(41614))), DY.e(322).then((() => DY(41618)))])
          };
          const YY = new vY.t("colorShader", this.hT(), "color", gY, !1);
          YY.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(YY)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(YY) {
        const rY = this.material;
        if (rY === YY) return;
        const DY = rY && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(YY), DY && rY?.dispose()
      }
      _setInternalMaterial(YY) {
        this._setMaterial(YY), this.material && (this.material.fillMode = aY.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(YY) {}
      _bind(YY, rY) {
        if (!this._geometry) return this;
        const DY = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(rY, DY) : this._geometry._bind(rY, DY, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: YY,
            g: rY,
            b: DY
          } = this.color;
          this._color4.set(YY, rY, DY, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(YY, rY, DY) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const FY = this.hT().ky();
        return this._unIndexed ? FY.drawArraysType(aY.c.LineListDrawMode, YY.verticesStart, YY.verticesCount, DY) : FY.drawElementsType(aY.c.LineListDrawMode, YY.indexStart, YY.indexCount, DY), this
      }
      dispose(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || rY) && this.material?.dispose(!1, !1, !0), super.dispose(YY)
      }
      clone(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        if (rY && void 0 === rY._addToSceneRootNodes) {
          const DY = rY;
          return DY.source = this, new sY(YY, this.hT(), DY.parent, DY.source, DY.doNotCloneChildren)
        }
        return new sY(YY, this.hT(), rY, this, DY)
      }
      createInstance(YY) {
        const rY = new iY(YY, this);
        if (this.YB) {
          rY.YB = {};
          for (const YY in this.YB) rY.YB[YY] = this.YB[YY]
        }
        return rY
      }
      serialize(YY) {
        super.serialize(YY), YY.color = this.color.VDY(), YY.alpha = this.alpha
      }
      static Parse(YY, rY) {
        const DY = new sY(YY.name, rY);
        return DY.color = IY.c.FromArray(YY.color), DY.alpha = YY.alpha, DY
      }
    }
    sY.ForceGLSL = !1;
    class iY extends gY.d {
      constructor(YY, rY) {
        super(YY, rY), this.intersectionThreshold = rY.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let yY = !1;

    function QY() {
      yY || (yY = !0, OY.c._LinesMeshParser = (YY, rY) => sY.Parse(YY, rY))
    }(FY = sY.prototype).enableEdgesRendering ?? (FY.enableEdgesRendering = (0, uY.g)("LinesMesh", "enableEdgesRendering")), (AY = iY.prototype).enableEdgesRendering ?? (AY.enableEdgesRendering = (0, uY.g)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38037: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(38040);
    const AY = (YY, rY, DY) => YY ? YY.getClassName && "Mesh" === YY.getClassName() ? null : !YY.getClassName || "SubMesh" !== YY.getClassName() && "PhysicsBody" !== YY.getClassName() ? YY.clone ? YY.clone() : Array.isArray(YY) ? YY.slice() : DY && "object" === typeof YY ? {
      ...YY
    } : null : YY.clone(rY) : null;
    class IY {
      static DeepCopy(YY, rY, DY, IY) {
        let RY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const OY = function(YY) {
          const rY = [];
          do {
            const DY = Object.getOwnPropertyNames(YY);
            for (const YY of DY) - 1 === rY.indexOf(YY) && rY.push(YY)
          } while (YY = Object.getPrototypeOf(YY));
          return rY
        }(YY);
        for (const aY of OY) {
          if ("_" === aY[0] && (!IY || -1 === IY.indexOf(aY))) continue;
          if (aY.endsWith("Observable")) continue;
          if (DY && -1 !== DY.indexOf(aY)) continue;
          const OY = YY[aY],
            vY = typeof OY;
          if ("function" !== vY) try {
            if ("object" === vY)
              if (OY instanceof Uint8Array) rY[aY] = Uint8Array.from(OY);
              else if (OY instanceof Array) {
              if (rY[aY] = [], OY.length > 0)
                if ("object" == typeof OY[0])
                  for (let YY = 0; YY < OY.length; YY++) {
                    const DY = AY(OY[YY], rY, RY); - 1 === rY[aY].indexOf(DY) && rY[aY].push(DY)
                  } else rY[aY] = OY.slice(0)
            } else rY[aY] = AY(OY, rY, RY);
            else rY[aY] = OY
          } catch (gY) {
            FY.d.Warn(gY.message)
          }
        }
      }
    }
  },
  37242: (YY, rY, DY) => {
    function FY() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (YY => {
        const rY = 16 * Math.random() | 0;
        return ("x" === YY ? rY : 3 & rY | 8).toString(16)
      }))
    }
    DY.d(rY, {
      c: () => FY
    })
  },
  38040: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    class FY {
      static _CheckLimit(YY, rY) {
        let DY = FY._LogLimitOutputs[YY];
        return DY ? DY.current++ : (DY = {
          limit: rY,
          current: 1
        }, FY._LogLimitOutputs[YY] = DY), DY.current <= DY.limit
      }
      static _GenerateLimitMessage(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const DY = FY._LogLimitOutputs[YY];
        if (!DY || !FY.MessageLimitReached) return;
        const AY = this._Levels[rY];
        DY.current === DY.limit && FY[AY.name](FY.MessageLimitReached.replace(/%LIMIT%/g, "" + DY.limit).replace(/%TYPE%/g, AY.name ?? ""))
      }
      static _AddLogEntry(YY) {
        FY._LogCache = YY + FY._LogCache, FY.OnNewCacheEntry && FY.OnNewCacheEntry(YY)
      }
      static _FormatMessage(YY) {
        const rY = YY => YY < 10 ? "0" + YY : "" + YY,
          DY = new Date;
        return "[" + rY(DY.getHours()) + ":" + rY(DY.getMinutes()) + ":" + rY(DY.getSeconds()) + "]: " + YY
      }
      static _LogDisabled(YY, rY) {}
      static _LogEnabled() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        const AY = Array.isArray(rY) ? rY[0] : rY;
        if (void 0 !== DY && !FY._CheckLimit(AY, DY)) return;
        const IY = FY._FormatMessage(AY),
          RY = this._Levels[YY],
          OY = Array.isArray(rY) ? rY.slice(1) : [];
        RY.logFunc && RY.logFunc("BJS - " + IY, ...OY);
        const gY = `<div style='color:${RY.color}'>${IY}</div><br>`;
        FY._AddLogEntry(gY), FY._GenerateLimitMessage(AY, YY)
      }
      static get LogCache() {
        return FY._LogCache
      }
      static ClearLogCache() {
        FY._LogCache = "", FY._LogLimitOutputs = {}, FY.errorsCount = 0
      }
      static set LogLevels(YY) {
        FY.Log = FY._LogDisabled, FY.Warn = FY._LogDisabled, FY.Error = FY._LogDisabled;
        const rY = [FY.MessageLogLevel, FY.WarningLogLevel, FY.ErrorLogLevel];
        for (const DY of rY)
          if ((YY & DY) === DY) {
            const YY = this._Levels[DY];
            FY[YY.name] = FY._LogEnabled.bind(FY, DY)
          }
      }
    }
    FY.NoneLogLevel = 0, FY.MessageLogLevel = 1, FY.WarningLogLevel = 2, FY.ErrorLogLevel = 4, FY.AllLogLevel = 7, FY.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", FY._LogCache = "", FY._LogLimitOutputs = {}, FY._Levels = [{}, {
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
    }], FY.errorsCount = 0, FY.Log = FY._LogEnabled.bind(FY, FY.MessageLogLevel), FY.Warn = FY._LogEnabled.bind(FY, FY.WarningLogLevel), FY.Error = FY._LogEnabled.bind(FY, FY.ErrorLogLevel)
  },
  39209: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY.g
    });
    var FY = DY(39217);
    (0, FY.e)()
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);