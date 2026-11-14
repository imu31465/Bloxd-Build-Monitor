export const id = 204;
export const ids = [204, 209, 212];
export const modules = {
  37817: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW,
      d: () => bR
    });
    var wW = MW(36721),
      CW = MW(37615),
      zR = MW(37796),
      AW = {};
    class bR {
      constructor(WW) {
        this.attachedToElement = !1, this.attached = {}, this.camera = WW, this.checkInputs = () => {}
      }
      add(WW) {
        const RW = WW.getSimpleName();
        this.attached[RW] ? wW.b.Warn("camera input of type " + RW + " already exists on camera") : (this.attached[RW] = WW, WW.camera = this.camera, WW.checkInputs && (this.checkInputs = this._addCheckInputs(WW.checkInputs.bind(WW))), this.attachedToElement && WW.attachControl(this.noPreventDefault))
      }
      remove(WW) {
        for (const RW in this.attached) {
          const MW = this.attached[RW];
          if (MW === WW) return MW.detachControl(), MW.camera = null, delete this.attached[RW], void this.rebuildInputCheck()
        }
      }
      removeByType(WW) {
        for (const RW in this.attached) {
          const MW = this.attached[RW];
          MW.getClassName() === WW && (MW.detachControl(), MW.camera = null, delete this.attached[RW], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(WW) {
        const RW = this.checkInputs;
        return () => {
          RW(), WW()
        }
      }
      attachInput(WW) {
        this.attachedToElement && WW.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          WW = !zR.e.ForceAttachControlToAlwaysPreventDefault && WW, this.attachedToElement = !0, this.noPreventDefault = WW;
          for (const RW in this.attached) this.attached[RW].attachControl(WW)
        }
      }
      detachElement() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const RW in this.attached) this.attached[RW].detachControl(), WW && (this.attached[RW].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const WW in this.attached) {
          const RW = this.attached[WW];
          RW.checkInputs && (this.checkInputs = this._addCheckInputs(RW.checkInputs.bind(RW)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(WW) {
        const RW = {};
        for (const MW in this.attached) {
          const WW = this.attached[MW],
            wW = CW.d.Serialize(WW);
          RW[WW.getClassName()] = wW
        }
        WW.inputsmgr = RW
      }
      parse(WW) {
        const RW = WW.inputsmgr;
        if (RW) {
          this.clear();
          for (const WW in RW) {
            const MW = AW[WW];
            if (MW) {
              const wW = RW[WW],
                zR = CW.d.Parse((() => new MW), wW, null);
              this.add(zR)
            }
          }
        } else
          for (const MW in this.attached) {
            const RW = AW[this.attached[MW].getClassName()];
            if (RW) {
              const wW = CW.d.Parse((() => new RW), WW, null);
              this.remove(this.attached[MW]), this.add(wW)
            }
          }
      }
    }
  },
  37821: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW.b
    });
    var wW = MW(37830);
    (0, wW.e)()
  },
  37830: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => eW,
      e: () => tR
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(35324),
      AW = MW(35376),
      bR = MW(37836),
      yR = MW(37800),
      NW = MW(35361);
    let eW = (() => {
        var WW;
        let RW, MW, yR = bR.c,
          NW = [],
          eW = [],
          BW = [],
          tR = [];
        return WW = class extends yR {
          constructor(WW, RW, MW, CW) {
            super(WW, MW, CW), this.groundColor = (0, wW.i)(this, NW, new AW.d(0, 0, 0)), this.direction = ((0, wW.i)(this, eW), (0, wW.i)(this, BW, void 0)), (0, wW.i)(this, tR), this.direction = RW || zR.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(WW) {
            return this.direction = zR.q.Normalize(WW.subtract(zR.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(WW, RW) {
            const MW = zR.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", MW.x, MW.y, MW.z, 0, RW), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), RW), this
          }
          transferToNodeMaterialEffect(WW, RW) {
            const MW = zR.q.Normalize(this.direction);
            return WW.setFloat3(RW, MW.x, MW.y, MW.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = zR.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return bR.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(WW, RW) {
            WW["HEMILIGHT" + RW] = !0
          }
        }, (() => {
          const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(yR[Symbol.metadata] ?? null) : void 0;
          RW = [(0, CW.m)()], MW = [(0, CW.B)()], (0, wW.e)(null, null, RW, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "groundColor" in WW,
              get: WW => WW.groundColor,
              set: (WW, RW) => {
                WW.groundColor = RW
              }
            },
            metadata: zR
          }, NW, eW), (0, wW.e)(null, null, MW, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: WW => "direction" in WW,
              get: WW => WW.direction,
              set: (WW, RW) => {
                WW.direction = RW
              }
            },
            metadata: zR
          }, BW, tR), zR && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zR
          })
        })(), WW
      })(),
      BW = !1;

    function tR() {
      BW || (BW = !0, yR.b.AddNodeConstructor("Light_Type_3", ((WW, RW) => () => new eW(WW, zR.q.Zero(), RW))), (0, NW.e)("BABYLON.HemisphericLight", eW))
    }
  },
  35373: (WW, RW, MW) => {
    MW.d(RW, {
      Color3: () => wW.d,
      d: () => wW.h
    });
    var wW = MW(35376);
    (0, wW.k)()
  },
  35845: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW
    });
    var wW = MW(35852);
    class CW {
      static GetPlanes(WW) {
        const RW = [];
        for (let MW = 0; MW < 6; MW++) RW.push(new wW.c(0, 0, 0, 0));
        return CW.GetPlanesToRef(WW, RW), RW
      }
      static GetNearPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[2], RW.normal.y = MW[7] + MW[6], RW.normal.z = MW[11] + MW[10], RW.d = MW[15] + MW[14], RW.normalize()
      }
      static GetFarPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[2], RW.normal.y = MW[7] - MW[6], RW.normal.z = MW[11] - MW[10], RW.d = MW[15] - MW[14], RW.normalize()
      }
      static GetLeftPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[0], RW.normal.y = MW[7] + MW[4], RW.normal.z = MW[11] + MW[8], RW.d = MW[15] + MW[12], RW.normalize()
      }
      static GetRightPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[0], RW.normal.y = MW[7] - MW[4], RW.normal.z = MW[11] - MW[8], RW.d = MW[15] - MW[12], RW.normalize()
      }
      static GetTopPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[1], RW.normal.y = MW[7] - MW[5], RW.normal.z = MW[11] - MW[9], RW.d = MW[15] - MW[13], RW.normalize()
      }
      static GetBottomPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[1], RW.normal.y = MW[7] + MW[5], RW.normal.z = MW[11] + MW[9], RW.d = MW[15] + MW[13], RW.normalize()
      }
      static GetPlanesToRef(WW, RW) {
        CW.GetNearPlaneToRef(WW, RW[0]), CW.GetFarPlaneToRef(WW, RW[1]), CW.GetLeftPlaneToRef(WW, RW[2]), CW.GetRightPlaneToRef(WW, RW[3]), CW.GetTopPlaneToRef(WW, RW[4]), CW.GetBottomPlaneToRef(WW, RW[5])
      }
      static IsPointInFrustum(WW, RW) {
        for (let MW = 0; MW < 6; MW++)
          if (RW[MW].dotCoordinate(WW) < 0) return !1;
        return !0
      }
    }
  },
  35852: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW
    });
    var wW = MW(35324);
    class CW {
      constructor(WW, RW, MW, CW) {
        this.normal = new wW.q(WW, RW, MW), this.d = CW
      }
      JNW() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new CW(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let WW = this.normal.getHashCode();
        return WW = 397 * WW ^ this.d, WW
      }
      normalize() {
        const WW = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let RW = 0;
        return 0 !== WW && (RW = 1 / WW), this.normal.x *= RW, this.normal.y *= RW, this.normal.z *= RW, this.d *= RW, this
      }
      transform(WW) {
        const RW = CW._TmpMatrix;
        WW.invertToRef(RW);
        const MW = RW.m,
          wW = this.normal.x,
          zR = this.normal.y,
          AW = this.normal.z,
          bR = this.d,
          yR = wW * MW[0] + zR * MW[1] + AW * MW[2] + bR * MW[3],
          NW = wW * MW[4] + zR * MW[5] + AW * MW[6] + bR * MW[7],
          eW = wW * MW[8] + zR * MW[9] + AW * MW[10] + bR * MW[11],
          BW = wW * MW[12] + zR * MW[13] + AW * MW[14] + bR * MW[15];
        return new CW(yR, NW, eW, BW)
      }
      dotCoordinate(WW) {
        return this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z + this.d
      }
      copyFromPoints(WW, RW, MW) {
        const wW = RW.x - WW.x,
          CW = RW.y - WW.y,
          zR = RW.z - WW.z,
          AW = MW.x - WW.x,
          bR = MW.y - WW.y,
          yR = MW.z - WW.z,
          NW = CW * yR - zR * bR,
          eW = zR * AW - wW * yR,
          BW = wW * bR - CW * AW,
          tR = Math.sqrt(NW * NW + eW * eW + BW * BW);
        let TW;
        return TW = 0 !== tR ? 1 / tR : 0, this.normal.x = NW * TW, this.normal.y = eW * TW, this.normal.z = BW * TW, this.d = -(this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z), this
      }
      isFrontFacingTo(WW, RW) {
        return wW.q.Dot(this.normal, WW) <= RW
      }
      signedDistanceTo(WW) {
        return wW.q.Dot(WW, this.normal) + this.d
      }
      static FromArray(WW) {
        return new CW(WW[0], WW[1], WW[2], WW[3])
      }
      static FromPoints(WW, RW, MW) {
        const wW = new CW(0, 0, 0, 0);
        return wW.copyFromPoints(WW, RW, MW), wW
      }
      static FromPositionAndNormal(WW, RW) {
        const MW = new CW(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(WW, RW, MW)
      }
      static FromPositionAndNormalToRef(WW, RW, MW) {
        return MW.normal.hyW(RW), MW.normal.normalize(), MW.d = -WW.dot(MW.normal), MW
      }
      static SignedDistanceToPlaneFromPositionAndNormal(WW, RW, MW) {
        const CW = -(RW.x * WW.x + RW.y * WW.y + RW.z * WW.z);
        return wW.q.Dot(MW, RW) + CW
      }
    }
    CW._TmpMatrix = wW.d.Identity()
  },
  35317: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      Matrix: () => wW.d,
      Quaternion: () => wW.e,
      RegisterMathVector: () => wW.h,
      TmpVectors: () => wW.k,
      Vector2: () => wW.n,
      vC: () => wW.q,
      Vector4: () => wW.s
    });
    var wW = MW(35324);
    (0, wW.h)()
  },
  36185: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW
    });
    class wW {
      constructor(WW, RW, MW, wW) {
        this.x = WW, this.y = RW, this.width = MW, this.height = wW
      }
      toGlobal(WW, RW) {
        return new wW(this.x * WW, this.y * RW, this.width * WW, this.height * RW)
      }
      toGlobalToRef(WW, RW, MW) {
        return MW.x = this.x * WW, MW.y = this.y * RW, MW.width = this.width * WW, MW.height = this.height * RW, this
      }
      clone() {
        return new wW(this.x, this.y, this.width, this.height)
      }
    }
  },
  37985: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => NW
    });
    var wW = MW(35324),
      CW = MW(35376),
      zR = MW(37993),
      AW = MW(38003),
      bR = MW(38019);

    function yR(WW) {
      let RW = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const MW = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        zR = [],
        yR = WW.width || WW.size || 1,
        NW = WW.height || WW.size || 1,
        eW = WW.depth || WW.size || 1,
        BW = WW.wrap || !1;
      let tR = void 0 === WW.topBaseAt ? 1 : WW.topBaseAt,
        TW = void 0 === WW.bottomBaseAt ? 0 : WW.bottomBaseAt;
      tR = (tR + 4) % 4, TW = (TW + 4) % 4;
      let gR = [2, 0, 3, 1][tR],
        iR = [2, 0, 1, 3][TW],
        YW = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (BW) {
        RW = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], YW = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let WW = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          MW = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const wW = [17, 18, 19, 16],
          CW = [22, 23, 20, 21];
        for (; gR > 0;) WW.unshift(WW.pop()), wW.unshift(wW.pop()), gR--;
        for (; iR > 0;) MW.unshift(MW.pop()), CW.unshift(CW.pop()), iR--;
        WW = WW.flat(), MW = MW.flat(), YW = YW.concat(WW).concat(MW), RW.push(wW[0], wW[2], wW[3], wW[0], wW[1], wW[2]), RW.push(CW[0], CW[2], CW[3], CW[0], CW[1], CW[2])
      }
      const JW = [yR / 2, NW / 2, eW / 2],
        PW = YW.reduce(((WW, RW, MW) => WW.concat(RW * JW[MW % 3])), []),
        IW = 0 === WW.sideOrientation ? 0 : WW.sideOrientation || AW.c.DEFAULTSIDE,
        oW = WW.faceUV || new Array(6),
        lW = WW.faceColors,
        FW = [];
      for (let AW = 0; AW < 6; AW++) void 0 === oW[AW] && (oW[AW] = new wW.s(0, 0, 1, 1)), lW && void 0 === lW[AW] && (lW[AW] = new CW.h(1, 1, 1, 1));
      for (let wW = 0; wW < 6; wW++)
        if (zR.push(oW[wW].z, bR.c ? 1 - oW[wW].w : oW[wW].w), zR.push(oW[wW].x, bR.c ? 1 - oW[wW].w : oW[wW].w), zR.push(oW[wW].x, bR.c ? 1 - oW[wW].y : oW[wW].y), zR.push(oW[wW].z, bR.c ? 1 - oW[wW].y : oW[wW].y), lW)
          for (let WW = 0; WW < 4; WW++) FW.push(lW[wW].r, lW[wW].g, lW[wW].b, lW[wW].a);
      AW.c._ComputeSides(IW, PW, RW, MW, zR, WW.frontUVs, WW.backUVs);
      const fW = new AW.c;
      if (fW.indices = RW, fW.positions = PW, fW.normals = MW, fW.uvs = zR, lW) {
        const WW = IW === AW.c.DOUBLESIDE ? FW.concat(FW) : FW;
        fW.colors = WW
      }
      return fW
    }

    function NW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const wW = new zR.b(WW, MW);
      RW.sideOrientation = zR.b._GetDefaultSideOrientation(RW.sideOrientation), wW._originalBuilderSideOrientation = RW.sideOrientation;
      return yR(RW).applyToMesh(wW, RW.updatable), wW
    }
    let eW = !1;
    eW || (eW = !0, AW.c.CreateBox = yR, zR.b.CreateBox = function(WW, RW) {
      return NW(WW, {
        size: RW,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  38045: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => BW
    });
    var wW = MW(35324),
      CW = MW(37993),
      zR = MW(38003),
      AW = MW(38050),
      bR = MW(37722),
      yR = MW(36721);

    function NW(WW) {
      const RW = [],
        MW = [],
        wW = WW.lines,
        CW = WW.colors,
        AW = [];
      let bR = 0;
      for (let zR = 0; zR < wW.length; zR++) {
        const WW = wW[zR];
        for (let wW = 0; wW < WW.length; wW++) {
          const {
            x: yR,
            y: NW,
            z: eW
          } = WW[wW];
          if (MW.push(yR, NW, eW), CW) {
            const WW = CW[zR],
              {
                r: RW,
                g: MW,
                b: bR,
                a: yR
              } = WW[wW];
            AW.push(RW, MW, bR, yR)
          }
          wW > 0 && (RW.push(bR - 1), RW.push(bR)), bR++
        }
      }
      const yR = new zR.c;
      return yR.indices = RW, yR.positions = MW, CW && (yR.colors = AW), yR
    }

    function eW(WW) {
      const RW = WW.dashSize || 3,
        MW = WW.gapSize || 1,
        CW = WW.dashNb || 200,
        AW = WW.points,
        bR = [],
        yR = [],
        NW = wW.q.Zero();
      let eW, BW, tR, TW = 0,
        gR = 0;
      for (tR = 0; tR < AW.length - 1; tR++) AW[tR + 1].subtractToRef(AW[tR], NW), TW += NW.length();
      const iR = TW / CW,
        YW = RW * iR / (RW + MW);
      for (tR = 0; tR < AW.length - 1; tR++) {
        AW[tR + 1].subtractToRef(AW[tR], NW), eW = Math.floor(NW.length() / iR), NW.normalize();
        for (let WW = 0; WW < eW; WW++) BW = iR * WW, bR.push(AW[tR].x + BW * NW.x, AW[tR].y + BW * NW.y, AW[tR].z + BW * NW.z), bR.push(AW[tR].x + (BW + YW) * NW.x, AW[tR].y + (BW + YW) * NW.y, AW[tR].z + (BW + YW) * NW.z), yR.push(gR, gR + 1), gR += 2
      }
      const JW = new zR.c;
      return JW.positions = bR, JW.indices = yR, JW
    }

    function BW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const wW = RW.instance,
        CW = RW.lines,
        zR = RW.colors;
      if (wW) {
        const WW = wW.getVerticesData(bR.j.PositionKind);
        let RW, MW;
        zR && (RW = wW.getVerticesData(bR.j.ColorKind));
        let AW = 0,
          yR = 0;
        for (let wW = 0; wW < CW.length; wW++) {
          const bR = CW[wW];
          for (let CW = 0; CW < bR.length; CW++) WW[AW] = bR[CW].x, WW[AW + 1] = bR[CW].y, WW[AW + 2] = bR[CW].z, zR && RW && (MW = zR[wW], RW[yR] = MW[CW].r, RW[yR + 1] = MW[CW].g, RW[yR + 2] = MW[CW].b, RW[yR + 3] = MW[CW].a, yR += 4), AW += 3
        }
        return wW.updateVerticesData(bR.j.PositionKind, WW, !1, !1), zR && RW && wW.updateVerticesData(bR.j.ColorKind, RW, !1, !1), wW.refreshBoundingInfo(), wW
      }
      const yR = !!zR,
        eW = new AW.e(WW, MW, null, void 0, void 0, yR, RW.useVertexAlpha, RW.material);
      return NW(RW).applyToMesh(eW, RW.updatable), eW
    }

    function tR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const wW = RW.colors ? [RW.colors] : null;
      return BW(WW, {
        lines: [RW.points],
        updatable: RW.updatable,
        instance: RW.instance,
        colors: wW,
        useVertexAlpha: RW.useVertexAlpha,
        material: RW.material
      }, MW)
    }

    function TW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const zR = RW.points,
        bR = RW.instance,
        NW = RW.gapSize || 1,
        BW = RW.dashSize || 3;
      if (bR) {
        const WW = WW => {
          const RW = wW.q.Zero(),
            MW = WW.length / 6;
          let CW, AW, yR, NW, eW = 0,
            BW = 0;
          for (yR = 0; yR < zR.length - 1; yR++) zR[yR + 1].subtractToRef(zR[yR], RW), eW += RW.length();
          const tR = eW / MW,
            TW = bR._creationDataStorage.dashSize,
            gR = TW * tR / (TW + bR._creationDataStorage.gapSize);
          for (yR = 0; yR < zR.length - 1; yR++)
            for (zR[yR + 1].subtractToRef(zR[yR], RW), CW = Math.floor(RW.length() / tR), RW.normalize(), NW = 0; NW < CW && BW < WW.length;) AW = tR * NW, WW[BW] = zR[yR].x + AW * RW.x, WW[BW + 1] = zR[yR].y + AW * RW.y, WW[BW + 2] = zR[yR].z + AW * RW.z, WW[BW + 3] = zR[yR].x + (AW + gR) * RW.x, WW[BW + 4] = zR[yR].y + (AW + gR) * RW.y, WW[BW + 5] = zR[yR].z + (AW + gR) * RW.z, BW += 6, NW++;
          for (; BW < WW.length;) WW[BW] = zR[yR].x, WW[BW + 1] = zR[yR].y, WW[BW + 2] = zR[yR].z, BW += 3
        };
        return (RW.dashNb || RW.dashSize || RW.gapSize || RW.useVertexAlpha || RW.material) && yR.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), bR.updateMeshPositions(WW, !1), bR
      }
      const tR = new AW.e(WW, MW, null, void 0, void 0, void 0, RW.useVertexAlpha, RW.material);
      return eW(RW).applyToMesh(tR, RW.updatable), tR._creationDataStorage = new CW.d, tR._creationDataStorage.dashSize = BW, tR._creationDataStorage.gapSize = NW, tR
    }
    let gR = !1;
    gR || (gR = !0, zR.c.CreateLineSystem = NW, zR.c.CreateDashedLines = eW, CW.b.CreateLines = function(WW, RW) {
      return tR(WW, {
        points: RW,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, CW.b.CreateDashedLines = function(WW, RW, MW, wW, CW) {
      return TW(WW, {
        points: RW,
        dashSize: MW,
        gapSize: wW,
        dashNb: CW,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  38050: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR,
      h: () => iR
    });
    var wW, CW, zR = MW(35376),
      AW = MW(37722),
      bR = MW(37993),
      yR = MW(38054),
      NW = MW(37866),
      eW = MW(38062),
      BW = MW(37470);
    class tR extends bR.b {
      _isShaderMaterial(WW) {
        return !!WW && "ShaderMaterial" === WW.getClassName()
      }
      constructor(WW) {
        let RW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          wW = arguments.length > 5 ? arguments[5] : void 0,
          CW = arguments.length > 6 ? arguments[6] : void 0,
          bR = arguments.length > 7 ? arguments[7] : void 0;
        super(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, RW, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = wW, this.useVertexAlpha = CW, this.color = new zR.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, RW && (this.color = RW.color.clone(), this.alpha = RW.alpha, this.useVertexColor = RW.useVertexColor, this.useVertexAlpha = RW.useVertexAlpha), this.intersectionThreshold = .1;
        const yR = {
          attributes: [AW.j.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? yR.defines.push("#define VERTEXALPHA") : yR.needAlphaBlending = !1, this.useVertexColor ? (yR.defines.push("#define VERTEXCOLOR"), yR.attributes.push(AW.j.ColorKind)) : (yR.uniforms.push("color"), this._color4 = new zR.h), bR) this.material = bR;
        else {
          this.QRW().mC().isWebGPU && !tR.ForceGLSL && (this._shaderLanguage = 1), yR.shaderLanguage = this._shaderLanguage, yR.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([MW.e(314).then((() => MW(39990))), MW.e(320).then((() => MW(39993)))]) : await Promise.all([MW.e(296).then((() => MW(39996))), MW.e(302).then((() => MW(40001)))])
          };
          const WW = new eW.r("colorShader", this.QRW(), "color", yR, !1);
          WW.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(WW)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(WW) {
        const RW = this.material;
        if (RW === WW) return;
        const MW = RW && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(WW), MW && RW?.dispose()
      }
      _setInternalMaterial(WW) {
        this._setMaterial(WW), this.material && (this.material.fillMode = NW.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(WW) {}
      _bind(WW, RW) {
        if (!this._geometry) return this;
        const MW = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(RW, MW) : this._geometry._bind(RW, MW, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: WW,
            g: RW,
            b: MW
          } = this.color;
          this._color4.set(WW, RW, MW, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(WW, RW, MW) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const wW = this.QRW().mC();
        return this._unIndexed ? wW.drawArraysType(NW.e.LineListDrawMode, WW.verticesStart, WW.verticesCount, MW) : wW.drawElementsType(NW.e.LineListDrawMode, WW.indexStart, WW.indexCount, MW), this
      }
      dispose(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || RW) && this.material?.dispose(!1, !1, !0), super.dispose(WW)
      }
      clone(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        if (RW && void 0 === RW._addToSceneRootNodes) {
          const MW = RW;
          return MW.source = this, new tR(WW, this.QRW(), MW.parent, MW.source, MW.doNotCloneChildren)
        }
        return new tR(WW, this.QRW(), RW, this, MW)
      }
      createInstance(WW) {
        const RW = new TW(WW, this);
        if (this.ORW) {
          RW.ORW = {};
          for (const WW in this.ORW) RW.ORW[WW] = this.ORW[WW]
        }
        return RW
      }
      serialize(WW) {
        super.serialize(WW), WW.color = this.color.JNW(), WW.alpha = this.alpha
      }
      static Parse(WW, RW) {
        const MW = new tR(WW.name, RW);
        return MW.color = zR.d.FromArray(WW.color), MW.alpha = WW.alpha, MW
      }
    }
    tR.ForceGLSL = !1;
    class TW extends yR.c {
      constructor(WW, RW) {
        super(WW, RW), this.intersectionThreshold = RW.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let gR = !1;

    function iR() {
      gR || (gR = !0, bR.b._LinesMeshParser = (WW, RW) => tR.Parse(WW, RW))
    }(wW = tR.prototype).enableEdgesRendering ?? (wW.enableEdgesRendering = (0, BW.f)("LinesMesh", "enableEdgesRendering")), (CW = TW.prototype).enableEdgesRendering ?? (CW.enableEdgesRendering = (0, BW.f)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  36716: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(36721);
    const CW = (WW, RW, MW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : MW && "object" === typeof WW ? {
      ...WW
    } : null : WW.clone(RW) : null;
    class zR {
      static DeepCopy(WW, RW, MW, zR) {
        let AW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bR = function(WW) {
          const RW = [];
          do {
            const MW = Object.getOwnPropertyNames(WW);
            for (const WW of MW) - 1 === RW.indexOf(WW) && RW.push(WW)
          } while (WW = Object.getPrototypeOf(WW));
          return RW
        }(WW);
        for (const NW of bR) {
          if ("_" === NW[0] && (!zR || -1 === zR.indexOf(NW))) continue;
          if (NW.endsWith("Observable")) continue;
          if (MW && -1 !== MW.indexOf(NW)) continue;
          const bR = WW[NW],
            eW = typeof bR;
          if ("function" !== eW) try {
            if ("object" === eW)
              if (bR instanceof Uint8Array) RW[NW] = Uint8Array.from(bR);
              else if (bR instanceof Array) {
              if (RW[NW] = [], bR.length > 0)
                if ("object" == typeof bR[0])
                  for (let WW = 0; WW < bR.length; WW++) {
                    const MW = CW(bR[WW], RW, AW); - 1 === RW[NW].indexOf(MW) && RW[NW].push(MW)
                  } else RW[NW] = bR.slice(0)
            } else RW[NW] = CW(bR, RW, AW);
            else RW[NW] = bR
          } catch (yR) {
            wW.b.Warn(yR.message)
          }
        }
      }
    }
  },
  35984: (WW, RW, MW) => {
    function wW() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
        const RW = 16 * Math.random() | 0;
        return ("x" === WW ? RW : 3 & RW | 8).toString(16)
      }))
    }
    MW.d(RW, {
      e: () => wW
    })
  },
  36721: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    class wW {
      static _CheckLimit(WW, RW) {
        let MW = wW._LogLimitOutputs[WW];
        return MW ? MW.current++ : (MW = {
          limit: RW,
          current: 1
        }, wW._LogLimitOutputs[WW] = MW), MW.current <= MW.limit
      }
      static _GenerateLimitMessage(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const MW = wW._LogLimitOutputs[WW];
        if (!MW || !wW.MessageLimitReached) return;
        const CW = this._Levels[RW];
        MW.current === MW.limit && wW[CW.name](wW.MessageLimitReached.replace(/%LIMIT%/g, "" + MW.limit).replace(/%TYPE%/g, CW.name ?? ""))
      }
      static _AddLogEntry(WW) {
        wW._LogCache = WW + wW._LogCache, wW.OnNewCacheEntry && wW.OnNewCacheEntry(WW)
      }
      static _FormatMessage(WW) {
        const RW = WW => WW < 10 ? "0" + WW : "" + WW,
          MW = new Date;
        return "[" + RW(MW.getHours()) + ":" + RW(MW.getMinutes()) + ":" + RW(MW.getSeconds()) + "]: " + WW
      }
      static _LogDisabled(WW, RW) {}
      static _LogEnabled() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        const CW = Array.isArray(RW) ? RW[0] : RW;
        if (void 0 !== MW && !wW._CheckLimit(CW, MW)) return;
        const zR = wW._FormatMessage(CW),
          AW = this._Levels[WW],
          bR = Array.isArray(RW) ? RW.slice(1) : [];
        AW.logFunc && AW.logFunc("BJS - " + zR, ...bR);
        const yR = `<div style='color:${AW.color}'>${zR}</div><br>`;
        wW._AddLogEntry(yR), wW._GenerateLimitMessage(CW, WW)
      }
      static get LogCache() {
        return wW._LogCache
      }
      static ClearLogCache() {
        wW._LogCache = "", wW._LogLimitOutputs = {}, wW.errorsCount = 0
      }
      static set LogLevels(WW) {
        wW.Log = wW._LogDisabled, wW.Warn = wW._LogDisabled, wW.Error = wW._LogDisabled;
        const RW = [wW.MessageLogLevel, wW.WarningLogLevel, wW.ErrorLogLevel];
        for (const MW of RW)
          if ((WW & MW) === MW) {
            const WW = this._Levels[MW];
            wW[WW.name] = wW._LogEnabled.bind(wW, MW)
          }
      }
    }
    wW.NoneLogLevel = 0, wW.MessageLogLevel = 1, wW.WarningLogLevel = 2, wW.ErrorLogLevel = 4, wW.AllLogLevel = 7, wW.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wW._LogCache = "", wW._LogLimitOutputs = {}, wW._Levels = [{}, {
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
    }], wW.errorsCount = 0, wW.Log = wW._LogEnabled.bind(wW, wW.MessageLogLevel), wW.Warn = wW._LogEnabled.bind(wW, wW.WarningLogLevel), wW.Error = wW._LogEnabled.bind(wW, wW.ErrorLogLevel)
  },
  37670: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW.i
    });
    var wW = MW(37677);
    (0, wW.e)()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);