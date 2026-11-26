export const id = 256;
export const ids = [256, 262, 266];
export const modules = {
  41520: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      e: () => tH
    });
    var AH = LH(39595),
      rH = LH(41319),
      SH = LH(41489),
      hH = {};
    class tH {
      constructor(HH) {
        this.attachedToElement = !1, this.attached = {}, this.camera = HH, this.checkInputs = () => {}
      }
      add(HH) {
        const BH = HH.getSimpleName();
        this.attached[BH] ? AH.e.Warn("camera input of type " + BH + " already exists on camera") : (this.attached[BH] = HH, HH.camera = this.camera, HH.checkInputs && (this.checkInputs = this._addCheckInputs(HH.checkInputs.bind(HH))), this.attachedToElement && HH.attachControl(this.noPreventDefault))
      }
      remove(HH) {
        for (const BH in this.attached) {
          const LH = this.attached[BH];
          if (LH === HH) return LH.detachControl(), LH.camera = null, delete this.attached[BH], void this.rebuildInputCheck()
        }
      }
      removeByType(HH) {
        for (const BH in this.attached) {
          const LH = this.attached[BH];
          LH.getClassName() === HH && (LH.detachControl(), LH.camera = null, delete this.attached[BH], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(HH) {
        const BH = this.checkInputs;
        return () => {
          BH(), HH()
        }
      }
      attachInput(HH) {
        this.attachedToElement && HH.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          HH = !SH.d.ForceAttachControlToAlwaysPreventDefault && HH, this.attachedToElement = !0, this.noPreventDefault = HH;
          for (const BH in this.attached) this.attached[BH].attachControl(HH)
        }
      }
      detachElement() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const BH in this.attached) this.attached[BH].detachControl(), HH && (this.attached[BH].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const HH in this.attached) {
          const BH = this.attached[HH];
          BH.checkInputs && (this.checkInputs = this._addCheckInputs(BH.checkInputs.bind(BH)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(HH) {
        const BH = {};
        for (const LH in this.attached) {
          const HH = this.attached[LH],
            AH = rH.c.Serialize(HH);
          BH[HH.getClassName()] = AH
        }
        HH.inputsmgr = BH
      }
      parse(HH) {
        const BH = HH.inputsmgr;
        if (BH) {
          this.clear();
          for (const HH in BH) {
            const LH = hH[HH];
            if (LH) {
              const AH = BH[HH],
                SH = rH.c.Parse((() => new LH), AH, null);
              this.add(SH)
            }
          }
        } else
          for (const LH in this.attached) {
            const BH = hH[this.attached[LH].getClassName()];
            if (BH) {
              const AH = rH.c.Parse((() => new BH), HH, null);
              this.remove(this.attached[LH]), this.add(AH)
            }
          }
      }
    }
  },
  41525: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH.b
    });
    var AH = LH(41533);
    (0, AH.c)()
  },
  41533: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH,
      c: () => GH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(37963),
      hH = LH(38074),
      tH = LH(41535),
      zH = LH(41498),
      CH = LH(38012);
    let EH = (() => {
        var HH;
        let BH, LH, zH = tH.b,
          CH = [],
          EH = [],
          XH = [],
          GH = [];
        return HH = class extends zH {
          constructor(HH, BH, LH, rH) {
            super(HH, LH, rH), this.groundColor = (0, AH.k)(this, CH, new hH.c(0, 0, 0)), this.direction = ((0, AH.k)(this, EH), (0, AH.k)(this, XH, void 0)), (0, AH.k)(this, GH), this.direction = BH || SH.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(HH) {
            return this.direction = SH.o.Normalize(HH.subtract(SH.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(HH, BH) {
            const LH = SH.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", LH.x, LH.y, LH.z, 0, BH), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), BH), this
          }
          transferToNodeMaterialEffect(HH, BH) {
            const LH = SH.o.Normalize(this.direction);
            return HH.setFloat3(BH, LH.x, LH.y, LH.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = SH.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return tH.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(HH, BH) {
            HH["HEMILIGHT" + BH] = !0
          }
        }, (() => {
          const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(zH[Symbol.metadata] ?? null) : void 0;
          BH = [(0, rH.l)()], LH = [(0, rH.F)()], (0, AH.g)(null, null, BH, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "groundColor" in HH,
              get: HH => HH.groundColor,
              set: (HH, BH) => {
                HH.groundColor = BH
              }
            },
            metadata: SH
          }, CH, EH), (0, AH.g)(null, null, LH, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: HH => "direction" in HH,
              get: HH => HH.direction,
              set: (HH, BH) => {
                HH.direction = BH
              }
            },
            metadata: SH
          }, XH, GH), SH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SH
          })
        })(), HH
      })(),
      XH = !1;

    function GH() {
      XH || (XH = !0, zH.b.AddNodeConstructor("Light_Type_3", ((HH, BH) => () => new EH(HH, SH.o.Zero(), BH))), (0, CH.f)("BABYLON.HemisphericLight", EH))
    }
  },
  38071: (HH, BH, LH) => {
    LH.d(BH, {
      Color3: () => AH.c,
      d: () => AH.g
    });
    var AH = LH(38074);
    (0, AH.j)()
  },
  38610: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    var AH = LH(38619);
    class rH {
      static GetPlanes(HH) {
        const BH = [];
        for (let LH = 0; LH < 6; LH++) BH.push(new AH.d(0, 0, 0, 0));
        return rH.GetPlanesToRef(HH, BH), BH
      }
      static GetNearPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[2], BH.normal.y = LH[7] + LH[6], BH.normal.z = LH[11] + LH[10], BH.d = LH[15] + LH[14], BH.normalize()
      }
      static GetFarPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[2], BH.normal.y = LH[7] - LH[6], BH.normal.z = LH[11] - LH[10], BH.d = LH[15] - LH[14], BH.normalize()
      }
      static GetLeftPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[0], BH.normal.y = LH[7] + LH[4], BH.normal.z = LH[11] + LH[8], BH.d = LH[15] + LH[12], BH.normalize()
      }
      static GetRightPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[0], BH.normal.y = LH[7] - LH[4], BH.normal.z = LH[11] - LH[8], BH.d = LH[15] - LH[12], BH.normalize()
      }
      static GetTopPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[1], BH.normal.y = LH[7] - LH[5], BH.normal.z = LH[11] - LH[9], BH.d = LH[15] - LH[13], BH.normalize()
      }
      static GetBottomPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[1], BH.normal.y = LH[7] + LH[5], BH.normal.z = LH[11] + LH[9], BH.d = LH[15] + LH[13], BH.normalize()
      }
      static GetPlanesToRef(HH, BH) {
        rH.GetNearPlaneToRef(HH, BH[0]), rH.GetFarPlaneToRef(HH, BH[1]), rH.GetLeftPlaneToRef(HH, BH[2]), rH.GetRightPlaneToRef(HH, BH[3]), rH.GetTopPlaneToRef(HH, BH[4]), rH.GetBottomPlaneToRef(HH, BH[5])
      }
      static IsPointInFrustum(HH, BH) {
        for (let LH = 0; LH < 6; LH++)
          if (BH[LH].dotCoordinate(HH) < 0) return !1;
        return !0
      }
    }
  },
  38619: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH
    });
    var AH = LH(37963);
    class rH {
      constructor(HH, BH, LH, rH) {
        this.normal = new AH.o(HH, BH, LH), this.d = rH
      }
      xrH() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new rH(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let HH = this.normal.getHashCode();
        return HH = 397 * HH ^ this.d, HH
      }
      normalize() {
        const HH = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let BH = 0;
        return 0 !== HH && (BH = 1 / HH), this.normal.x *= BH, this.normal.y *= BH, this.normal.z *= BH, this.d *= BH, this
      }
      transform(HH) {
        const BH = rH._TmpMatrix;
        HH.invertToRef(BH);
        const LH = BH.m,
          AH = this.normal.x,
          SH = this.normal.y,
          hH = this.normal.z,
          tH = this.d,
          zH = AH * LH[0] + SH * LH[1] + hH * LH[2] + tH * LH[3],
          CH = AH * LH[4] + SH * LH[5] + hH * LH[6] + tH * LH[7],
          EH = AH * LH[8] + SH * LH[9] + hH * LH[10] + tH * LH[11],
          XH = AH * LH[12] + SH * LH[13] + hH * LH[14] + tH * LH[15];
        return new rH(zH, CH, EH, XH)
      }
      dotCoordinate(HH) {
        return this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z + this.d
      }
      copyFromPoints(HH, BH, LH) {
        const AH = BH.x - HH.x,
          rH = BH.y - HH.y,
          SH = BH.z - HH.z,
          hH = LH.x - HH.x,
          tH = LH.y - HH.y,
          zH = LH.z - HH.z,
          CH = rH * zH - SH * tH,
          EH = SH * hH - AH * zH,
          XH = AH * tH - rH * hH,
          GH = Math.sqrt(CH * CH + EH * EH + XH * XH);
        let YH;
        return YH = 0 !== GH ? 1 / GH : 0, this.normal.x = CH * YH, this.normal.y = EH * YH, this.normal.z = XH * YH, this.d = -(this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z), this
      }
      isFrontFacingTo(HH, BH) {
        return AH.o.Dot(this.normal, HH) <= BH
      }
      signedDistanceTo(HH) {
        return AH.o.Dot(HH, this.normal) + this.d
      }
      static FromArray(HH) {
        return new rH(HH[0], HH[1], HH[2], HH[3])
      }
      static FromPoints(HH, BH, LH) {
        const AH = new rH(0, 0, 0, 0);
        return AH.copyFromPoints(HH, BH, LH), AH
      }
      static FromPositionAndNormal(HH, BH) {
        const LH = new rH(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(HH, BH, LH)
      }
      static FromPositionAndNormalToRef(HH, BH, LH) {
        return LH.normal.Tm(BH), LH.normal.normalize(), LH.d = -HH.dot(LH.normal), LH
      }
      static SignedDistanceToPlaneFromPositionAndNormal(HH, BH, LH) {
        const rH = -(BH.x * HH.x + BH.y * HH.y + BH.z * HH.z);
        return AH.o.Dot(LH, BH) + rH
      }
    }
    rH._TmpMatrix = AH.e.Identity()
  },
  37961: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      Matrix: () => AH.e,
      Quaternion: () => AH.f,
      RegisterMathVector: () => AH.h,
      TmpVectors: () => AH.l,
      Vector2: () => AH.n,
      lu: () => AH.o,
      Vector4: () => AH.q
    });
    var AH = LH(37963);
    (0, AH.h)()
  },
  38966: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    class AH {
      constructor(HH, BH, LH, AH) {
        this.x = HH, this.y = BH, this.width = LH, this.height = AH
      }
      toGlobal(HH, BH) {
        return new AH(this.x * HH, this.y * BH, this.width * HH, this.height * BH)
      }
      toGlobalToRef(HH, BH, LH) {
        return LH.x = this.x * HH, LH.y = this.y * BH, LH.width = this.width * HH, LH.height = this.height * BH, this
      }
      clone() {
        return new AH(this.x, this.y, this.width, this.height)
      }
    }
  },
  41685: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => CH
    });
    var AH = LH(37963),
      rH = LH(38074),
      SH = LH(41693),
      hH = LH(41703),
      tH = LH(41721);

    function zH(HH) {
      let BH = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const LH = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        SH = [],
        zH = HH.width || HH.size || 1,
        CH = HH.height || HH.size || 1,
        EH = HH.depth || HH.size || 1,
        XH = HH.wrap || !1;
      let GH = void 0 === HH.topBaseAt ? 1 : HH.topBaseAt,
        YH = void 0 === HH.bottomBaseAt ? 0 : HH.bottomBaseAt;
      GH = (GH + 4) % 4, YH = (YH + 4) % 4;
      let uH = [2, 0, 3, 1][GH],
        QH = [2, 0, 1, 3][YH],
        WH = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (XH) {
        BH = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], WH = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let HH = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          LH = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const AH = [17, 18, 19, 16],
          rH = [22, 23, 20, 21];
        for (; uH > 0;) HH.unshift(HH.pop()), AH.unshift(AH.pop()), uH--;
        for (; QH > 0;) LH.unshift(LH.pop()), rH.unshift(rH.pop()), QH--;
        HH = HH.flat(), LH = LH.flat(), WH = WH.concat(HH).concat(LH), BH.push(AH[0], AH[2], AH[3], AH[0], AH[1], AH[2]), BH.push(rH[0], rH[2], rH[3], rH[0], rH[1], rH[2])
      }
      const MH = [zH / 2, CH / 2, EH / 2],
        xH = WH.reduce(((HH, BH, LH) => HH.concat(BH * MH[LH % 3])), []),
        vH = 0 === HH.sideOrientation ? 0 : HH.sideOrientation || hH.b.DEFAULTSIDE,
        PH = HH.faceUV || new Array(6),
        TH = HH.faceColors,
        UH = [];
      for (let hH = 0; hH < 6; hH++) void 0 === PH[hH] && (PH[hH] = new AH.q(0, 0, 1, 1)), TH && void 0 === TH[hH] && (TH[hH] = new rH.g(1, 1, 1, 1));
      for (let AH = 0; AH < 6; AH++)
        if (SH.push(PH[AH].z, tH.c ? 1 - PH[AH].w : PH[AH].w), SH.push(PH[AH].x, tH.c ? 1 - PH[AH].w : PH[AH].w), SH.push(PH[AH].x, tH.c ? 1 - PH[AH].y : PH[AH].y), SH.push(PH[AH].z, tH.c ? 1 - PH[AH].y : PH[AH].y), TH)
          for (let HH = 0; HH < 4; HH++) UH.push(TH[AH].r, TH[AH].g, TH[AH].b, TH[AH].a);
      hH.b._ComputeSides(vH, xH, BH, LH, SH, HH.frontUVs, HH.backUVs);
      const VH = new hH.b;
      if (VH.indices = BH, VH.positions = xH, VH.normals = LH, VH.uvs = SH, TH) {
        const HH = vH === hH.b.DOUBLESIDE ? UH.concat(UH) : UH;
        VH.colors = HH
      }
      return VH
    }

    function CH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const AH = new SH.c(HH, LH);
      BH.sideOrientation = SH.c._GetDefaultSideOrientation(BH.sideOrientation), AH._originalBuilderSideOrientation = BH.sideOrientation;
      return zH(BH).applyToMesh(AH, BH.updatable), AH
    }
    let EH = !1;
    EH || (EH = !0, hH.b.CreateBox = zH, SH.c.CreateBox = function(HH, BH) {
      return CH(HH, {
        size: BH,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  41749: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => XH
    });
    var AH = LH(37963),
      rH = LH(41693),
      SH = LH(41703),
      hH = LH(41754),
      tH = LH(41427),
      zH = LH(39595);

    function CH(HH) {
      const BH = [],
        LH = [],
        AH = HH.lines,
        rH = HH.colors,
        hH = [];
      let tH = 0;
      for (let SH = 0; SH < AH.length; SH++) {
        const HH = AH[SH];
        for (let AH = 0; AH < HH.length; AH++) {
          const {
            x: zH,
            y: CH,
            z: EH
          } = HH[AH];
          if (LH.push(zH, CH, EH), rH) {
            const HH = rH[SH],
              {
                r: BH,
                g: LH,
                b: tH,
                a: zH
              } = HH[AH];
            hH.push(BH, LH, tH, zH)
          }
          AH > 0 && (BH.push(tH - 1), BH.push(tH)), tH++
        }
      }
      const zH = new SH.b;
      return zH.indices = BH, zH.positions = LH, rH && (zH.colors = hH), zH
    }

    function EH(HH) {
      const BH = HH.dashSize || 3,
        LH = HH.gapSize || 1,
        rH = HH.dashNb || 200,
        hH = HH.points,
        tH = [],
        zH = [],
        CH = AH.o.Zero();
      let EH, XH, GH, YH = 0,
        uH = 0;
      for (GH = 0; GH < hH.length - 1; GH++) hH[GH + 1].subtractToRef(hH[GH], CH), YH += CH.length();
      const QH = YH / rH,
        WH = BH * QH / (BH + LH);
      for (GH = 0; GH < hH.length - 1; GH++) {
        hH[GH + 1].subtractToRef(hH[GH], CH), EH = Math.floor(CH.length() / QH), CH.normalize();
        for (let HH = 0; HH < EH; HH++) XH = QH * HH, tH.push(hH[GH].x + XH * CH.x, hH[GH].y + XH * CH.y, hH[GH].z + XH * CH.z), tH.push(hH[GH].x + (XH + WH) * CH.x, hH[GH].y + (XH + WH) * CH.y, hH[GH].z + (XH + WH) * CH.z), zH.push(uH, uH + 1), uH += 2
      }
      const MH = new SH.b;
      return MH.positions = tH, MH.indices = zH, MH
    }

    function XH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const AH = BH.instance,
        rH = BH.lines,
        SH = BH.colors;
      if (AH) {
        const HH = AH.getVerticesData(tH.i.PositionKind);
        let BH, LH;
        SH && (BH = AH.getVerticesData(tH.i.ColorKind));
        let hH = 0,
          zH = 0;
        for (let AH = 0; AH < rH.length; AH++) {
          const tH = rH[AH];
          for (let rH = 0; rH < tH.length; rH++) HH[hH] = tH[rH].x, HH[hH + 1] = tH[rH].y, HH[hH + 2] = tH[rH].z, SH && BH && (LH = SH[AH], BH[zH] = LH[rH].r, BH[zH + 1] = LH[rH].g, BH[zH + 2] = LH[rH].b, BH[zH + 3] = LH[rH].a, zH += 4), hH += 3
        }
        return AH.updateVerticesData(tH.i.PositionKind, HH, !1, !1), SH && BH && AH.updateVerticesData(tH.i.ColorKind, BH, !1, !1), AH.refreshBoundingInfo(), AH
      }
      const zH = !!SH,
        EH = new hH.e(HH, LH, null, void 0, void 0, zH, BH.useVertexAlpha, BH.material);
      return CH(BH).applyToMesh(EH, BH.updatable), EH
    }

    function GH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const AH = BH.colors ? [BH.colors] : null;
      return XH(HH, {
        lines: [BH.points],
        updatable: BH.updatable,
        instance: BH.instance,
        colors: AH,
        useVertexAlpha: BH.useVertexAlpha,
        material: BH.material
      }, LH)
    }

    function YH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const SH = BH.points,
        tH = BH.instance,
        CH = BH.gapSize || 1,
        XH = BH.dashSize || 3;
      if (tH) {
        const HH = HH => {
          const BH = AH.o.Zero(),
            LH = HH.length / 6;
          let rH, hH, zH, CH, EH = 0,
            XH = 0;
          for (zH = 0; zH < SH.length - 1; zH++) SH[zH + 1].subtractToRef(SH[zH], BH), EH += BH.length();
          const GH = EH / LH,
            YH = tH._creationDataStorage.dashSize,
            uH = YH * GH / (YH + tH._creationDataStorage.gapSize);
          for (zH = 0; zH < SH.length - 1; zH++)
            for (SH[zH + 1].subtractToRef(SH[zH], BH), rH = Math.floor(BH.length() / GH), BH.normalize(), CH = 0; CH < rH && XH < HH.length;) hH = GH * CH, HH[XH] = SH[zH].x + hH * BH.x, HH[XH + 1] = SH[zH].y + hH * BH.y, HH[XH + 2] = SH[zH].z + hH * BH.z, HH[XH + 3] = SH[zH].x + (hH + uH) * BH.x, HH[XH + 4] = SH[zH].y + (hH + uH) * BH.y, HH[XH + 5] = SH[zH].z + (hH + uH) * BH.z, XH += 6, CH++;
          for (; XH < HH.length;) HH[XH] = SH[zH].x, HH[XH + 1] = SH[zH].y, HH[XH + 2] = SH[zH].z, XH += 3
        };
        return (BH.dashNb || BH.dashSize || BH.gapSize || BH.useVertexAlpha || BH.material) && zH.e.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), tH.updateMeshPositions(HH, !1), tH
      }
      const GH = new hH.e(HH, LH, null, void 0, void 0, void 0, BH.useVertexAlpha, BH.material);
      return EH(BH).applyToMesh(GH, BH.updatable), GH._creationDataStorage = new rH.i, GH._creationDataStorage.dashSize = XH, GH._creationDataStorage.gapSize = CH, GH
    }
    let uH = !1;
    uH || (uH = !0, SH.b.CreateLineSystem = CH, SH.b.CreateDashedLines = EH, rH.c.CreateLines = function(HH, BH) {
      return GH(HH, {
        points: BH,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, rH.c.CreateDashedLines = function(HH, BH, LH, AH, rH) {
      return YH(HH, {
        points: BH,
        dashSize: LH,
        gapSize: AH,
        dashNb: rH,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  41754: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => GH,
      h: () => QH
    });
    var AH, rH, SH = LH(38074),
      hH = LH(41427),
      tH = LH(41693),
      zH = LH(41762),
      CH = LH(41573),
      EH = LH(41769),
      XH = LH(41169);
    class GH extends tH.c {
      _isShaderMaterial(HH) {
        return !!HH && "ShaderMaterial" === HH.getClassName()
      }
      constructor(HH) {
        let BH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          AH = arguments.length > 5 ? arguments[5] : void 0,
          rH = arguments.length > 6 ? arguments[6] : void 0,
          tH = arguments.length > 7 ? arguments[7] : void 0;
        super(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, BH, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = AH, this.useVertexAlpha = rH, this.color = new SH.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, BH && (this.color = BH.color.clone(), this.alpha = BH.alpha, this.useVertexColor = BH.useVertexColor, this.useVertexAlpha = BH.useVertexAlpha), this.intersectionThreshold = .1;
        const zH = {
          attributes: [hH.i.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? zH.defines.push("#define VERTEXALPHA") : zH.needAlphaBlending = !1, this.useVertexColor ? (zH.defines.push("#define VERTEXCOLOR"), zH.attributes.push(hH.i.ColorKind)) : (zH.uniforms.push("color"), this._color4 = new SH.g), tH) this.material = tH;
        else {
          this.yN().Iu().isWebGPU && !GH.ForceGLSL && (this._shaderLanguage = 1), zH.shaderLanguage = this._shaderLanguage, zH.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([LH.e(653).then((() => LH(45996))), LH.e(659).then((() => LH(46001)))]) : await Promise.all([LH.e(635).then((() => LH(46010))), LH.e(641).then((() => LH(46015)))])
          };
          const HH = new EH.r("colorShader", this.yN(), "color", zH, !1);
          HH.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(HH)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(HH) {
        const BH = this.material;
        if (BH === HH) return;
        const LH = BH && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(HH), LH && BH?.dispose()
      }
      _setInternalMaterial(HH) {
        this._setMaterial(HH), this.material && (this.material.fillMode = CH.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(HH) {}
      _bind(HH, BH) {
        if (!this._geometry) return this;
        const LH = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(BH, LH) : this._geometry._bind(BH, LH, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: HH,
            g: BH,
            b: LH
          } = this.color;
          this._color4.set(HH, BH, LH, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(HH, BH, LH) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const AH = this.yN().Iu();
        return this._unIndexed ? AH.drawArraysType(CH.c.LineListDrawMode, HH.verticesStart, HH.verticesCount, LH) : AH.drawElementsType(CH.c.LineListDrawMode, HH.indexStart, HH.indexCount, LH), this
      }
      dispose(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || BH) && this.material?.dispose(!1, !1, !0), super.dispose(HH)
      }
      clone(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        if (BH && void 0 === BH._addToSceneRootNodes) {
          const LH = BH;
          return LH.source = this, new GH(HH, this.yN(), LH.parent, LH.source, LH.doNotCloneChildren)
        }
        return new GH(HH, this.yN(), BH, this, LH)
      }
      createInstance(HH) {
        const BH = new YH(HH, this);
        if (this.kF) {
          BH.kF = {};
          for (const HH in this.kF) BH.kF[HH] = this.kF[HH]
        }
        return BH
      }
      serialize(HH) {
        super.serialize(HH), HH.color = this.color.xrH(), HH.alpha = this.alpha
      }
      static Parse(HH, BH) {
        const LH = new GH(HH.name, BH);
        return LH.color = SH.c.FromArray(HH.color), LH.alpha = HH.alpha, LH
      }
    }
    GH.ForceGLSL = !1;
    class YH extends zH.c {
      constructor(HH, BH) {
        super(HH, BH), this.intersectionThreshold = BH.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let uH = !1;

    function QH() {
      uH || (uH = !0, tH.c._LinesMeshParser = (HH, BH) => GH.Parse(HH, BH))
    }(AH = GH.prototype).enableEdgesRendering ?? (AH.enableEdgesRendering = (0, XH.f)("LinesMesh", "enableEdgesRendering")), (rH = YH.prototype).enableEdgesRendering ?? (rH.enableEdgesRendering = (0, XH.f)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  39588: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH
    });
    var AH = LH(39595);
    const rH = (HH, BH, LH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : LH && "object" === typeof HH ? {
      ...HH
    } : null : HH.clone(BH) : null;
    class SH {
      static DeepCopy(HH, BH, LH, SH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const tH = function(HH) {
          const BH = [];
          do {
            const LH = Object.getOwnPropertyNames(HH);
            for (const HH of LH) - 1 === BH.indexOf(HH) && BH.push(HH)
          } while (HH = Object.getPrototypeOf(HH));
          return BH
        }(HH);
        for (const CH of tH) {
          if ("_" === CH[0] && (!SH || -1 === SH.indexOf(CH))) continue;
          if (CH.endsWith("Observable")) continue;
          if (LH && -1 !== LH.indexOf(CH)) continue;
          const tH = HH[CH],
            EH = typeof tH;
          if ("function" !== EH) try {
            if ("object" === EH)
              if (tH instanceof Uint8Array) BH[CH] = Uint8Array.from(tH);
              else if (tH instanceof Array) {
              if (BH[CH] = [], tH.length > 0)
                if ("object" == typeof tH[0])
                  for (let HH = 0; HH < tH.length; HH++) {
                    const LH = rH(tH[HH], BH, hH); - 1 === BH[CH].indexOf(LH) && BH[CH].push(LH)
                  } else BH[CH] = tH.slice(0)
            } else BH[CH] = rH(tH, BH, hH);
            else BH[CH] = tH
          } catch (zH) {
            AH.e.Warn(zH.message)
          }
        }
      }
    }
  },
  38790: (HH, BH, LH) => {
    function AH() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (HH => {
        const BH = 16 * Math.random() | 0;
        return ("x" === HH ? BH : 3 & BH | 8).toString(16)
      }))
    }
    LH.d(BH, {
      e: () => AH
    })
  },
  39595: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {
      static _CheckLimit(HH, BH) {
        let LH = AH._LogLimitOutputs[HH];
        return LH ? LH.current++ : (LH = {
          limit: BH,
          current: 1
        }, AH._LogLimitOutputs[HH] = LH), LH.current <= LH.limit
      }
      static _GenerateLimitMessage(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const LH = AH._LogLimitOutputs[HH];
        if (!LH || !AH.MessageLimitReached) return;
        const rH = this._Levels[BH];
        LH.current === LH.limit && AH[rH.name](AH.MessageLimitReached.replace(/%LIMIT%/g, "" + LH.limit).replace(/%TYPE%/g, rH.name ?? ""))
      }
      static _AddLogEntry(HH) {
        AH._LogCache = HH + AH._LogCache, AH.OnNewCacheEntry && AH.OnNewCacheEntry(HH)
      }
      static _FormatMessage(HH) {
        const BH = HH => HH < 10 ? "0" + HH : "" + HH,
          LH = new Date;
        return "[" + BH(LH.getHours()) + ":" + BH(LH.getMinutes()) + ":" + BH(LH.getSeconds()) + "]: " + HH
      }
      static _LogDisabled(HH, BH) {}
      static _LogEnabled() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const rH = Array.isArray(BH) ? BH[0] : BH;
        if (void 0 !== LH && !AH._CheckLimit(rH, LH)) return;
        const SH = AH._FormatMessage(rH),
          hH = this._Levels[HH],
          tH = Array.isArray(BH) ? BH.slice(1) : [];
        hH.logFunc && hH.logFunc("BJS - " + SH, ...tH);
        const zH = `<div style='color:${hH.color}'>${SH}</div><br>`;
        AH._AddLogEntry(zH), AH._GenerateLimitMessage(rH, HH)
      }
      static get LogCache() {
        return AH._LogCache
      }
      static ClearLogCache() {
        AH._LogCache = "", AH._LogLimitOutputs = {}, AH.errorsCount = 0
      }
      static set LogLevels(HH) {
        AH.Log = AH._LogDisabled, AH.Warn = AH._LogDisabled, AH.Error = AH._LogDisabled;
        const BH = [AH.MessageLogLevel, AH.WarningLogLevel, AH.ErrorLogLevel];
        for (const LH of BH)
          if ((HH & LH) === LH) {
            const HH = this._Levels[LH];
            AH[HH.name] = AH._LogEnabled.bind(AH, LH)
          }
      }
    }
    AH.NoneLogLevel = 0, AH.MessageLogLevel = 1, AH.WarningLogLevel = 2, AH.ErrorLogLevel = 4, AH.AllLogLevel = 7, AH.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", AH._LogCache = "", AH._LogLimitOutputs = {}, AH._Levels = [{}, {
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
    }], AH.errorsCount = 0, AH.Log = AH._LogEnabled.bind(AH, AH.MessageLogLevel), AH.Warn = AH._LogEnabled.bind(AH, AH.WarningLogLevel), AH.Error = AH._LogEnabled.bind(AH, AH.ErrorLogLevel)
  },
  41374: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH.d
    });
    var AH = LH(41383);
    (0, AH.c)()
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);