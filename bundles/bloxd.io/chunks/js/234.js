export const id = 234;
export const ids = [234, 241, 244];
export const modules = {
  40623: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      f: () => kG
    });
    var wG = ZG(39093),
      SG = ZG(40416),
      LG = ZG(40592),
      yG = {};
    class kG {
      constructor(GG) {
        this.attachedToElement = !1, this.attached = {}, this.camera = GG, this.checkInputs = () => {}
      }
      add(GG) {
        const bG = GG.getSimpleName();
        this.attached[bG] ? wG.c.Warn("camera input of type " + bG + " already exists on camera") : (this.attached[bG] = GG, GG.camera = this.camera, GG.checkInputs && (this.checkInputs = this._addCheckInputs(GG.checkInputs.bind(GG))), this.attachedToElement && GG.attachControl(this.noPreventDefault))
      }
      remove(GG) {
        for (const bG in this.attached) {
          const ZG = this.attached[bG];
          if (ZG === GG) return ZG.detachControl(), ZG.camera = null, delete this.attached[bG], void this.rebuildInputCheck()
        }
      }
      removeByType(GG) {
        for (const bG in this.attached) {
          const ZG = this.attached[bG];
          ZG.getClassName() === GG && (ZG.detachControl(), ZG.camera = null, delete this.attached[bG], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(GG) {
        const bG = this.checkInputs;
        return () => {
          bG(), GG()
        }
      }
      attachInput(GG) {
        this.attachedToElement && GG.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          GG = !LG.d.ForceAttachControlToAlwaysPreventDefault && GG, this.attachedToElement = !0, this.noPreventDefault = GG;
          for (const bG in this.attached) this.attached[bG].attachControl(GG)
        }
      }
      detachElement() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const bG in this.attached) this.attached[bG].detachControl(), GG && (this.attached[bG].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const GG in this.attached) {
          const bG = this.attached[GG];
          bG.checkInputs && (this.checkInputs = this._addCheckInputs(bG.checkInputs.bind(bG)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(GG) {
        const bG = {};
        for (const ZG in this.attached) {
          const GG = this.attached[ZG],
            wG = SG.b.Serialize(GG);
          bG[GG.getClassName()] = wG
        }
        GG.inputsmgr = bG
      }
      parse(GG) {
        const bG = GG.inputsmgr;
        if (bG) {
          this.clear();
          for (const GG in bG) {
            const ZG = yG[GG];
            if (ZG) {
              const wG = bG[GG],
                LG = SG.b.Parse((() => new ZG), wG, null);
              this.add(LG)
            }
          }
        } else
          for (const ZG in this.attached) {
            const bG = yG[this.attached[ZG].getClassName()];
            if (bG) {
              const wG = SG.b.Parse((() => new bG), GG, null);
              this.remove(this.attached[ZG]), this.add(wG)
            }
          }
      }
    }
  },
  40629: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG.e
    });
    var wG = ZG(40631);
    (0, wG.f)()
  },
  40631: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG,
      f: () => fG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(37439),
      yG = ZG(37621),
      kG = ZG(40635),
      UG = ZG(40599),
      YG = ZG(37484);
    let VG = (() => {
        var GG;
        let bG, ZG, UG = kG.c,
          YG = [],
          VG = [],
          pG = [],
          fG = [];
        return GG = class extends UG {
          constructor(GG, bG, ZG, SG) {
            super(GG, ZG, SG), this.groundColor = (0, wG.n)(this, YG, new yG.c(0, 0, 0)), this.direction = ((0, wG.n)(this, VG), (0, wG.n)(this, pG, void 0)), (0, wG.n)(this, fG), this.direction = bG || LG.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(GG) {
            return this.direction = LG.p.Normalize(GG.subtract(LG.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(GG, bG) {
            const ZG = LG.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ZG.x, ZG.y, ZG.z, 0, bG), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), bG), this
          }
          transferToNodeMaterialEffect(GG, bG) {
            const ZG = LG.p.Normalize(this.direction);
            return GG.setFloat3(bG, ZG.x, ZG.y, ZG.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = LG.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return kG.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(GG, bG) {
            GG["HEMILIGHT" + bG] = !0
          }
        }, (() => {
          const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(UG[Symbol.metadata] ?? null) : void 0;
          bG = [(0, SG.m)()], ZG = [(0, SG.M)()], (0, wG.k)(null, null, bG, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "groundColor" in GG,
              get: GG => GG.groundColor,
              set: (GG, bG) => {
                GG.groundColor = bG
              }
            },
            metadata: LG
          }, YG, VG), (0, wG.k)(null, null, ZG, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: GG => "direction" in GG,
              get: GG => GG.direction,
              set: (GG, bG) => {
                GG.direction = bG
              }
            },
            metadata: LG
          }, pG, fG), LG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LG
          })
        })(), GG
      })(),
      pG = !1;

    function fG() {
      pG || (pG = !0, UG.e.AddNodeConstructor("Light_Type_3", ((GG, bG) => () => new VG(GG, LG.p.Zero(), bG))), (0, YG.i)("BABYLON.HemisphericLight", VG))
    }
  },
  37618: (GG, bG, ZG) => {
    ZG.d(bG, {
      Color3: () => wG.c,
      e: () => wG.d
    });
    var wG = ZG(37621);
    (0, wG.h)()
  },
  38167: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG
    });
    var wG = ZG(38175);
    class SG {
      static GetPlanes(GG) {
        const bG = [];
        for (let ZG = 0; ZG < 6; ZG++) bG.push(new wG.b(0, 0, 0, 0));
        return SG.GetPlanesToRef(GG, bG), bG
      }
      static GetNearPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[2], bG.normal.y = ZG[7] + ZG[6], bG.normal.z = ZG[11] + ZG[10], bG.d = ZG[15] + ZG[14], bG.normalize()
      }
      static GetFarPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[2], bG.normal.y = ZG[7] - ZG[6], bG.normal.z = ZG[11] - ZG[10], bG.d = ZG[15] - ZG[14], bG.normalize()
      }
      static GetLeftPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[0], bG.normal.y = ZG[7] + ZG[4], bG.normal.z = ZG[11] + ZG[8], bG.d = ZG[15] + ZG[12], bG.normalize()
      }
      static GetRightPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[0], bG.normal.y = ZG[7] - ZG[4], bG.normal.z = ZG[11] - ZG[8], bG.d = ZG[15] - ZG[12], bG.normalize()
      }
      static GetTopPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[1], bG.normal.y = ZG[7] - ZG[5], bG.normal.z = ZG[11] - ZG[9], bG.d = ZG[15] - ZG[13], bG.normalize()
      }
      static GetBottomPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[1], bG.normal.y = ZG[7] + ZG[5], bG.normal.z = ZG[11] + ZG[9], bG.d = ZG[15] + ZG[13], bG.normalize()
      }
      static GetPlanesToRef(GG, bG) {
        SG.GetNearPlaneToRef(GG, bG[0]), SG.GetFarPlaneToRef(GG, bG[1]), SG.GetLeftPlaneToRef(GG, bG[2]), SG.GetRightPlaneToRef(GG, bG[3]), SG.GetTopPlaneToRef(GG, bG[4]), SG.GetBottomPlaneToRef(GG, bG[5])
      }
      static IsPointInFrustum(GG, bG) {
        for (let ZG = 0; ZG < 6; ZG++)
          if (bG[ZG].dotCoordinate(GG) < 0) return !1;
        return !0
      }
    }
  },
  38175: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG
    });
    var wG = ZG(37439);
    class SG {
      constructor(GG, bG, ZG, SG) {
        this.normal = new wG.p(GG, bG, ZG), this.d = SG
      }
      mwG() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new SG(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let GG = this.normal.getHashCode();
        return GG = 397 * GG ^ this.d, GG
      }
      normalize() {
        const GG = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let bG = 0;
        return 0 !== GG && (bG = 1 / GG), this.normal.x *= bG, this.normal.y *= bG, this.normal.z *= bG, this.d *= bG, this
      }
      transform(GG) {
        const bG = SG._TmpMatrix;
        GG.invertToRef(bG);
        const ZG = bG.m,
          wG = this.normal.x,
          LG = this.normal.y,
          yG = this.normal.z,
          kG = this.d,
          UG = wG * ZG[0] + LG * ZG[1] + yG * ZG[2] + kG * ZG[3],
          YG = wG * ZG[4] + LG * ZG[5] + yG * ZG[6] + kG * ZG[7],
          VG = wG * ZG[8] + LG * ZG[9] + yG * ZG[10] + kG * ZG[11],
          pG = wG * ZG[12] + LG * ZG[13] + yG * ZG[14] + kG * ZG[15];
        return new SG(UG, YG, VG, pG)
      }
      dotCoordinate(GG) {
        return this.normal.x * GG.x + this.normal.y * GG.y + this.normal.z * GG.z + this.d
      }
      copyFromPoints(GG, bG, ZG) {
        const wG = bG.x - GG.x,
          SG = bG.y - GG.y,
          LG = bG.z - GG.z,
          yG = ZG.x - GG.x,
          kG = ZG.y - GG.y,
          UG = ZG.z - GG.z,
          YG = SG * UG - LG * kG,
          VG = LG * yG - wG * UG,
          pG = wG * kG - SG * yG,
          fG = Math.sqrt(YG * YG + VG * VG + pG * pG);
        let QG;
        return QG = 0 !== fG ? 1 / fG : 0, this.normal.x = YG * QG, this.normal.y = VG * QG, this.normal.z = pG * QG, this.d = -(this.normal.x * GG.x + this.normal.y * GG.y + this.normal.z * GG.z), this
      }
      isFrontFacingTo(GG, bG) {
        return wG.p.Dot(this.normal, GG) <= bG
      }
      signedDistanceTo(GG) {
        return wG.p.Dot(GG, this.normal) + this.d
      }
      static FromArray(GG) {
        return new SG(GG[0], GG[1], GG[2], GG[3])
      }
      static FromPoints(GG, bG, ZG) {
        const wG = new SG(0, 0, 0, 0);
        return wG.copyFromPoints(GG, bG, ZG), wG
      }
      static FromPositionAndNormal(GG, bG) {
        const ZG = new SG(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(GG, bG, ZG)
      }
      static FromPositionAndNormalToRef(GG, bG, ZG) {
        return ZG.normal.oW(bG), ZG.normal.normalize(), ZG.d = -GG.dot(ZG.normal), ZG
      }
      static SignedDistanceToPlaneFromPositionAndNormal(GG, bG, ZG) {
        const SG = -(bG.x * GG.x + bG.y * GG.y + bG.z * GG.z);
        return wG.p.Dot(ZG, bG) + SG
      }
    }
    SG._TmpMatrix = wG.e.Identity()
  },
  37432: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      Matrix: () => wG.e,
      Quaternion: () => wG.g,
      RegisterMathVector: () => wG.h,
      TmpVectors: () => wG.j,
      Vector2: () => wG.m,
      mK: () => wG.p,
      Vector4: () => wG.t
    });
    var wG = ZG(37439);
    (0, wG.h)()
  },
  38499: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG
    });
    class wG {
      constructor(GG, bG, ZG, wG) {
        this.x = GG, this.y = bG, this.width = ZG, this.height = wG
      }
      toGlobal(GG, bG) {
        return new wG(this.x * GG, this.y * bG, this.width * GG, this.height * bG)
      }
      toGlobalToRef(GG, bG, ZG) {
        return ZG.x = this.x * GG, ZG.y = this.y * bG, ZG.width = this.width * GG, ZG.height = this.height * bG, this
      }
      clone() {
        return new wG(this.x, this.y, this.width, this.height)
      }
    }
  },
  40776: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => YG
    });
    var wG = ZG(37439),
      SG = ZG(37621),
      LG = ZG(40784),
      yG = ZG(40795),
      kG = ZG(40805);

    function UG(GG) {
      let bG = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const ZG = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        LG = [],
        UG = GG.width || GG.size || 1,
        YG = GG.height || GG.size || 1,
        VG = GG.depth || GG.size || 1,
        pG = GG.wrap || !1;
      let fG = void 0 === GG.topBaseAt ? 1 : GG.topBaseAt,
        QG = void 0 === GG.bottomBaseAt ? 0 : GG.bottomBaseAt;
      fG = (fG + 4) % 4, QG = (QG + 4) % 4;
      let KG = [2, 0, 3, 1][fG],
        hG = [2, 0, 1, 3][QG],
        dG = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (pG) {
        bG = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], dG = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let GG = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          ZG = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const wG = [17, 18, 19, 16],
          SG = [22, 23, 20, 21];
        for (; KG > 0;) GG.unshift(GG.pop()), wG.unshift(wG.pop()), KG--;
        for (; hG > 0;) ZG.unshift(ZG.pop()), SG.unshift(SG.pop()), hG--;
        GG = GG.flat(), ZG = ZG.flat(), dG = dG.concat(GG).concat(ZG), bG.push(wG[0], wG[2], wG[3], wG[0], wG[1], wG[2]), bG.push(SG[0], SG[2], SG[3], SG[0], SG[1], SG[2])
      }
      const JG = [UG / 2, YG / 2, VG / 2],
        rG = dG.reduce(((GG, bG, ZG) => GG.concat(bG * JG[ZG % 3])), []),
        zG = 0 === GG.sideOrientation ? 0 : GG.sideOrientation || yG.e.DEFAULTSIDE,
        EG = GG.faceUV || new Array(6),
        oG = GG.faceColors,
        XG = [];
      for (let yG = 0; yG < 6; yG++) void 0 === EG[yG] && (EG[yG] = new wG.t(0, 0, 1, 1)), oG && void 0 === oG[yG] && (oG[yG] = new SG.d(1, 1, 1, 1));
      for (let wG = 0; wG < 6; wG++)
        if (LG.push(EG[wG].z, kG.c ? 1 - EG[wG].w : EG[wG].w), LG.push(EG[wG].x, kG.c ? 1 - EG[wG].w : EG[wG].w), LG.push(EG[wG].x, kG.c ? 1 - EG[wG].y : EG[wG].y), LG.push(EG[wG].z, kG.c ? 1 - EG[wG].y : EG[wG].y), oG)
          for (let GG = 0; GG < 4; GG++) XG.push(oG[wG].r, oG[wG].g, oG[wG].b, oG[wG].a);
      yG.e._ComputeSides(zG, rG, bG, ZG, LG, GG.frontUVs, GG.backUVs);
      const uG = new yG.e;
      if (uG.indices = bG, uG.positions = rG, uG.normals = ZG, uG.uvs = LG, oG) {
        const GG = zG === yG.e.DOUBLESIDE ? XG.concat(XG) : XG;
        uG.colors = GG
      }
      return uG
    }

    function YG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const wG = new LG.c(GG, ZG);
      bG.sideOrientation = LG.c._GetDefaultSideOrientation(bG.sideOrientation), wG._originalBuilderSideOrientation = bG.sideOrientation;
      return UG(bG).applyToMesh(wG, bG.updatable), wG
    }
    let VG = !1;
    VG || (VG = !0, yG.e.CreateBox = UG, LG.c.CreateBox = function(GG, bG) {
      return YG(GG, {
        size: bG,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40831: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => pG
    });
    var wG = ZG(37439),
      SG = ZG(40784),
      LG = ZG(40795),
      yG = ZG(40838),
      kG = ZG(40524),
      UG = ZG(39093);

    function YG(GG) {
      const bG = [],
        ZG = [],
        wG = GG.lines,
        SG = GG.colors,
        yG = [];
      let kG = 0;
      for (let LG = 0; LG < wG.length; LG++) {
        const GG = wG[LG];
        for (let wG = 0; wG < GG.length; wG++) {
          const {
            x: UG,
            y: YG,
            z: VG
          } = GG[wG];
          if (ZG.push(UG, YG, VG), SG) {
            const GG = SG[LG],
              {
                r: bG,
                g: ZG,
                b: kG,
                a: UG
              } = GG[wG];
            yG.push(bG, ZG, kG, UG)
          }
          wG > 0 && (bG.push(kG - 1), bG.push(kG)), kG++
        }
      }
      const UG = new LG.e;
      return UG.indices = bG, UG.positions = ZG, SG && (UG.colors = yG), UG
    }

    function VG(GG) {
      const bG = GG.dashSize || 3,
        ZG = GG.gapSize || 1,
        SG = GG.dashNb || 200,
        yG = GG.points,
        kG = [],
        UG = [],
        YG = wG.p.Zero();
      let VG, pG, fG, QG = 0,
        KG = 0;
      for (fG = 0; fG < yG.length - 1; fG++) yG[fG + 1].subtractToRef(yG[fG], YG), QG += YG.length();
      const hG = QG / SG,
        dG = bG * hG / (bG + ZG);
      for (fG = 0; fG < yG.length - 1; fG++) {
        yG[fG + 1].subtractToRef(yG[fG], YG), VG = Math.floor(YG.length() / hG), YG.normalize();
        for (let GG = 0; GG < VG; GG++) pG = hG * GG, kG.push(yG[fG].x + pG * YG.x, yG[fG].y + pG * YG.y, yG[fG].z + pG * YG.z), kG.push(yG[fG].x + (pG + dG) * YG.x, yG[fG].y + (pG + dG) * YG.y, yG[fG].z + (pG + dG) * YG.z), UG.push(KG, KG + 1), KG += 2
      }
      const JG = new LG.e;
      return JG.positions = kG, JG.indices = UG, JG
    }

    function pG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const wG = bG.instance,
        SG = bG.lines,
        LG = bG.colors;
      if (wG) {
        const GG = wG.getVerticesData(kG.l.PositionKind);
        let bG, ZG;
        LG && (bG = wG.getVerticesData(kG.l.ColorKind));
        let yG = 0,
          UG = 0;
        for (let wG = 0; wG < SG.length; wG++) {
          const kG = SG[wG];
          for (let SG = 0; SG < kG.length; SG++) GG[yG] = kG[SG].x, GG[yG + 1] = kG[SG].y, GG[yG + 2] = kG[SG].z, LG && bG && (ZG = LG[wG], bG[UG] = ZG[SG].r, bG[UG + 1] = ZG[SG].g, bG[UG + 2] = ZG[SG].b, bG[UG + 3] = ZG[SG].a, UG += 4), yG += 3
        }
        return wG.updateVerticesData(kG.l.PositionKind, GG, !1, !1), LG && bG && wG.updateVerticesData(kG.l.ColorKind, bG, !1, !1), wG.refreshBoundingInfo(), wG
      }
      const UG = !!LG,
        VG = new yG.e(GG, ZG, null, void 0, void 0, UG, bG.useVertexAlpha, bG.material);
      return YG(bG).applyToMesh(VG, bG.updatable), VG
    }

    function fG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const wG = bG.colors ? [bG.colors] : null;
      return pG(GG, {
        lines: [bG.points],
        updatable: bG.updatable,
        instance: bG.instance,
        colors: wG,
        useVertexAlpha: bG.useVertexAlpha,
        material: bG.material
      }, ZG)
    }

    function QG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const LG = bG.points,
        kG = bG.instance,
        YG = bG.gapSize || 1,
        pG = bG.dashSize || 3;
      if (kG) {
        const GG = GG => {
          const bG = wG.p.Zero(),
            ZG = GG.length / 6;
          let SG, yG, UG, YG, VG = 0,
            pG = 0;
          for (UG = 0; UG < LG.length - 1; UG++) LG[UG + 1].subtractToRef(LG[UG], bG), VG += bG.length();
          const fG = VG / ZG,
            QG = kG._creationDataStorage.dashSize,
            KG = QG * fG / (QG + kG._creationDataStorage.gapSize);
          for (UG = 0; UG < LG.length - 1; UG++)
            for (LG[UG + 1].subtractToRef(LG[UG], bG), SG = Math.floor(bG.length() / fG), bG.normalize(), YG = 0; YG < SG && pG < GG.length;) yG = fG * YG, GG[pG] = LG[UG].x + yG * bG.x, GG[pG + 1] = LG[UG].y + yG * bG.y, GG[pG + 2] = LG[UG].z + yG * bG.z, GG[pG + 3] = LG[UG].x + (yG + KG) * bG.x, GG[pG + 4] = LG[UG].y + (yG + KG) * bG.y, GG[pG + 5] = LG[UG].z + (yG + KG) * bG.z, pG += 6, YG++;
          for (; pG < GG.length;) GG[pG] = LG[UG].x, GG[pG + 1] = LG[UG].y, GG[pG + 2] = LG[UG].z, pG += 3
        };
        return (bG.dashNb || bG.dashSize || bG.gapSize || bG.useVertexAlpha || bG.material) && UG.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), kG.updateMeshPositions(GG, !1), kG
      }
      const fG = new yG.e(GG, ZG, null, void 0, void 0, void 0, bG.useVertexAlpha, bG.material);
      return VG(bG).applyToMesh(fG, bG.updatable), fG._creationDataStorage = new SG.j, fG._creationDataStorage.dashSize = pG, fG._creationDataStorage.gapSize = YG, fG
    }
    let KG = !1;
    KG || (KG = !0, LG.e.CreateLineSystem = YG, LG.e.CreateDashedLines = VG, SG.c.CreateLines = function(GG, bG) {
      return fG(GG, {
        points: bG,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, SG.c.CreateDashedLines = function(GG, bG, ZG, wG, SG) {
      return QG(GG, {
        points: bG,
        dashSize: ZG,
        gapSize: wG,
        dashNb: SG,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40838: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => fG,
      g: () => hG
    });
    var wG, SG, LG = ZG(37621),
      yG = ZG(40524),
      kG = ZG(40784),
      UG = ZG(40844),
      YG = ZG(40664),
      VG = ZG(40851),
      pG = ZG(40258);
    class fG extends kG.c {
      _isShaderMaterial(GG) {
        return !!GG && "ShaderMaterial" === GG.getClassName()
      }
      constructor(GG) {
        let bG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          wG = arguments.length > 5 ? arguments[5] : void 0,
          SG = arguments.length > 6 ? arguments[6] : void 0,
          kG = arguments.length > 7 ? arguments[7] : void 0;
        super(GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, bG, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = wG, this.useVertexAlpha = SG, this.color = new LG.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, bG && (this.color = bG.color.clone(), this.alpha = bG.alpha, this.useVertexColor = bG.useVertexColor, this.useVertexAlpha = bG.useVertexAlpha), this.intersectionThreshold = .1;
        const UG = {
          attributes: [yG.l.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? UG.defines.push("#define VERTEXALPHA") : UG.needAlphaBlending = !1, this.useVertexColor ? (UG.defines.push("#define VERTEXCOLOR"), UG.attributes.push(yG.l.ColorKind)) : (UG.uniforms.push("color"), this._color4 = new LG.d), kG) this.material = kG;
        else {
          this.Dv().CK().isWebGPU && !fG.ForceGLSL && (this._shaderLanguage = 1), UG.shaderLanguage = this._shaderLanguage, UG.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([ZG.e(349).then((() => ZG(43005))), ZG.e(355).then((() => ZG(43013)))]) : await Promise.all([ZG.e(331).then((() => ZG(43017))), ZG.e(337).then((() => ZG(43021)))])
          };
          const GG = new VG.o("colorShader", this.Dv(), "color", UG, !1);
          GG.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(GG)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(GG) {
        const bG = this.material;
        if (bG === GG) return;
        const ZG = bG && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(GG), ZG && bG?.dispose()
      }
      _setInternalMaterial(GG) {
        this._setMaterial(GG), this.material && (this.material.fillMode = YG.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(GG) {}
      _bind(GG, bG) {
        if (!this._geometry) return this;
        const ZG = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(bG, ZG) : this._geometry._bind(bG, ZG, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: GG,
            g: bG,
            b: ZG
          } = this.color;
          this._color4.set(GG, bG, ZG, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(GG, bG, ZG) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const wG = this.Dv().CK();
        return this._unIndexed ? wG.drawArraysType(YG.e.LineListDrawMode, GG.verticesStart, GG.verticesCount, ZG) : wG.drawElementsType(YG.e.LineListDrawMode, GG.indexStart, GG.indexCount, ZG), this
      }
      dispose(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || bG) && this.material?.dispose(!1, !1, !0), super.dispose(GG)
      }
      clone(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        if (bG && void 0 === bG._addToSceneRootNodes) {
          const ZG = bG;
          return ZG.source = this, new fG(GG, this.Dv(), ZG.parent, ZG.source, ZG.doNotCloneChildren)
        }
        return new fG(GG, this.Dv(), bG, this, ZG)
      }
      createInstance(GG) {
        const bG = new QG(GG, this);
        if (this.hA) {
          bG.hA = {};
          for (const GG in this.hA) bG.hA[GG] = this.hA[GG]
        }
        return bG
      }
      serialize(GG) {
        super.serialize(GG), GG.color = this.color.mwG(), GG.alpha = this.alpha
      }
      static Parse(GG, bG) {
        const ZG = new fG(GG.name, bG);
        return ZG.color = LG.c.FromArray(GG.color), ZG.alpha = GG.alpha, ZG
      }
    }
    fG.ForceGLSL = !1;
    class QG extends UG.e {
      constructor(GG, bG) {
        super(GG, bG), this.intersectionThreshold = bG.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let KG = !1;

    function hG() {
      KG || (KG = !0, kG.c._LinesMeshParser = (GG, bG) => fG.Parse(GG, bG))
    }(wG = fG.prototype).enableEdgesRendering ?? (wG.enableEdgesRendering = (0, pG.h)("LinesMesh", "enableEdgesRendering")), (SG = QG.prototype).enableEdgesRendering ?? (SG.enableEdgesRendering = (0, pG.h)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  39086: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG
    });
    var wG = ZG(39093);
    const SG = (GG, bG, ZG) => GG ? GG.getClassName && "Mesh" === GG.getClassName() ? null : !GG.getClassName || "SubMesh" !== GG.getClassName() && "PhysicsBody" !== GG.getClassName() ? GG.clone ? GG.clone() : Array.isArray(GG) ? GG.slice() : ZG && "object" === typeof GG ? {
      ...GG
    } : null : GG.clone(bG) : null;
    class LG {
      static DeepCopy(GG, bG, ZG, LG) {
        let yG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const kG = function(GG) {
          const bG = [];
          do {
            const ZG = Object.getOwnPropertyNames(GG);
            for (const GG of ZG) - 1 === bG.indexOf(GG) && bG.push(GG)
          } while (GG = Object.getPrototypeOf(GG));
          return bG
        }(GG);
        for (const YG of kG) {
          if ("_" === YG[0] && (!LG || -1 === LG.indexOf(YG))) continue;
          if (YG.endsWith("Observable")) continue;
          if (ZG && -1 !== ZG.indexOf(YG)) continue;
          const kG = GG[YG],
            VG = typeof kG;
          if ("function" !== VG) try {
            if ("object" === VG)
              if (kG instanceof Uint8Array) bG[YG] = Uint8Array.from(kG);
              else if (kG instanceof Array) {
              if (bG[YG] = [], kG.length > 0)
                if ("object" == typeof kG[0])
                  for (let GG = 0; GG < kG.length; GG++) {
                    const ZG = SG(kG[GG], bG, yG); - 1 === bG[YG].indexOf(ZG) && bG[YG].push(ZG)
                  } else bG[YG] = kG.slice(0)
            } else bG[YG] = SG(kG, bG, yG);
            else bG[YG] = kG
          } catch (UG) {
            wG.c.Warn(UG.message)
          }
        }
      }
    }
  },
  38311: (GG, bG, ZG) => {
    function wG() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (GG => {
        const bG = 16 * Math.random() | 0;
        return ("x" === GG ? bG : 3 & bG | 8).toString(16)
      }))
    }
    ZG.d(bG, {
      e: () => wG
    })
  },
  39093: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      static _CheckLimit(GG, bG) {
        let ZG = wG._LogLimitOutputs[GG];
        return ZG ? ZG.current++ : (ZG = {
          limit: bG,
          current: 1
        }, wG._LogLimitOutputs[GG] = ZG), ZG.current <= ZG.limit
      }
      static _GenerateLimitMessage(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZG = wG._LogLimitOutputs[GG];
        if (!ZG || !wG.MessageLimitReached) return;
        const SG = this._Levels[bG];
        ZG.current === ZG.limit && wG[SG.name](wG.MessageLimitReached.replace(/%LIMIT%/g, "" + ZG.limit).replace(/%TYPE%/g, SG.name ?? ""))
      }
      static _AddLogEntry(GG) {
        wG._LogCache = GG + wG._LogCache, wG.OnNewCacheEntry && wG.OnNewCacheEntry(GG)
      }
      static _FormatMessage(GG) {
        const bG = GG => GG < 10 ? "0" + GG : "" + GG,
          ZG = new Date;
        return "[" + bG(ZG.getHours()) + ":" + bG(ZG.getMinutes()) + ":" + bG(ZG.getSeconds()) + "]: " + GG
      }
      static _LogDisabled(GG, bG) {}
      static _LogEnabled() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const SG = Array.isArray(bG) ? bG[0] : bG;
        if (void 0 !== ZG && !wG._CheckLimit(SG, ZG)) return;
        const LG = wG._FormatMessage(SG),
          yG = this._Levels[GG],
          kG = Array.isArray(bG) ? bG.slice(1) : [];
        yG.logFunc && yG.logFunc("BJS - " + LG, ...kG);
        const UG = `<div style='color:${yG.color}'>${LG}</div><br>`;
        wG._AddLogEntry(UG), wG._GenerateLimitMessage(SG, GG)
      }
      static get LogCache() {
        return wG._LogCache
      }
      static ClearLogCache() {
        wG._LogCache = "", wG._LogLimitOutputs = {}, wG.errorsCount = 0
      }
      static set LogLevels(GG) {
        wG.Log = wG._LogDisabled, wG.Warn = wG._LogDisabled, wG.Error = wG._LogDisabled;
        const bG = [wG.MessageLogLevel, wG.WarningLogLevel, wG.ErrorLogLevel];
        for (const ZG of bG)
          if ((GG & ZG) === ZG) {
            const GG = this._Levels[ZG];
            wG[GG.name] = wG._LogEnabled.bind(wG, ZG)
          }
      }
    }
    wG.NoneLogLevel = 0, wG.MessageLogLevel = 1, wG.WarningLogLevel = 2, wG.ErrorLogLevel = 4, wG.AllLogLevel = 7, wG.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wG._LogCache = "", wG._LogLimitOutputs = {}, wG._Levels = [{}, {
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
    }], wG.errorsCount = 0, wG.Log = wG._LogEnabled.bind(wG, wG.MessageLogLevel), wG.Warn = wG._LogEnabled.bind(wG, wG.WarningLogLevel), wG.Error = wG._LogEnabled.bind(wG, wG.ErrorLogLevel)
  },
  40467: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG.f
    });
    var wG = ZG(40475);
    (0, wG.d)()
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);