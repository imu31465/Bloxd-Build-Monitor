export const id = 261;
export const ids = [261, 267, 272];
export const modules = {
  41753: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      f: () => LW
    });
    var mW = OW(39911),
      EW = OW(41538),
      NW = OW(41723),
      PW = {};
    class LW {
      constructor(WW) {
        this.attachedToElement = !1, this.attached = {}, this.camera = WW, this.checkInputs = () => {}
      }
      add(WW) {
        const iW = WW.getSimpleName();
        this.attached[iW] ? mW.b.Warn("camera input of type " + iW + " already exists on camera") : (this.attached[iW] = WW, WW.camera = this.camera, WW.checkInputs && (this.checkInputs = this._addCheckInputs(WW.checkInputs.bind(WW))), this.attachedToElement && WW.attachControl(this.noPreventDefault))
      }
      remove(WW) {
        for (const iW in this.attached) {
          const OW = this.attached[iW];
          if (OW === WW) return OW.detachControl(), OW.camera = null, delete this.attached[iW], void this.rebuildInputCheck()
        }
      }
      removeByType(WW) {
        for (const iW in this.attached) {
          const OW = this.attached[iW];
          OW.getClassName() === WW && (OW.detachControl(), OW.camera = null, delete this.attached[iW], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(WW) {
        const iW = this.checkInputs;
        return () => {
          iW(), WW()
        }
      }
      attachInput(WW) {
        this.attachedToElement && WW.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          WW = !NW.e.ForceAttachControlToAlwaysPreventDefault && WW, this.attachedToElement = !0, this.noPreventDefault = WW;
          for (const iW in this.attached) this.attached[iW].attachControl(WW)
        }
      }
      detachElement() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const iW in this.attached) this.attached[iW].detachControl(), WW && (this.attached[iW].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const WW in this.attached) {
          const iW = this.attached[WW];
          iW.checkInputs && (this.checkInputs = this._addCheckInputs(iW.checkInputs.bind(iW)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(WW) {
        const iW = {};
        for (const OW in this.attached) {
          const WW = this.attached[OW],
            mW = EW.d.Serialize(WW);
          iW[WW.getClassName()] = mW
        }
        WW.inputsmgr = iW
      }
      parse(WW) {
        const iW = WW.inputsmgr;
        if (iW) {
          this.clear();
          for (const WW in iW) {
            const OW = PW[WW];
            if (OW) {
              const mW = iW[WW],
                NW = EW.d.Parse((() => new OW), mW, null);
              this.add(NW)
            }
          }
        } else
          for (const OW in this.attached) {
            const iW = PW[this.attached[OW].getClassName()];
            if (iW) {
              const mW = EW.d.Parse((() => new iW), WW, null);
              this.remove(this.attached[OW]), this.add(mW)
            }
          }
      }
    }
  },
  41760: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW.c
    });
    var mW = OW(41765);
    (0, mW.e)()
  },
  41765: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW,
      e: () => xW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(38241),
      PW = OW(38372),
      LW = OW(41773),
      cW = OW(41732),
      wW = OW(38299);
    let tW = (() => {
        var WW;
        let iW, OW, cW = LW.b,
          wW = [],
          tW = [],
          ZW = [],
          xW = [];
        return WW = class extends cW {
          constructor(WW, iW, OW, EW) {
            super(WW, OW, EW), this.groundColor = (0, mW.g)(this, wW, new PW.b(0, 0, 0)), this.direction = ((0, mW.g)(this, tW), (0, mW.g)(this, ZW, void 0)), (0, mW.g)(this, xW), this.direction = iW || NW.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(WW) {
            return this.direction = NW.q.Normalize(WW.subtract(NW.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(WW, iW) {
            const OW = NW.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", OW.x, OW.y, OW.z, 0, iW), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), iW), this
          }
          transferToNodeMaterialEffect(WW, iW) {
            const OW = NW.q.Normalize(this.direction);
            return WW.setFloat3(iW, OW.x, OW.y, OW.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = NW.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return LW.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(WW, iW) {
            WW["HEMILIGHT" + iW] = !0
          }
        }, (() => {
          const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(cW[Symbol.metadata] ?? null) : void 0;
          iW = [(0, EW.n)()], OW = [(0, EW.K)()], (0, mW.e)(null, null, iW, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "groundColor" in WW,
              get: WW => WW.groundColor,
              set: (WW, iW) => {
                WW.groundColor = iW
              }
            },
            metadata: NW
          }, wW, tW), (0, mW.e)(null, null, OW, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: WW => "direction" in WW,
              get: WW => WW.direction,
              set: (WW, iW) => {
                WW.direction = iW
              }
            },
            metadata: NW
          }, ZW, xW), NW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: NW
          })
        })(), WW
      })(),
      ZW = !1;

    function xW() {
      ZW || (ZW = !0, cW.d.AddNodeConstructor("Light_Type_3", ((WW, iW) => () => new tW(WW, NW.q.Zero(), iW))), (0, wW.h)("BABYLON.HemisphericLight", tW))
    }
  },
  38369: (WW, iW, OW) => {
    OW.d(iW, {
      Color3: () => mW.b,
      c: () => mW.d
    });
    var mW = OW(38372);
    (0, mW.f)()
  },
  38937: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    var mW = OW(38939);
    class EW {
      static GetPlanes(WW) {
        const iW = [];
        for (let OW = 0; OW < 6; OW++) iW.push(new mW.c(0, 0, 0, 0));
        return EW.GetPlanesToRef(WW, iW), iW
      }
      static GetNearPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[2], iW.normal.y = OW[7] + OW[6], iW.normal.z = OW[11] + OW[10], iW.d = OW[15] + OW[14], iW.normalize()
      }
      static GetFarPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[2], iW.normal.y = OW[7] - OW[6], iW.normal.z = OW[11] - OW[10], iW.d = OW[15] - OW[14], iW.normalize()
      }
      static GetLeftPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[0], iW.normal.y = OW[7] + OW[4], iW.normal.z = OW[11] + OW[8], iW.d = OW[15] + OW[12], iW.normalize()
      }
      static GetRightPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[0], iW.normal.y = OW[7] - OW[4], iW.normal.z = OW[11] - OW[8], iW.d = OW[15] - OW[12], iW.normalize()
      }
      static GetTopPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[1], iW.normal.y = OW[7] - OW[5], iW.normal.z = OW[11] - OW[9], iW.d = OW[15] - OW[13], iW.normalize()
      }
      static GetBottomPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[1], iW.normal.y = OW[7] + OW[5], iW.normal.z = OW[11] + OW[9], iW.d = OW[15] + OW[13], iW.normalize()
      }
      static GetPlanesToRef(WW, iW) {
        EW.GetNearPlaneToRef(WW, iW[0]), EW.GetFarPlaneToRef(WW, iW[1]), EW.GetLeftPlaneToRef(WW, iW[2]), EW.GetRightPlaneToRef(WW, iW[3]), EW.GetTopPlaneToRef(WW, iW[4]), EW.GetBottomPlaneToRef(WW, iW[5])
      }
      static IsPointInFrustum(WW, iW) {
        for (let OW = 0; OW < 6; OW++)
          if (iW[OW].dotCoordinate(WW) < 0) return !1;
        return !0
      }
    }
  },
  38939: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW
    });
    var mW = OW(38241);
    class EW {
      constructor(WW, iW, OW, EW) {
        this.normal = new mW.q(WW, iW, OW), this.d = EW
      }
      wEW() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new EW(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let iW = 0;
        return 0 !== WW && (iW = 1 / WW), this.normal.x *= iW, this.normal.y *= iW, this.normal.z *= iW, this.d *= iW, this
      }
      transform(WW) {
        const iW = EW._TmpMatrix;
        WW.invertToRef(iW);
        const OW = iW.m,
          mW = this.normal.x,
          NW = this.normal.y,
          PW = this.normal.z,
          LW = this.d,
          cW = mW * OW[0] + NW * OW[1] + PW * OW[2] + LW * OW[3],
          wW = mW * OW[4] + NW * OW[5] + PW * OW[6] + LW * OW[7],
          tW = mW * OW[8] + NW * OW[9] + PW * OW[10] + LW * OW[11],
          ZW = mW * OW[12] + NW * OW[13] + PW * OW[14] + LW * OW[15];
        return new EW(cW, wW, tW, ZW)
      }
      dotCoordinate(WW) {
        return this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z + this.d
      }
      copyFromPoints(WW, iW, OW) {
        const mW = iW.x - WW.x,
          EW = iW.y - WW.y,
          NW = iW.z - WW.z,
          PW = OW.x - WW.x,
          LW = OW.y - WW.y,
          cW = OW.z - WW.z,
          wW = EW * cW - NW * LW,
          tW = NW * PW - mW * cW,
          ZW = mW * LW - EW * PW,
          xW = Math.sqrt(wW * wW + tW * tW + ZW * ZW);
        let lW;
        return lW = 0 !== xW ? 1 / xW : 0, this.normal.x = wW * lW, this.normal.y = tW * lW, this.normal.z = ZW * lW, this.d = -(this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z), this
      }
      isFrontFacingTo(WW, iW) {
        return mW.q.Dot(this.normal, WW) <= iW
      }
      signedDistanceTo(WW) {
        return mW.q.Dot(WW, this.normal) + this.d
      }
      static FromArray(WW) {
        return new EW(WW[0], WW[1], WW[2], WW[3])
      }
      static FromPoints(WW, iW, OW) {
        const mW = new EW(0, 0, 0, 0);
        return mW.copyFromPoints(WW, iW, OW), mW
      }
      static FromPositionAndNormal(WW, iW) {
        const OW = new EW(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(WW, iW, OW)
      }
      static FromPositionAndNormalToRef(WW, iW, OW) {
        return OW.normal.HJ(iW), OW.normal.normalize(), OW.d = -WW.dot(OW.normal), OW
      }
      static SignedDistanceToPlaneFromPositionAndNormal(WW, iW, OW) {
        const EW = -(iW.x * WW.x + iW.y * WW.y + iW.z * WW.z);
        return mW.q.Dot(OW, iW) + EW
      }
    }
    EW._TmpMatrix = mW.d.Identity()
  },
  38235: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      Matrix: () => mW.d,
      Quaternion: () => mW.g,
      RegisterMathVector: () => mW.j,
      TmpVectors: () => mW.l,
      Vector2: () => mW.m,
      fA: () => mW.q,
      Vector4: () => mW.r
    });
    var mW = OW(38241);
    (0, mW.j)()
  },
  39271: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    class mW {
      constructor(WW, iW, OW, mW) {
        this.x = WW, this.y = iW, this.width = OW, this.height = mW
      }
      toGlobal(WW, iW) {
        return new mW(this.x * WW, this.y * iW, this.width * WW, this.height * iW)
      }
      toGlobalToRef(WW, iW, OW) {
        return OW.x = this.x * WW, OW.y = this.y * iW, OW.width = this.width * WW, OW.height = this.height * iW, this
      }
      clone() {
        return new mW(this.x, this.y, this.width, this.height)
      }
    }
  },
  41916: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW
    });
    var mW = OW(38241),
      EW = OW(38372),
      NW = OW(41919),
      PW = OW(41927),
      LW = OW(41940);

    function cW(WW) {
      let iW = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const OW = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        NW = [],
        cW = WW.width || WW.size || 1,
        wW = WW.height || WW.size || 1,
        tW = WW.depth || WW.size || 1,
        ZW = WW.wrap || !1;
      let xW = void 0 === WW.topBaseAt ? 1 : WW.topBaseAt,
        lW = void 0 === WW.bottomBaseAt ? 0 : WW.bottomBaseAt;
      xW = (xW + 4) % 4, lW = (lW + 4) % 4;
      let AW = [2, 0, 3, 1][xW],
        bW = [2, 0, 1, 3][lW],
        jW = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (ZW) {
        iW = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], jW = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let WW = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          OW = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const mW = [17, 18, 19, 16],
          EW = [22, 23, 20, 21];
        for (; AW > 0;) WW.unshift(WW.pop()), mW.unshift(mW.pop()), AW--;
        for (; bW > 0;) OW.unshift(OW.pop()), EW.unshift(EW.pop()), bW--;
        WW = WW.flat(), OW = OW.flat(), jW = jW.concat(WW).concat(OW), iW.push(mW[0], mW[2], mW[3], mW[0], mW[1], mW[2]), iW.push(EW[0], EW[2], EW[3], EW[0], EW[1], EW[2])
      }
      const UW = [cW / 2, wW / 2, tW / 2],
        kW = jW.reduce(((WW, iW, OW) => WW.concat(iW * UW[OW % 3])), []),
        sW = 0 === WW.sideOrientation ? 0 : WW.sideOrientation || PW.c.DEFAULTSIDE,
        MW = WW.faceUV || new Array(6),
        KW = WW.faceColors,
        SW = [];
      for (let PW = 0; PW < 6; PW++) void 0 === MW[PW] && (MW[PW] = new mW.r(0, 0, 1, 1)), KW && void 0 === KW[PW] && (KW[PW] = new EW.d(1, 1, 1, 1));
      for (let mW = 0; mW < 6; mW++)
        if (NW.push(MW[mW].z, LW.b ? 1 - MW[mW].w : MW[mW].w), NW.push(MW[mW].x, LW.b ? 1 - MW[mW].w : MW[mW].w), NW.push(MW[mW].x, LW.b ? 1 - MW[mW].y : MW[mW].y), NW.push(MW[mW].z, LW.b ? 1 - MW[mW].y : MW[mW].y), KW)
          for (let WW = 0; WW < 4; WW++) SW.push(KW[mW].r, KW[mW].g, KW[mW].b, KW[mW].a);
      PW.c._ComputeSides(sW, kW, iW, OW, NW, WW.frontUVs, WW.backUVs);
      const YW = new PW.c;
      if (YW.indices = iW, YW.positions = kW, YW.normals = OW, YW.uvs = NW, KW) {
        const WW = sW === PW.c.DOUBLESIDE ? SW.concat(SW) : SW;
        YW.colors = WW
      }
      return YW
    }

    function wW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const mW = new NW.e(WW, OW);
      iW.sideOrientation = NW.e._GetDefaultSideOrientation(iW.sideOrientation), mW._originalBuilderSideOrientation = iW.sideOrientation;
      return cW(iW).applyToMesh(mW, iW.updatable), mW
    }
    let tW = !1;
    tW || (tW = !0, PW.c.CreateBox = cW, NW.e.CreateBox = function(WW, iW) {
      return wW(WW, {
        size: iW,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  41966: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => ZW
    });
    var mW = OW(38241),
      EW = OW(41919),
      NW = OW(41927),
      PW = OW(41969),
      LW = OW(41660),
      cW = OW(39911);

    function wW(WW) {
      const iW = [],
        OW = [],
        mW = WW.lines,
        EW = WW.colors,
        PW = [];
      let LW = 0;
      for (let NW = 0; NW < mW.length; NW++) {
        const WW = mW[NW];
        for (let mW = 0; mW < WW.length; mW++) {
          const {
            x: cW,
            y: wW,
            z: tW
          } = WW[mW];
          if (OW.push(cW, wW, tW), EW) {
            const WW = EW[NW],
              {
                r: iW,
                g: OW,
                b: LW,
                a: cW
              } = WW[mW];
            PW.push(iW, OW, LW, cW)
          }
          mW > 0 && (iW.push(LW - 1), iW.push(LW)), LW++
        }
      }
      const cW = new NW.c;
      return cW.indices = iW, cW.positions = OW, EW && (cW.colors = PW), cW
    }

    function tW(WW) {
      const iW = WW.dashSize || 3,
        OW = WW.gapSize || 1,
        EW = WW.dashNb || 200,
        PW = WW.points,
        LW = [],
        cW = [],
        wW = mW.q.Zero();
      let tW, ZW, xW, lW = 0,
        AW = 0;
      for (xW = 0; xW < PW.length - 1; xW++) PW[xW + 1].subtractToRef(PW[xW], wW), lW += wW.length();
      const bW = lW / EW,
        jW = iW * bW / (iW + OW);
      for (xW = 0; xW < PW.length - 1; xW++) {
        PW[xW + 1].subtractToRef(PW[xW], wW), tW = Math.floor(wW.length() / bW), wW.normalize();
        for (let WW = 0; WW < tW; WW++) ZW = bW * WW, LW.push(PW[xW].x + ZW * wW.x, PW[xW].y + ZW * wW.y, PW[xW].z + ZW * wW.z), LW.push(PW[xW].x + (ZW + jW) * wW.x, PW[xW].y + (ZW + jW) * wW.y, PW[xW].z + (ZW + jW) * wW.z), cW.push(AW, AW + 1), AW += 2
      }
      const UW = new NW.c;
      return UW.positions = LW, UW.indices = cW, UW
    }

    function ZW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const mW = iW.instance,
        EW = iW.lines,
        NW = iW.colors;
      if (mW) {
        const WW = mW.getVerticesData(LW.k.PositionKind);
        let iW, OW;
        NW && (iW = mW.getVerticesData(LW.k.ColorKind));
        let PW = 0,
          cW = 0;
        for (let mW = 0; mW < EW.length; mW++) {
          const LW = EW[mW];
          for (let EW = 0; EW < LW.length; EW++) WW[PW] = LW[EW].x, WW[PW + 1] = LW[EW].y, WW[PW + 2] = LW[EW].z, NW && iW && (OW = NW[mW], iW[cW] = OW[EW].r, iW[cW + 1] = OW[EW].g, iW[cW + 2] = OW[EW].b, iW[cW + 3] = OW[EW].a, cW += 4), PW += 3
        }
        return mW.updateVerticesData(LW.k.PositionKind, WW, !1, !1), NW && iW && mW.updateVerticesData(LW.k.ColorKind, iW, !1, !1), mW.refreshBoundingInfo(), mW
      }
      const cW = !!NW,
        tW = new PW.c(WW, OW, null, void 0, void 0, cW, iW.useVertexAlpha, iW.material);
      return wW(iW).applyToMesh(tW, iW.updatable), tW
    }

    function xW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const mW = iW.colors ? [iW.colors] : null;
      return ZW(WW, {
        lines: [iW.points],
        updatable: iW.updatable,
        instance: iW.instance,
        colors: mW,
        useVertexAlpha: iW.useVertexAlpha,
        material: iW.material
      }, OW)
    }

    function lW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const NW = iW.points,
        LW = iW.instance,
        wW = iW.gapSize || 1,
        ZW = iW.dashSize || 3;
      if (LW) {
        const WW = WW => {
          const iW = mW.q.Zero(),
            OW = WW.length / 6;
          let EW, PW, cW, wW, tW = 0,
            ZW = 0;
          for (cW = 0; cW < NW.length - 1; cW++) NW[cW + 1].subtractToRef(NW[cW], iW), tW += iW.length();
          const xW = tW / OW,
            lW = LW._creationDataStorage.dashSize,
            AW = lW * xW / (lW + LW._creationDataStorage.gapSize);
          for (cW = 0; cW < NW.length - 1; cW++)
            for (NW[cW + 1].subtractToRef(NW[cW], iW), EW = Math.floor(iW.length() / xW), iW.normalize(), wW = 0; wW < EW && ZW < WW.length;) PW = xW * wW, WW[ZW] = NW[cW].x + PW * iW.x, WW[ZW + 1] = NW[cW].y + PW * iW.y, WW[ZW + 2] = NW[cW].z + PW * iW.z, WW[ZW + 3] = NW[cW].x + (PW + AW) * iW.x, WW[ZW + 4] = NW[cW].y + (PW + AW) * iW.y, WW[ZW + 5] = NW[cW].z + (PW + AW) * iW.z, ZW += 6, wW++;
          for (; ZW < WW.length;) WW[ZW] = NW[cW].x, WW[ZW + 1] = NW[cW].y, WW[ZW + 2] = NW[cW].z, ZW += 3
        };
        return (iW.dashNb || iW.dashSize || iW.gapSize || iW.useVertexAlpha || iW.material) && cW.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), LW.updateMeshPositions(WW, !1), LW
      }
      const xW = new PW.c(WW, OW, null, void 0, void 0, void 0, iW.useVertexAlpha, iW.material);
      return tW(iW).applyToMesh(xW, iW.updatable), xW._creationDataStorage = new EW.j, xW._creationDataStorage.dashSize = ZW, xW._creationDataStorage.gapSize = wW, xW
    }
    let AW = !1;
    AW || (AW = !0, NW.c.CreateLineSystem = wW, NW.c.CreateDashedLines = tW, EW.e.CreateLines = function(WW, iW) {
      return xW(WW, {
        points: iW,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, EW.e.CreateDashedLines = function(WW, iW, OW, mW, EW) {
      return lW(WW, {
        points: iW,
        dashSize: OW,
        gapSize: mW,
        dashNb: EW,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  41969: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => xW,
      d: () => bW
    });
    var mW, EW, NW = OW(38372),
      PW = OW(41660),
      LW = OW(41919),
      cW = OW(41976),
      wW = OW(41805),
      tW = OW(41985),
      ZW = OW(41415);
    class xW extends LW.e {
      _isShaderMaterial(WW) {
        return !!WW && "ShaderMaterial" === WW.getClassName()
      }
      constructor(WW) {
        let iW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          mW = arguments.length > 5 ? arguments[5] : void 0,
          EW = arguments.length > 6 ? arguments[6] : void 0,
          LW = arguments.length > 7 ? arguments[7] : void 0;
        super(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, iW, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = mW, this.useVertexAlpha = EW, this.color = new NW.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, iW && (this.color = iW.color.clone(), this.alpha = iW.alpha, this.useVertexColor = iW.useVertexColor, this.useVertexAlpha = iW.useVertexAlpha), this.intersectionThreshold = .1;
        const cW = {
          attributes: [PW.k.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? cW.defines.push("#define VERTEXALPHA") : cW.needAlphaBlending = !1, this.useVertexColor ? (cW.defines.push("#define VERTEXCOLOR"), cW.attributes.push(PW.k.ColorKind)) : (cW.uniforms.push("color"), this._color4 = new NW.d), LW) this.material = LW;
        else {
          this.bD().VA().isWebGPU && !xW.ForceGLSL && (this._shaderLanguage = 1), cW.shaderLanguage = this._shaderLanguage, cW.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([OW.e(662).then((() => OW(54717))), OW.e(668).then((() => OW(54719)))]) : await Promise.all([OW.e(644).then((() => OW(54721))), OW.e(650).then((() => OW(54726)))])
          };
          const WW = new tW.o("colorShader", this.bD(), "color", cW, !1);
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
        const iW = this.material;
        if (iW === WW) return;
        const OW = iW && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(WW), OW && iW?.dispose()
      }
      _setInternalMaterial(WW) {
        this._setMaterial(WW), this.material && (this.material.fillMode = wW.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(WW) {}
      _bind(WW, iW) {
        if (!this._geometry) return this;
        const OW = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(iW, OW) : this._geometry._bind(iW, OW, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: WW,
            g: iW,
            b: OW
          } = this.color;
          this._color4.set(WW, iW, OW, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(WW, iW, OW) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const mW = this.bD().VA();
        return this._unIndexed ? mW.drawArraysType(wW.d.LineListDrawMode, WW.verticesStart, WW.verticesCount, OW) : mW.drawElementsType(wW.d.LineListDrawMode, WW.indexStart, WW.indexCount, OW), this
      }
      dispose(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || iW) && this.material?.dispose(!1, !1, !0), super.dispose(WW)
      }
      clone(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        if (iW && void 0 === iW._addToSceneRootNodes) {
          const OW = iW;
          return OW.source = this, new xW(WW, this.bD(), OW.parent, OW.source, OW.doNotCloneChildren)
        }
        return new xW(WW, this.bD(), iW, this, OW)
      }
      createInstance(WW) {
        const iW = new lW(WW, this);
        if (this.bV) {
          iW.bV = {};
          for (const WW in this.bV) iW.bV[WW] = this.bV[WW]
        }
        return iW
      }
      serialize(WW) {
        super.serialize(WW), WW.color = this.color.wEW(), WW.alpha = this.alpha
      }
      static Parse(WW, iW) {
        const OW = new xW(WW.name, iW);
        return OW.color = NW.b.FromArray(WW.color), OW.alpha = WW.alpha, OW
      }
    }
    xW.ForceGLSL = !1;
    class lW extends cW.e {
      constructor(WW, iW) {
        super(WW, iW), this.intersectionThreshold = iW.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let AW = !1;

    function bW() {
      AW || (AW = !0, LW.e._LinesMeshParser = (WW, iW) => xW.Parse(WW, iW))
    }(mW = xW.prototype).enableEdgesRendering ?? (mW.enableEdgesRendering = (0, ZW.k)("LinesMesh", "enableEdgesRendering")), (EW = lW.prototype).enableEdgesRendering ?? (EW.enableEdgesRendering = (0, ZW.k)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  39908: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(39911);
    const EW = (WW, iW, OW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : OW && "object" === typeof WW ? {
      ...WW
    } : null : WW.clone(iW) : null;
    class NW {
      static DeepCopy(WW, iW, OW, NW) {
        let PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const LW = function(WW) {
          const iW = [];
          do {
            const OW = Object.getOwnPropertyNames(WW);
            for (const WW of OW) - 1 === iW.indexOf(WW) && iW.push(WW)
          } while (WW = Object.getPrototypeOf(WW));
          return iW
        }(WW);
        for (const wW of LW) {
          if ("_" === wW[0] && (!NW || -1 === NW.indexOf(wW))) continue;
          if (wW.endsWith("Observable")) continue;
          if (OW && -1 !== OW.indexOf(wW)) continue;
          const LW = WW[wW],
            tW = typeof LW;
          if ("function" !== tW) try {
            if ("object" === tW)
              if (LW instanceof Uint8Array) iW[wW] = Uint8Array.from(LW);
              else if (LW instanceof Array) {
              if (iW[wW] = [], LW.length > 0)
                if ("object" == typeof LW[0])
                  for (let WW = 0; WW < LW.length; WW++) {
                    const OW = EW(LW[WW], iW, PW); - 1 === iW[wW].indexOf(OW) && iW[wW].push(OW)
                  } else iW[wW] = LW.slice(0)
            } else iW[wW] = EW(LW, iW, PW);
            else iW[wW] = LW
          } catch (cW) {
            mW.b.Warn(cW.message)
          }
        }
      }
    }
  },
  39088: (WW, iW, OW) => {
    function mW() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
        const iW = 16 * Math.random() | 0;
        return ("x" === WW ? iW : 3 & iW | 8).toString(16)
      }))
    }
    OW.d(iW, {
      b: () => mW
    })
  },
  39911: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW
    });
    class mW {
      static _CheckLimit(WW, iW) {
        let OW = mW._LogLimitOutputs[WW];
        return OW ? OW.current++ : (OW = {
          limit: iW,
          current: 1
        }, mW._LogLimitOutputs[WW] = OW), OW.current <= OW.limit
      }
      static _GenerateLimitMessage(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const OW = mW._LogLimitOutputs[WW];
        if (!OW || !mW.MessageLimitReached) return;
        const EW = this._Levels[iW];
        OW.current === OW.limit && mW[EW.name](mW.MessageLimitReached.replace(/%LIMIT%/g, "" + OW.limit).replace(/%TYPE%/g, EW.name ?? ""))
      }
      static _AddLogEntry(WW) {
        mW._LogCache = WW + mW._LogCache, mW.OnNewCacheEntry && mW.OnNewCacheEntry(WW)
      }
      static _FormatMessage(WW) {
        const iW = WW => WW < 10 ? "0" + WW : "" + WW,
          OW = new Date;
        return "[" + iW(OW.getHours()) + ":" + iW(OW.getMinutes()) + ":" + iW(OW.getSeconds()) + "]: " + WW
      }
      static _LogDisabled(WW, iW) {}
      static _LogEnabled() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const EW = Array.isArray(iW) ? iW[0] : iW;
        if (void 0 !== OW && !mW._CheckLimit(EW, OW)) return;
        const NW = mW._FormatMessage(EW),
          PW = this._Levels[WW],
          LW = Array.isArray(iW) ? iW.slice(1) : [];
        PW.logFunc && PW.logFunc("BJS - " + NW, ...LW);
        const cW = `<div style='color:${PW.color}'>${NW}</div><br>`;
        mW._AddLogEntry(cW), mW._GenerateLimitMessage(EW, WW)
      }
      static get LogCache() {
        return mW._LogCache
      }
      static ClearLogCache() {
        mW._LogCache = "", mW._LogLimitOutputs = {}, mW.errorsCount = 0
      }
      static set LogLevels(WW) {
        mW.Log = mW._LogDisabled, mW.Warn = mW._LogDisabled, mW.Error = mW._LogDisabled;
        const iW = [mW.MessageLogLevel, mW.WarningLogLevel, mW.ErrorLogLevel];
        for (const OW of iW)
          if ((WW & OW) === OW) {
            const WW = this._Levels[OW];
            mW[WW.name] = mW._LogEnabled.bind(mW, OW)
          }
      }
    }
    mW.NoneLogLevel = 0, mW.MessageLogLevel = 1, mW.WarningLogLevel = 2, mW.ErrorLogLevel = 4, mW.AllLogLevel = 7, mW.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", mW._LogCache = "", mW._LogLimitOutputs = {}, mW._Levels = [{}, {
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
    }], mW.errorsCount = 0, mW.Log = mW._LogEnabled.bind(mW, mW.MessageLogLevel), mW.Warn = mW._LogEnabled.bind(mW, mW.WarningLogLevel), mW.Error = mW._LogEnabled.bind(mW, mW.ErrorLogLevel)
  },
  41604: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW.i
    });
    var mW = OW(41612);
    (0, mW.e)()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);