export const id = 223;
export const ids = [223, 229, 232];
export const modules = {
  39804: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu,
      h: () => Ju
    });
    var Eu = yu(38448),
      Ku = yu(39582),
      Qu = yu(39774),
      mu = {};
    class Ju {
      constructor(uu) {
        this.attachedToElement = !1, this.attached = {}, this.camera = uu, this.checkInputs = () => {}
      }
      add(uu) {
        const Ru = uu.getSimpleName();
        this.attached[Ru] ? Eu.e.Warn("camera input of type " + Ru + " already exists on camera") : (this.attached[Ru] = uu, uu.camera = this.camera, uu.checkInputs && (this.checkInputs = this._addCheckInputs(uu.checkInputs.bind(uu))), this.attachedToElement && uu.attachControl(this.noPreventDefault))
      }
      remove(uu) {
        for (const Ru in this.attached) {
          const yu = this.attached[Ru];
          if (yu === uu) return yu.detachControl(), yu.camera = null, delete this.attached[Ru], void this.rebuildInputCheck()
        }
      }
      removeByType(uu) {
        for (const Ru in this.attached) {
          const yu = this.attached[Ru];
          yu.getClassName() === uu && (yu.detachControl(), yu.camera = null, delete this.attached[Ru], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(uu) {
        const Ru = this.checkInputs;
        return () => {
          Ru(), uu()
        }
      }
      attachInput(uu) {
        this.attachedToElement && uu.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          uu = !Qu.c.ForceAttachControlToAlwaysPreventDefault && uu, this.attachedToElement = !0, this.noPreventDefault = uu;
          for (const Ru in this.attached) this.attached[Ru].attachControl(uu)
        }
      }
      detachElement() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Ru in this.attached) this.attached[Ru].detachControl(), uu && (this.attached[Ru].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const uu in this.attached) {
          const Ru = this.attached[uu];
          Ru.checkInputs && (this.checkInputs = this._addCheckInputs(Ru.checkInputs.bind(Ru)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(uu) {
        const Ru = {};
        for (const yu in this.attached) {
          const uu = this.attached[yu],
            Eu = Ku.c.Serialize(uu);
          Ru[uu.getClassName()] = Eu
        }
        uu.inputsmgr = Ru
      }
      parse(uu) {
        const Ru = uu.inputsmgr;
        if (Ru) {
          this.clear();
          for (const uu in Ru) {
            const yu = mu[uu];
            if (yu) {
              const Eu = Ru[uu],
                Qu = Ku.c.Parse((() => new yu), Eu, null);
              this.add(Qu)
            }
          }
        } else
          for (const yu in this.attached) {
            const Ru = mu[this.attached[yu].getClassName()];
            if (Ru) {
              const Eu = Ku.c.Parse((() => new Ru), uu, null);
              this.remove(this.attached[yu]), this.add(Eu)
            }
          }
      }
    }
  },
  39808: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu.e
    });
    var Eu = yu(39815);
    (0, Eu.g)()
  },
  39815: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Vu,
      g: () => Bu
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(36830),
      mu = yu(36991),
      Ju = yu(39823),
      Nu = yu(39780),
      Xu = yu(36871);
    let Vu = (() => {
        var uu;
        let Ru, yu, Nu = Ju.e,
          Xu = [],
          Vu = [],
          ru = [],
          Bu = [];
        return uu = class extends Nu {
          constructor(uu, Ru, yu, Ku) {
            super(uu, yu, Ku), this.groundColor = (0, Eu.l)(this, Xu, new mu.d(0, 0, 0)), this.direction = ((0, Eu.l)(this, Vu), (0, Eu.l)(this, ru, void 0)), (0, Eu.l)(this, Bu), this.direction = Ru || Qu.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(uu) {
            return this.direction = Qu.p.Normalize(uu.subtract(Qu.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(uu, Ru) {
            const yu = Qu.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", yu.x, yu.y, yu.z, 0, Ru), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Ru), this
          }
          transferToNodeMaterialEffect(uu, Ru) {
            const yu = Qu.p.Normalize(this.direction);
            return uu.setFloat3(Ru, yu.x, yu.y, yu.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Qu.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Ju.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(uu, Ru) {
            uu["HEMILIGHT" + Ru] = !0
          }
        }, (() => {
          const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nu[Symbol.metadata] ?? null) : void 0;
          Ru = [(0, Ku.n)()], yu = [(0, Ku.G)()], (0, Eu.h)(null, null, Ru, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "groundColor" in uu,
              get: uu => uu.groundColor,
              set: (uu, Ru) => {
                uu.groundColor = Ru
              }
            },
            metadata: Qu
          }, Xu, Vu), (0, Eu.h)(null, null, yu, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: uu => "direction" in uu,
              get: uu => uu.direction,
              set: (uu, Ru) => {
                uu.direction = Ru
              }
            },
            metadata: Qu
          }, ru, Bu), Qu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qu
          })
        })(), uu
      })(),
      ru = !1;

    function Bu() {
      ru || (ru = !0, Nu.e.AddNodeConstructor("Light_Type_3", ((uu, Ru) => () => new Vu(uu, Qu.p.Zero(), Ru))), (0, Xu.c)("BABYLON.HemisphericLight", Vu))
    }
  },
  36986: (uu, Ru, yu) => {
    yu.d(Ru, {
      Color3: () => Eu.d,
      c: () => Eu.h
    });
    var Eu = yu(36991);
    (0, Eu.j)()
  },
  37525: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(37528);
    class Ku {
      static GetPlanes(uu) {
        const Ru = [];
        for (let yu = 0; yu < 6; yu++) Ru.push(new Eu.d(0, 0, 0, 0));
        return Ku.GetPlanesToRef(uu, Ru), Ru
      }
      static GetNearPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[2], Ru.normal.y = yu[7] + yu[6], Ru.normal.z = yu[11] + yu[10], Ru.d = yu[15] + yu[14], Ru.normalize()
      }
      static GetFarPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[2], Ru.normal.y = yu[7] - yu[6], Ru.normal.z = yu[11] - yu[10], Ru.d = yu[15] - yu[14], Ru.normalize()
      }
      static GetLeftPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[0], Ru.normal.y = yu[7] + yu[4], Ru.normal.z = yu[11] + yu[8], Ru.d = yu[15] + yu[12], Ru.normalize()
      }
      static GetRightPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[0], Ru.normal.y = yu[7] - yu[4], Ru.normal.z = yu[11] - yu[8], Ru.d = yu[15] - yu[12], Ru.normalize()
      }
      static GetTopPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[1], Ru.normal.y = yu[7] - yu[5], Ru.normal.z = yu[11] - yu[9], Ru.d = yu[15] - yu[13], Ru.normalize()
      }
      static GetBottomPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[1], Ru.normal.y = yu[7] + yu[5], Ru.normal.z = yu[11] + yu[9], Ru.d = yu[15] + yu[13], Ru.normalize()
      }
      static GetPlanesToRef(uu, Ru) {
        Ku.GetNearPlaneToRef(uu, Ru[0]), Ku.GetFarPlaneToRef(uu, Ru[1]), Ku.GetLeftPlaneToRef(uu, Ru[2]), Ku.GetRightPlaneToRef(uu, Ru[3]), Ku.GetTopPlaneToRef(uu, Ru[4]), Ku.GetBottomPlaneToRef(uu, Ru[5])
      }
      static IsPointInFrustum(uu, Ru) {
        for (let yu = 0; yu < 6; yu++)
          if (Ru[yu].dotCoordinate(uu) < 0) return !1;
        return !0
      }
    }
  },
  37528: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(36830);
    class Ku {
      constructor(uu, Ru, yu, Ku) {
        this.normal = new Eu.p(uu, Ru, yu), this.d = Ku
      }
      AEu() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ku(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let uu = this.normal.getHashCode();
        return uu = 397 * uu ^ this.d, uu
      }
      normalize() {
        const uu = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Ru = 0;
        return 0 !== uu && (Ru = 1 / uu), this.normal.x *= Ru, this.normal.y *= Ru, this.normal.z *= Ru, this.d *= Ru, this
      }
      transform(uu) {
        const Ru = Ku._TmpMatrix;
        uu.invertToRef(Ru);
        const yu = Ru.m,
          Eu = this.normal.x,
          Qu = this.normal.y,
          mu = this.normal.z,
          Ju = this.d,
          Nu = Eu * yu[0] + Qu * yu[1] + mu * yu[2] + Ju * yu[3],
          Xu = Eu * yu[4] + Qu * yu[5] + mu * yu[6] + Ju * yu[7],
          Vu = Eu * yu[8] + Qu * yu[9] + mu * yu[10] + Ju * yu[11],
          ru = Eu * yu[12] + Qu * yu[13] + mu * yu[14] + Ju * yu[15];
        return new Ku(Nu, Xu, Vu, ru)
      }
      dotCoordinate(uu) {
        return this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z + this.d
      }
      copyFromPoints(uu, Ru, yu) {
        const Eu = Ru.x - uu.x,
          Ku = Ru.y - uu.y,
          Qu = Ru.z - uu.z,
          mu = yu.x - uu.x,
          Ju = yu.y - uu.y,
          Nu = yu.z - uu.z,
          Xu = Ku * Nu - Qu * Ju,
          Vu = Qu * mu - Eu * Nu,
          ru = Eu * Ju - Ku * mu,
          Bu = Math.sqrt(Xu * Xu + Vu * Vu + ru * ru);
        let xu;
        return xu = 0 !== Bu ? 1 / Bu : 0, this.normal.x = Xu * xu, this.normal.y = Vu * xu, this.normal.z = ru * xu, this.d = -(this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z), this
      }
      isFrontFacingTo(uu, Ru) {
        return Eu.p.Dot(this.normal, uu) <= Ru
      }
      signedDistanceTo(uu) {
        return Eu.p.Dot(uu, this.normal) + this.d
      }
      static FromArray(uu) {
        return new Ku(uu[0], uu[1], uu[2], uu[3])
      }
      static FromPoints(uu, Ru, yu) {
        const Eu = new Ku(0, 0, 0, 0);
        return Eu.copyFromPoints(uu, Ru, yu), Eu
      }
      static FromPositionAndNormal(uu, Ru) {
        const yu = new Ku(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(uu, Ru, yu)
      }
      static FromPositionAndNormalToRef(uu, Ru, yu) {
        return yu.normal.Oyu(Ru), yu.normal.normalize(), yu.d = -uu.dot(yu.normal), yu
      }
      static SignedDistanceToPlaneFromPositionAndNormal(uu, Ru, yu) {
        const Ku = -(Ru.x * uu.x + Ru.y * uu.y + Ru.z * uu.z);
        return Eu.p.Dot(yu, Ru) + Ku
      }
    }
    Ku._TmpMatrix = Eu.d.Identity()
  },
  36828: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      Matrix: () => Eu.d,
      Quaternion: () => Eu.f,
      RegisterMathVector: () => Eu.j,
      TmpVectors: () => Eu.m,
      Vector2: () => Eu.n,
      MS: () => Eu.p,
      Vector4: () => Eu.r
    });
    var Eu = yu(36830);
    (0, Eu.j)()
  },
  37842: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu
    });
    class Eu {
      constructor(uu, Ru, yu, Eu) {
        this.x = uu, this.y = Ru, this.width = yu, this.height = Eu
      }
      toGlobal(uu, Ru) {
        return new Eu(this.x * uu, this.y * Ru, this.width * uu, this.height * Ru)
      }
      toGlobalToRef(uu, Ru, yu) {
        return yu.x = this.x * uu, yu.y = this.y * Ru, yu.width = this.width * uu, yu.height = this.height * Ru, this
      }
      clone() {
        return new Eu(this.x, this.y, this.width, this.height)
      }
    }
  },
  39976: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Xu
    });
    var Eu = yu(36830),
      Ku = yu(36991),
      Qu = yu(39984),
      mu = yu(39990),
      Ju = yu(40003);

    function Nu(uu) {
      let Ru = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const yu = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        Qu = [],
        Nu = uu.width || uu.size || 1,
        Xu = uu.height || uu.size || 1,
        Vu = uu.depth || uu.size || 1,
        ru = uu.wrap || !1;
      let Bu = void 0 === uu.topBaseAt ? 1 : uu.topBaseAt,
        xu = void 0 === uu.bottomBaseAt ? 0 : uu.bottomBaseAt;
      Bu = (Bu + 4) % 4, xu = (xu + 4) % 4;
      let Su = [2, 0, 3, 1][Bu],
        pu = [2, 0, 1, 3][xu],
        Tu = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (ru) {
        Ru = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], Tu = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let uu = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          yu = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Eu = [17, 18, 19, 16],
          Ku = [22, 23, 20, 21];
        for (; Su > 0;) uu.unshift(uu.pop()), Eu.unshift(Eu.pop()), Su--;
        for (; pu > 0;) yu.unshift(yu.pop()), Ku.unshift(Ku.pop()), pu--;
        uu = uu.flat(), yu = yu.flat(), Tu = Tu.concat(uu).concat(yu), Ru.push(Eu[0], Eu[2], Eu[3], Eu[0], Eu[1], Eu[2]), Ru.push(Ku[0], Ku[2], Ku[3], Ku[0], Ku[1], Ku[2])
      }
      const Wu = [Nu / 2, Xu / 2, Vu / 2],
        ju = Tu.reduce(((uu, Ru, yu) => uu.concat(Ru * Wu[yu % 3])), []),
        Hu = 0 === uu.sideOrientation ? 0 : uu.sideOrientation || mu.e.DEFAULTSIDE,
        du = uu.faceUV || new Array(6),
        bu = uu.faceColors,
        Cu = [];
      for (let mu = 0; mu < 6; mu++) void 0 === du[mu] && (du[mu] = new Eu.r(0, 0, 1, 1)), bu && void 0 === bu[mu] && (bu[mu] = new Ku.h(1, 1, 1, 1));
      for (let Eu = 0; Eu < 6; Eu++)
        if (Qu.push(du[Eu].z, Ju.e ? 1 - du[Eu].w : du[Eu].w), Qu.push(du[Eu].x, Ju.e ? 1 - du[Eu].w : du[Eu].w), Qu.push(du[Eu].x, Ju.e ? 1 - du[Eu].y : du[Eu].y), Qu.push(du[Eu].z, Ju.e ? 1 - du[Eu].y : du[Eu].y), bu)
          for (let uu = 0; uu < 4; uu++) Cu.push(bu[Eu].r, bu[Eu].g, bu[Eu].b, bu[Eu].a);
      mu.e._ComputeSides(Hu, ju, Ru, yu, Qu, uu.frontUVs, uu.backUVs);
      const ku = new mu.e;
      if (ku.indices = Ru, ku.positions = ju, ku.normals = yu, ku.uvs = Qu, bu) {
        const uu = Hu === mu.e.DOUBLESIDE ? Cu.concat(Cu) : Cu;
        ku.colors = uu
      }
      return ku
    }

    function Xu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Eu = new Qu.e(uu, yu);
      Ru.sideOrientation = Qu.e._GetDefaultSideOrientation(Ru.sideOrientation), Eu._originalBuilderSideOrientation = Ru.sideOrientation;
      return Nu(Ru).applyToMesh(Eu, Ru.updatable), Eu
    }
    let Vu = !1;
    Vu || (Vu = !0, mu.e.CreateBox = Nu, Qu.e.CreateBox = function(uu, Ru) {
      return Xu(uu, {
        size: Ru,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40031: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => ru
    });
    var Eu = yu(36830),
      Ku = yu(39984),
      Qu = yu(39990),
      mu = yu(40035),
      Ju = yu(39706),
      Nu = yu(38448);

    function Xu(uu) {
      const Ru = [],
        yu = [],
        Eu = uu.lines,
        Ku = uu.colors,
        mu = [];
      let Ju = 0;
      for (let Qu = 0; Qu < Eu.length; Qu++) {
        const uu = Eu[Qu];
        for (let Eu = 0; Eu < uu.length; Eu++) {
          const {
            x: Nu,
            y: Xu,
            z: Vu
          } = uu[Eu];
          if (yu.push(Nu, Xu, Vu), Ku) {
            const uu = Ku[Qu],
              {
                r: Ru,
                g: yu,
                b: Ju,
                a: Nu
              } = uu[Eu];
            mu.push(Ru, yu, Ju, Nu)
          }
          Eu > 0 && (Ru.push(Ju - 1), Ru.push(Ju)), Ju++
        }
      }
      const Nu = new Qu.e;
      return Nu.indices = Ru, Nu.positions = yu, Ku && (Nu.colors = mu), Nu
    }

    function Vu(uu) {
      const Ru = uu.dashSize || 3,
        yu = uu.gapSize || 1,
        Ku = uu.dashNb || 200,
        mu = uu.points,
        Ju = [],
        Nu = [],
        Xu = Eu.p.Zero();
      let Vu, ru, Bu, xu = 0,
        Su = 0;
      for (Bu = 0; Bu < mu.length - 1; Bu++) mu[Bu + 1].subtractToRef(mu[Bu], Xu), xu += Xu.length();
      const pu = xu / Ku,
        Tu = Ru * pu / (Ru + yu);
      for (Bu = 0; Bu < mu.length - 1; Bu++) {
        mu[Bu + 1].subtractToRef(mu[Bu], Xu), Vu = Math.floor(Xu.length() / pu), Xu.normalize();
        for (let uu = 0; uu < Vu; uu++) ru = pu * uu, Ju.push(mu[Bu].x + ru * Xu.x, mu[Bu].y + ru * Xu.y, mu[Bu].z + ru * Xu.z), Ju.push(mu[Bu].x + (ru + Tu) * Xu.x, mu[Bu].y + (ru + Tu) * Xu.y, mu[Bu].z + (ru + Tu) * Xu.z), Nu.push(Su, Su + 1), Su += 2
      }
      const Wu = new Qu.e;
      return Wu.positions = Ju, Wu.indices = Nu, Wu
    }

    function ru(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Eu = Ru.instance,
        Ku = Ru.lines,
        Qu = Ru.colors;
      if (Eu) {
        const uu = Eu.getVerticesData(Ju.h.PositionKind);
        let Ru, yu;
        Qu && (Ru = Eu.getVerticesData(Ju.h.ColorKind));
        let mu = 0,
          Nu = 0;
        for (let Eu = 0; Eu < Ku.length; Eu++) {
          const Ju = Ku[Eu];
          for (let Ku = 0; Ku < Ju.length; Ku++) uu[mu] = Ju[Ku].x, uu[mu + 1] = Ju[Ku].y, uu[mu + 2] = Ju[Ku].z, Qu && Ru && (yu = Qu[Eu], Ru[Nu] = yu[Ku].r, Ru[Nu + 1] = yu[Ku].g, Ru[Nu + 2] = yu[Ku].b, Ru[Nu + 3] = yu[Ku].a, Nu += 4), mu += 3
        }
        return Eu.updateVerticesData(Ju.h.PositionKind, uu, !1, !1), Qu && Ru && Eu.updateVerticesData(Ju.h.ColorKind, Ru, !1, !1), Eu.refreshBoundingInfo(), Eu
      }
      const Nu = !!Qu,
        Vu = new mu.e(uu, yu, null, void 0, void 0, Nu, Ru.useVertexAlpha, Ru.material);
      return Xu(Ru).applyToMesh(Vu, Ru.updatable), Vu
    }

    function Bu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Eu = Ru.colors ? [Ru.colors] : null;
      return ru(uu, {
        lines: [Ru.points],
        updatable: Ru.updatable,
        instance: Ru.instance,
        colors: Eu,
        useVertexAlpha: Ru.useVertexAlpha,
        material: Ru.material
      }, yu)
    }

    function xu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Qu = Ru.points,
        Ju = Ru.instance,
        Xu = Ru.gapSize || 1,
        ru = Ru.dashSize || 3;
      if (Ju) {
        const uu = uu => {
          const Ru = Eu.p.Zero(),
            yu = uu.length / 6;
          let Ku, mu, Nu, Xu, Vu = 0,
            ru = 0;
          for (Nu = 0; Nu < Qu.length - 1; Nu++) Qu[Nu + 1].subtractToRef(Qu[Nu], Ru), Vu += Ru.length();
          const Bu = Vu / yu,
            xu = Ju._creationDataStorage.dashSize,
            Su = xu * Bu / (xu + Ju._creationDataStorage.gapSize);
          for (Nu = 0; Nu < Qu.length - 1; Nu++)
            for (Qu[Nu + 1].subtractToRef(Qu[Nu], Ru), Ku = Math.floor(Ru.length() / Bu), Ru.normalize(), Xu = 0; Xu < Ku && ru < uu.length;) mu = Bu * Xu, uu[ru] = Qu[Nu].x + mu * Ru.x, uu[ru + 1] = Qu[Nu].y + mu * Ru.y, uu[ru + 2] = Qu[Nu].z + mu * Ru.z, uu[ru + 3] = Qu[Nu].x + (mu + Su) * Ru.x, uu[ru + 4] = Qu[Nu].y + (mu + Su) * Ru.y, uu[ru + 5] = Qu[Nu].z + (mu + Su) * Ru.z, ru += 6, Xu++;
          for (; ru < uu.length;) uu[ru] = Qu[Nu].x, uu[ru + 1] = Qu[Nu].y, uu[ru + 2] = Qu[Nu].z, ru += 3
        };
        return (Ru.dashNb || Ru.dashSize || Ru.gapSize || Ru.useVertexAlpha || Ru.material) && Nu.e.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), Ju.updateMeshPositions(uu, !1), Ju
      }
      const Bu = new mu.e(uu, yu, null, void 0, void 0, void 0, Ru.useVertexAlpha, Ru.material);
      return Vu(Ru).applyToMesh(Bu, Ru.updatable), Bu._creationDataStorage = new Ku.h, Bu._creationDataStorage.dashSize = ru, Bu._creationDataStorage.gapSize = Xu, Bu
    }
    let Su = !1;
    Su || (Su = !0, Qu.e.CreateLineSystem = Xu, Qu.e.CreateDashedLines = Vu, Ku.e.CreateLines = function(uu, Ru) {
      return Bu(uu, {
        points: Ru,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, Ku.e.CreateDashedLines = function(uu, Ru, yu, Eu, Ku) {
      return xu(uu, {
        points: Ru,
        dashSize: yu,
        gapSize: Eu,
        dashNb: Ku,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40035: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Bu,
      i: () => pu
    });
    var Eu, Ku, Qu = yu(36991),
      mu = yu(39706),
      Ju = yu(39984),
      Nu = yu(40038),
      Xu = yu(39863),
      Vu = yu(40047),
      ru = yu(39430);
    class Bu extends Ju.e {
      _isShaderMaterial(uu) {
        return !!uu && "ShaderMaterial" === uu.getClassName()
      }
      constructor(uu) {
        let Ru = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Eu = arguments.length > 5 ? arguments[5] : void 0,
          Ku = arguments.length > 6 ? arguments[6] : void 0,
          Ju = arguments.length > 7 ? arguments[7] : void 0;
        super(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Ru, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Eu, this.useVertexAlpha = Ku, this.color = new Qu.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Ru && (this.color = Ru.color.clone(), this.alpha = Ru.alpha, this.useVertexColor = Ru.useVertexColor, this.useVertexAlpha = Ru.useVertexAlpha), this.intersectionThreshold = .1;
        const Nu = {
          attributes: [mu.h.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Nu.defines.push("#define VERTEXALPHA") : Nu.needAlphaBlending = !1, this.useVertexColor ? (Nu.defines.push("#define VERTEXCOLOR"), Nu.attributes.push(mu.h.ColorKind)) : (Nu.uniforms.push("color"), this._color4 = new Qu.h), Ju) this.material = Ju;
        else {
          this.lD().eS().isWebGPU && !Bu.ForceGLSL && (this._shaderLanguage = 1), Nu.shaderLanguage = this._shaderLanguage, Nu.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([yu.e(334).then((() => yu(42114))), yu.e(340).then((() => yu(42120)))]) : await Promise.all([yu.e(316).then((() => yu(42122))), yu.e(322).then((() => yu(42126)))])
          };
          const uu = new Vu.s("colorShader", this.lD(), "color", Nu, !1);
          uu.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(uu)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(uu) {
        const Ru = this.material;
        if (Ru === uu) return;
        const yu = Ru && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(uu), yu && Ru?.dispose()
      }
      _setInternalMaterial(uu) {
        this._setMaterial(uu), this.material && (this.material.fillMode = Xu.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(uu) {}
      _bind(uu, Ru) {
        if (!this._geometry) return this;
        const yu = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Ru, yu) : this._geometry._bind(Ru, yu, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: uu,
            g: Ru,
            b: yu
          } = this.color;
          this._color4.set(uu, Ru, yu, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(uu, Ru, yu) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Eu = this.lD().eS();
        return this._unIndexed ? Eu.drawArraysType(Xu.d.LineListDrawMode, uu.verticesStart, uu.verticesCount, yu) : Eu.drawElementsType(Xu.d.LineListDrawMode, uu.indexStart, uu.indexCount, yu), this
      }
      dispose(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Ru) && this.material?.dispose(!1, !1, !0), super.dispose(uu)
      }
      clone(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        if (Ru && void 0 === Ru._addToSceneRootNodes) {
          const yu = Ru;
          return yu.source = this, new Bu(uu, this.lD(), yu.parent, yu.source, yu.doNotCloneChildren)
        }
        return new Bu(uu, this.lD(), Ru, this, yu)
      }
      createInstance(uu) {
        const Ru = new xu(uu, this);
        if (this.bI) {
          Ru.bI = {};
          for (const uu in this.bI) Ru.bI[uu] = this.bI[uu]
        }
        return Ru
      }
      serialize(uu) {
        super.serialize(uu), uu.color = this.color.AEu(), uu.alpha = this.alpha
      }
      static Parse(uu, Ru) {
        const yu = new Bu(uu.name, Ru);
        return yu.color = Qu.d.FromArray(uu.color), yu.alpha = uu.alpha, yu
      }
    }
    Bu.ForceGLSL = !1;
    class xu extends Nu.c {
      constructor(uu, Ru) {
        super(uu, Ru), this.intersectionThreshold = Ru.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let Su = !1;

    function pu() {
      Su || (Su = !0, Ju.e._LinesMeshParser = (uu, Ru) => Bu.Parse(uu, Ru))
    }(Eu = Bu.prototype).enableEdgesRendering ?? (Eu.enableEdgesRendering = (0, ru.i)("LinesMesh", "enableEdgesRendering")), (Ku = xu.prototype).enableEdgesRendering ?? (Ku.enableEdgesRendering = (0, ru.i)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38444: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu
    });
    var Eu = yu(38448);
    const Ku = (uu, Ru, yu) => uu ? uu.getClassName && "Mesh" === uu.getClassName() ? null : !uu.getClassName || "SubMesh" !== uu.getClassName() && "PhysicsBody" !== uu.getClassName() ? uu.clone ? uu.clone() : Array.isArray(uu) ? uu.slice() : yu && "object" === typeof uu ? {
      ...uu
    } : null : uu.clone(Ru) : null;
    class Qu {
      static DeepCopy(uu, Ru, yu, Qu) {
        let mu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ju = function(uu) {
          const Ru = [];
          do {
            const yu = Object.getOwnPropertyNames(uu);
            for (const uu of yu) - 1 === Ru.indexOf(uu) && Ru.push(uu)
          } while (uu = Object.getPrototypeOf(uu));
          return Ru
        }(uu);
        for (const Xu of Ju) {
          if ("_" === Xu[0] && (!Qu || -1 === Qu.indexOf(Xu))) continue;
          if (Xu.endsWith("Observable")) continue;
          if (yu && -1 !== yu.indexOf(Xu)) continue;
          const Ju = uu[Xu],
            Vu = typeof Ju;
          if ("function" !== Vu) try {
            if ("object" === Vu)
              if (Ju instanceof Uint8Array) Ru[Xu] = Uint8Array.from(Ju);
              else if (Ju instanceof Array) {
              if (Ru[Xu] = [], Ju.length > 0)
                if ("object" == typeof Ju[0])
                  for (let uu = 0; uu < Ju.length; uu++) {
                    const yu = Ku(Ju[uu], Ru, mu); - 1 === Ru[Xu].indexOf(yu) && Ru[Xu].push(yu)
                  } else Ru[Xu] = Ju.slice(0)
            } else Ru[Xu] = Ku(Ju, Ru, mu);
            else Ru[Xu] = Ju
          } catch (Nu) {
            Eu.e.Warn(Nu.message)
          }
        }
      }
    }
  },
  37665: (uu, Ru, yu) => {
    function Eu() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (uu => {
        const Ru = 16 * Math.random() | 0;
        return ("x" === uu ? Ru : 3 & Ru | 8).toString(16)
      }))
    }
    yu.d(Ru, {
      b: () => Eu
    })
  },
  38448: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      static _CheckLimit(uu, Ru) {
        let yu = Eu._LogLimitOutputs[uu];
        return yu ? yu.current++ : (yu = {
          limit: Ru,
          current: 1
        }, Eu._LogLimitOutputs[uu] = yu), yu.current <= yu.limit
      }
      static _GenerateLimitMessage(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const yu = Eu._LogLimitOutputs[uu];
        if (!yu || !Eu.MessageLimitReached) return;
        const Ku = this._Levels[Ru];
        yu.current === yu.limit && Eu[Ku.name](Eu.MessageLimitReached.replace(/%LIMIT%/g, "" + yu.limit).replace(/%TYPE%/g, Ku.name ?? ""))
      }
      static _AddLogEntry(uu) {
        Eu._LogCache = uu + Eu._LogCache, Eu.OnNewCacheEntry && Eu.OnNewCacheEntry(uu)
      }
      static _FormatMessage(uu) {
        const Ru = uu => uu < 10 ? "0" + uu : "" + uu,
          yu = new Date;
        return "[" + Ru(yu.getHours()) + ":" + Ru(yu.getMinutes()) + ":" + Ru(yu.getSeconds()) + "]: " + uu
      }
      static _LogDisabled(uu, Ru) {}
      static _LogEnabled() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Ku = Array.isArray(Ru) ? Ru[0] : Ru;
        if (void 0 !== yu && !Eu._CheckLimit(Ku, yu)) return;
        const Qu = Eu._FormatMessage(Ku),
          mu = this._Levels[uu],
          Ju = Array.isArray(Ru) ? Ru.slice(1) : [];
        mu.logFunc && mu.logFunc("BJS - " + Qu, ...Ju);
        const Nu = `<div style='color:${mu.color}'>${Qu}</div><br>`;
        Eu._AddLogEntry(Nu), Eu._GenerateLimitMessage(Ku, uu)
      }
      static get LogCache() {
        return Eu._LogCache
      }
      static ClearLogCache() {
        Eu._LogCache = "", Eu._LogLimitOutputs = {}, Eu.errorsCount = 0
      }
      static set LogLevels(uu) {
        Eu.Log = Eu._LogDisabled, Eu.Warn = Eu._LogDisabled, Eu.Error = Eu._LogDisabled;
        const Ru = [Eu.MessageLogLevel, Eu.WarningLogLevel, Eu.ErrorLogLevel];
        for (const yu of Ru)
          if ((uu & yu) === yu) {
            const uu = this._Levels[yu];
            Eu[uu.name] = Eu._LogEnabled.bind(Eu, yu)
          }
      }
    }
    Eu.NoneLogLevel = 0, Eu.MessageLogLevel = 1, Eu.WarningLogLevel = 2, Eu.ErrorLogLevel = 4, Eu.AllLogLevel = 7, Eu.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Eu._LogCache = "", Eu._LogLimitOutputs = {}, Eu._Levels = [{}, {
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
    }], Eu.errorsCount = 0, Eu.Log = Eu._LogEnabled.bind(Eu, Eu.MessageLogLevel), Eu.Warn = Eu._LogEnabled.bind(Eu, Eu.WarningLogLevel), Eu.Error = Eu._LogEnabled.bind(Eu, Eu.ErrorLogLevel)
  },
  39643: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu.i
    });
    var Eu = yu(39647);
    (0, Eu.e)()
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);