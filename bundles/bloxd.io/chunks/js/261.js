export const id = 261;
export const ids = [261, 267, 272];
export const modules = {
  41764: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR,
      i: () => qR
    });
    var yR = GR(39914),
      tR = GR(41542),
      uR = GR(41732),
      ZR = {};
    class qR {
      constructor(RR) {
        this.attachedToElement = !1, this.attached = {}, this.camera = RR, this.checkInputs = () => {}
      }
      add(RR) {
        const JR = RR.getSimpleName();
        this.attached[JR] ? yR.c.Warn("camera input of type " + JR + " already exists on camera") : (this.attached[JR] = RR, RR.camera = this.camera, RR.checkInputs && (this.checkInputs = this._addCheckInputs(RR.checkInputs.bind(RR))), this.attachedToElement && RR.attachControl(this.noPreventDefault))
      }
      remove(RR) {
        for (const JR in this.attached) {
          const GR = this.attached[JR];
          if (GR === RR) return GR.detachControl(), GR.camera = null, delete this.attached[JR], void this.rebuildInputCheck()
        }
      }
      removeByType(RR) {
        for (const JR in this.attached) {
          const GR = this.attached[JR];
          GR.getClassName() === RR && (GR.detachControl(), GR.camera = null, delete this.attached[JR], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(RR) {
        const JR = this.checkInputs;
        return () => {
          JR(), RR()
        }
      }
      attachInput(RR) {
        this.attachedToElement && RR.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          RR = !uR.b.ForceAttachControlToAlwaysPreventDefault && RR, this.attachedToElement = !0, this.noPreventDefault = RR;
          for (const JR in this.attached) this.attached[JR].attachControl(RR)
        }
      }
      detachElement() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const JR in this.attached) this.attached[JR].detachControl(), RR && (this.attached[JR].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const RR in this.attached) {
          const JR = this.attached[RR];
          JR.checkInputs && (this.checkInputs = this._addCheckInputs(JR.checkInputs.bind(JR)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(RR) {
        const JR = {};
        for (const GR in this.attached) {
          const RR = this.attached[GR],
            yR = tR.c.Serialize(RR);
          JR[RR.getClassName()] = yR
        }
        RR.inputsmgr = JR
      }
      parse(RR) {
        const JR = RR.inputsmgr;
        if (JR) {
          this.clear();
          for (const RR in JR) {
            const GR = ZR[RR];
            if (GR) {
              const yR = JR[RR],
                uR = tR.c.Parse((() => new GR), yR, null);
              this.add(uR)
            }
          }
        } else
          for (const GR in this.attached) {
            const JR = ZR[this.attached[GR].getClassName()];
            if (JR) {
              const yR = tR.c.Parse((() => new JR), RR, null);
              this.remove(this.attached[GR]), this.add(yR)
            }
          }
      }
    }
  },
  41768: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR.b
    });
    var yR = GR(41773);
    (0, yR.c)()
  },
  41773: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR,
      c: () => wR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(38204),
      ZR = GR(38331),
      qR = GR(41777),
      iR = GR(41741),
      fR = GR(38253);
    let VR = (() => {
        var RR;
        let JR, GR, iR = qR.c,
          fR = [],
          VR = [],
          KR = [],
          wR = [];
        return RR = class extends iR {
          constructor(RR, JR, GR, tR) {
            super(RR, GR, tR), this.groundColor = (0, yR.m)(this, fR, new ZR.d(0, 0, 0)), this.direction = ((0, yR.m)(this, VR), (0, yR.m)(this, KR, void 0)), (0, yR.m)(this, wR), this.direction = JR || uR.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(RR) {
            return this.direction = uR.r.Normalize(RR.subtract(uR.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(RR, JR) {
            const GR = uR.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", GR.x, GR.y, GR.z, 0, JR), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), JR), this
          }
          transferToNodeMaterialEffect(RR, JR) {
            const GR = uR.r.Normalize(this.direction);
            return RR.setFloat3(JR, GR.x, GR.y, GR.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = uR.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return qR.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(RR, JR) {
            RR["HEMILIGHT" + JR] = !0
          }
        }, (() => {
          const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(iR[Symbol.metadata] ?? null) : void 0;
          JR = [(0, tR.k)()], GR = [(0, tR.G)()], (0, yR.l)(null, null, JR, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "groundColor" in RR,
              get: RR => RR.groundColor,
              set: (RR, JR) => {
                RR.groundColor = JR
              }
            },
            metadata: uR
          }, fR, VR), (0, yR.l)(null, null, GR, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: RR => "direction" in RR,
              get: RR => RR.direction,
              set: (RR, JR) => {
                RR.direction = JR
              }
            },
            metadata: uR
          }, KR, wR), uR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uR
          })
        })(), RR
      })(),
      KR = !1;

    function wR() {
      KR || (KR = !0, iR.d.AddNodeConstructor("Light_Type_3", ((RR, JR) => () => new VR(RR, uR.r.Zero(), JR))), (0, fR.f)("BABYLON.HemisphericLight", VR))
    }
  },
  38329: (RR, JR, GR) => {
    GR.d(JR, {
      Color3: () => yR.d,
      e: () => yR.e
    });
    var yR = GR(38331);
    (0, yR.g)()
  },
  38928: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    var yR = GR(38933);
    class tR {
      static GetPlanes(RR) {
        const JR = [];
        for (let GR = 0; GR < 6; GR++) JR.push(new yR.c(0, 0, 0, 0));
        return tR.GetPlanesToRef(RR, JR), JR
      }
      static GetNearPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[2], JR.normal.y = GR[7] + GR[6], JR.normal.z = GR[11] + GR[10], JR.d = GR[15] + GR[14], JR.normalize()
      }
      static GetFarPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[2], JR.normal.y = GR[7] - GR[6], JR.normal.z = GR[11] - GR[10], JR.d = GR[15] - GR[14], JR.normalize()
      }
      static GetLeftPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[0], JR.normal.y = GR[7] + GR[4], JR.normal.z = GR[11] + GR[8], JR.d = GR[15] + GR[12], JR.normalize()
      }
      static GetRightPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[0], JR.normal.y = GR[7] - GR[4], JR.normal.z = GR[11] - GR[8], JR.d = GR[15] - GR[12], JR.normalize()
      }
      static GetTopPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[1], JR.normal.y = GR[7] - GR[5], JR.normal.z = GR[11] - GR[9], JR.d = GR[15] - GR[13], JR.normalize()
      }
      static GetBottomPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[1], JR.normal.y = GR[7] + GR[5], JR.normal.z = GR[11] + GR[9], JR.d = GR[15] + GR[13], JR.normalize()
      }
      static GetPlanesToRef(RR, JR) {
        tR.GetNearPlaneToRef(RR, JR[0]), tR.GetFarPlaneToRef(RR, JR[1]), tR.GetLeftPlaneToRef(RR, JR[2]), tR.GetRightPlaneToRef(RR, JR[3]), tR.GetTopPlaneToRef(RR, JR[4]), tR.GetBottomPlaneToRef(RR, JR[5])
      }
      static IsPointInFrustum(RR, JR) {
        for (let GR = 0; GR < 6; GR++)
          if (JR[GR].dotCoordinate(RR) < 0) return !1;
        return !0
      }
    }
  },
  38933: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(38204);
    class tR {
      constructor(RR, JR, GR, tR) {
        this.normal = new yR.r(RR, JR, GR), this.d = tR
      }
      QtR() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new tR(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let RR = this.normal.getHashCode();
        return RR = 397 * RR ^ this.d, RR
      }
      normalize() {
        const RR = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let JR = 0;
        return 0 !== RR && (JR = 1 / RR), this.normal.x *= JR, this.normal.y *= JR, this.normal.z *= JR, this.d *= JR, this
      }
      transform(RR) {
        const JR = tR._TmpMatrix;
        RR.invertToRef(JR);
        const GR = JR.m,
          yR = this.normal.x,
          uR = this.normal.y,
          ZR = this.normal.z,
          qR = this.d,
          iR = yR * GR[0] + uR * GR[1] + ZR * GR[2] + qR * GR[3],
          fR = yR * GR[4] + uR * GR[5] + ZR * GR[6] + qR * GR[7],
          VR = yR * GR[8] + uR * GR[9] + ZR * GR[10] + qR * GR[11],
          KR = yR * GR[12] + uR * GR[13] + ZR * GR[14] + qR * GR[15];
        return new tR(iR, fR, VR, KR)
      }
      dotCoordinate(RR) {
        return this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z + this.d
      }
      copyFromPoints(RR, JR, GR) {
        const yR = JR.x - RR.x,
          tR = JR.y - RR.y,
          uR = JR.z - RR.z,
          ZR = GR.x - RR.x,
          qR = GR.y - RR.y,
          iR = GR.z - RR.z,
          fR = tR * iR - uR * qR,
          VR = uR * ZR - yR * iR,
          KR = yR * qR - tR * ZR,
          wR = Math.sqrt(fR * fR + VR * VR + KR * KR);
        let rR;
        return rR = 0 !== wR ? 1 / wR : 0, this.normal.x = fR * rR, this.normal.y = VR * rR, this.normal.z = KR * rR, this.d = -(this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z), this
      }
      isFrontFacingTo(RR, JR) {
        return yR.r.Dot(this.normal, RR) <= JR
      }
      signedDistanceTo(RR) {
        return yR.r.Dot(RR, this.normal) + this.d
      }
      static FromArray(RR) {
        return new tR(RR[0], RR[1], RR[2], RR[3])
      }
      static FromPoints(RR, JR, GR) {
        const yR = new tR(0, 0, 0, 0);
        return yR.copyFromPoints(RR, JR, GR), yR
      }
      static FromPositionAndNormal(RR, JR) {
        const GR = new tR(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(RR, JR, GR)
      }
      static FromPositionAndNormalToRef(RR, JR, GR) {
        return GR.normal.vN(JR), GR.normal.normalize(), GR.d = -RR.dot(GR.normal), GR
      }
      static SignedDistanceToPlaneFromPositionAndNormal(RR, JR, GR) {
        const tR = -(JR.x * RR.x + JR.y * RR.y + JR.z * RR.z);
        return yR.r.Dot(GR, JR) + tR
      }
    }
    tR._TmpMatrix = yR.e.Identity()
  },
  38195: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      Matrix: () => yR.e,
      Quaternion: () => yR.i,
      RegisterMathVector: () => yR.j,
      TmpVectors: () => yR.l,
      Vector2: () => yR.n,
      Fe: () => yR.r,
      Vector4: () => yR.s
    });
    var yR = GR(38204);
    (0, yR.j)()
  },
  39248: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      constructor(RR, JR, GR, yR) {
        this.x = RR, this.y = JR, this.width = GR, this.height = yR
      }
      toGlobal(RR, JR) {
        return new yR(this.x * RR, this.y * JR, this.width * RR, this.height * JR)
      }
      toGlobalToRef(RR, JR, GR) {
        return GR.x = this.x * RR, GR.y = this.y * JR, GR.width = this.width * RR, GR.height = this.height * JR, this
      }
      clone() {
        return new yR(this.x, this.y, this.width, this.height)
      }
    }
  },
  41932: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR
    });
    var yR = GR(38204),
      tR = GR(38331),
      uR = GR(41941),
      ZR = GR(41951),
      qR = GR(41972);

    function iR(RR) {
      let JR = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const GR = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        uR = [],
        iR = RR.width || RR.size || 1,
        fR = RR.height || RR.size || 1,
        VR = RR.depth || RR.size || 1,
        KR = RR.wrap || !1;
      let wR = void 0 === RR.topBaseAt ? 1 : RR.topBaseAt,
        rR = void 0 === RR.bottomBaseAt ? 0 : RR.bottomBaseAt;
      wR = (wR + 4) % 4, rR = (rR + 4) % 4;
      let eR = [2, 0, 3, 1][wR],
        aR = [2, 0, 1, 3][rR],
        LR = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (KR) {
        JR = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], LR = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let RR = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          GR = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const yR = [17, 18, 19, 16],
          tR = [22, 23, 20, 21];
        for (; eR > 0;) RR.unshift(RR.pop()), yR.unshift(yR.pop()), eR--;
        for (; aR > 0;) GR.unshift(GR.pop()), tR.unshift(tR.pop()), aR--;
        RR = RR.flat(), GR = GR.flat(), LR = LR.concat(RR).concat(GR), JR.push(yR[0], yR[2], yR[3], yR[0], yR[1], yR[2]), JR.push(tR[0], tR[2], tR[3], tR[0], tR[1], tR[2])
      }
      const nR = [iR / 2, fR / 2, VR / 2],
        UR = LR.reduce(((RR, JR, GR) => RR.concat(JR * nR[GR % 3])), []),
        WR = 0 === RR.sideOrientation ? 0 : RR.sideOrientation || ZR.c.DEFAULTSIDE,
        AR = RR.faceUV || new Array(6),
        CR = RR.faceColors,
        XR = [];
      for (let ZR = 0; ZR < 6; ZR++) void 0 === AR[ZR] && (AR[ZR] = new yR.s(0, 0, 1, 1)), CR && void 0 === CR[ZR] && (CR[ZR] = new tR.e(1, 1, 1, 1));
      for (let yR = 0; yR < 6; yR++)
        if (uR.push(AR[yR].z, qR.d ? 1 - AR[yR].w : AR[yR].w), uR.push(AR[yR].x, qR.d ? 1 - AR[yR].w : AR[yR].w), uR.push(AR[yR].x, qR.d ? 1 - AR[yR].y : AR[yR].y), uR.push(AR[yR].z, qR.d ? 1 - AR[yR].y : AR[yR].y), CR)
          for (let RR = 0; RR < 4; RR++) XR.push(CR[yR].r, CR[yR].g, CR[yR].b, CR[yR].a);
      ZR.c._ComputeSides(WR, UR, JR, GR, uR, RR.frontUVs, RR.backUVs);
      const MR = new ZR.c;
      if (MR.indices = JR, MR.positions = UR, MR.normals = GR, MR.uvs = uR, CR) {
        const RR = WR === ZR.c.DOUBLESIDE ? XR.concat(XR) : XR;
        MR.colors = RR
      }
      return MR
    }

    function fR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const yR = new uR.e(RR, GR);
      JR.sideOrientation = uR.e._GetDefaultSideOrientation(JR.sideOrientation), yR._originalBuilderSideOrientation = JR.sideOrientation;
      return iR(JR).applyToMesh(yR, JR.updatable), yR
    }
    let VR = !1;
    VR || (VR = !0, ZR.c.CreateBox = iR, uR.e.CreateBox = function(RR, JR) {
      return fR(RR, {
        size: JR,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  41987: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => KR
    });
    var yR = GR(38204),
      tR = GR(41941),
      uR = GR(41951),
      ZR = GR(41994),
      qR = GR(41663),
      iR = GR(39914);

    function fR(RR) {
      const JR = [],
        GR = [],
        yR = RR.lines,
        tR = RR.colors,
        ZR = [];
      let qR = 0;
      for (let uR = 0; uR < yR.length; uR++) {
        const RR = yR[uR];
        for (let yR = 0; yR < RR.length; yR++) {
          const {
            x: iR,
            y: fR,
            z: VR
          } = RR[yR];
          if (GR.push(iR, fR, VR), tR) {
            const RR = tR[uR],
              {
                r: JR,
                g: GR,
                b: qR,
                a: iR
              } = RR[yR];
            ZR.push(JR, GR, qR, iR)
          }
          yR > 0 && (JR.push(qR - 1), JR.push(qR)), qR++
        }
      }
      const iR = new uR.c;
      return iR.indices = JR, iR.positions = GR, tR && (iR.colors = ZR), iR
    }

    function VR(RR) {
      const JR = RR.dashSize || 3,
        GR = RR.gapSize || 1,
        tR = RR.dashNb || 200,
        ZR = RR.points,
        qR = [],
        iR = [],
        fR = yR.r.Zero();
      let VR, KR, wR, rR = 0,
        eR = 0;
      for (wR = 0; wR < ZR.length - 1; wR++) ZR[wR + 1].subtractToRef(ZR[wR], fR), rR += fR.length();
      const aR = rR / tR,
        LR = JR * aR / (JR + GR);
      for (wR = 0; wR < ZR.length - 1; wR++) {
        ZR[wR + 1].subtractToRef(ZR[wR], fR), VR = Math.floor(fR.length() / aR), fR.normalize();
        for (let RR = 0; RR < VR; RR++) KR = aR * RR, qR.push(ZR[wR].x + KR * fR.x, ZR[wR].y + KR * fR.y, ZR[wR].z + KR * fR.z), qR.push(ZR[wR].x + (KR + LR) * fR.x, ZR[wR].y + (KR + LR) * fR.y, ZR[wR].z + (KR + LR) * fR.z), iR.push(eR, eR + 1), eR += 2
      }
      const nR = new uR.c;
      return nR.positions = qR, nR.indices = iR, nR
    }

    function KR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const yR = JR.instance,
        tR = JR.lines,
        uR = JR.colors;
      if (yR) {
        const RR = yR.getVerticesData(qR.l.PositionKind);
        let JR, GR;
        uR && (JR = yR.getVerticesData(qR.l.ColorKind));
        let ZR = 0,
          iR = 0;
        for (let yR = 0; yR < tR.length; yR++) {
          const qR = tR[yR];
          for (let tR = 0; tR < qR.length; tR++) RR[ZR] = qR[tR].x, RR[ZR + 1] = qR[tR].y, RR[ZR + 2] = qR[tR].z, uR && JR && (GR = uR[yR], JR[iR] = GR[tR].r, JR[iR + 1] = GR[tR].g, JR[iR + 2] = GR[tR].b, JR[iR + 3] = GR[tR].a, iR += 4), ZR += 3
        }
        return yR.updateVerticesData(qR.l.PositionKind, RR, !1, !1), uR && JR && yR.updateVerticesData(qR.l.ColorKind, JR, !1, !1), yR.refreshBoundingInfo(), yR
      }
      const iR = !!uR,
        VR = new ZR.c(RR, GR, null, void 0, void 0, iR, JR.useVertexAlpha, JR.material);
      return fR(JR).applyToMesh(VR, JR.updatable), VR
    }

    function wR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const yR = JR.colors ? [JR.colors] : null;
      return KR(RR, {
        lines: [JR.points],
        updatable: JR.updatable,
        instance: JR.instance,
        colors: yR,
        useVertexAlpha: JR.useVertexAlpha,
        material: JR.material
      }, GR)
    }

    function rR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const uR = JR.points,
        qR = JR.instance,
        fR = JR.gapSize || 1,
        KR = JR.dashSize || 3;
      if (qR) {
        const RR = RR => {
          const JR = yR.r.Zero(),
            GR = RR.length / 6;
          let tR, ZR, iR, fR, VR = 0,
            KR = 0;
          for (iR = 0; iR < uR.length - 1; iR++) uR[iR + 1].subtractToRef(uR[iR], JR), VR += JR.length();
          const wR = VR / GR,
            rR = qR._creationDataStorage.dashSize,
            eR = rR * wR / (rR + qR._creationDataStorage.gapSize);
          for (iR = 0; iR < uR.length - 1; iR++)
            for (uR[iR + 1].subtractToRef(uR[iR], JR), tR = Math.floor(JR.length() / wR), JR.normalize(), fR = 0; fR < tR && KR < RR.length;) ZR = wR * fR, RR[KR] = uR[iR].x + ZR * JR.x, RR[KR + 1] = uR[iR].y + ZR * JR.y, RR[KR + 2] = uR[iR].z + ZR * JR.z, RR[KR + 3] = uR[iR].x + (ZR + eR) * JR.x, RR[KR + 4] = uR[iR].y + (ZR + eR) * JR.y, RR[KR + 5] = uR[iR].z + (ZR + eR) * JR.z, KR += 6, fR++;
          for (; KR < RR.length;) RR[KR] = uR[iR].x, RR[KR + 1] = uR[iR].y, RR[KR + 2] = uR[iR].z, KR += 3
        };
        return (JR.dashNb || JR.dashSize || JR.gapSize || JR.useVertexAlpha || JR.material) && iR.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), qR.updateMeshPositions(RR, !1), qR
      }
      const wR = new ZR.c(RR, GR, null, void 0, void 0, void 0, JR.useVertexAlpha, JR.material);
      return VR(JR).applyToMesh(wR, JR.updatable), wR._creationDataStorage = new tR.h, wR._creationDataStorage.dashSize = KR, wR._creationDataStorage.gapSize = fR, wR
    }
    let eR = !1;
    eR || (eR = !0, uR.c.CreateLineSystem = fR, uR.c.CreateDashedLines = VR, tR.e.CreateLines = function(RR, JR) {
      return wR(RR, {
        points: JR,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, tR.e.CreateDashedLines = function(RR, JR, GR, yR, tR) {
      return rR(RR, {
        points: JR,
        dashSize: GR,
        gapSize: yR,
        dashNb: tR,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  41994: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => wR,
      e: () => aR
    });
    var yR, tR, uR = GR(38331),
      ZR = GR(41663),
      qR = GR(41941),
      iR = GR(42003),
      fR = GR(41810),
      VR = GR(42005),
      KR = GR(41407);
    class wR extends qR.e {
      _isShaderMaterial(RR) {
        return !!RR && "ShaderMaterial" === RR.getClassName()
      }
      constructor(RR) {
        let JR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          yR = arguments.length > 5 ? arguments[5] : void 0,
          tR = arguments.length > 6 ? arguments[6] : void 0,
          qR = arguments.length > 7 ? arguments[7] : void 0;
        super(RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, JR, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = yR, this.useVertexAlpha = tR, this.color = new uR.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, JR && (this.color = JR.color.clone(), this.alpha = JR.alpha, this.useVertexColor = JR.useVertexColor, this.useVertexAlpha = JR.useVertexAlpha), this.intersectionThreshold = .1;
        const iR = {
          attributes: [ZR.l.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? iR.defines.push("#define VERTEXALPHA") : iR.needAlphaBlending = !1, this.useVertexColor ? (iR.defines.push("#define VERTEXCOLOR"), iR.attributes.push(ZR.l.ColorKind)) : (iR.uniforms.push("color"), this._color4 = new uR.e), qR) this.material = qR;
        else {
          this.jH().ke().isWebGPU && !wR.ForceGLSL && (this._shaderLanguage = 1), iR.shaderLanguage = this._shaderLanguage, iR.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([GR.e(662).then((() => GR(54561))), GR.e(668).then((() => GR(54565)))]) : await Promise.all([GR.e(644).then((() => GR(54571))), GR.e(650).then((() => GR(54573)))])
          };
          const RR = new VR.q("colorShader", this.jH(), "color", iR, !1);
          RR.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(RR)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(RR) {
        const JR = this.material;
        if (JR === RR) return;
        const GR = JR && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(RR), GR && JR?.dispose()
      }
      _setInternalMaterial(RR) {
        this._setMaterial(RR), this.material && (this.material.fillMode = fR.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(RR) {}
      _bind(RR, JR) {
        if (!this._geometry) return this;
        const GR = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(JR, GR) : this._geometry._bind(JR, GR, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: RR,
            g: JR,
            b: GR
          } = this.color;
          this._color4.set(RR, JR, GR, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(RR, JR, GR) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const yR = this.jH().ke();
        return this._unIndexed ? yR.drawArraysType(fR.d.LineListDrawMode, RR.verticesStart, RR.verticesCount, GR) : yR.drawElementsType(fR.d.LineListDrawMode, RR.indexStart, RR.indexCount, GR), this
      }
      dispose(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || JR) && this.material?.dispose(!1, !1, !0), super.dispose(RR)
      }
      clone(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        if (JR && void 0 === JR._addToSceneRootNodes) {
          const GR = JR;
          return GR.source = this, new wR(RR, this.jH(), GR.parent, GR.source, GR.doNotCloneChildren)
        }
        return new wR(RR, this.jH(), JR, this, GR)
      }
      createInstance(RR) {
        const JR = new rR(RR, this);
        if (this.Im) {
          JR.Im = {};
          for (const RR in this.Im) JR.Im[RR] = this.Im[RR]
        }
        return JR
      }
      serialize(RR) {
        super.serialize(RR), RR.color = this.color.QtR(), RR.alpha = this.alpha
      }
      static Parse(RR, JR) {
        const GR = new wR(RR.name, JR);
        return GR.color = uR.d.FromArray(RR.color), GR.alpha = RR.alpha, GR
      }
    }
    wR.ForceGLSL = !1;
    class rR extends iR.d {
      constructor(RR, JR) {
        super(RR, JR), this.intersectionThreshold = JR.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let eR = !1;

    function aR() {
      eR || (eR = !0, qR.e._LinesMeshParser = (RR, JR) => wR.Parse(RR, JR))
    }(yR = wR.prototype).enableEdgesRendering ?? (yR.enableEdgesRendering = (0, KR.f)("LinesMesh", "enableEdgesRendering")), (tR = rR.prototype).enableEdgesRendering ?? (tR.enableEdgesRendering = (0, KR.f)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  39912: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(39914);
    const tR = (RR, JR, GR) => RR ? RR.getClassName && "Mesh" === RR.getClassName() ? null : !RR.getClassName || "SubMesh" !== RR.getClassName() && "PhysicsBody" !== RR.getClassName() ? RR.clone ? RR.clone() : Array.isArray(RR) ? RR.slice() : GR && "object" === typeof RR ? {
      ...RR
    } : null : RR.clone(JR) : null;
    class uR {
      static DeepCopy(RR, JR, GR, uR) {
        let ZR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const qR = function(RR) {
          const JR = [];
          do {
            const GR = Object.getOwnPropertyNames(RR);
            for (const RR of GR) - 1 === JR.indexOf(RR) && JR.push(RR)
          } while (RR = Object.getPrototypeOf(RR));
          return JR
        }(RR);
        for (const fR of qR) {
          if ("_" === fR[0] && (!uR || -1 === uR.indexOf(fR))) continue;
          if (fR.endsWith("Observable")) continue;
          if (GR && -1 !== GR.indexOf(fR)) continue;
          const qR = RR[fR],
            VR = typeof qR;
          if ("function" !== VR) try {
            if ("object" === VR)
              if (qR instanceof Uint8Array) JR[fR] = Uint8Array.from(qR);
              else if (qR instanceof Array) {
              if (JR[fR] = [], qR.length > 0)
                if ("object" == typeof qR[0])
                  for (let RR = 0; RR < qR.length; RR++) {
                    const GR = tR(qR[RR], JR, ZR); - 1 === JR[fR].indexOf(GR) && JR[fR].push(GR)
                  } else JR[fR] = qR.slice(0)
            } else JR[fR] = tR(qR, JR, ZR);
            else JR[fR] = qR
          } catch (iR) {
            yR.c.Warn(iR.message)
          }
        }
      }
    }
  },
  39062: (RR, JR, GR) => {
    function yR() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (RR => {
        const JR = 16 * Math.random() | 0;
        return ("x" === RR ? JR : 3 & JR | 8).toString(16)
      }))
    }
    GR.d(JR, {
      c: () => yR
    })
  },
  39914: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      static _CheckLimit(RR, JR) {
        let GR = yR._LogLimitOutputs[RR];
        return GR ? GR.current++ : (GR = {
          limit: JR,
          current: 1
        }, yR._LogLimitOutputs[RR] = GR), GR.current <= GR.limit
      }
      static _GenerateLimitMessage(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const GR = yR._LogLimitOutputs[RR];
        if (!GR || !yR.MessageLimitReached) return;
        const tR = this._Levels[JR];
        GR.current === GR.limit && yR[tR.name](yR.MessageLimitReached.replace(/%LIMIT%/g, "" + GR.limit).replace(/%TYPE%/g, tR.name ?? ""))
      }
      static _AddLogEntry(RR) {
        yR._LogCache = RR + yR._LogCache, yR.OnNewCacheEntry && yR.OnNewCacheEntry(RR)
      }
      static _FormatMessage(RR) {
        const JR = RR => RR < 10 ? "0" + RR : "" + RR,
          GR = new Date;
        return "[" + JR(GR.getHours()) + ":" + JR(GR.getMinutes()) + ":" + JR(GR.getSeconds()) + "]: " + RR
      }
      static _LogDisabled(RR, JR) {}
      static _LogEnabled() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const tR = Array.isArray(JR) ? JR[0] : JR;
        if (void 0 !== GR && !yR._CheckLimit(tR, GR)) return;
        const uR = yR._FormatMessage(tR),
          ZR = this._Levels[RR],
          qR = Array.isArray(JR) ? JR.slice(1) : [];
        ZR.logFunc && ZR.logFunc("BJS - " + uR, ...qR);
        const iR = `<div style='color:${ZR.color}'>${uR}</div><br>`;
        yR._AddLogEntry(iR), yR._GenerateLimitMessage(tR, RR)
      }
      static get LogCache() {
        return yR._LogCache
      }
      static ClearLogCache() {
        yR._LogCache = "", yR._LogLimitOutputs = {}, yR.errorsCount = 0
      }
      static set LogLevels(RR) {
        yR.Log = yR._LogDisabled, yR.Warn = yR._LogDisabled, yR.Error = yR._LogDisabled;
        const JR = [yR.MessageLogLevel, yR.WarningLogLevel, yR.ErrorLogLevel];
        for (const GR of JR)
          if ((RR & GR) === GR) {
            const RR = this._Levels[GR];
            yR[RR.name] = yR._LogEnabled.bind(yR, GR)
          }
      }
    }
    yR.NoneLogLevel = 0, yR.MessageLogLevel = 1, yR.WarningLogLevel = 2, yR.ErrorLogLevel = 4, yR.AllLogLevel = 7, yR.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", yR._LogCache = "", yR._LogLimitOutputs = {}, yR._Levels = [{}, {
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
    }], yR.errorsCount = 0, yR.Log = yR._LogEnabled.bind(yR, yR.MessageLogLevel), yR.Warn = yR._LogEnabled.bind(yR, yR.WarningLogLevel), yR.Error = yR._LogEnabled.bind(yR, yR.ErrorLogLevel)
  },
  41610: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR.g
    });
    var yR = GR(41612);
    (0, yR.c)()
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);