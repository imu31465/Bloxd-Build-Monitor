export const id = 224;
export const ids = [224, 230, 233];
export const modules = {
  39859: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      h: () => yT
    });
    var lT = cT(38512),
      MT = cT(39645),
      KT = cT(39841),
      OT = {};
    class yT {
      constructor(TT) {
        this.attachedToElement = !1, this.attached = {}, this.camera = TT, this.checkInputs = () => {}
      }
      add(TT) {
        const kT = TT.getSimpleName();
        this.attached[kT] ? lT.e.Warn("camera input of type " + kT + " already exists on camera") : (this.attached[kT] = TT, TT.camera = this.camera, TT.checkInputs && (this.checkInputs = this._addCheckInputs(TT.checkInputs.bind(TT))), this.attachedToElement && TT.attachControl(this.noPreventDefault))
      }
      remove(TT) {
        for (const kT in this.attached) {
          const cT = this.attached[kT];
          if (cT === TT) return cT.detachControl(), cT.camera = null, delete this.attached[kT], void this.rebuildInputCheck()
        }
      }
      removeByType(TT) {
        for (const kT in this.attached) {
          const cT = this.attached[kT];
          cT.getClassName() === TT && (cT.detachControl(), cT.camera = null, delete this.attached[kT], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(TT) {
        const kT = this.checkInputs;
        return () => {
          kT(), TT()
        }
      }
      attachInput(TT) {
        this.attachedToElement && TT.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          TT = !KT.c.ForceAttachControlToAlwaysPreventDefault && TT, this.attachedToElement = !0, this.noPreventDefault = TT;
          for (const kT in this.attached) this.attached[kT].attachControl(TT)
        }
      }
      detachElement() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const kT in this.attached) this.attached[kT].detachControl(), TT && (this.attached[kT].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const TT in this.attached) {
          const kT = this.attached[TT];
          kT.checkInputs && (this.checkInputs = this._addCheckInputs(kT.checkInputs.bind(kT)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(TT) {
        const kT = {};
        for (const cT in this.attached) {
          const TT = this.attached[cT],
            lT = MT.d.Serialize(TT);
          kT[TT.getClassName()] = lT
        }
        TT.inputsmgr = kT
      }
      parse(TT) {
        const kT = TT.inputsmgr;
        if (kT) {
          this.clear();
          for (const TT in kT) {
            const cT = OT[TT];
            if (cT) {
              const lT = kT[TT],
                KT = MT.d.Parse((() => new cT), lT, null);
              this.add(KT)
            }
          }
        } else
          for (const cT in this.attached) {
            const kT = OT[this.attached[cT].getClassName()];
            if (kT) {
              const lT = MT.d.Parse((() => new kT), TT, null);
              this.remove(this.attached[cT]), this.add(lT)
            }
          }
      }
    }
  },
  39868: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT.d
    });
    var lT = cT(39876);
    (0, lT.e)()
  },
  39876: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => IT,
      e: () => CT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(36892),
      OT = cT(37093),
      yT = cT(39883),
      fT = cT(39846),
      xT = cT(36949);
    let IT = (() => {
        var TT;
        let kT, cT, fT = yT.d,
          xT = [],
          IT = [],
          AT = [],
          CT = [];
        return TT = class extends fT {
          constructor(TT, kT, cT, MT) {
            super(TT, cT, MT), this.groundColor = (0, lT.h)(this, xT, new OT.c(0, 0, 0)), this.direction = ((0, lT.h)(this, IT), (0, lT.h)(this, AT, void 0)), (0, lT.h)(this, CT), this.direction = kT || KT.m.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(TT) {
            return this.direction = KT.m.Normalize(TT.subtract(KT.m.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(TT, kT) {
            const cT = KT.m.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", cT.x, cT.y, cT.z, 0, kT), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), kT), this
          }
          transferToNodeMaterialEffect(TT, kT) {
            const cT = KT.m.Normalize(this.direction);
            return TT.setFloat3(kT, cT.x, cT.y, cT.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = KT.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return yT.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(TT, kT) {
            TT["HEMILIGHT" + kT] = !0
          }
        }, (() => {
          const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(fT[Symbol.metadata] ?? null) : void 0;
          kT = [(0, MT.m)()], cT = [(0, MT.F)()], (0, lT.e)(null, null, kT, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "groundColor" in TT,
              get: TT => TT.groundColor,
              set: (TT, kT) => {
                TT.groundColor = kT
              }
            },
            metadata: KT
          }, xT, IT), (0, lT.e)(null, null, cT, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: TT => "direction" in TT,
              get: TT => TT.direction,
              set: (TT, kT) => {
                TT.direction = kT
              }
            },
            metadata: KT
          }, AT, CT), KT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KT
          })
        })(), TT
      })(),
      AT = !1;

    function CT() {
      AT || (AT = !0, fT.b.AddNodeConstructor("Light_Type_3", ((TT, kT) => () => new IT(TT, KT.m.Zero(), kT))), (0, xT.g)("BABYLON.HemisphericLight", IT))
    }
  },
  37086: (TT, kT, cT) => {
    cT.d(kT, {
      Color3: () => lT.c,
      e: () => lT.g
    });
    var lT = cT(37093);
    (0, lT.j)()
  },
  37632: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT
    });
    var lT = cT(37637);
    class MT {
      static GetPlanes(TT) {
        const kT = [];
        for (let cT = 0; cT < 6; cT++) kT.push(new lT.e(0, 0, 0, 0));
        return MT.GetPlanesToRef(TT, kT), kT
      }
      static GetNearPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[2], kT.normal.y = cT[7] + cT[6], kT.normal.z = cT[11] + cT[10], kT.d = cT[15] + cT[14], kT.normalize()
      }
      static GetFarPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[2], kT.normal.y = cT[7] - cT[6], kT.normal.z = cT[11] - cT[10], kT.d = cT[15] - cT[14], kT.normalize()
      }
      static GetLeftPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[0], kT.normal.y = cT[7] + cT[4], kT.normal.z = cT[11] + cT[8], kT.d = cT[15] + cT[12], kT.normalize()
      }
      static GetRightPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[0], kT.normal.y = cT[7] - cT[4], kT.normal.z = cT[11] - cT[8], kT.d = cT[15] - cT[12], kT.normalize()
      }
      static GetTopPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[1], kT.normal.y = cT[7] - cT[5], kT.normal.z = cT[11] - cT[9], kT.d = cT[15] - cT[13], kT.normalize()
      }
      static GetBottomPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[1], kT.normal.y = cT[7] + cT[5], kT.normal.z = cT[11] + cT[9], kT.d = cT[15] + cT[13], kT.normalize()
      }
      static GetPlanesToRef(TT, kT) {
        MT.GetNearPlaneToRef(TT, kT[0]), MT.GetFarPlaneToRef(TT, kT[1]), MT.GetLeftPlaneToRef(TT, kT[2]), MT.GetRightPlaneToRef(TT, kT[3]), MT.GetTopPlaneToRef(TT, kT[4]), MT.GetBottomPlaneToRef(TT, kT[5])
      }
      static IsPointInFrustum(TT, kT) {
        for (let cT = 0; cT < 6; cT++)
          if (kT[cT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  37637: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT
    });
    var lT = cT(36892);
    class MT {
      constructor(TT, kT, cT, MT) {
        this.normal = new lT.m(TT, kT, cT), this.d = MT
      }
      acT() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new MT(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let kT = 0;
        return 0 !== TT && (kT = 1 / TT), this.normal.x *= kT, this.normal.y *= kT, this.normal.z *= kT, this.d *= kT, this
      }
      transform(TT) {
        const kT = MT._TmpMatrix;
        TT.invertToRef(kT);
        const cT = kT.m,
          lT = this.normal.x,
          KT = this.normal.y,
          OT = this.normal.z,
          yT = this.d,
          fT = lT * cT[0] + KT * cT[1] + OT * cT[2] + yT * cT[3],
          xT = lT * cT[4] + KT * cT[5] + OT * cT[6] + yT * cT[7],
          IT = lT * cT[8] + KT * cT[9] + OT * cT[10] + yT * cT[11],
          AT = lT * cT[12] + KT * cT[13] + OT * cT[14] + yT * cT[15];
        return new MT(fT, xT, IT, AT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, kT, cT) {
        const lT = kT.x - TT.x,
          MT = kT.y - TT.y,
          KT = kT.z - TT.z,
          OT = cT.x - TT.x,
          yT = cT.y - TT.y,
          fT = cT.z - TT.z,
          xT = MT * fT - KT * yT,
          IT = KT * OT - lT * fT,
          AT = lT * yT - MT * OT,
          CT = Math.sqrt(xT * xT + IT * IT + AT * AT);
        let jT;
        return jT = 0 !== CT ? 1 / CT : 0, this.normal.x = xT * jT, this.normal.y = IT * jT, this.normal.z = AT * jT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, kT) {
        return lT.m.Dot(this.normal, TT) <= kT
      }
      signedDistanceTo(TT) {
        return lT.m.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new MT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, kT, cT) {
        const lT = new MT(0, 0, 0, 0);
        return lT.copyFromPoints(TT, kT, cT), lT
      }
      static FromPositionAndNormal(TT, kT) {
        const cT = new MT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, kT, cT)
      }
      static FromPositionAndNormalToRef(TT, kT, cT) {
        return cT.normal.UkT(kT), cT.normal.normalize(), cT.d = -TT.dot(cT.normal), cT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, kT, cT) {
        const MT = -(kT.x * TT.x + kT.y * TT.y + kT.z * TT.z);
        return lT.m.Dot(cT, kT) + MT
      }
    }
    MT._TmpMatrix = lT.d.Identity()
  },
  36885: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      Matrix: () => lT.d,
      Quaternion: () => lT.f,
      RegisterMathVector: () => lT.g,
      TmpVectors: () => lT.h,
      Vector2: () => lT.i,
      Fv: () => lT.m,
      Vector4: () => lT.o
    });
    var lT = cT(36892);
    (0, lT.g)()
  },
  37939: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {
      constructor(TT, kT, cT, lT) {
        this.x = TT, this.y = kT, this.width = cT, this.height = lT
      }
      toGlobal(TT, kT) {
        return new lT(this.x * TT, this.y * kT, this.width * TT, this.height * kT)
      }
      toGlobalToRef(TT, kT, cT) {
        return cT.x = this.x * TT, cT.y = this.y * kT, cT.width = this.width * TT, cT.height = this.height * kT, this
      }
      clone() {
        return new lT(this.x, this.y, this.width, this.height)
      }
    }
  },
  40021: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => xT
    });
    var lT = cT(36892),
      MT = cT(37093),
      KT = cT(40025),
      OT = cT(40038),
      yT = cT(40057);

    function fT(TT) {
      let kT = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const cT = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        KT = [],
        fT = TT.width || TT.size || 1,
        xT = TT.height || TT.size || 1,
        IT = TT.depth || TT.size || 1,
        AT = TT.wrap || !1;
      let CT = void 0 === TT.topBaseAt ? 1 : TT.topBaseAt,
        jT = void 0 === TT.bottomBaseAt ? 0 : TT.bottomBaseAt;
      CT = (CT + 4) % 4, jT = (jT + 4) % 4;
      let vT = [2, 0, 3, 1][CT],
        tT = [2, 0, 1, 3][jT],
        hT = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (AT) {
        kT = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], hT = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let TT = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          cT = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const lT = [17, 18, 19, 16],
          MT = [22, 23, 20, 21];
        for (; vT > 0;) TT.unshift(TT.pop()), lT.unshift(lT.pop()), vT--;
        for (; tT > 0;) cT.unshift(cT.pop()), MT.unshift(MT.pop()), tT--;
        TT = TT.flat(), cT = cT.flat(), hT = hT.concat(TT).concat(cT), kT.push(lT[0], lT[2], lT[3], lT[0], lT[1], lT[2]), kT.push(MT[0], MT[2], MT[3], MT[0], MT[1], MT[2])
      }
      const NT = [fT / 2, xT / 2, IT / 2],
        QT = hT.reduce(((TT, kT, cT) => TT.concat(kT * NT[cT % 3])), []),
        ST = 0 === TT.sideOrientation ? 0 : TT.sideOrientation || OT.d.DEFAULTSIDE,
        DT = TT.faceUV || new Array(6),
        aT = TT.faceColors,
        FT = [];
      for (let OT = 0; OT < 6; OT++) void 0 === DT[OT] && (DT[OT] = new lT.o(0, 0, 1, 1)), aT && void 0 === aT[OT] && (aT[OT] = new MT.g(1, 1, 1, 1));
      for (let lT = 0; lT < 6; lT++)
        if (KT.push(DT[lT].z, yT.c ? 1 - DT[lT].w : DT[lT].w), KT.push(DT[lT].x, yT.c ? 1 - DT[lT].w : DT[lT].w), KT.push(DT[lT].x, yT.c ? 1 - DT[lT].y : DT[lT].y), KT.push(DT[lT].z, yT.c ? 1 - DT[lT].y : DT[lT].y), aT)
          for (let TT = 0; TT < 4; TT++) FT.push(aT[lT].r, aT[lT].g, aT[lT].b, aT[lT].a);
      OT.d._ComputeSides(ST, QT, kT, cT, KT, TT.frontUVs, TT.backUVs);
      const rT = new OT.d;
      if (rT.indices = kT, rT.positions = QT, rT.normals = cT, rT.uvs = KT, aT) {
        const TT = ST === OT.d.DOUBLESIDE ? FT.concat(FT) : FT;
        rT.colors = TT
      }
      return rT
    }

    function xT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const lT = new KT.e(TT, cT);
      kT.sideOrientation = KT.e._GetDefaultSideOrientation(kT.sideOrientation), lT._originalBuilderSideOrientation = kT.sideOrientation;
      return fT(kT).applyToMesh(lT, kT.updatable), lT
    }
    let IT = !1;
    IT || (IT = !0, OT.d.CreateBox = fT, KT.e.CreateBox = function(TT, kT) {
      return xT(TT, {
        size: kT,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40084: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => AT
    });
    var lT = cT(36892),
      MT = cT(40025),
      KT = cT(40038),
      OT = cT(40090),
      yT = cT(39782),
      fT = cT(38512);

    function xT(TT) {
      const kT = [],
        cT = [],
        lT = TT.lines,
        MT = TT.colors,
        OT = [];
      let yT = 0;
      for (let KT = 0; KT < lT.length; KT++) {
        const TT = lT[KT];
        for (let lT = 0; lT < TT.length; lT++) {
          const {
            x: fT,
            y: xT,
            z: IT
          } = TT[lT];
          if (cT.push(fT, xT, IT), MT) {
            const TT = MT[KT],
              {
                r: kT,
                g: cT,
                b: yT,
                a: fT
              } = TT[lT];
            OT.push(kT, cT, yT, fT)
          }
          lT > 0 && (kT.push(yT - 1), kT.push(yT)), yT++
        }
      }
      const fT = new KT.d;
      return fT.indices = kT, fT.positions = cT, MT && (fT.colors = OT), fT
    }

    function IT(TT) {
      const kT = TT.dashSize || 3,
        cT = TT.gapSize || 1,
        MT = TT.dashNb || 200,
        OT = TT.points,
        yT = [],
        fT = [],
        xT = lT.m.Zero();
      let IT, AT, CT, jT = 0,
        vT = 0;
      for (CT = 0; CT < OT.length - 1; CT++) OT[CT + 1].subtractToRef(OT[CT], xT), jT += xT.length();
      const tT = jT / MT,
        hT = kT * tT / (kT + cT);
      for (CT = 0; CT < OT.length - 1; CT++) {
        OT[CT + 1].subtractToRef(OT[CT], xT), IT = Math.floor(xT.length() / tT), xT.normalize();
        for (let TT = 0; TT < IT; TT++) AT = tT * TT, yT.push(OT[CT].x + AT * xT.x, OT[CT].y + AT * xT.y, OT[CT].z + AT * xT.z), yT.push(OT[CT].x + (AT + hT) * xT.x, OT[CT].y + (AT + hT) * xT.y, OT[CT].z + (AT + hT) * xT.z), fT.push(vT, vT + 1), vT += 2
      }
      const NT = new KT.d;
      return NT.positions = yT, NT.indices = fT, NT
    }

    function AT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const lT = kT.instance,
        MT = kT.lines,
        KT = kT.colors;
      if (lT) {
        const TT = lT.getVerticesData(yT.l.PositionKind);
        let kT, cT;
        KT && (kT = lT.getVerticesData(yT.l.ColorKind));
        let OT = 0,
          fT = 0;
        for (let lT = 0; lT < MT.length; lT++) {
          const yT = MT[lT];
          for (let MT = 0; MT < yT.length; MT++) TT[OT] = yT[MT].x, TT[OT + 1] = yT[MT].y, TT[OT + 2] = yT[MT].z, KT && kT && (cT = KT[lT], kT[fT] = cT[MT].r, kT[fT + 1] = cT[MT].g, kT[fT + 2] = cT[MT].b, kT[fT + 3] = cT[MT].a, fT += 4), OT += 3
        }
        return lT.updateVerticesData(yT.l.PositionKind, TT, !1, !1), KT && kT && lT.updateVerticesData(yT.l.ColorKind, kT, !1, !1), lT.refreshBoundingInfo(), lT
      }
      const fT = !!KT,
        IT = new OT.b(TT, cT, null, void 0, void 0, fT, kT.useVertexAlpha, kT.material);
      return xT(kT).applyToMesh(IT, kT.updatable), IT
    }

    function CT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const lT = kT.colors ? [kT.colors] : null;
      return AT(TT, {
        lines: [kT.points],
        updatable: kT.updatable,
        instance: kT.instance,
        colors: lT,
        useVertexAlpha: kT.useVertexAlpha,
        material: kT.material
      }, cT)
    }

    function jT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const KT = kT.points,
        yT = kT.instance,
        xT = kT.gapSize || 1,
        AT = kT.dashSize || 3;
      if (yT) {
        const TT = TT => {
          const kT = lT.m.Zero(),
            cT = TT.length / 6;
          let MT, OT, fT, xT, IT = 0,
            AT = 0;
          for (fT = 0; fT < KT.length - 1; fT++) KT[fT + 1].subtractToRef(KT[fT], kT), IT += kT.length();
          const CT = IT / cT,
            jT = yT._creationDataStorage.dashSize,
            vT = jT * CT / (jT + yT._creationDataStorage.gapSize);
          for (fT = 0; fT < KT.length - 1; fT++)
            for (KT[fT + 1].subtractToRef(KT[fT], kT), MT = Math.floor(kT.length() / CT), kT.normalize(), xT = 0; xT < MT && AT < TT.length;) OT = CT * xT, TT[AT] = KT[fT].x + OT * kT.x, TT[AT + 1] = KT[fT].y + OT * kT.y, TT[AT + 2] = KT[fT].z + OT * kT.z, TT[AT + 3] = KT[fT].x + (OT + vT) * kT.x, TT[AT + 4] = KT[fT].y + (OT + vT) * kT.y, TT[AT + 5] = KT[fT].z + (OT + vT) * kT.z, AT += 6, xT++;
          for (; AT < TT.length;) TT[AT] = KT[fT].x, TT[AT + 1] = KT[fT].y, TT[AT + 2] = KT[fT].z, AT += 3
        };
        return (kT.dashNb || kT.dashSize || kT.gapSize || kT.useVertexAlpha || kT.material) && fT.e.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), yT.updateMeshPositions(TT, !1), yT
      }
      const CT = new OT.b(TT, cT, null, void 0, void 0, void 0, kT.useVertexAlpha, kT.material);
      return IT(kT).applyToMesh(CT, kT.updatable), CT._creationDataStorage = new MT.j, CT._creationDataStorage.dashSize = AT, CT._creationDataStorage.gapSize = xT, CT
    }
    let vT = !1;
    vT || (vT = !0, KT.d.CreateLineSystem = xT, KT.d.CreateDashedLines = IT, MT.e.CreateLines = function(TT, kT) {
      return CT(TT, {
        points: kT,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, MT.e.CreateDashedLines = function(TT, kT, cT, lT, MT) {
      return jT(TT, {
        points: kT,
        dashSize: cT,
        gapSize: lT,
        dashNb: MT,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40090: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => CT,
      d: () => tT
    });
    var lT, MT, KT = cT(37093),
      OT = cT(39782),
      yT = cT(40025),
      fT = cT(40095),
      xT = cT(39908),
      IT = cT(40104),
      AT = cT(39500);
    class CT extends yT.e {
      _isShaderMaterial(TT) {
        return !!TT && "ShaderMaterial" === TT.getClassName()
      }
      constructor(TT) {
        let kT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          lT = arguments.length > 5 ? arguments[5] : void 0,
          MT = arguments.length > 6 ? arguments[6] : void 0,
          yT = arguments.length > 7 ? arguments[7] : void 0;
        super(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, kT, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = lT, this.useVertexAlpha = MT, this.color = new KT.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, kT && (this.color = kT.color.clone(), this.alpha = kT.alpha, this.useVertexColor = kT.useVertexColor, this.useVertexAlpha = kT.useVertexAlpha), this.intersectionThreshold = .1;
        const fT = {
          attributes: [OT.l.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? fT.defines.push("#define VERTEXALPHA") : fT.needAlphaBlending = !1, this.useVertexColor ? (fT.defines.push("#define VERTEXCOLOR"), fT.attributes.push(OT.l.ColorKind)) : (fT.uniforms.push("color"), this._color4 = new KT.g), yT) this.material = yT;
        else {
          this.NJ().Dv().isWebGPU && !CT.ForceGLSL && (this._shaderLanguage = 1), fT.shaderLanguage = this._shaderLanguage, fT.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([cT.e(335).then((() => cT(42095))), cT.e(341).then((() => cT(42104)))]) : await Promise.all([cT.e(317).then((() => cT(42113))), cT.e(323).then((() => cT(42118)))])
          };
          const TT = new IT.q("colorShader", this.NJ(), "color", fT, !1);
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
        const kT = this.material;
        if (kT === TT) return;
        const cT = kT && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(TT), cT && kT?.dispose()
      }
      _setInternalMaterial(TT) {
        this._setMaterial(TT), this.material && (this.material.fillMode = xT.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(TT) {}
      _bind(TT, kT) {
        if (!this._geometry) return this;
        const cT = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(kT, cT) : this._geometry._bind(kT, cT, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: TT,
            g: kT,
            b: cT
          } = this.color;
          this._color4.set(TT, kT, cT, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(TT, kT, cT) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const lT = this.NJ().Dv();
        return this._unIndexed ? lT.drawArraysType(xT.e.LineListDrawMode, TT.verticesStart, TT.verticesCount, cT) : lT.drawElementsType(xT.e.LineListDrawMode, TT.indexStart, TT.indexCount, cT), this
      }
      dispose(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || kT) && this.material?.dispose(!1, !1, !0), super.dispose(TT)
      }
      clone(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        if (kT && void 0 === kT._addToSceneRootNodes) {
          const cT = kT;
          return cT.source = this, new CT(TT, this.NJ(), cT.parent, cT.source, cT.doNotCloneChildren)
        }
        return new CT(TT, this.NJ(), kT, this, cT)
      }
      createInstance(TT) {
        const kT = new jT(TT, this);
        if (this.xH) {
          kT.xH = {};
          for (const TT in this.xH) kT.xH[TT] = this.xH[TT]
        }
        return kT
      }
      serialize(TT) {
        super.serialize(TT), TT.color = this.color.acT(), TT.alpha = this.alpha
      }
      static Parse(TT, kT) {
        const cT = new CT(TT.name, kT);
        return cT.color = KT.c.FromArray(TT.color), cT.alpha = TT.alpha, cT
      }
    }
    CT.ForceGLSL = !1;
    class jT extends fT.c {
      constructor(TT, kT) {
        super(TT, kT), this.intersectionThreshold = kT.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let vT = !1;

    function tT() {
      vT || (vT = !0, yT.e._LinesMeshParser = (TT, kT) => CT.Parse(TT, kT))
    }(lT = CT.prototype).enableEdgesRendering ?? (lT.enableEdgesRendering = (0, AT.f)("LinesMesh", "enableEdgesRendering")), (MT = jT.prototype).enableEdgesRendering ?? (MT.enableEdgesRendering = (0, AT.f)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38507: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(38512);
    const MT = (TT, kT, cT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : cT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(kT) : null;
    class KT {
      static DeepCopy(TT, kT, cT, KT) {
        let OT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const yT = function(TT) {
          const kT = [];
          do {
            const cT = Object.getOwnPropertyNames(TT);
            for (const TT of cT) - 1 === kT.indexOf(TT) && kT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return kT
        }(TT);
        for (const xT of yT) {
          if ("_" === xT[0] && (!KT || -1 === KT.indexOf(xT))) continue;
          if (xT.endsWith("Observable")) continue;
          if (cT && -1 !== cT.indexOf(xT)) continue;
          const yT = TT[xT],
            IT = typeof yT;
          if ("function" !== IT) try {
            if ("object" === IT)
              if (yT instanceof Uint8Array) kT[xT] = Uint8Array.from(yT);
              else if (yT instanceof Array) {
              if (kT[xT] = [], yT.length > 0)
                if ("object" == typeof yT[0])
                  for (let TT = 0; TT < yT.length; TT++) {
                    const cT = MT(yT[TT], kT, OT); - 1 === kT[xT].indexOf(cT) && kT[xT].push(cT)
                  } else kT[xT] = yT.slice(0)
            } else kT[xT] = MT(yT, kT, OT);
            else kT[xT] = yT
          } catch (fT) {
            lT.e.Warn(fT.message)
          }
        }
      }
    }
  },
  37760: (TT, kT, cT) => {
    function lT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const kT = 16 * Math.random() | 0;
        return ("x" === TT ? kT : 3 & kT | 8).toString(16)
      }))
    }
    cT.d(kT, {
      c: () => lT
    })
  },
  38512: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {
      static _CheckLimit(TT, kT) {
        let cT = lT._LogLimitOutputs[TT];
        return cT ? cT.current++ : (cT = {
          limit: kT,
          current: 1
        }, lT._LogLimitOutputs[TT] = cT), cT.current <= cT.limit
      }
      static _GenerateLimitMessage(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cT = lT._LogLimitOutputs[TT];
        if (!cT || !lT.MessageLimitReached) return;
        const MT = this._Levels[kT];
        cT.current === cT.limit && lT[MT.name](lT.MessageLimitReached.replace(/%LIMIT%/g, "" + cT.limit).replace(/%TYPE%/g, MT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        lT._LogCache = TT + lT._LogCache, lT.OnNewCacheEntry && lT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const kT = TT => TT < 10 ? "0" + TT : "" + TT,
          cT = new Date;
        return "[" + kT(cT.getHours()) + ":" + kT(cT.getMinutes()) + ":" + kT(cT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, kT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const MT = Array.isArray(kT) ? kT[0] : kT;
        if (void 0 !== cT && !lT._CheckLimit(MT, cT)) return;
        const KT = lT._FormatMessage(MT),
          OT = this._Levels[TT],
          yT = Array.isArray(kT) ? kT.slice(1) : [];
        OT.logFunc && OT.logFunc("BJS - " + KT, ...yT);
        const fT = `<div style='color:${OT.color}'>${KT}</div><br>`;
        lT._AddLogEntry(fT), lT._GenerateLimitMessage(MT, TT)
      }
      static get LogCache() {
        return lT._LogCache
      }
      static ClearLogCache() {
        lT._LogCache = "", lT._LogLimitOutputs = {}, lT.errorsCount = 0
      }
      static set LogLevels(TT) {
        lT.Log = lT._LogDisabled, lT.Warn = lT._LogDisabled, lT.Error = lT._LogDisabled;
        const kT = [lT.MessageLogLevel, lT.WarningLogLevel, lT.ErrorLogLevel];
        for (const cT of kT)
          if ((TT & cT) === cT) {
            const TT = this._Levels[cT];
            lT[TT.name] = lT._LogEnabled.bind(lT, cT)
          }
      }
    }
    lT.NoneLogLevel = 0, lT.MessageLogLevel = 1, lT.WarningLogLevel = 2, lT.ErrorLogLevel = 4, lT.AllLogLevel = 7, lT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", lT._LogCache = "", lT._LogLimitOutputs = {}, lT._Levels = [{}, {
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
    }], lT.errorsCount = 0, lT.Log = lT._LogEnabled.bind(lT, lT.MessageLogLevel), lT.Warn = lT._LogEnabled.bind(lT, lT.WarningLogLevel), lT.Error = lT._LogEnabled.bind(lT, lT.ErrorLogLevel)
  },
  39716: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT.f
    });
    var lT = cT(39720);
    (0, lT.c)()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);