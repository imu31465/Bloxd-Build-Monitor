export const id = 234;
export const ids = [234, 241, 244];
export const modules = {
  40354: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      g: () => nT
    });
    var WT = mT(38800),
      zT = mT(40122),
      MT = mT(40330),
      gT = {};
    class nT {
      constructor(TT) {
        this.attachedToElement = !1, this.attached = {}, this.camera = TT, this.checkInputs = () => {}
      }
      add(TT) {
        const UT = TT.getSimpleName();
        this.attached[UT] ? WT.b.Warn("camera input of type " + UT + " already exists on camera") : (this.attached[UT] = TT, TT.camera = this.camera, TT.checkInputs && (this.checkInputs = this._addCheckInputs(TT.checkInputs.bind(TT))), this.attachedToElement && TT.attachControl(this.noPreventDefault))
      }
      remove(TT) {
        for (const UT in this.attached) {
          const mT = this.attached[UT];
          if (mT === TT) return mT.detachControl(), mT.camera = null, delete this.attached[UT], void this.rebuildInputCheck()
        }
      }
      removeByType(TT) {
        for (const UT in this.attached) {
          const mT = this.attached[UT];
          mT.getClassName() === TT && (mT.detachControl(), mT.camera = null, delete this.attached[UT], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(TT) {
        const UT = this.checkInputs;
        return () => {
          UT(), TT()
        }
      }
      attachInput(TT) {
        this.attachedToElement && TT.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          TT = !MT.b.ForceAttachControlToAlwaysPreventDefault && TT, this.attachedToElement = !0, this.noPreventDefault = TT;
          for (const UT in this.attached) this.attached[UT].attachControl(TT)
        }
      }
      detachElement() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const UT in this.attached) this.attached[UT].detachControl(), TT && (this.attached[UT].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const TT in this.attached) {
          const UT = this.attached[TT];
          UT.checkInputs && (this.checkInputs = this._addCheckInputs(UT.checkInputs.bind(UT)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(TT) {
        const UT = {};
        for (const mT in this.attached) {
          const TT = this.attached[mT],
            WT = zT.e.Serialize(TT);
          UT[TT.getClassName()] = WT
        }
        TT.inputsmgr = UT
      }
      parse(TT) {
        const UT = TT.inputsmgr;
        if (UT) {
          this.clear();
          for (const TT in UT) {
            const mT = gT[TT];
            if (mT) {
              const WT = UT[TT],
                MT = zT.e.Parse((() => new mT), WT, null);
              this.add(MT)
            }
          }
        } else
          for (const mT in this.attached) {
            const UT = gT[this.attached[mT].getClassName()];
            if (UT) {
              const WT = zT.e.Parse((() => new UT), TT, null);
              this.remove(this.attached[mT]), this.add(WT)
            }
          }
      }
    }
  },
  40362: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT.d
    });
    var WT = mT(40369);
    (0, WT.e)()
  },
  40369: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => jT,
      e: () => LT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(37188),
      gT = mT(37367),
      nT = mT(40373),
      HT = mT(40335),
      kT = mT(37239);
    let jT = (() => {
        var TT;
        let UT, mT, HT = nT.e,
          kT = [],
          jT = [],
          lT = [],
          LT = [];
        return TT = class extends HT {
          constructor(TT, UT, mT, zT) {
            super(TT, mT, zT), this.groundColor = (0, WT.k)(this, kT, new gT.d(0, 0, 0)), this.direction = ((0, WT.k)(this, jT), (0, WT.k)(this, lT, void 0)), (0, WT.k)(this, LT), this.direction = UT || MT.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(TT) {
            return this.direction = MT.p.Normalize(TT.subtract(MT.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(TT, UT) {
            const mT = MT.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", mT.x, mT.y, mT.z, 0, UT), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), UT), this
          }
          transferToNodeMaterialEffect(TT, UT) {
            const mT = MT.p.Normalize(this.direction);
            return TT.setFloat3(UT, mT.x, mT.y, mT.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = MT.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return nT.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(TT, UT) {
            TT["HEMILIGHT" + UT] = !0
          }
        }, (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(HT[Symbol.metadata] ?? null) : void 0;
          UT = [(0, zT.l)()], mT = [(0, zT.J)()], (0, WT.h)(null, null, UT, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "groundColor" in TT,
              get: TT => TT.groundColor,
              set: (TT, UT) => {
                TT.groundColor = UT
              }
            },
            metadata: MT
          }, kT, jT), (0, WT.h)(null, null, mT, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: TT => "direction" in TT,
              get: TT => TT.direction,
              set: (TT, UT) => {
                TT.direction = UT
              }
            },
            metadata: MT
          }, lT, LT), MT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          })
        })(), TT
      })(),
      lT = !1;

    function LT() {
      lT || (lT = !0, HT.d.AddNodeConstructor("Light_Type_3", ((TT, UT) => () => new jT(TT, MT.p.Zero(), UT))), (0, kT.h)("BABYLON.HemisphericLight", jT))
    }
  },
  37364: (TT, UT, mT) => {
    mT.d(UT, {
      Color3: () => WT.d,
      e: () => WT.g
    });
    var WT = mT(37367);
    (0, WT.k)()
  },
  37885: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT
    });
    var WT = mT(37889);
    class zT {
      static GetPlanes(TT) {
        const UT = [];
        for (let mT = 0; mT < 6; mT++) UT.push(new WT.e(0, 0, 0, 0));
        return zT.GetPlanesToRef(TT, UT), UT
      }
      static GetNearPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[2], UT.normal.y = mT[7] + mT[6], UT.normal.z = mT[11] + mT[10], UT.d = mT[15] + mT[14], UT.normalize()
      }
      static GetFarPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[2], UT.normal.y = mT[7] - mT[6], UT.normal.z = mT[11] - mT[10], UT.d = mT[15] - mT[14], UT.normalize()
      }
      static GetLeftPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[0], UT.normal.y = mT[7] + mT[4], UT.normal.z = mT[11] + mT[8], UT.d = mT[15] + mT[12], UT.normalize()
      }
      static GetRightPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[0], UT.normal.y = mT[7] - mT[4], UT.normal.z = mT[11] - mT[8], UT.d = mT[15] - mT[12], UT.normalize()
      }
      static GetTopPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[1], UT.normal.y = mT[7] - mT[5], UT.normal.z = mT[11] - mT[9], UT.d = mT[15] - mT[13], UT.normalize()
      }
      static GetBottomPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[1], UT.normal.y = mT[7] + mT[5], UT.normal.z = mT[11] + mT[9], UT.d = mT[15] + mT[13], UT.normalize()
      }
      static GetPlanesToRef(TT, UT) {
        zT.GetNearPlaneToRef(TT, UT[0]), zT.GetFarPlaneToRef(TT, UT[1]), zT.GetLeftPlaneToRef(TT, UT[2]), zT.GetRightPlaneToRef(TT, UT[3]), zT.GetTopPlaneToRef(TT, UT[4]), zT.GetBottomPlaneToRef(TT, UT[5])
      }
      static IsPointInFrustum(TT, UT) {
        for (let mT = 0; mT < 6; mT++)
          if (UT[mT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  37889: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    var WT = mT(37188);
    class zT {
      constructor(TT, UT, mT, zT) {
        this.normal = new WT.p(TT, UT, mT), this.d = zT
      }
      cWT() {
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
        let UT = 0;
        return 0 !== TT && (UT = 1 / TT), this.normal.x *= UT, this.normal.y *= UT, this.normal.z *= UT, this.d *= UT, this
      }
      transform(TT) {
        const UT = zT._TmpMatrix;
        TT.invertToRef(UT);
        const mT = UT.m,
          WT = this.normal.x,
          MT = this.normal.y,
          gT = this.normal.z,
          nT = this.d,
          HT = WT * mT[0] + MT * mT[1] + gT * mT[2] + nT * mT[3],
          kT = WT * mT[4] + MT * mT[5] + gT * mT[6] + nT * mT[7],
          jT = WT * mT[8] + MT * mT[9] + gT * mT[10] + nT * mT[11],
          lT = WT * mT[12] + MT * mT[13] + gT * mT[14] + nT * mT[15];
        return new zT(HT, kT, jT, lT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, UT, mT) {
        const WT = UT.x - TT.x,
          zT = UT.y - TT.y,
          MT = UT.z - TT.z,
          gT = mT.x - TT.x,
          nT = mT.y - TT.y,
          HT = mT.z - TT.z,
          kT = zT * HT - MT * nT,
          jT = MT * gT - WT * HT,
          lT = WT * nT - zT * gT,
          LT = Math.sqrt(kT * kT + jT * jT + lT * lT);
        let pT;
        return pT = 0 !== LT ? 1 / LT : 0, this.normal.x = kT * pT, this.normal.y = jT * pT, this.normal.z = lT * pT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, UT) {
        return WT.p.Dot(this.normal, TT) <= UT
      }
      signedDistanceTo(TT) {
        return WT.p.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new zT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, UT, mT) {
        const WT = new zT(0, 0, 0, 0);
        return WT.copyFromPoints(TT, UT, mT), WT
      }
      static FromPositionAndNormal(TT, UT) {
        const mT = new zT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, UT, mT)
      }
      static FromPositionAndNormalToRef(TT, UT, mT) {
        return mT.normal.Gw(UT), mT.normal.normalize(), mT.d = -TT.dot(mT.normal), mT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, UT, mT) {
        const zT = -(UT.x * TT.x + UT.y * TT.y + UT.z * TT.z);
        return WT.p.Dot(mT, UT) + zT
      }
    }
    zT._TmpMatrix = WT.e.Identity()
  },
  37185: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      Matrix: () => WT.e,
      Quaternion: () => WT.f,
      RegisterMathVector: () => WT.j,
      TmpVectors: () => WT.l,
      Vector2: () => WT.o,
      JB: () => WT.p,
      Vector4: () => WT.t
    });
    var WT = mT(37188);
    (0, WT.j)()
  },
  38229: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    class WT {
      constructor(TT, UT, mT, WT) {
        this.x = TT, this.y = UT, this.width = mT, this.height = WT
      }
      toGlobal(TT, UT) {
        return new WT(this.x * TT, this.y * UT, this.width * TT, this.height * UT)
      }
      toGlobalToRef(TT, UT, mT) {
        return mT.x = this.x * TT, mT.y = this.y * UT, mT.width = this.width * TT, mT.height = this.height * UT, this
      }
      clone() {
        return new WT(this.x, this.y, this.width, this.height)
      }
    }
  },
  40526: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => kT
    });
    var WT = mT(37188),
      zT = mT(37367),
      MT = mT(40535),
      gT = mT(40546),
      nT = mT(40564);

    function HT(TT) {
      let UT = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const mT = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        MT = [],
        HT = TT.width || TT.size || 1,
        kT = TT.height || TT.size || 1,
        jT = TT.depth || TT.size || 1,
        lT = TT.wrap || !1;
      let LT = void 0 === TT.topBaseAt ? 1 : TT.topBaseAt,
        pT = void 0 === TT.bottomBaseAt ? 0 : TT.bottomBaseAt;
      LT = (LT + 4) % 4, pT = (pT + 4) % 4;
      let BT = [2, 0, 3, 1][LT],
        ZT = [2, 0, 1, 3][pT],
        cT = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (lT) {
        UT = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], cT = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let TT = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          mT = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const WT = [17, 18, 19, 16],
          zT = [22, 23, 20, 21];
        for (; BT > 0;) TT.unshift(TT.pop()), WT.unshift(WT.pop()), BT--;
        for (; ZT > 0;) mT.unshift(mT.pop()), zT.unshift(zT.pop()), ZT--;
        TT = TT.flat(), mT = mT.flat(), cT = cT.concat(TT).concat(mT), UT.push(WT[0], WT[2], WT[3], WT[0], WT[1], WT[2]), UT.push(zT[0], zT[2], zT[3], zT[0], zT[1], zT[2])
      }
      const vT = [HT / 2, kT / 2, jT / 2],
        fT = cT.reduce(((TT, UT, mT) => TT.concat(UT * vT[mT % 3])), []),
        qT = 0 === TT.sideOrientation ? 0 : TT.sideOrientation || gT.d.DEFAULTSIDE,
        iT = TT.faceUV || new Array(6),
        bT = TT.faceColors,
        OT = [];
      for (let gT = 0; gT < 6; gT++) void 0 === iT[gT] && (iT[gT] = new WT.t(0, 0, 1, 1)), bT && void 0 === bT[gT] && (bT[gT] = new zT.g(1, 1, 1, 1));
      for (let WT = 0; WT < 6; WT++)
        if (MT.push(iT[WT].z, nT.c ? 1 - iT[WT].w : iT[WT].w), MT.push(iT[WT].x, nT.c ? 1 - iT[WT].w : iT[WT].w), MT.push(iT[WT].x, nT.c ? 1 - iT[WT].y : iT[WT].y), MT.push(iT[WT].z, nT.c ? 1 - iT[WT].y : iT[WT].y), bT)
          for (let TT = 0; TT < 4; TT++) OT.push(bT[WT].r, bT[WT].g, bT[WT].b, bT[WT].a);
      gT.d._ComputeSides(qT, fT, UT, mT, MT, TT.frontUVs, TT.backUVs);
      const eT = new gT.d;
      if (eT.indices = UT, eT.positions = fT, eT.normals = mT, eT.uvs = MT, bT) {
        const TT = qT === gT.d.DOUBLESIDE ? OT.concat(OT) : OT;
        eT.colors = TT
      }
      return eT
    }

    function kT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const WT = new MT.d(TT, mT);
      UT.sideOrientation = MT.d._GetDefaultSideOrientation(UT.sideOrientation), WT._originalBuilderSideOrientation = UT.sideOrientation;
      return HT(UT).applyToMesh(WT, UT.updatable), WT
    }
    let jT = !1;
    jT || (jT = !0, gT.d.CreateBox = HT, MT.d.CreateBox = function(TT, UT) {
      return kT(TT, {
        size: UT,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40574: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => lT
    });
    var WT = mT(37188),
      zT = mT(40535),
      MT = mT(40546),
      gT = mT(40576),
      nT = mT(40257),
      HT = mT(38800);

    function kT(TT) {
      const UT = [],
        mT = [],
        WT = TT.lines,
        zT = TT.colors,
        gT = [];
      let nT = 0;
      for (let MT = 0; MT < WT.length; MT++) {
        const TT = WT[MT];
        for (let WT = 0; WT < TT.length; WT++) {
          const {
            x: HT,
            y: kT,
            z: jT
          } = TT[WT];
          if (mT.push(HT, kT, jT), zT) {
            const TT = zT[MT],
              {
                r: UT,
                g: mT,
                b: nT,
                a: HT
              } = TT[WT];
            gT.push(UT, mT, nT, HT)
          }
          WT > 0 && (UT.push(nT - 1), UT.push(nT)), nT++
        }
      }
      const HT = new MT.d;
      return HT.indices = UT, HT.positions = mT, zT && (HT.colors = gT), HT
    }

    function jT(TT) {
      const UT = TT.dashSize || 3,
        mT = TT.gapSize || 1,
        zT = TT.dashNb || 200,
        gT = TT.points,
        nT = [],
        HT = [],
        kT = WT.p.Zero();
      let jT, lT, LT, pT = 0,
        BT = 0;
      for (LT = 0; LT < gT.length - 1; LT++) gT[LT + 1].subtractToRef(gT[LT], kT), pT += kT.length();
      const ZT = pT / zT,
        cT = UT * ZT / (UT + mT);
      for (LT = 0; LT < gT.length - 1; LT++) {
        gT[LT + 1].subtractToRef(gT[LT], kT), jT = Math.floor(kT.length() / ZT), kT.normalize();
        for (let TT = 0; TT < jT; TT++) lT = ZT * TT, nT.push(gT[LT].x + lT * kT.x, gT[LT].y + lT * kT.y, gT[LT].z + lT * kT.z), nT.push(gT[LT].x + (lT + cT) * kT.x, gT[LT].y + (lT + cT) * kT.y, gT[LT].z + (lT + cT) * kT.z), HT.push(BT, BT + 1), BT += 2
      }
      const vT = new MT.d;
      return vT.positions = nT, vT.indices = HT, vT
    }

    function lT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const WT = UT.instance,
        zT = UT.lines,
        MT = UT.colors;
      if (WT) {
        const TT = WT.getVerticesData(nT.i.PositionKind);
        let UT, mT;
        MT && (UT = WT.getVerticesData(nT.i.ColorKind));
        let gT = 0,
          HT = 0;
        for (let WT = 0; WT < zT.length; WT++) {
          const nT = zT[WT];
          for (let zT = 0; zT < nT.length; zT++) TT[gT] = nT[zT].x, TT[gT + 1] = nT[zT].y, TT[gT + 2] = nT[zT].z, MT && UT && (mT = MT[WT], UT[HT] = mT[zT].r, UT[HT + 1] = mT[zT].g, UT[HT + 2] = mT[zT].b, UT[HT + 3] = mT[zT].a, HT += 4), gT += 3
        }
        return WT.updateVerticesData(nT.i.PositionKind, TT, !1, !1), MT && UT && WT.updateVerticesData(nT.i.ColorKind, UT, !1, !1), WT.refreshBoundingInfo(), WT
      }
      const HT = !!MT,
        jT = new gT.d(TT, mT, null, void 0, void 0, HT, UT.useVertexAlpha, UT.material);
      return kT(UT).applyToMesh(jT, UT.updatable), jT
    }

    function LT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const WT = UT.colors ? [UT.colors] : null;
      return lT(TT, {
        lines: [UT.points],
        updatable: UT.updatable,
        instance: UT.instance,
        colors: WT,
        useVertexAlpha: UT.useVertexAlpha,
        material: UT.material
      }, mT)
    }

    function pT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const MT = UT.points,
        nT = UT.instance,
        kT = UT.gapSize || 1,
        lT = UT.dashSize || 3;
      if (nT) {
        const TT = TT => {
          const UT = WT.p.Zero(),
            mT = TT.length / 6;
          let zT, gT, HT, kT, jT = 0,
            lT = 0;
          for (HT = 0; HT < MT.length - 1; HT++) MT[HT + 1].subtractToRef(MT[HT], UT), jT += UT.length();
          const LT = jT / mT,
            pT = nT._creationDataStorage.dashSize,
            BT = pT * LT / (pT + nT._creationDataStorage.gapSize);
          for (HT = 0; HT < MT.length - 1; HT++)
            for (MT[HT + 1].subtractToRef(MT[HT], UT), zT = Math.floor(UT.length() / LT), UT.normalize(), kT = 0; kT < zT && lT < TT.length;) gT = LT * kT, TT[lT] = MT[HT].x + gT * UT.x, TT[lT + 1] = MT[HT].y + gT * UT.y, TT[lT + 2] = MT[HT].z + gT * UT.z, TT[lT + 3] = MT[HT].x + (gT + BT) * UT.x, TT[lT + 4] = MT[HT].y + (gT + BT) * UT.y, TT[lT + 5] = MT[HT].z + (gT + BT) * UT.z, lT += 6, kT++;
          for (; lT < TT.length;) TT[lT] = MT[HT].x, TT[lT + 1] = MT[HT].y, TT[lT + 2] = MT[HT].z, lT += 3
        };
        return (UT.dashNb || UT.dashSize || UT.gapSize || UT.useVertexAlpha || UT.material) && HT.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), nT.updateMeshPositions(TT, !1), nT
      }
      const LT = new gT.d(TT, mT, null, void 0, void 0, void 0, UT.useVertexAlpha, UT.material);
      return jT(UT).applyToMesh(LT, UT.updatable), LT._creationDataStorage = new zT.h, LT._creationDataStorage.dashSize = lT, LT._creationDataStorage.gapSize = kT, LT
    }
    let BT = !1;
    BT || (BT = !0, MT.d.CreateLineSystem = kT, MT.d.CreateDashedLines = jT, zT.d.CreateLines = function(TT, UT) {
      return LT(TT, {
        points: UT,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, zT.d.CreateDashedLines = function(TT, UT, mT, WT, zT) {
      return pT(TT, {
        points: UT,
        dashSize: mT,
        gapSize: WT,
        dashNb: zT,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40576: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => LT,
      e: () => ZT
    });
    var WT, zT, MT = mT(37367),
      gT = mT(40257),
      nT = mT(40535),
      HT = mT(40585),
      kT = mT(40413),
      jT = mT(40593),
      lT = mT(39965);
    class LT extends nT.d {
      _isShaderMaterial(TT) {
        return !!TT && "ShaderMaterial" === TT.getClassName()
      }
      constructor(TT) {
        let UT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          WT = arguments.length > 5 ? arguments[5] : void 0,
          zT = arguments.length > 6 ? arguments[6] : void 0,
          nT = arguments.length > 7 ? arguments[7] : void 0;
        super(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, UT, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = WT, this.useVertexAlpha = zT, this.color = new MT.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, UT && (this.color = UT.color.clone(), this.alpha = UT.alpha, this.useVertexColor = UT.useVertexColor, this.useVertexAlpha = UT.useVertexAlpha), this.intersectionThreshold = .1;
        const HT = {
          attributes: [gT.i.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? HT.defines.push("#define VERTEXALPHA") : HT.needAlphaBlending = !1, this.useVertexColor ? (HT.defines.push("#define VERTEXCOLOR"), HT.attributes.push(gT.i.ColorKind)) : (HT.uniforms.push("color"), this._color4 = new MT.g), nT) this.material = nT;
        else {
          this.KF().eB().isWebGPU && !LT.ForceGLSL && (this._shaderLanguage = 1), HT.shaderLanguage = this._shaderLanguage, HT.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([mT.e(349).then((() => mT(42722))), mT.e(355).then((() => mT(42726)))]) : await Promise.all([mT.e(331).then((() => mT(42731))), mT.e(337).then((() => mT(42735)))])
          };
          const TT = new jT.o("colorShader", this.KF(), "color", HT, !1);
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
        const UT = this.material;
        if (UT === TT) return;
        const mT = UT && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(TT), mT && UT?.dispose()
      }
      _setInternalMaterial(TT) {
        this._setMaterial(TT), this.material && (this.material.fillMode = kT.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(TT) {}
      _bind(TT, UT) {
        if (!this._geometry) return this;
        const mT = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(UT, mT) : this._geometry._bind(UT, mT, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: TT,
            g: UT,
            b: mT
          } = this.color;
          this._color4.set(TT, UT, mT, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(TT, UT, mT) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const WT = this.KF().eB();
        return this._unIndexed ? WT.drawArraysType(kT.b.LineListDrawMode, TT.verticesStart, TT.verticesCount, mT) : WT.drawElementsType(kT.b.LineListDrawMode, TT.indexStart, TT.indexCount, mT), this
      }
      dispose(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || UT) && this.material?.dispose(!1, !1, !0), super.dispose(TT)
      }
      clone(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        if (UT && void 0 === UT._addToSceneRootNodes) {
          const mT = UT;
          return mT.source = this, new LT(TT, this.KF(), mT.parent, mT.source, mT.doNotCloneChildren)
        }
        return new LT(TT, this.KF(), UT, this, mT)
      }
      createInstance(TT) {
        const UT = new pT(TT, this);
        if (this.XV) {
          UT.XV = {};
          for (const TT in this.XV) UT.XV[TT] = this.XV[TT]
        }
        return UT
      }
      serialize(TT) {
        super.serialize(TT), TT.color = this.color.cWT(), TT.alpha = this.alpha
      }
      static Parse(TT, UT) {
        const mT = new LT(TT.name, UT);
        return mT.color = MT.d.FromArray(TT.color), mT.alpha = TT.alpha, mT
      }
    }
    LT.ForceGLSL = !1;
    class pT extends HT.d {
      constructor(TT, UT) {
        super(TT, UT), this.intersectionThreshold = UT.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let BT = !1;

    function ZT() {
      BT || (BT = !0, nT.d._LinesMeshParser = (TT, UT) => LT.Parse(TT, UT))
    }(WT = LT.prototype).enableEdgesRendering ?? (WT.enableEdgesRendering = (0, lT.j)("LinesMesh", "enableEdgesRendering")), (zT = pT.prototype).enableEdgesRendering ?? (zT.enableEdgesRendering = (0, lT.j)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38793: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = mT(38800);
    const zT = (TT, UT, mT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : mT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(UT) : null;
    class MT {
      static DeepCopy(TT, UT, mT, MT) {
        let gT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const nT = function(TT) {
          const UT = [];
          do {
            const mT = Object.getOwnPropertyNames(TT);
            for (const TT of mT) - 1 === UT.indexOf(TT) && UT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return UT
        }(TT);
        for (const kT of nT) {
          if ("_" === kT[0] && (!MT || -1 === MT.indexOf(kT))) continue;
          if (kT.endsWith("Observable")) continue;
          if (mT && -1 !== mT.indexOf(kT)) continue;
          const nT = TT[kT],
            jT = typeof nT;
          if ("function" !== jT) try {
            if ("object" === jT)
              if (nT instanceof Uint8Array) UT[kT] = Uint8Array.from(nT);
              else if (nT instanceof Array) {
              if (UT[kT] = [], nT.length > 0)
                if ("object" == typeof nT[0])
                  for (let TT = 0; TT < nT.length; TT++) {
                    const mT = zT(nT[TT], UT, gT); - 1 === UT[kT].indexOf(mT) && UT[kT].push(mT)
                  } else UT[kT] = nT.slice(0)
            } else UT[kT] = zT(nT, UT, gT);
            else UT[kT] = nT
          } catch (HT) {
            WT.b.Warn(HT.message)
          }
        }
      }
    }
  },
  38045: (TT, UT, mT) => {
    function WT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const UT = 16 * Math.random() | 0;
        return ("x" === TT ? UT : 3 & UT | 8).toString(16)
      }))
    }
    mT.d(UT, {
      c: () => WT
    })
  },
  38800: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT
    });
    class WT {
      static _CheckLimit(TT, UT) {
        let mT = WT._LogLimitOutputs[TT];
        return mT ? mT.current++ : (mT = {
          limit: UT,
          current: 1
        }, WT._LogLimitOutputs[TT] = mT), mT.current <= mT.limit
      }
      static _GenerateLimitMessage(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const mT = WT._LogLimitOutputs[TT];
        if (!mT || !WT.MessageLimitReached) return;
        const zT = this._Levels[UT];
        mT.current === mT.limit && WT[zT.name](WT.MessageLimitReached.replace(/%LIMIT%/g, "" + mT.limit).replace(/%TYPE%/g, zT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        WT._LogCache = TT + WT._LogCache, WT.OnNewCacheEntry && WT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const UT = TT => TT < 10 ? "0" + TT : "" + TT,
          mT = new Date;
        return "[" + UT(mT.getHours()) + ":" + UT(mT.getMinutes()) + ":" + UT(mT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, UT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const zT = Array.isArray(UT) ? UT[0] : UT;
        if (void 0 !== mT && !WT._CheckLimit(zT, mT)) return;
        const MT = WT._FormatMessage(zT),
          gT = this._Levels[TT],
          nT = Array.isArray(UT) ? UT.slice(1) : [];
        gT.logFunc && gT.logFunc("BJS - " + MT, ...nT);
        const HT = `<div style='color:${gT.color}'>${MT}</div><br>`;
        WT._AddLogEntry(HT), WT._GenerateLimitMessage(zT, TT)
      }
      static get LogCache() {
        return WT._LogCache
      }
      static ClearLogCache() {
        WT._LogCache = "", WT._LogLimitOutputs = {}, WT.errorsCount = 0
      }
      static set LogLevels(TT) {
        WT.Log = WT._LogDisabled, WT.Warn = WT._LogDisabled, WT.Error = WT._LogDisabled;
        const UT = [WT.MessageLogLevel, WT.WarningLogLevel, WT.ErrorLogLevel];
        for (const mT of UT)
          if ((TT & mT) === mT) {
            const TT = this._Levels[mT];
            WT[TT.name] = WT._LogEnabled.bind(WT, mT)
          }
      }
    }
    WT.NoneLogLevel = 0, WT.MessageLogLevel = 1, WT.WarningLogLevel = 2, WT.ErrorLogLevel = 4, WT.AllLogLevel = 7, WT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", WT._LogCache = "", WT._LogLimitOutputs = {}, WT._Levels = [{}, {
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
    }], WT.errorsCount = 0, WT.Log = WT._LogEnabled.bind(WT, WT.MessageLogLevel), WT.Warn = WT._LogEnabled.bind(WT, WT.WarningLogLevel), WT.Error = WT._LogEnabled.bind(WT, WT.ErrorLogLevel)
  },
  40192: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT.i
    });
    var WT = mT(40198);
    (0, WT.e)()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);