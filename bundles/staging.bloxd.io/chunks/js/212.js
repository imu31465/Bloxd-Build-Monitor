export const id = 212;
export const ids = [212, 217, 220];
export const modules = {
  39006: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      e: () => AJ
    });
    var FJ = ZJ(37660),
      UJ = ZJ(38822),
      eJ = ZJ(38986),
      XJ = {};
    class AJ {
      constructor(JJ) {
        this.attachedToElement = !1, this.attached = {}, this.camera = JJ, this.checkInputs = () => {}
      }
      add(JJ) {
        const cJ = JJ.getSimpleName();
        this.attached[cJ] ? FJ.c.Warn("camera input of type " + cJ + " already exists on camera") : (this.attached[cJ] = JJ, JJ.camera = this.camera, JJ.checkInputs && (this.checkInputs = this._addCheckInputs(JJ.checkInputs.bind(JJ))), this.attachedToElement && JJ.attachControl(this.noPreventDefault))
      }
      remove(JJ) {
        for (const cJ in this.attached) {
          const ZJ = this.attached[cJ];
          if (ZJ === JJ) return ZJ.detachControl(), ZJ.camera = null, delete this.attached[cJ], void this.rebuildInputCheck()
        }
      }
      removeByType(JJ) {
        for (const cJ in this.attached) {
          const ZJ = this.attached[cJ];
          ZJ.getClassName() === JJ && (ZJ.detachControl(), ZJ.camera = null, delete this.attached[cJ], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(JJ) {
        const cJ = this.checkInputs;
        return () => {
          cJ(), JJ()
        }
      }
      attachInput(JJ) {
        this.attachedToElement && JJ.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          JJ = !eJ.e.ForceAttachControlToAlwaysPreventDefault && JJ, this.attachedToElement = !0, this.noPreventDefault = JJ;
          for (const cJ in this.attached) this.attached[cJ].attachControl(JJ)
        }
      }
      detachElement() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const cJ in this.attached) this.attached[cJ].detachControl(), JJ && (this.attached[cJ].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const JJ in this.attached) {
          const cJ = this.attached[JJ];
          cJ.checkInputs && (this.checkInputs = this._addCheckInputs(cJ.checkInputs.bind(cJ)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(JJ) {
        const cJ = {};
        for (const ZJ in this.attached) {
          const JJ = this.attached[ZJ],
            FJ = UJ.c.Serialize(JJ);
          cJ[JJ.getClassName()] = FJ
        }
        JJ.inputsmgr = cJ
      }
      parse(JJ) {
        const cJ = JJ.inputsmgr;
        if (cJ) {
          this.clear();
          for (const JJ in cJ) {
            const ZJ = XJ[JJ];
            if (ZJ) {
              const FJ = cJ[JJ],
                eJ = UJ.c.Parse((() => new ZJ), FJ, null);
              this.add(eJ)
            }
          }
        } else
          for (const ZJ in this.attached) {
            const cJ = XJ[this.attached[ZJ].getClassName()];
            if (cJ) {
              const FJ = UJ.c.Parse((() => new cJ), JJ, null);
              this.remove(this.attached[ZJ]), this.add(FJ)
            }
          }
      }
    }
  },
  39009: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ.e
    });
    var FJ = ZJ(39015);
    (0, FJ.f)()
  },
  39015: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => YJ,
      f: () => DJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(36174),
      XJ = ZJ(36231),
      AJ = ZJ(39023),
      qJ = ZJ(38989),
      jJ = ZJ(36216);
    let YJ = (() => {
        var JJ;
        let cJ, ZJ, qJ = AJ.b,
          jJ = [],
          YJ = [],
          hJ = [],
          DJ = [];
        return JJ = class extends qJ {
          constructor(JJ, cJ, ZJ, UJ) {
            super(JJ, ZJ, UJ), this.groundColor = (0, FJ.e)(this, jJ, new XJ.e(0, 0, 0)), this.direction = ((0, FJ.e)(this, YJ), (0, FJ.e)(this, hJ, void 0)), (0, FJ.e)(this, DJ), this.direction = cJ || eJ.j.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(JJ) {
            return this.direction = eJ.j.Normalize(JJ.subtract(eJ.j.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(JJ, cJ) {
            const ZJ = eJ.j.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ZJ.x, ZJ.y, ZJ.z, 0, cJ), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), cJ), this
          }
          transferToNodeMaterialEffect(JJ, cJ) {
            const ZJ = eJ.j.Normalize(this.direction);
            return JJ.setFloat3(cJ, ZJ.x, ZJ.y, ZJ.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = eJ.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return AJ.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(JJ, cJ) {
            JJ["HEMILIGHT" + cJ] = !0
          }
        }, (() => {
          const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(qJ[Symbol.metadata] ?? null) : void 0;
          cJ = [(0, UJ.m)()], ZJ = [(0, UJ.E)()], (0, FJ.d)(null, null, cJ, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "groundColor" in JJ,
              get: JJ => JJ.groundColor,
              set: (JJ, cJ) => {
                JJ.groundColor = cJ
              }
            },
            metadata: eJ
          }, jJ, YJ), (0, FJ.d)(null, null, ZJ, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: JJ => "direction" in JJ,
              get: JJ => JJ.direction,
              set: (JJ, cJ) => {
                JJ.direction = cJ
              }
            },
            metadata: eJ
          }, hJ, DJ), eJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eJ
          })
        })(), JJ
      })(),
      hJ = !1;

    function DJ() {
      hJ || (hJ = !0, qJ.b.AddNodeConstructor("Light_Type_3", ((JJ, cJ) => () => new YJ(JJ, eJ.j.Zero(), cJ))), (0, jJ.f)("BABYLON.HemisphericLight", YJ))
    }
  },
  36229: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      Color3: () => FJ.e,
      e: () => FJ.f
    });
    var FJ = ZJ(36231);
    (0, FJ.g)()
  },
  36742: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(36744);
    class UJ {
      static GetPlanes(JJ) {
        const cJ = [];
        for (let ZJ = 0; ZJ < 6; ZJ++) cJ.push(new FJ.c(0, 0, 0, 0));
        return UJ.GetPlanesToRef(JJ, cJ), cJ
      }
      static GetNearPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[2], cJ.normal.y = ZJ[7] + ZJ[6], cJ.normal.z = ZJ[11] + ZJ[10], cJ.d = ZJ[15] + ZJ[14], cJ.normalize()
      }
      static GetFarPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[2], cJ.normal.y = ZJ[7] - ZJ[6], cJ.normal.z = ZJ[11] - ZJ[10], cJ.d = ZJ[15] - ZJ[14], cJ.normalize()
      }
      static GetLeftPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[0], cJ.normal.y = ZJ[7] + ZJ[4], cJ.normal.z = ZJ[11] + ZJ[8], cJ.d = ZJ[15] + ZJ[12], cJ.normalize()
      }
      static GetRightPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[0], cJ.normal.y = ZJ[7] - ZJ[4], cJ.normal.z = ZJ[11] - ZJ[8], cJ.d = ZJ[15] - ZJ[12], cJ.normalize()
      }
      static GetTopPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[1], cJ.normal.y = ZJ[7] - ZJ[5], cJ.normal.z = ZJ[11] - ZJ[9], cJ.d = ZJ[15] - ZJ[13], cJ.normalize()
      }
      static GetBottomPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[1], cJ.normal.y = ZJ[7] + ZJ[5], cJ.normal.z = ZJ[11] + ZJ[9], cJ.d = ZJ[15] + ZJ[13], cJ.normalize()
      }
      static GetPlanesToRef(JJ, cJ) {
        UJ.GetNearPlaneToRef(JJ, cJ[0]), UJ.GetFarPlaneToRef(JJ, cJ[1]), UJ.GetLeftPlaneToRef(JJ, cJ[2]), UJ.GetRightPlaneToRef(JJ, cJ[3]), UJ.GetTopPlaneToRef(JJ, cJ[4]), UJ.GetBottomPlaneToRef(JJ, cJ[5])
      }
      static IsPointInFrustum(JJ, cJ) {
        for (let ZJ = 0; ZJ < 6; ZJ++)
          if (cJ[ZJ].dotCoordinate(JJ) < 0) return !1;
        return !0
      }
    }
  },
  36744: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(36174);
    class UJ {
      constructor(JJ, cJ, ZJ, UJ) {
        this.normal = new FJ.j(JJ, cJ, ZJ), this.d = UJ
      }
      JFJ() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new UJ(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let JJ = this.normal.getHashCode();
        return JJ = 397 * JJ ^ this.d, JJ
      }
      normalize() {
        const JJ = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let cJ = 0;
        return 0 !== JJ && (cJ = 1 / JJ), this.normal.x *= cJ, this.normal.y *= cJ, this.normal.z *= cJ, this.d *= cJ, this
      }
      transform(JJ) {
        const cJ = UJ._TmpMatrix;
        JJ.invertToRef(cJ);
        const ZJ = cJ.m,
          FJ = this.normal.x,
          eJ = this.normal.y,
          XJ = this.normal.z,
          AJ = this.d,
          qJ = FJ * ZJ[0] + eJ * ZJ[1] + XJ * ZJ[2] + AJ * ZJ[3],
          jJ = FJ * ZJ[4] + eJ * ZJ[5] + XJ * ZJ[6] + AJ * ZJ[7],
          YJ = FJ * ZJ[8] + eJ * ZJ[9] + XJ * ZJ[10] + AJ * ZJ[11],
          hJ = FJ * ZJ[12] + eJ * ZJ[13] + XJ * ZJ[14] + AJ * ZJ[15];
        return new UJ(qJ, jJ, YJ, hJ)
      }
      dotCoordinate(JJ) {
        return this.normal.x * JJ.x + this.normal.y * JJ.y + this.normal.z * JJ.z + this.d
      }
      copyFromPoints(JJ, cJ, ZJ) {
        const FJ = cJ.x - JJ.x,
          UJ = cJ.y - JJ.y,
          eJ = cJ.z - JJ.z,
          XJ = ZJ.x - JJ.x,
          AJ = ZJ.y - JJ.y,
          qJ = ZJ.z - JJ.z,
          jJ = UJ * qJ - eJ * AJ,
          YJ = eJ * XJ - FJ * qJ,
          hJ = FJ * AJ - UJ * XJ,
          DJ = Math.sqrt(jJ * jJ + YJ * YJ + hJ * hJ);
        let sJ;
        return sJ = 0 !== DJ ? 1 / DJ : 0, this.normal.x = jJ * sJ, this.normal.y = YJ * sJ, this.normal.z = hJ * sJ, this.d = -(this.normal.x * JJ.x + this.normal.y * JJ.y + this.normal.z * JJ.z), this
      }
      isFrontFacingTo(JJ, cJ) {
        return FJ.j.Dot(this.normal, JJ) <= cJ
      }
      signedDistanceTo(JJ) {
        return FJ.j.Dot(JJ, this.normal) + this.d
      }
      static FromArray(JJ) {
        return new UJ(JJ[0], JJ[1], JJ[2], JJ[3])
      }
      static FromPoints(JJ, cJ, ZJ) {
        const FJ = new UJ(0, 0, 0, 0);
        return FJ.copyFromPoints(JJ, cJ, ZJ), FJ
      }
      static FromPositionAndNormal(JJ, cJ) {
        const ZJ = new UJ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(JJ, cJ, ZJ)
      }
      static FromPositionAndNormalToRef(JJ, cJ, ZJ) {
        return ZJ.normal.rZJ(cJ), ZJ.normal.normalize(), ZJ.d = -JJ.dot(ZJ.normal), ZJ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(JJ, cJ, ZJ) {
        const UJ = -(cJ.x * JJ.x + cJ.y * JJ.y + cJ.z * JJ.z);
        return FJ.j.Dot(ZJ, cJ) + UJ
      }
    }
    UJ._TmpMatrix = FJ.b.Identity()
  },
  36165: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      Matrix: () => FJ.b,
      Quaternion: () => FJ.e,
      RegisterMathVector: () => FJ.f,
      TmpVectors: () => FJ.h,
      Vector2: () => FJ.i,
      Pn: () => FJ.j,
      Vector4: () => FJ.k
    });
    var FJ = ZJ(36174);
    (0, FJ.f)()
  },
  37100: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    class FJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.x = JJ, this.y = cJ, this.width = ZJ, this.height = FJ
      }
      toGlobal(JJ, cJ) {
        return new FJ(this.x * JJ, this.y * cJ, this.width * JJ, this.height * cJ)
      }
      toGlobalToRef(JJ, cJ, ZJ) {
        return ZJ.x = this.x * JJ, ZJ.y = this.y * cJ, ZJ.width = this.width * JJ, ZJ.height = this.height * cJ, this
      }
      clone() {
        return new FJ(this.x, this.y, this.width, this.height)
      }
    }
  },
  39156: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => jJ
    });
    var FJ = ZJ(36174),
      UJ = ZJ(36231),
      eJ = ZJ(39159),
      XJ = ZJ(39170),
      AJ = ZJ(39193);

    function qJ(JJ) {
      let cJ = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const ZJ = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        eJ = [],
        qJ = JJ.width || JJ.size || 1,
        jJ = JJ.height || JJ.size || 1,
        YJ = JJ.depth || JJ.size || 1,
        hJ = JJ.wrap || !1;
      let DJ = void 0 === JJ.topBaseAt ? 1 : JJ.topBaseAt,
        sJ = void 0 === JJ.bottomBaseAt ? 0 : JJ.bottomBaseAt;
      DJ = (DJ + 4) % 4, sJ = (sJ + 4) % 4;
      let nJ = [2, 0, 3, 1][DJ],
        GJ = [2, 0, 1, 3][sJ],
        fJ = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (hJ) {
        cJ = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], fJ = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let JJ = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          ZJ = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const FJ = [17, 18, 19, 16],
          UJ = [22, 23, 20, 21];
        for (; nJ > 0;) JJ.unshift(JJ.pop()), FJ.unshift(FJ.pop()), nJ--;
        for (; GJ > 0;) ZJ.unshift(ZJ.pop()), UJ.unshift(UJ.pop()), GJ--;
        JJ = JJ.flat(), ZJ = ZJ.flat(), fJ = fJ.concat(JJ).concat(ZJ), cJ.push(FJ[0], FJ[2], FJ[3], FJ[0], FJ[1], FJ[2]), cJ.push(UJ[0], UJ[2], UJ[3], UJ[0], UJ[1], UJ[2])
      }
      const xJ = [qJ / 2, jJ / 2, YJ / 2],
        rJ = fJ.reduce(((JJ, cJ, ZJ) => JJ.concat(cJ * xJ[ZJ % 3])), []),
        vJ = 0 === JJ.sideOrientation ? 0 : JJ.sideOrientation || XJ.e.DEFAULTSIDE,
        mJ = JJ.faceUV || new Array(6),
        QJ = JJ.faceColors,
        EJ = [];
      for (let XJ = 0; XJ < 6; XJ++) void 0 === mJ[XJ] && (mJ[XJ] = new FJ.k(0, 0, 1, 1)), QJ && void 0 === QJ[XJ] && (QJ[XJ] = new UJ.f(1, 1, 1, 1));
      for (let FJ = 0; FJ < 6; FJ++)
        if (eJ.push(mJ[FJ].z, AJ.d ? 1 - mJ[FJ].w : mJ[FJ].w), eJ.push(mJ[FJ].x, AJ.d ? 1 - mJ[FJ].w : mJ[FJ].w), eJ.push(mJ[FJ].x, AJ.d ? 1 - mJ[FJ].y : mJ[FJ].y), eJ.push(mJ[FJ].z, AJ.d ? 1 - mJ[FJ].y : mJ[FJ].y), QJ)
          for (let JJ = 0; JJ < 4; JJ++) EJ.push(QJ[FJ].r, QJ[FJ].g, QJ[FJ].b, QJ[FJ].a);
      XJ.e._ComputeSides(vJ, rJ, cJ, ZJ, eJ, JJ.frontUVs, JJ.backUVs);
      const VJ = new XJ.e;
      if (VJ.indices = cJ, VJ.positions = rJ, VJ.normals = ZJ, VJ.uvs = eJ, QJ) {
        const JJ = vJ === XJ.e.DOUBLESIDE ? EJ.concat(EJ) : EJ;
        VJ.colors = JJ
      }
      return VJ
    }

    function jJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const FJ = new eJ.d(JJ, ZJ);
      cJ.sideOrientation = eJ.d._GetDefaultSideOrientation(cJ.sideOrientation), FJ._originalBuilderSideOrientation = cJ.sideOrientation;
      return qJ(cJ).applyToMesh(FJ, cJ.updatable), FJ
    }
    let YJ = !1;
    YJ || (YJ = !0, XJ.e.CreateBox = qJ, eJ.d.CreateBox = function(JJ, cJ) {
      return jJ(JJ, {
        size: cJ,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  39219: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => hJ
    });
    var FJ = ZJ(36174),
      UJ = ZJ(39159),
      eJ = ZJ(39170),
      XJ = ZJ(39224),
      AJ = ZJ(38918),
      qJ = ZJ(37660);

    function jJ(JJ) {
      const cJ = [],
        ZJ = [],
        FJ = JJ.lines,
        UJ = JJ.colors,
        XJ = [];
      let AJ = 0;
      for (let eJ = 0; eJ < FJ.length; eJ++) {
        const JJ = FJ[eJ];
        for (let FJ = 0; FJ < JJ.length; FJ++) {
          const {
            x: qJ,
            y: jJ,
            z: YJ
          } = JJ[FJ];
          if (ZJ.push(qJ, jJ, YJ), UJ) {
            const JJ = UJ[eJ],
              {
                r: cJ,
                g: ZJ,
                b: AJ,
                a: qJ
              } = JJ[FJ];
            XJ.push(cJ, ZJ, AJ, qJ)
          }
          FJ > 0 && (cJ.push(AJ - 1), cJ.push(AJ)), AJ++
        }
      }
      const qJ = new eJ.e;
      return qJ.indices = cJ, qJ.positions = ZJ, UJ && (qJ.colors = XJ), qJ
    }

    function YJ(JJ) {
      const cJ = JJ.dashSize || 3,
        ZJ = JJ.gapSize || 1,
        UJ = JJ.dashNb || 200,
        XJ = JJ.points,
        AJ = [],
        qJ = [],
        jJ = FJ.j.Zero();
      let YJ, hJ, DJ, sJ = 0,
        nJ = 0;
      for (DJ = 0; DJ < XJ.length - 1; DJ++) XJ[DJ + 1].subtractToRef(XJ[DJ], jJ), sJ += jJ.length();
      const GJ = sJ / UJ,
        fJ = cJ * GJ / (cJ + ZJ);
      for (DJ = 0; DJ < XJ.length - 1; DJ++) {
        XJ[DJ + 1].subtractToRef(XJ[DJ], jJ), YJ = Math.floor(jJ.length() / GJ), jJ.normalize();
        for (let JJ = 0; JJ < YJ; JJ++) hJ = GJ * JJ, AJ.push(XJ[DJ].x + hJ * jJ.x, XJ[DJ].y + hJ * jJ.y, XJ[DJ].z + hJ * jJ.z), AJ.push(XJ[DJ].x + (hJ + fJ) * jJ.x, XJ[DJ].y + (hJ + fJ) * jJ.y, XJ[DJ].z + (hJ + fJ) * jJ.z), qJ.push(nJ, nJ + 1), nJ += 2
      }
      const xJ = new eJ.e;
      return xJ.positions = AJ, xJ.indices = qJ, xJ
    }

    function hJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const FJ = cJ.instance,
        UJ = cJ.lines,
        eJ = cJ.colors;
      if (FJ) {
        const JJ = FJ.getVerticesData(AJ.n.PositionKind);
        let cJ, ZJ;
        eJ && (cJ = FJ.getVerticesData(AJ.n.ColorKind));
        let XJ = 0,
          qJ = 0;
        for (let FJ = 0; FJ < UJ.length; FJ++) {
          const AJ = UJ[FJ];
          for (let UJ = 0; UJ < AJ.length; UJ++) JJ[XJ] = AJ[UJ].x, JJ[XJ + 1] = AJ[UJ].y, JJ[XJ + 2] = AJ[UJ].z, eJ && cJ && (ZJ = eJ[FJ], cJ[qJ] = ZJ[UJ].r, cJ[qJ + 1] = ZJ[UJ].g, cJ[qJ + 2] = ZJ[UJ].b, cJ[qJ + 3] = ZJ[UJ].a, qJ += 4), XJ += 3
        }
        return FJ.updateVerticesData(AJ.n.PositionKind, JJ, !1, !1), eJ && cJ && FJ.updateVerticesData(AJ.n.ColorKind, cJ, !1, !1), FJ.refreshBoundingInfo(), FJ
      }
      const qJ = !!eJ,
        YJ = new XJ.b(JJ, ZJ, null, void 0, void 0, qJ, cJ.useVertexAlpha, cJ.material);
      return jJ(cJ).applyToMesh(YJ, cJ.updatable), YJ
    }

    function DJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const FJ = cJ.colors ? [cJ.colors] : null;
      return hJ(JJ, {
        lines: [cJ.points],
        updatable: cJ.updatable,
        instance: cJ.instance,
        colors: FJ,
        useVertexAlpha: cJ.useVertexAlpha,
        material: cJ.material
      }, ZJ)
    }

    function sJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const eJ = cJ.points,
        AJ = cJ.instance,
        jJ = cJ.gapSize || 1,
        hJ = cJ.dashSize || 3;
      if (AJ) {
        const JJ = JJ => {
          const cJ = FJ.j.Zero(),
            ZJ = JJ.length / 6;
          let UJ, XJ, qJ, jJ, YJ = 0,
            hJ = 0;
          for (qJ = 0; qJ < eJ.length - 1; qJ++) eJ[qJ + 1].subtractToRef(eJ[qJ], cJ), YJ += cJ.length();
          const DJ = YJ / ZJ,
            sJ = AJ._creationDataStorage.dashSize,
            nJ = sJ * DJ / (sJ + AJ._creationDataStorage.gapSize);
          for (qJ = 0; qJ < eJ.length - 1; qJ++)
            for (eJ[qJ + 1].subtractToRef(eJ[qJ], cJ), UJ = Math.floor(cJ.length() / DJ), cJ.normalize(), jJ = 0; jJ < UJ && hJ < JJ.length;) XJ = DJ * jJ, JJ[hJ] = eJ[qJ].x + XJ * cJ.x, JJ[hJ + 1] = eJ[qJ].y + XJ * cJ.y, JJ[hJ + 2] = eJ[qJ].z + XJ * cJ.z, JJ[hJ + 3] = eJ[qJ].x + (XJ + nJ) * cJ.x, JJ[hJ + 4] = eJ[qJ].y + (XJ + nJ) * cJ.y, JJ[hJ + 5] = eJ[qJ].z + (XJ + nJ) * cJ.z, hJ += 6, jJ++;
          for (; hJ < JJ.length;) JJ[hJ] = eJ[qJ].x, JJ[hJ + 1] = eJ[qJ].y, JJ[hJ + 2] = eJ[qJ].z, hJ += 3
        };
        return (cJ.dashNb || cJ.dashSize || cJ.gapSize || cJ.useVertexAlpha || cJ.material) && qJ.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), AJ.updateMeshPositions(JJ, !1), AJ
      }
      const DJ = new XJ.b(JJ, ZJ, null, void 0, void 0, void 0, cJ.useVertexAlpha, cJ.material);
      return YJ(cJ).applyToMesh(DJ, cJ.updatable), DJ._creationDataStorage = new UJ.h, DJ._creationDataStorage.dashSize = hJ, DJ._creationDataStorage.gapSize = jJ, DJ
    }
    let nJ = !1;
    nJ || (nJ = !0, eJ.e.CreateLineSystem = jJ, eJ.e.CreateDashedLines = YJ, UJ.d.CreateLines = function(JJ, cJ) {
      return DJ(JJ, {
        points: cJ,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, UJ.d.CreateDashedLines = function(JJ, cJ, ZJ, FJ, UJ) {
      return sJ(JJ, {
        points: cJ,
        dashSize: ZJ,
        gapSize: FJ,
        dashNb: UJ,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  39224: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => DJ,
      e: () => GJ
    });
    var FJ, UJ, eJ = ZJ(36231),
      XJ = ZJ(38918),
      AJ = ZJ(39159),
      qJ = ZJ(39227),
      jJ = ZJ(39049),
      YJ = ZJ(39234),
      hJ = ZJ(38677);
    class DJ extends AJ.d {
      _isShaderMaterial(JJ) {
        return !!JJ && "ShaderMaterial" === JJ.getClassName()
      }
      constructor(JJ) {
        let cJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          FJ = arguments.length > 5 ? arguments[5] : void 0,
          UJ = arguments.length > 6 ? arguments[6] : void 0,
          AJ = arguments.length > 7 ? arguments[7] : void 0;
        super(JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, cJ, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = FJ, this.useVertexAlpha = UJ, this.color = new eJ.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, cJ && (this.color = cJ.color.clone(), this.alpha = cJ.alpha, this.useVertexColor = cJ.useVertexColor, this.useVertexAlpha = cJ.useVertexAlpha), this.intersectionThreshold = .1;
        const qJ = {
          attributes: [XJ.n.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? qJ.defines.push("#define VERTEXALPHA") : qJ.needAlphaBlending = !1, this.useVertexColor ? (qJ.defines.push("#define VERTEXCOLOR"), qJ.attributes.push(XJ.n.ColorKind)) : (qJ.uniforms.push("color"), this._color4 = new eJ.f), AJ) this.material = AJ;
        else {
          this.Qy().gn().isWebGPU && !DJ.ForceGLSL && (this._shaderLanguage = 1), qJ.shaderLanguage = this._shaderLanguage, qJ.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([ZJ.e(324).then((() => ZJ(41211))), ZJ.e(330).then((() => ZJ(41219)))]) : await Promise.all([ZJ.e(306).then((() => ZJ(41222))), ZJ.e(312).then((() => ZJ(41230)))])
          };
          const JJ = new YJ.t("colorShader", this.Qy(), "color", qJ, !1);
          JJ.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(JJ)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(JJ) {
        const cJ = this.material;
        if (cJ === JJ) return;
        const ZJ = cJ && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(JJ), ZJ && cJ?.dispose()
      }
      _setInternalMaterial(JJ) {
        this._setMaterial(JJ), this.material && (this.material.fillMode = jJ.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(JJ) {}
      _bind(JJ, cJ) {
        if (!this._geometry) return this;
        const ZJ = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(cJ, ZJ) : this._geometry._bind(cJ, ZJ, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: JJ,
            g: cJ,
            b: ZJ
          } = this.color;
          this._color4.set(JJ, cJ, ZJ, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(JJ, cJ, ZJ) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const FJ = this.Qy().gn();
        return this._unIndexed ? FJ.drawArraysType(jJ.c.LineListDrawMode, JJ.verticesStart, JJ.verticesCount, ZJ) : FJ.drawElementsType(jJ.c.LineListDrawMode, JJ.indexStart, JJ.indexCount, ZJ), this
      }
      dispose(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || cJ) && this.material?.dispose(!1, !1, !0), super.dispose(JJ)
      }
      clone(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        if (cJ && void 0 === cJ._addToSceneRootNodes) {
          const ZJ = cJ;
          return ZJ.source = this, new DJ(JJ, this.Qy(), ZJ.parent, ZJ.source, ZJ.doNotCloneChildren)
        }
        return new DJ(JJ, this.Qy(), cJ, this, ZJ)
      }
      createInstance(JJ) {
        const cJ = new sJ(JJ, this);
        if (this.HI) {
          cJ.HI = {};
          for (const JJ in this.HI) cJ.HI[JJ] = this.HI[JJ]
        }
        return cJ
      }
      serialize(JJ) {
        super.serialize(JJ), JJ.color = this.color.JFJ(), JJ.alpha = this.alpha
      }
      static Parse(JJ, cJ) {
        const ZJ = new DJ(JJ.name, cJ);
        return ZJ.color = eJ.e.FromArray(JJ.color), ZJ.alpha = JJ.alpha, ZJ
      }
    }
    DJ.ForceGLSL = !1;
    class sJ extends qJ.b {
      constructor(JJ, cJ) {
        super(JJ, cJ), this.intersectionThreshold = cJ.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let nJ = !1;

    function GJ() {
      nJ || (nJ = !0, AJ.d._LinesMeshParser = (JJ, cJ) => DJ.Parse(JJ, cJ))
    }(FJ = DJ.prototype).enableEdgesRendering ?? (FJ.enableEdgesRendering = (0, hJ.l)("LinesMesh", "enableEdgesRendering")), (UJ = sJ.prototype).enableEdgesRendering ?? (UJ.enableEdgesRendering = (0, hJ.l)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  37658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ
    });
    var FJ = ZJ(37660);
    const UJ = (JJ, cJ, ZJ) => JJ ? JJ.getClassName && "Mesh" === JJ.getClassName() ? null : !JJ.getClassName || "SubMesh" !== JJ.getClassName() && "PhysicsBody" !== JJ.getClassName() ? JJ.clone ? JJ.clone() : Array.isArray(JJ) ? JJ.slice() : ZJ && "object" === typeof JJ ? {
      ...JJ
    } : null : JJ.clone(cJ) : null;
    class eJ {
      static DeepCopy(JJ, cJ, ZJ, eJ) {
        let XJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const AJ = function(JJ) {
          const cJ = [];
          do {
            const ZJ = Object.getOwnPropertyNames(JJ);
            for (const JJ of ZJ) - 1 === cJ.indexOf(JJ) && cJ.push(JJ)
          } while (JJ = Object.getPrototypeOf(JJ));
          return cJ
        }(JJ);
        for (const jJ of AJ) {
          if ("_" === jJ[0] && (!eJ || -1 === eJ.indexOf(jJ))) continue;
          if (jJ.endsWith("Observable")) continue;
          if (ZJ && -1 !== ZJ.indexOf(jJ)) continue;
          const AJ = JJ[jJ],
            YJ = typeof AJ;
          if ("function" !== YJ) try {
            if ("object" === YJ)
              if (AJ instanceof Uint8Array) cJ[jJ] = Uint8Array.from(AJ);
              else if (AJ instanceof Array) {
              if (cJ[jJ] = [], AJ.length > 0)
                if ("object" == typeof AJ[0])
                  for (let JJ = 0; JJ < AJ.length; JJ++) {
                    const ZJ = UJ(AJ[JJ], cJ, XJ); - 1 === cJ[jJ].indexOf(ZJ) && cJ[jJ].push(ZJ)
                  } else cJ[jJ] = AJ.slice(0)
            } else cJ[jJ] = UJ(AJ, cJ, XJ);
            else cJ[jJ] = AJ
          } catch (qJ) {
            FJ.c.Warn(qJ.message)
          }
        }
      }
    }
  },
  36865: (JJ, cJ, ZJ) => {
    function FJ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (JJ => {
        const cJ = 16 * Math.random() | 0;
        return ("x" === JJ ? cJ : 3 & cJ | 8).toString(16)
      }))
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  },
  37660: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    class FJ {
      static _CheckLimit(JJ, cJ) {
        let ZJ = FJ._LogLimitOutputs[JJ];
        return ZJ ? ZJ.current++ : (ZJ = {
          limit: cJ,
          current: 1
        }, FJ._LogLimitOutputs[JJ] = ZJ), ZJ.current <= ZJ.limit
      }
      static _GenerateLimitMessage(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZJ = FJ._LogLimitOutputs[JJ];
        if (!ZJ || !FJ.MessageLimitReached) return;
        const UJ = this._Levels[cJ];
        ZJ.current === ZJ.limit && FJ[UJ.name](FJ.MessageLimitReached.replace(/%LIMIT%/g, "" + ZJ.limit).replace(/%TYPE%/g, UJ.name ?? ""))
      }
      static _AddLogEntry(JJ) {
        FJ._LogCache = JJ + FJ._LogCache, FJ.OnNewCacheEntry && FJ.OnNewCacheEntry(JJ)
      }
      static _FormatMessage(JJ) {
        const cJ = JJ => JJ < 10 ? "0" + JJ : "" + JJ,
          ZJ = new Date;
        return "[" + cJ(ZJ.getHours()) + ":" + cJ(ZJ.getMinutes()) + ":" + cJ(ZJ.getSeconds()) + "]: " + JJ
      }
      static _LogDisabled(JJ, cJ) {}
      static _LogEnabled() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const UJ = Array.isArray(cJ) ? cJ[0] : cJ;
        if (void 0 !== ZJ && !FJ._CheckLimit(UJ, ZJ)) return;
        const eJ = FJ._FormatMessage(UJ),
          XJ = this._Levels[JJ],
          AJ = Array.isArray(cJ) ? cJ.slice(1) : [];
        XJ.logFunc && XJ.logFunc("BJS - " + eJ, ...AJ);
        const qJ = `<div style='color:${XJ.color}'>${eJ}</div><br>`;
        FJ._AddLogEntry(qJ), FJ._GenerateLimitMessage(UJ, JJ)
      }
      static get LogCache() {
        return FJ._LogCache
      }
      static ClearLogCache() {
        FJ._LogCache = "", FJ._LogLimitOutputs = {}, FJ.errorsCount = 0
      }
      static set LogLevels(JJ) {
        FJ.Log = FJ._LogDisabled, FJ.Warn = FJ._LogDisabled, FJ.Error = FJ._LogDisabled;
        const cJ = [FJ.MessageLogLevel, FJ.WarningLogLevel, FJ.ErrorLogLevel];
        for (const ZJ of cJ)
          if ((JJ & ZJ) === ZJ) {
            const JJ = this._Levels[ZJ];
            FJ[JJ.name] = FJ._LogEnabled.bind(FJ, ZJ)
          }
      }
    }
    FJ.NoneLogLevel = 0, FJ.MessageLogLevel = 1, FJ.WarningLogLevel = 2, FJ.ErrorLogLevel = 4, FJ.AllLogLevel = 7, FJ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", FJ._LogCache = "", FJ._LogLimitOutputs = {}, FJ._Levels = [{}, {
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
    }], FJ.errorsCount = 0, FJ.Log = FJ._LogEnabled.bind(FJ, FJ.MessageLogLevel), FJ.Warn = FJ._LogEnabled.bind(FJ, FJ.WarningLogLevel), FJ.Error = FJ._LogEnabled.bind(FJ, FJ.ErrorLogLevel)
  },
  38872: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ.e
    });
    var FJ = ZJ(38874);
    (0, FJ.d)()
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);