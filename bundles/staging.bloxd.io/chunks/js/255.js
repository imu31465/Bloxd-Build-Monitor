export const id = 255;
export const ids = [255];
export const modules = {
  41566: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd
    });
    class pd {}
    pd.AUTOSAMPLERSUFFIX = "Sampler", pd.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", pd.ALPHA_DISABLE = 0, pd.ALPHA_ADD = 1, pd.ALPHA_COMBINE = 2, pd.ALPHA_SUBTRACT = 3, pd.ALPHA_MULTIPLY = 4, pd.ALPHA_MAXIMIZED = 5, pd.ALPHA_ONEONE = 6, pd.ALPHA_PREMULTIPLIED = 7, pd.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, pd.ALPHA_INTERPOLATE = 9, pd.ALPHA_SCREENMODE = 10, pd.ALPHA_ONEONE_ONEONE = 11, pd.ALPHA_ALPHATOCOLOR = 12, pd.ALPHA_REVERSEONEMINUS = 13, pd.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, pd.ALPHA_ONEONE_ONEZERO = 15, pd.ALPHA_EXCLUSION = 16, pd.ALPHA_LAYER_ACCUMULATE = 17, pd.ALPHA_MIN = 18, pd.ALPHA_MAX = 19, pd.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, pd.ALPHA_REPLACE_COLOR = 21, pd.ALPHA_EQUATION_ADD = 0, pd.ALPHA_EQUATION_SUBSTRACT = 1, pd.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, pd.ALPHA_EQUATION_MAX = 3, pd.ALPHA_EQUATION_MIN = 4, pd.ALPHA_EQUATION_DARKEN = 5, pd.DELAYLOADSTATE_NONE = 0, pd.DELAYLOADSTATE_LOADED = 1, pd.DELAYLOADSTATE_LOADING = 2, pd.DELAYLOADSTATE_NOTLOADED = 4, pd.NEVER = 512, pd.ALWAYS = 519, pd.LESS = 513, pd.EQUAL = 514, pd.LEQUAL = 515, pd.GREATER = 516, pd.GEQUAL = 518, pd.NOTEQUAL = 517, pd.KEEP = 7680, pd.ZERO = 0, pd.REPLACE = 7681, pd.INCR = 7682, pd.DECR = 7683, pd.INVERT = 5386, pd.INCR_WRAP = 34055, pd.DECR_WRAP = 34056, pd.TEXTURE_CLAMP_ADDRESSMODE = 0, pd.TEXTURE_WRAP_ADDRESSMODE = 1, pd.TEXTURE_MIRROR_ADDRESSMODE = 2, pd.TEXTURE_REPETITION_NONE = 0, pd.TEXTURE_REPETITION_NOISE_BLEND = 1, pd.TEXTURE_REPETITION_HEX_TILING = 2, pd.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, pd.TEXTURE_REPETITION_VORONOI_BOMBING = 4, pd.TEXTURE_CREATIONFLAG_STORAGE = 1, pd.TEXTUREFORMAT_ALPHA = 0, pd.TEXTUREFORMAT_LUMINANCE = 1, pd.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, pd.TEXTUREFORMAT_RGB = 4, pd.TEXTUREFORMAT_RGBA = 5, pd.TEXTUREFORMAT_RED = 6, pd.TEXTUREFORMAT_R = 6, pd.TEXTUREFORMAT_R16_UNORM = 33322, pd.TEXTUREFORMAT_RG16_UNORM = 33324, pd.TEXTUREFORMAT_RGB16_UNORM = 32852, pd.TEXTUREFORMAT_RGBA16_UNORM = 32859, pd.TEXTUREFORMAT_R16_SNORM = 36760, pd.TEXTUREFORMAT_RG16_SNORM = 36761, pd.TEXTUREFORMAT_RGB16_SNORM = 36762, pd.TEXTUREFORMAT_RGBA16_SNORM = 36763, pd.TEXTUREFORMAT_RG = 7, pd.TEXTUREFORMAT_RED_INTEGER = 8, pd.TEXTUREFORMAT_R_INTEGER = 8, pd.TEXTUREFORMAT_RG_INTEGER = 9, pd.TEXTUREFORMAT_RGB_INTEGER = 10, pd.TEXTUREFORMAT_RGBA_INTEGER = 11, pd.TEXTUREFORMAT_BGRA = 12, pd.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, pd.TEXTUREFORMAT_DEPTH32_FLOAT = 14, pd.TEXTUREFORMAT_DEPTH16 = 15, pd.TEXTUREFORMAT_DEPTH24 = 16, pd.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, pd.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, pd.TEXTUREFORMAT_STENCIL8 = 19, pd.TEXTUREFORMAT_UNDEFINED = 4294967295, pd.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, pd.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, pd.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, pd.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, pd.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, pd.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, pd.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, pd.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, pd.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, pd.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, pd.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, pd.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, pd.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, pd.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, pd.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, pd.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, pd.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, pd.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, pd.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, pd.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, pd.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, pd.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, pd.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, pd.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, pd.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, pd.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, pd.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, pd.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, pd.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, pd.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, pd.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, pd.TEXTURETYPE_UNSIGNED_BYTE = 0, pd.TEXTURETYPE_UNSIGNED_INT = 0, pd.TEXTURETYPE_FLOAT = 1, pd.TEXTURETYPE_HALF_FLOAT = 2, pd.TEXTURETYPE_BYTE = 3, pd.TEXTURETYPE_SHORT = 4, pd.TEXTURETYPE_UNSIGNED_SHORT = 5, pd.TEXTURETYPE_INT = 6, pd.TEXTURETYPE_UNSIGNED_INTEGER = 7, pd.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, pd.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, pd.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, pd.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, pd.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, pd.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, pd.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, pd.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, pd.TEXTURETYPE_UNDEFINED = 16, pd.TEXTURE_2D = 3553, pd.TEXTURE_2D_ARRAY = 35866, pd.TEXTURE_CUBE_MAP = 34067, pd.TEXTURE_CUBE_MAP_ARRAY = 3735928559, pd.TEXTURE_3D = 32879, pd.TEXTURE_NEAREST_SAMPLINGMODE = 1, pd.TEXTURE_NEAREST_NEAREST = 1, pd.TEXTURE_BILINEAR_SAMPLINGMODE = 2, pd.TEXTURE_LINEAR_LINEAR = 2, pd.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, pd.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, pd.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, pd.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, pd.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, pd.TEXTURE_NEAREST_LINEAR = 7, pd.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, pd.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, pd.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, pd.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, pd.TEXTURE_LINEAR_NEAREST = 12, pd.TEXTURE_EXPLICIT_MODE = 0, pd.TEXTURE_SPHERICAL_MODE = 1, pd.TEXTURE_PLANAR_MODE = 2, pd.TEXTURE_CUBIC_MODE = 3, pd.TEXTURE_PROJECTION_MODE = 4, pd.TEXTURE_SKYBOX_MODE = 5, pd.TEXTURE_INVCUBIC_MODE = 6, pd.TEXTURE_EQUIRECTANGULAR_MODE = 7, pd.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, pd.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, pd.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, pd.TEXTURE_FILTERING_QUALITY_HIGH = 64, pd.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, pd.TEXTURE_FILTERING_QUALITY_LOW = 8, pd.SCALEMODE_FLOOR = 1, pd.SCALEMODE_NEAREST = 2, pd.SCALEMODE_CEILING = 3, pd.MATERIAL_TextureDirtyFlag = 1, pd.MATERIAL_LightDirtyFlag = 2, pd.MATERIAL_FresnelDirtyFlag = 4, pd.MATERIAL_AttributesDirtyFlag = 8, pd.MATERIAL_MiscDirtyFlag = 16, pd.MATERIAL_PrePassDirtyFlag = 32, pd.MATERIAL_ImageProcessingDirtyFlag = 64, pd.MATERIAL_AllDirtyFlag = 127, pd.MATERIAL_TriangleFillMode = 0, pd.MATERIAL_WireFrameFillMode = 1, pd.MATERIAL_PointFillMode = 2, pd.MATERIAL_PointListDrawMode = 3, pd.MATERIAL_LineListDrawMode = 4, pd.MATERIAL_LineLoopDrawMode = 5, pd.MATERIAL_LineStripDrawMode = 6, pd.MATERIAL_TriangleStripDrawMode = 7, pd.MATERIAL_TriangleFanDrawMode = 8, pd.MATERIAL_ClockWiseSideOrientation = 0, pd.MATERIAL_CounterClockWiseSideOrientation = 1, pd.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, pd.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, pd.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, pd.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, pd.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, pd.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, pd.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, pd.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, pd.ACTION_NothingTrigger = 0, pd.ACTION_OnPickTrigger = 1, pd.ACTION_OnLeftPickTrigger = 2, pd.ACTION_OnRightPickTrigger = 3, pd.ACTION_OnCenterPickTrigger = 4, pd.ACTION_OnPickDownTrigger = 5, pd.ACTION_OnDoublePickTrigger = 6, pd.ACTION_OnPickUpTrigger = 7, pd.ACTION_OnPickOutTrigger = 16, pd.ACTION_OnLongPressTrigger = 8, pd.ACTION_OnPointerOverTrigger = 9, pd.ACTION_OnPointerOutTrigger = 10, pd.ACTION_OnEveryFrameTrigger = 11, pd.ACTION_OnIntersectionEnterTrigger = 12, pd.ACTION_OnIntersectionExitTrigger = 13, pd.ACTION_OnKeyDownTrigger = 14, pd.ACTION_OnKeyUpTrigger = 15, pd.PARTICLES_BILLBOARDMODE_Y = 2, pd.PARTICLES_BILLBOARDMODE_ALL = 7, pd.PARTICLES_BILLBOARDMODE_STRETCHED = 8, pd.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, pd.MESHES_CULLINGSTRATEGY_STANDARD = 0, pd.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, pd.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, pd.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, pd.SCENELOADER_NO_LOGGING = 0, pd.SCENELOADER_MINIMAL_LOGGING = 1, pd.SCENELOADER_SUMMARY_LOGGING = 2, pd.SCENELOADER_DETAILED_LOGGING = 3, pd.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, pd.PREPASS_POSITION_TEXTURE_TYPE = 1, pd.PREPASS_VELOCITY_TEXTURE_TYPE = 2, pd.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, pd.PREPASS_COLOR_TEXTURE_TYPE = 4, pd.PREPASS_DEPTH_TEXTURE_TYPE = 5, pd.PREPASS_NORMAL_TEXTURE_TYPE = 6, pd.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, pd.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, pd.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, pd.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, pd.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, pd.PREPASS_ALBEDO_TEXTURE_TYPE = 12, pd.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, pd.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, pd.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, pd.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, pd.BUFFER_CREATIONFLAG_READ = 1, pd.BUFFER_CREATIONFLAG_WRITE = 2, pd.BUFFER_CREATIONFLAG_READWRITE = 3, pd.BUFFER_CREATIONFLAG_UNIFORM = 4, pd.BUFFER_CREATIONFLAG_VERTEX = 8, pd.BUFFER_CREATIONFLAG_INDEX = 16, pd.BUFFER_CREATIONFLAG_STORAGE = 32, pd.BUFFER_CREATIONFLAG_INDIRECT = 64, pd.RENDERPASS_MAIN = 0, pd.INPUT_ALT_KEY = 18, pd.INPUT_CTRL_KEY = 17, pd.INPUT_META_KEY1 = 91, pd.INPUT_META_KEY2 = 92, pd.INPUT_META_KEY3 = 93, pd.INPUT_SHIFT_KEY = 16, pd.SNAPSHOTRENDERING_STANDARD = 0, pd.SNAPSHOTRENDERING_FAST = 1, pd.PERSPECTIVE_CAMERA = 0, pd.ORTHOGRAPHIC_CAMERA = 1, pd.FOVMODE_VERTICAL_FIXED = 0, pd.FOVMODE_HORIZONTAL_FIXED = 1, pd.RIG_MODE_NONE = 0, pd.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, pd.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, pd.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, pd.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, pd.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, pd.RIG_MODE_VR = 20, pd.RIG_MODE_CUSTOM = 22, pd.MAX_SUPPORTED_UV_SETS = 6, pd.GL_ALPHA_EQUATION_ADD = 32774, pd.GL_ALPHA_EQUATION_MIN = 32775, pd.GL_ALPHA_EQUATION_MAX = 32776, pd.GL_ALPHA_EQUATION_SUBTRACT = 32778, pd.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, pd.GL_ALPHA_FUNCTION_SRC = 768, pd.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, pd.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, pd.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, pd.GL_ALPHA_FUNCTION_DST_ALPHA = 772, pd.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, pd.GL_ALPHA_FUNCTION_DST_COLOR = 774, pd.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, pd.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, pd.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, pd.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, pd.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, pd.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, pd.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, pd.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, pd.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, pd.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, pd.SnippetUrl = "https://snippet.babylonjs.com", pd.FOGMODE_NONE = 0, pd.FOGMODE_EXP = 1, pd.FOGMODE_EXP2 = 2, pd.FOGMODE_LINEAR = 3, pd.BYTE = 5120, pd.UNSIGNED_BYTE = 5121, pd.SHORT = 5122, pd.UNSIGNED_SHORT = 5123, pd.INT = 5124, pd.UNSIGNED_INT = 5125, pd.FLOAT = 5126, pd.HALF_FLOAT = 5131, pd.PositionKind = "position", pd.NormalKind = "normal", pd.TangentKind = "tangent", pd.UVKind = "uv", pd.UV2Kind = "uv2", pd.UV3Kind = "uv3", pd.UV4Kind = "uv4", pd.UV5Kind = "uv5", pd.UV6Kind = "uv6", pd.ColorKind = "color", pd.ColorInstanceKind = "instanceColor", pd.MatricesIndicesKind = "matricesIndices", pd.MatricesWeightsKind = "matricesWeights", pd.MatricesIndicesExtraKind = "matricesIndicesExtra", pd.MatricesWeightsExtraKind = "matricesWeightsExtra", pd.ANIMATIONTYPE_FLOAT = 0, pd.ANIMATIONTYPE_VECTOR3 = 1, pd.ANIMATIONTYPE_QUATERNION = 2, pd.ANIMATIONTYPE_MATRIX = 3, pd.ANIMATIONTYPE_COLOR3 = 4, pd.ANIMATIONTYPE_COLOR4 = 7, pd.ANIMATIONTYPE_VECTOR2 = 5, pd.ANIMATIONTYPE_SIZE = 6, pd.ShadowMinZ = 0, pd.ShadowMaxZ = 1e4, pd.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, pd.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  41547: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => gd
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(37251),
      Pd = kd(40243),
      Zd = kd(40207);
    let gd = (() => {
      var dd;
      let Jd, kd, gd, Cd, Kd = Pd.d,
        od = [];
      return dd = class extends Kd {
        constructor() {
          super(...arguments), this._position = (0, pd.i)(this, od), this._needProjectionMatrixCompute = !0, this._viewMatrix = Wd.b.Identity(), this._projectionMatrix = Wd.b.Identity()
        }
        _setPosition(dd) {
          this._position = dd
        }
        get position() {
          return this._position
        }
        set position(dd) {
          this._setPosition(dd)
        }
        _setDirection(dd) {
          this._direction = dd
        }
        get direction() {
          return this._direction
        }
        set direction(dd) {
          this._setDirection(dd)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(dd) {
          this._shadowMinZ = dd, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(dd) {
          this._shadowMaxZ = dd, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = Wd.n.Zero()), Wd.n.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = Wd.n.Zero()), Wd.n.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(dd) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(dd) {
          return this.direction = Wd.n.Normalize(dd.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const dd = Wd.n.Cross(this.direction, Zd.c.Y),
            Jd = Wd.n.Cross(dd, this.direction);
          return Wd.n.RotationFromAxis(dd, Jd, this.direction)
        }
        needCube() {
          return !1
        }
        needProjectionMatrixCompute() {
          return this._needProjectionMatrixCompute
        }
        forceProjectionMatrixCompute() {
          this._needProjectionMatrixCompute = !0
        }
        _initCache() {
          super._initCache(), this._cache.position = Wd.n.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(dd) {
          return !dd && this.isSynchronized() ? (this._currentRenderId = this.Wm().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.Fs(this.position), this._worldMatrix || (this._worldMatrix = Wd.b.Identity()), Wd.b.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(dd) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : dd?.minZ || 0
        }
        getDepthMaxZ(dd) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : dd?.maxZ || 1e4
        }
        setShadowProjectionMatrix(dd, Jd, kd) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(Jd, kd, dd) : this._setDefaultShadowProjectionMatrix(dd, Jd, kd), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(dd) {
          const Jd = Wd.h.IL[0];
          let kd = this.position;
          this.computeTransformedInformation() && (kd = this.transformedPosition), Wd.n.NormalizeToRef(this.getShadowDirection(dd), Jd), 1 === Math.abs(Wd.n.Dot(Jd, Wd.n.Up())) && (Jd.z = 1e-13);
          const pd = Wd.h.IL[1];
          return kd.addToRef(Jd, pd), Wd.b.LookAtLHToRef(kd, pd, Wd.n.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(dd, Jd) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, dd ?? this._viewMatrix, Jd ?? []), this._projectionMatrix
        }
      }, (() => {
        const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Kd[Symbol.metadata] ?? null) : void 0;
        Jd = [(0, Nd.F)()], kd = [(0, Nd.F)()], gd = [(0, Nd.H)()], Cd = [(0, Nd.H)()], (0, pd.h)(dd, null, Jd, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: dd => "position" in dd,
            get: dd => dd.position
          },
          metadata: Wd
        }, null, od), (0, pd.h)(dd, null, kd, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: dd => "direction" in dd,
            get: dd => dd.direction
          },
          metadata: Wd
        }, null, od), (0, pd.h)(dd, null, gd, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: dd => "shadowMinZ" in dd,
            get: dd => dd.shadowMinZ
          },
          metadata: Wd
        }, null, od), (0, pd.h)(dd, null, Cd, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: dd => "shadowMaxZ" in dd,
            get: dd => dd.shadowMaxZ
          },
          metadata: Wd
        }, null, od), Wd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wd
        })
      })(), dd
    })()
  },
  41561: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd
    });
    var pd = kd(40471);
    class Nd extends pd.c {
      constructor(dd, Jd, kd, Nd, Wd) {
        let Pd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Zd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          gd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          Cd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Kd = arguments.length > 9 ? arguments[9] : void 0,
          od = arguments.length > 10 ? arguments[10] : void 0,
          ld = arguments.length > 11 ? arguments[11] : void 0,
          Qd = arguments.length > 12 ? arguments[12] : void 0;
        super(null, Wd, !Pd, Zd, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, Kd), this.format = Nd, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== Cd || (gd = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== Cd || (gd = 1), this._texture = this._engine.createRawTexture(dd, Jd, kd, Nd, Pd, Zd, gd, null, Cd, Kd ?? 0, od ?? !1, Qd), this.wrapU = pd.c.CLAMP_ADDRESSMODE, this.wrapV = pd.c.CLAMP_ADDRESSMODE, this._waitingForData = !!ld && !dd)
      }
      update(dd) {
        this.updateMipLevel(dd, 0)
      }
      updateMipLevel(dd, Jd) {
        this._getEngine().updateRawTexture(this._texture, dd, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, Jd), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const dd = new Nd(null, this.getSize().width, this.getSize().height, this.format, this.Wm(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return dd._texture = this._texture, this._texture.incrementReferences(), dd
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(dd, Jd, kd, pd) {
        return new Nd(dd, Jd, kd, 1, pd, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(dd, Jd, kd, pd) {
        return new Nd(dd, Jd, kd, 2, pd, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(dd, Jd, kd, pd) {
        return new Nd(dd, Jd, kd, 0, pd, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(dd, Jd, kd, pd) {
        return new Nd(dd, Jd, kd, 4, pd, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(dd, Jd, kd, pd) {
        return new Nd(dd, Jd, kd, 5, pd, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(dd, Jd, kd, pd) {
        return new Nd(dd, Jd, kd, 5, pd, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(dd, Jd, kd, Wd) {
        let Pd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Zd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          gd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : pd.c.TRILINEAR_SAMPLINGMODE;
        return new Nd(dd, Jd, kd, 6, Wd, Pd, Zd, gd, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(dd, Jd, kd, Wd) {
        let Pd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Zd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          gd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : pd.c.TRILINEAR_SAMPLINGMODE;
        return new Nd(dd, Jd, kd, 6, Wd, Pd, Zd, gd, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  41599: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd.c
    });
    var pd = kd(40426);
    (0, pd.e)()
  },
  41553: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd.e
    });
    var pd = kd(40448);
    (0, pd.i)()
  },
  40448: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => ld,
      i: () => Od
    });
    var pd, Nd, Wd = kd(37443),
      Pd = kd(40115),
      Zd = kd(40393),
      gd = kd(40456),
      Cd = kd(40278),
      Kd = kd(40465),
      od = kd(39860);
    class ld extends Zd.b {
      _isShaderMaterial(dd) {
        return !!dd && "ShaderMaterial" === dd.getClassName()
      }
      constructor(dd) {
        let Jd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          pd = arguments.length > 5 ? arguments[5] : void 0,
          Nd = arguments.length > 6 ? arguments[6] : void 0,
          Zd = arguments.length > 7 ? arguments[7] : void 0;
        super(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Jd, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = pd, this.useVertexAlpha = Nd, this.color = new Wd.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Jd && (this.color = Jd.color.clone(), this.alpha = Jd.alpha, this.useVertexColor = Jd.useVertexColor, this.useVertexAlpha = Jd.useVertexAlpha), this.intersectionThreshold = .1;
        const gd = {
          attributes: [Pd.j.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? gd.defines.push("#define VERTEXALPHA") : gd.needAlphaBlending = !1, this.useVertexColor ? (gd.defines.push("#define VERTEXCOLOR"), gd.attributes.push(Pd.j.ColorKind)) : (gd.uniforms.push("color"), this._color4 = new Wd.g), Zd) this.material = Zd;
        else {
          this.Wm().eL().isWebGPU && !ld.ForceGLSL && (this._shaderLanguage = 1), gd.shaderLanguage = this._shaderLanguage, gd.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([kd.e(335).then((() => kd(42467))), kd.e(341).then((() => kd(42469)))]) : await Promise.all([kd.e(317).then((() => kd(42477))), kd.e(323).then((() => kd(42483)))])
          };
          const dd = new Kd.v("colorShader", this.Wm(), "color", gd, !1);
          dd.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(dd)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(dd) {
        const Jd = this.material;
        if (Jd === dd) return;
        const kd = Jd && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(dd), kd && Jd?.dispose()
      }
      _setInternalMaterial(dd) {
        this._setMaterial(dd), this.material && (this.material.fillMode = Cd.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(dd) {}
      _bind(dd, Jd) {
        if (!this._geometry) return this;
        const kd = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Jd, kd) : this._geometry._bind(Jd, kd, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: dd,
            g: Jd,
            b: kd
          } = this.color;
          this._color4.set(dd, Jd, kd, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(dd, Jd, kd) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const pd = this.Wm().eL();
        return this._unIndexed ? pd.drawArraysType(Cd.b.LineListDrawMode, dd.verticesStart, dd.verticesCount, kd) : pd.drawElementsType(Cd.b.LineListDrawMode, dd.indexStart, dd.indexCount, kd), this
      }
      dispose(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Jd) && this.material?.dispose(!1, !1, !0), super.dispose(dd)
      }
      clone(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        if (Jd && void 0 === Jd._addToSceneRootNodes) {
          const kd = Jd;
          return kd.source = this, new ld(dd, this.Wm(), kd.parent, kd.source, kd.doNotCloneChildren)
        }
        return new ld(dd, this.Wm(), Jd, this, kd)
      }
      createInstance(dd) {
        const Jd = new Qd(dd, this);
        if (this.fn) {
          Jd.fn = {};
          for (const dd in this.fn) Jd.fn[dd] = this.fn[dd]
        }
        return Jd
      }
      serialize(dd) {
        super.serialize(dd), dd.color = this.color.spd(), dd.alpha = this.alpha
      }
      static Parse(dd, Jd) {
        const kd = new ld(dd.name, Jd);
        return kd.color = Wd.c.FromArray(dd.color), kd.alpha = dd.alpha, kd
      }
    }
    ld.ForceGLSL = !1;
    class Qd extends gd.c {
      constructor(dd, Jd) {
        super(dd, Jd), this.intersectionThreshold = Jd.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let Ld = !1;

    function Od() {
      Ld || (Ld = !0, Zd.b._LinesMeshParser = (dd, Jd) => ld.Parse(dd, Jd))
    }(pd = ld.prototype).enableEdgesRendering ?? (pd.enableEdgesRendering = (0, od.j)("LinesMesh", "enableEdgesRendering")), (Nd = Qd.prototype).enableEdgesRendering ?? (Nd.enableEdgesRendering = (0, od.j)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);