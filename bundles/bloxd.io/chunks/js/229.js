export const id = 229;
export const ids = [229, 235, 238];
export const modules = {
  40069: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC,
      i: () => fC
    });
    var QC = ZC(38507),
      wC = ZC(39842),
      bC = ZC(40042),
      nC = {};
    class fC {
      constructor(CC) {
        this.attachedToElement = !1, this.attached = {}, this.camera = CC, this.checkInputs = () => {}
      }
      add(CC) {
        const zC = CC.getSimpleName();
        this.attached[zC] ? QC.c.Warn("camera input of type " + zC + " already exists on camera") : (this.attached[zC] = CC, CC.camera = this.camera, CC.checkInputs && (this.checkInputs = this._addCheckInputs(CC.checkInputs.bind(CC))), this.attachedToElement && CC.attachControl(this.noPreventDefault))
      }
      remove(CC) {
        for (const zC in this.attached) {
          const ZC = this.attached[zC];
          if (ZC === CC) return ZC.detachControl(), ZC.camera = null, delete this.attached[zC], void this.rebuildInputCheck()
        }
      }
      removeByType(CC) {
        for (const zC in this.attached) {
          const ZC = this.attached[zC];
          ZC.getClassName() === CC && (ZC.detachControl(), ZC.camera = null, delete this.attached[zC], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(CC) {
        const zC = this.checkInputs;
        return () => {
          zC(), CC()
        }
      }
      attachInput(CC) {
        this.attachedToElement && CC.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          CC = !bC.d.ForceAttachControlToAlwaysPreventDefault && CC, this.attachedToElement = !0, this.noPreventDefault = CC;
          for (const zC in this.attached) this.attached[zC].attachControl(CC)
        }
      }
      detachElement() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const zC in this.attached) this.attached[zC].detachControl(), CC && (this.attached[zC].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const CC in this.attached) {
          const zC = this.attached[CC];
          zC.checkInputs && (this.checkInputs = this._addCheckInputs(zC.checkInputs.bind(zC)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(CC) {
        const zC = {};
        for (const ZC in this.attached) {
          const CC = this.attached[ZC],
            QC = wC.d.Serialize(CC);
          zC[CC.getClassName()] = QC
        }
        CC.inputsmgr = zC
      }
      parse(CC) {
        const zC = CC.inputsmgr;
        if (zC) {
          this.clear();
          for (const CC in zC) {
            const ZC = nC[CC];
            if (ZC) {
              const QC = zC[CC],
                bC = wC.d.Parse((() => new ZC), QC, null);
              this.add(bC)
            }
          }
        } else
          for (const ZC in this.attached) {
            const zC = nC[this.attached[ZC].getClassName()];
            if (zC) {
              const QC = wC.d.Parse((() => new zC), CC, null);
              this.remove(this.attached[ZC]), this.add(QC)
            }
          }
      }
    }
  },
  40076: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC.b
    });
    var QC = ZC(40078);
    (0, QC.e)()
  },
  40078: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      e: () => NC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(36963),
      nC = ZC(37142),
      fC = ZC(40084),
      oC = ZC(40046),
      qC = ZC(37002);
    let FC = (() => {
        var CC;
        let zC, ZC, oC = fC.c,
          qC = [],
          FC = [],
          WC = [],
          NC = [];
        return CC = class extends oC {
          constructor(CC, zC, ZC, wC) {
            super(CC, ZC, wC), this.groundColor = (0, QC.n)(this, qC, new nC.e(0, 0, 0)), this.direction = ((0, QC.n)(this, FC), (0, QC.n)(this, WC, void 0)), (0, QC.n)(this, NC), this.direction = zC || bC.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(CC) {
            return this.direction = bC.r.Normalize(CC.subtract(bC.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(CC, zC) {
            const ZC = bC.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ZC.x, ZC.y, ZC.z, 0, zC), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), zC), this
          }
          transferToNodeMaterialEffect(CC, zC) {
            const ZC = bC.r.Normalize(this.direction);
            return CC.setFloat3(zC, ZC.x, ZC.y, ZC.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = bC.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return fC.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(CC, zC) {
            CC["HEMILIGHT" + zC] = !0
          }
        }, (() => {
          const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(oC[Symbol.metadata] ?? null) : void 0;
          zC = [(0, wC.n)()], ZC = [(0, wC.J)()], (0, QC.j)(null, null, zC, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "groundColor" in CC,
              get: CC => CC.groundColor,
              set: (CC, zC) => {
                CC.groundColor = zC
              }
            },
            metadata: bC
          }, qC, FC), (0, QC.j)(null, null, ZC, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: CC => "direction" in CC,
              get: CC => CC.direction,
              set: (CC, zC) => {
                CC.direction = zC
              }
            },
            metadata: bC
          }, WC, NC), bC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bC
          })
        })(), CC
      })(),
      WC = !1;

    function NC() {
      WC || (WC = !0, oC.d.AddNodeConstructor("Light_Type_3", ((CC, zC) => () => new FC(CC, bC.r.Zero(), zC))), (0, qC.d)("BABYLON.HemisphericLight", FC))
    }
  },
  37138: (CC, zC, ZC) => {
    ZC.d(zC, {
      Color3: () => QC.e,
      e: () => QC.g
    });
    var QC = ZC(37142);
    (0, QC.i)()
  },
  37590: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC
    });
    var QC = ZC(37596);
    class wC {
      static GetPlanes(CC) {
        const zC = [];
        for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
        return wC.GetPlanesToRef(CC, zC), zC
      }
      static GetNearPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
      }
      static GetFarPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
      }
      static GetLeftPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[0], zC.normal.y = ZC[7] + ZC[4], zC.normal.z = ZC[11] + ZC[8], zC.d = ZC[15] + ZC[12], zC.normalize()
      }
      static GetRightPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[0], zC.normal.y = ZC[7] - ZC[4], zC.normal.z = ZC[11] - ZC[8], zC.d = ZC[15] - ZC[12], zC.normalize()
      }
      static GetTopPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[1], zC.normal.y = ZC[7] - ZC[5], zC.normal.z = ZC[11] - ZC[9], zC.d = ZC[15] - ZC[13], zC.normalize()
      }
      static GetBottomPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[1], zC.normal.y = ZC[7] + ZC[5], zC.normal.z = ZC[11] + ZC[9], zC.d = ZC[15] + ZC[13], zC.normalize()
      }
      static GetPlanesToRef(CC, zC) {
        wC.GetNearPlaneToRef(CC, zC[0]), wC.GetFarPlaneToRef(CC, zC[1]), wC.GetLeftPlaneToRef(CC, zC[2]), wC.GetRightPlaneToRef(CC, zC[3]), wC.GetTopPlaneToRef(CC, zC[4]), wC.GetBottomPlaneToRef(CC, zC[5])
      }
      static IsPointInFrustum(CC, zC) {
        for (let ZC = 0; ZC < 6; ZC++)
          if (zC[ZC].dotCoordinate(CC) < 0) return !1;
        return !0
      }
    }
  },
  37596: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC
    });
    var QC = ZC(36963);
    class wC {
      constructor(CC, zC, ZC, wC) {
        this.normal = new QC.r(CC, zC, ZC), this.d = wC
      }
      VZC() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let CC = this.normal.getHashCode();
        return CC = 397 * CC ^ this.d, CC
      }
      normalize() {
        const CC = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let zC = 0;
        return 0 !== CC && (zC = 1 / CC), this.normal.x *= zC, this.normal.y *= zC, this.normal.z *= zC, this.d *= zC, this
      }
      transform(CC) {
        const zC = wC._TmpMatrix;
        CC.invertToRef(zC);
        const ZC = zC.m,
          QC = this.normal.x,
          bC = this.normal.y,
          nC = this.normal.z,
          fC = this.d,
          oC = QC * ZC[0] + bC * ZC[1] + nC * ZC[2] + fC * ZC[3],
          qC = QC * ZC[4] + bC * ZC[5] + nC * ZC[6] + fC * ZC[7],
          FC = QC * ZC[8] + bC * ZC[9] + nC * ZC[10] + fC * ZC[11],
          WC = QC * ZC[12] + bC * ZC[13] + nC * ZC[14] + fC * ZC[15];
        return new wC(oC, qC, FC, WC)
      }
      dotCoordinate(CC) {
        return this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z + this.d
      }
      copyFromPoints(CC, zC, ZC) {
        const QC = zC.x - CC.x,
          wC = zC.y - CC.y,
          bC = zC.z - CC.z,
          nC = ZC.x - CC.x,
          fC = ZC.y - CC.y,
          oC = ZC.z - CC.z,
          qC = wC * oC - bC * fC,
          FC = bC * nC - QC * oC,
          WC = QC * fC - wC * nC,
          NC = Math.sqrt(qC * qC + FC * FC + WC * WC);
        let MC;
        return MC = 0 !== NC ? 1 / NC : 0, this.normal.x = qC * MC, this.normal.y = FC * MC, this.normal.z = WC * MC, this.d = -(this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z), this
      }
      isFrontFacingTo(CC, zC) {
        return QC.r.Dot(this.normal, CC) <= zC
      }
      signedDistanceTo(CC) {
        return QC.r.Dot(CC, this.normal) + this.d
      }
      static FromArray(CC) {
        return new wC(CC[0], CC[1], CC[2], CC[3])
      }
      static FromPoints(CC, zC, ZC) {
        const QC = new wC(0, 0, 0, 0);
        return QC.copyFromPoints(CC, zC, ZC), QC
      }
      static FromPositionAndNormal(CC, zC) {
        const ZC = new wC(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(CC, zC, ZC)
      }
      static FromPositionAndNormalToRef(CC, zC, ZC) {
        return ZC.normal.Av(zC), ZC.normal.normalize(), ZC.d = -CC.dot(ZC.normal), ZC
      }
      static SignedDistanceToPlaneFromPositionAndNormal(CC, zC, ZC) {
        const wC = -(zC.x * CC.x + zC.y * CC.y + zC.z * CC.z);
        return QC.r.Dot(ZC, zC) + wC
      }
    }
    wC._TmpMatrix = QC.b.Identity()
  },
  36961: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      Matrix: () => QC.b,
      Quaternion: () => QC.f,
      RegisterMathVector: () => QC.g,
      TmpVectors: () => QC.j,
      Vector2: () => QC.n,
      Eg: () => QC.r,
      Vector4: () => QC.u
    });
    var QC = ZC(36963);
    (0, QC.g)()
  },
  37931: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      constructor(CC, zC, ZC, QC) {
        this.x = CC, this.y = zC, this.width = ZC, this.height = QC
      }
      toGlobal(CC, zC) {
        return new QC(this.x * CC, this.y * zC, this.width * CC, this.height * zC)
      }
      toGlobalToRef(CC, zC, ZC) {
        return ZC.x = this.x * CC, ZC.y = this.y * zC, ZC.width = this.width * CC, ZC.height = this.height * zC, this
      }
      clone() {
        return new QC(this.x, this.y, this.width, this.height)
      }
    }
  },
  40219: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC
    });
    var QC = ZC(36963),
      wC = ZC(37142),
      bC = ZC(40224),
      nC = ZC(40235),
      fC = ZC(40256);

    function oC(CC) {
      let zC = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const ZC = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        bC = [],
        oC = CC.width || CC.size || 1,
        qC = CC.height || CC.size || 1,
        FC = CC.depth || CC.size || 1,
        WC = CC.wrap || !1;
      let NC = void 0 === CC.topBaseAt ? 1 : CC.topBaseAt,
        MC = void 0 === CC.bottomBaseAt ? 0 : CC.bottomBaseAt;
      NC = (NC + 4) % 4, MC = (MC + 4) % 4;
      let gC = [2, 0, 3, 1][NC],
        SC = [2, 0, 1, 3][MC],
        pC = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (WC) {
        zC = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], pC = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let CC = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          ZC = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const QC = [17, 18, 19, 16],
          wC = [22, 23, 20, 21];
        for (; gC > 0;) CC.unshift(CC.pop()), QC.unshift(QC.pop()), gC--;
        for (; SC > 0;) ZC.unshift(ZC.pop()), wC.unshift(wC.pop()), SC--;
        CC = CC.flat(), ZC = ZC.flat(), pC = pC.concat(CC).concat(ZC), zC.push(QC[0], QC[2], QC[3], QC[0], QC[1], QC[2]), zC.push(wC[0], wC[2], wC[3], wC[0], wC[1], wC[2])
      }
      const PC = [oC / 2, qC / 2, FC / 2],
        GC = pC.reduce(((CC, zC, ZC) => CC.concat(zC * PC[ZC % 3])), []),
        RC = 0 === CC.sideOrientation ? 0 : CC.sideOrientation || nC.e.DEFAULTSIDE,
        AC = CC.faceUV || new Array(6),
        xC = CC.faceColors,
        JC = [];
      for (let nC = 0; nC < 6; nC++) void 0 === AC[nC] && (AC[nC] = new QC.u(0, 0, 1, 1)), xC && void 0 === xC[nC] && (xC[nC] = new wC.g(1, 1, 1, 1));
      for (let QC = 0; QC < 6; QC++)
        if (bC.push(AC[QC].z, fC.d ? 1 - AC[QC].w : AC[QC].w), bC.push(AC[QC].x, fC.d ? 1 - AC[QC].w : AC[QC].w), bC.push(AC[QC].x, fC.d ? 1 - AC[QC].y : AC[QC].y), bC.push(AC[QC].z, fC.d ? 1 - AC[QC].y : AC[QC].y), xC)
          for (let CC = 0; CC < 4; CC++) JC.push(xC[QC].r, xC[QC].g, xC[QC].b, xC[QC].a);
      nC.e._ComputeSides(RC, GC, zC, ZC, bC, CC.frontUVs, CC.backUVs);
      const IC = new nC.e;
      if (IC.indices = zC, IC.positions = GC, IC.normals = ZC, IC.uvs = bC, xC) {
        const CC = RC === nC.e.DOUBLESIDE ? JC.concat(JC) : JC;
        IC.colors = CC
      }
      return IC
    }

    function qC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const QC = new bC.b(CC, ZC);
      zC.sideOrientation = bC.b._GetDefaultSideOrientation(zC.sideOrientation), QC._originalBuilderSideOrientation = zC.sideOrientation;
      return oC(zC).applyToMesh(QC, zC.updatable), QC
    }
    let FC = !1;
    FC || (FC = !0, nC.e.CreateBox = oC, bC.b.CreateBox = function(CC, zC) {
      return qC(CC, {
        size: zC,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40281: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => WC
    });
    var QC = ZC(36963),
      wC = ZC(40224),
      bC = ZC(40235),
      nC = ZC(40283),
      fC = ZC(39959),
      oC = ZC(38507);

    function qC(CC) {
      const zC = [],
        ZC = [],
        QC = CC.lines,
        wC = CC.colors,
        nC = [];
      let fC = 0;
      for (let bC = 0; bC < QC.length; bC++) {
        const CC = QC[bC];
        for (let QC = 0; QC < CC.length; QC++) {
          const {
            x: oC,
            y: qC,
            z: FC
          } = CC[QC];
          if (ZC.push(oC, qC, FC), wC) {
            const CC = wC[bC],
              {
                r: zC,
                g: ZC,
                b: fC,
                a: oC
              } = CC[QC];
            nC.push(zC, ZC, fC, oC)
          }
          QC > 0 && (zC.push(fC - 1), zC.push(fC)), fC++
        }
      }
      const oC = new bC.e;
      return oC.indices = zC, oC.positions = ZC, wC && (oC.colors = nC), oC
    }

    function FC(CC) {
      const zC = CC.dashSize || 3,
        ZC = CC.gapSize || 1,
        wC = CC.dashNb || 200,
        nC = CC.points,
        fC = [],
        oC = [],
        qC = QC.r.Zero();
      let FC, WC, NC, MC = 0,
        gC = 0;
      for (NC = 0; NC < nC.length - 1; NC++) nC[NC + 1].subtractToRef(nC[NC], qC), MC += qC.length();
      const SC = MC / wC,
        pC = zC * SC / (zC + ZC);
      for (NC = 0; NC < nC.length - 1; NC++) {
        nC[NC + 1].subtractToRef(nC[NC], qC), FC = Math.floor(qC.length() / SC), qC.normalize();
        for (let CC = 0; CC < FC; CC++) WC = SC * CC, fC.push(nC[NC].x + WC * qC.x, nC[NC].y + WC * qC.y, nC[NC].z + WC * qC.z), fC.push(nC[NC].x + (WC + pC) * qC.x, nC[NC].y + (WC + pC) * qC.y, nC[NC].z + (WC + pC) * qC.z), oC.push(gC, gC + 1), gC += 2
      }
      const PC = new bC.e;
      return PC.positions = fC, PC.indices = oC, PC
    }

    function WC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const QC = zC.instance,
        wC = zC.lines,
        bC = zC.colors;
      if (QC) {
        const CC = QC.getVerticesData(fC.k.PositionKind);
        let zC, ZC;
        bC && (zC = QC.getVerticesData(fC.k.ColorKind));
        let nC = 0,
          oC = 0;
        for (let QC = 0; QC < wC.length; QC++) {
          const fC = wC[QC];
          for (let wC = 0; wC < fC.length; wC++) CC[nC] = fC[wC].x, CC[nC + 1] = fC[wC].y, CC[nC + 2] = fC[wC].z, bC && zC && (ZC = bC[QC], zC[oC] = ZC[wC].r, zC[oC + 1] = ZC[wC].g, zC[oC + 2] = ZC[wC].b, zC[oC + 3] = ZC[wC].a, oC += 4), nC += 3
        }
        return QC.updateVerticesData(fC.k.PositionKind, CC, !1, !1), bC && zC && QC.updateVerticesData(fC.k.ColorKind, zC, !1, !1), QC.refreshBoundingInfo(), QC
      }
      const oC = !!bC,
        FC = new nC.c(CC, ZC, null, void 0, void 0, oC, zC.useVertexAlpha, zC.material);
      return qC(zC).applyToMesh(FC, zC.updatable), FC
    }

    function NC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const QC = zC.colors ? [zC.colors] : null;
      return WC(CC, {
        lines: [zC.points],
        updatable: zC.updatable,
        instance: zC.instance,
        colors: QC,
        useVertexAlpha: zC.useVertexAlpha,
        material: zC.material
      }, ZC)
    }

    function MC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const bC = zC.points,
        fC = zC.instance,
        qC = zC.gapSize || 1,
        WC = zC.dashSize || 3;
      if (fC) {
        const CC = CC => {
          const zC = QC.r.Zero(),
            ZC = CC.length / 6;
          let wC, nC, oC, qC, FC = 0,
            WC = 0;
          for (oC = 0; oC < bC.length - 1; oC++) bC[oC + 1].subtractToRef(bC[oC], zC), FC += zC.length();
          const NC = FC / ZC,
            MC = fC._creationDataStorage.dashSize,
            gC = MC * NC / (MC + fC._creationDataStorage.gapSize);
          for (oC = 0; oC < bC.length - 1; oC++)
            for (bC[oC + 1].subtractToRef(bC[oC], zC), wC = Math.floor(zC.length() / NC), zC.normalize(), qC = 0; qC < wC && WC < CC.length;) nC = NC * qC, CC[WC] = bC[oC].x + nC * zC.x, CC[WC + 1] = bC[oC].y + nC * zC.y, CC[WC + 2] = bC[oC].z + nC * zC.z, CC[WC + 3] = bC[oC].x + (nC + gC) * zC.x, CC[WC + 4] = bC[oC].y + (nC + gC) * zC.y, CC[WC + 5] = bC[oC].z + (nC + gC) * zC.z, WC += 6, qC++;
          for (; WC < CC.length;) CC[WC] = bC[oC].x, CC[WC + 1] = bC[oC].y, CC[WC + 2] = bC[oC].z, WC += 3
        };
        return (zC.dashNb || zC.dashSize || zC.gapSize || zC.useVertexAlpha || zC.material) && oC.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), fC.updateMeshPositions(CC, !1), fC
      }
      const NC = new nC.c(CC, ZC, null, void 0, void 0, void 0, zC.useVertexAlpha, zC.material);
      return FC(zC).applyToMesh(NC, zC.updatable), NC._creationDataStorage = new wC.f, NC._creationDataStorage.dashSize = WC, NC._creationDataStorage.gapSize = qC, NC
    }
    let gC = !1;
    gC || (gC = !0, bC.e.CreateLineSystem = qC, bC.e.CreateDashedLines = FC, wC.b.CreateLines = function(CC, zC) {
      return NC(CC, {
        points: zC,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, wC.b.CreateDashedLines = function(CC, zC, ZC, QC, wC) {
      return MC(CC, {
        points: zC,
        dashSize: ZC,
        gapSize: QC,
        dashNb: wC,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40283: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => NC,
      e: () => SC
    });
    var QC, wC, bC = ZC(37142),
      nC = ZC(39959),
      fC = ZC(40224),
      oC = ZC(40292),
      qC = ZC(40110),
      FC = ZC(40297),
      WC = ZC(39694);
    class NC extends fC.b {
      _isShaderMaterial(CC) {
        return !!CC && "ShaderMaterial" === CC.getClassName()
      }
      constructor(CC) {
        let zC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          QC = arguments.length > 5 ? arguments[5] : void 0,
          wC = arguments.length > 6 ? arguments[6] : void 0,
          fC = arguments.length > 7 ? arguments[7] : void 0;
        super(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, zC, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = QC, this.useVertexAlpha = wC, this.color = new bC.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, zC && (this.color = zC.color.clone(), this.alpha = zC.alpha, this.useVertexColor = zC.useVertexColor, this.useVertexAlpha = zC.useVertexAlpha), this.intersectionThreshold = .1;
        const oC = {
          attributes: [nC.k.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? oC.defines.push("#define VERTEXALPHA") : oC.needAlphaBlending = !1, this.useVertexColor ? (oC.defines.push("#define VERTEXCOLOR"), oC.attributes.push(nC.k.ColorKind)) : (oC.uniforms.push("color"), this._color4 = new bC.g), fC) this.material = fC;
        else {
          this.Km().mg().isWebGPU && !NC.ForceGLSL && (this._shaderLanguage = 1), oC.shaderLanguage = this._shaderLanguage, oC.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([ZC.e(344).then((() => ZC(42355))), ZC.e(350).then((() => ZC(42359)))]) : await Promise.all([ZC.e(326).then((() => ZC(42363))), ZC.e(332).then((() => ZC(42370)))])
          };
          const CC = new FC.r("colorShader", this.Km(), "color", oC, !1);
          CC.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(CC)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(CC) {
        const zC = this.material;
        if (zC === CC) return;
        const ZC = zC && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(CC), ZC && zC?.dispose()
      }
      _setInternalMaterial(CC) {
        this._setMaterial(CC), this.material && (this.material.fillMode = qC.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(CC) {}
      _bind(CC, zC) {
        if (!this._geometry) return this;
        const ZC = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(zC, ZC) : this._geometry._bind(zC, ZC, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: CC,
            g: zC,
            b: ZC
          } = this.color;
          this._color4.set(CC, zC, ZC, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(CC, zC, ZC) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const QC = this.Km().mg();
        return this._unIndexed ? QC.drawArraysType(qC.d.LineListDrawMode, CC.verticesStart, CC.verticesCount, ZC) : QC.drawElementsType(qC.d.LineListDrawMode, CC.indexStart, CC.indexCount, ZC), this
      }
      dispose(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || zC) && this.material?.dispose(!1, !1, !0), super.dispose(CC)
      }
      clone(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        if (zC && void 0 === zC._addToSceneRootNodes) {
          const ZC = zC;
          return ZC.source = this, new NC(CC, this.Km(), ZC.parent, ZC.source, ZC.doNotCloneChildren)
        }
        return new NC(CC, this.Km(), zC, this, ZC)
      }
      createInstance(CC) {
        const zC = new MC(CC, this);
        if (this.ZE) {
          zC.ZE = {};
          for (const CC in this.ZE) zC.ZE[CC] = this.ZE[CC]
        }
        return zC
      }
      serialize(CC) {
        super.serialize(CC), CC.color = this.color.VZC(), CC.alpha = this.alpha
      }
      static Parse(CC, zC) {
        const ZC = new NC(CC.name, zC);
        return ZC.color = bC.e.FromArray(CC.color), ZC.alpha = CC.alpha, ZC
      }
    }
    NC.ForceGLSL = !1;
    class MC extends oC.c {
      constructor(CC, zC) {
        super(CC, zC), this.intersectionThreshold = zC.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let gC = !1;

    function SC() {
      gC || (gC = !0, fC.b._LinesMeshParser = (CC, zC) => NC.Parse(CC, zC))
    }(QC = NC.prototype).enableEdgesRendering ?? (QC.enableEdgesRendering = (0, WC.f)("LinesMesh", "enableEdgesRendering")), (wC = MC.prototype).enableEdgesRendering ?? (wC.enableEdgesRendering = (0, WC.f)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38501: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(38507);
    const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
      ...CC
    } : null : CC.clone(zC) : null;
    class bC {
      static DeepCopy(CC, zC, ZC, bC) {
        let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const fC = function(CC) {
          const zC = [];
          do {
            const ZC = Object.getOwnPropertyNames(CC);
            for (const CC of ZC) - 1 === zC.indexOf(CC) && zC.push(CC)
          } while (CC = Object.getPrototypeOf(CC));
          return zC
        }(CC);
        for (const qC of fC) {
          if ("_" === qC[0] && (!bC || -1 === bC.indexOf(qC))) continue;
          if (qC.endsWith("Observable")) continue;
          if (ZC && -1 !== ZC.indexOf(qC)) continue;
          const fC = CC[qC],
            FC = typeof fC;
          if ("function" !== FC) try {
            if ("object" === FC)
              if (fC instanceof Uint8Array) zC[qC] = Uint8Array.from(fC);
              else if (fC instanceof Array) {
              if (zC[qC] = [], fC.length > 0)
                if ("object" == typeof fC[0])
                  for (let CC = 0; CC < fC.length; CC++) {
                    const ZC = wC(fC[CC], zC, nC); - 1 === zC[qC].indexOf(ZC) && zC[qC].push(ZC)
                  } else zC[qC] = fC.slice(0)
            } else zC[qC] = wC(fC, zC, nC);
            else zC[qC] = fC
          } catch (oC) {
            QC.c.Warn(oC.message)
          }
        }
      }
    }
  },
  37731: (CC, zC, ZC) => {
    function QC() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
        const zC = 16 * Math.random() | 0;
        return ("x" === CC ? zC : 3 & zC | 8).toString(16)
      }))
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  38507: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {
      static _CheckLimit(CC, zC) {
        let ZC = QC._LogLimitOutputs[CC];
        return ZC ? ZC.current++ : (ZC = {
          limit: zC,
          current: 1
        }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
      }
      static _GenerateLimitMessage(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZC = QC._LogLimitOutputs[CC];
        if (!ZC || !QC.MessageLimitReached) return;
        const wC = this._Levels[zC];
        ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
      }
      static _AddLogEntry(CC) {
        QC._LogCache = CC + QC._LogCache, QC.OnNewCacheEntry && QC.OnNewCacheEntry(CC)
      }
      static _FormatMessage(CC) {
        const zC = CC => CC < 10 ? "0" + CC : "" + CC,
          ZC = new Date;
        return "[" + zC(ZC.getHours()) + ":" + zC(ZC.getMinutes()) + ":" + zC(ZC.getSeconds()) + "]: " + CC
      }
      static _LogDisabled(CC, zC) {}
      static _LogEnabled() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const wC = Array.isArray(zC) ? zC[0] : zC;
        if (void 0 !== ZC && !QC._CheckLimit(wC, ZC)) return;
        const bC = QC._FormatMessage(wC),
          nC = this._Levels[CC],
          fC = Array.isArray(zC) ? zC.slice(1) : [];
        nC.logFunc && nC.logFunc("BJS - " + bC, ...fC);
        const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
        QC._AddLogEntry(oC), QC._GenerateLimitMessage(wC, CC)
      }
      static get LogCache() {
        return QC._LogCache
      }
      static ClearLogCache() {
        QC._LogCache = "", QC._LogLimitOutputs = {}, QC.errorsCount = 0
      }
      static set LogLevels(CC) {
        QC.Log = QC._LogDisabled, QC.Warn = QC._LogDisabled, QC.Error = QC._LogDisabled;
        const zC = [QC.MessageLogLevel, QC.WarningLogLevel, QC.ErrorLogLevel];
        for (const ZC of zC)
          if ((CC & ZC) === ZC) {
            const CC = this._Levels[ZC];
            QC[CC.name] = QC._LogEnabled.bind(QC, ZC)
          }
      }
    }
    QC.NoneLogLevel = 0, QC.MessageLogLevel = 1, QC.WarningLogLevel = 2, QC.ErrorLogLevel = 4, QC.AllLogLevel = 7, QC.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QC._LogCache = "", QC._LogLimitOutputs = {}, QC._Levels = [{}, {
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
    }], QC.errorsCount = 0, QC.Log = QC._LogEnabled.bind(QC, QC.MessageLogLevel), QC.Warn = QC._LogEnabled.bind(QC, QC.WarningLogLevel), QC.Error = QC._LogEnabled.bind(QC, QC.ErrorLogLevel)
  },
  39902: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC.g
    });
    var QC = ZC(39910);
    (0, QC.e)()
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);