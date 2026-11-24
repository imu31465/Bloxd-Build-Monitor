export const id = 269;
export const ids = [269];
export const modules = {
  40612: (SS, HS, gS) => {
    gS.d(HS, {
      $: () => tg,
      $b: () => XH,
      $c: () => KS,
      $d: () => gt,
      A: () => kS,
      Ae: () => lg,
      Af: () => Gg,
      B: () => bH,
      Bc: () => tH,
      Cd: () => IS,
      D: () => dS,
      Db: () => Sg,
      Df: () => og,
      E: () => vS,
      Ed: () => GH,
      Ee: () => Lg,
      Fc: () => fH,
      Ff: () => ig,
      G: () => cS,
      Gc: () => OS,
      Ge: () => zg,
      Hb: () => ES,
      Hd: () => FH,
      Hf: () => Wg,
      J: () => sH,
      Jc: () => uH,
      Jd: () => US,
      Kb: () => eS,
      Kc: () => qH,
      Ke: () => Eg,
      L: () => aS,
      Lc: () => gH,
      Lf: () => Pg,
      M: () => BS,
      N: () => Xt,
      Nc: () => JS,
      Nd: () => kH,
      O: () => rH,
      Ob: () => mS,
      Oe: () => sg,
      Of: () => jg,
      Pd: () => oH,
      Qb: () => HH,
      Qd: () => UH,
      R: () => oS,
      Rc: () => QS,
      Sc: () => tS,
      Se: () => pg,
      Sf: () => Vg,
      Tb: () => jH,
      Tc: () => ZS,
      Td: () => SH,
      Te: () => Ug,
      U: () => mH,
      Ud: () => rS,
      Vd: () => sS,
      W: () => eH,
      Wb: () => RS,
      Wd: () => DS,
      Wf: () => hg,
      X: () => TS,
      Xc: () => xH,
      Xd: () => fS,
      Xe: () => bt,
      Xf: () => Qg,
      Y: () => lH,
      Yc: () => GS,
      Z: () => WS,
      Zd: () => qg,
      Zf: () => Fg,
      _b: () => LS,
      _c: () => jS,
      _e: () => Zg,
      af: () => cg,
      ag: () => ng,
      cg: () => Bg,
      db: () => bg,
      dc: () => nS,
      dd: () => Xg,
      de: () => Cg,
      df: () => Jg,
      e: () => XS,
      eb: () => zS,
      fd: () => xg,
      fe: () => Dg,
      ff: () => vg,
      fg: () => kg,
      g: () => xS,
      h: () => hS,
      hc: () => PS,
      hf: () => dg,
      ib: () => gg,
      ic: () => IH,
      id: () => wS,
      if: () => Og,
      ig: () => Kg,
      je: () => ag,
      jf: () => tt,
      k: () => iS,
      kb: () => Hg,
      kf: () => eg,
      l: () => ug,
      mc: () => uS,
      md: () => AS,
      nc: () => MH,
      ne: () => Rg,
      nf: () => St,
      o: () => Ng,
      ob: () => aH,
      od: () => YS,
      pd: () => VS,
      qc: () => pS,
      r: () => NS,
      rb: () => NH,
      re: () => Mg,
      rf: () => mg,
      sb: () => bS,
      sd: () => yS,
      t: () => pH,
      te: () => Yg,
      uc: () => FS,
      uf: () => rg,
      vd: () => KH,
      w: () => BH,
      wb: () => CS,
      x: () => MS,
      xe: () => yg,
      xf: () => Ht,
      yb: () => nH,
      yc: () => TH,
      ye: () => Ag,
      yf: () => Tg,
      z: () => RH,
      zb: () => lS,
      zd: () => qS,
      zf: () => wg
    });
    const tS = -2147483648,
      bS = 12,
      XS = 12,
      xS = 4095,
      NS = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      qS = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      uS = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      IS = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      fS = {
        Alive: 16
      },
      kS = 32,
      aS = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      KS = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      jS = 4294967295,
      GS = 0,
      CS = 4294967295,
      nS = 4,
      PS = 123,
      QS = -2147483648,
      DS = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      wS = 51,
      hS = 5,
      ZS = 4294967295,
      JS = 4294967295,
      OS = 128,
      dS = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      cS = 16,
      vS = 255,
      ES = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      LS = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      YS = {
        Hotbar: 256,
        Drop: 257
      },
      AS = {
        Down: 1,
        Next: 2,
        Stack: 4
      },
      yS = {
        Rate: 0,
        Gyro: 1
      },
      VS = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      iS = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      WS = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      zS = {
        LookPointed: 1,
        Held: 2
      },
      US = 3,
      pS = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      sS = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      BS = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      MS = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      FS = {
        Stackable: 1
      },
      RS = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      TS = {
        Detail: 1,
        RoomForOne: 2
      },
      oS = {
        HaveIngredients: 1,
        Listed: 2
      },
      lS = {
        HasOpts: 1
      },
      mS = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      eS = {
        Up: 1,
        Down: 2
      },
      rS = {
        TwoD: 1,
        Loop: 2
      },
      SH = {
        StopAfter: 1
      },
      HH = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      gH = {
        Pose: 1,
        Visible: 2
      },
      tH = 255,
      bH = 65535,
      XH = 255,
      xH = 65535,
      NH = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      qH = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      uH = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      IH = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      fH = 4294967295,
      kH = 4294967295,
      aH = 255,
      KH = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      jH = {
        critical: 123
      },
      GH = 4294967295,
      CH = {
        BYTES: 4,
        mf: (SS, HS) => SS.getUint32(HS + 0, !0)
      },
      nH = {
        BYTES: 12,
        serverId: (SS, HS) => SS.getInt32(HS + 0, !0),
        index: (SS, HS) => SS.getUint32(HS + 4, !0),
        kind: (SS, HS) => SS.getUint16(HS + 8, !0)
      },
      PH = {
        BYTES: 20,
        pos: (SS, HS, gS) => SS.getInt32(HS + 0 + 4 * gS, !0),
        actual: (SS, HS) => SS.getUint32(HS + 12, !0),
        dataLen: (SS, HS) => SS.getUint32(HS + 16, !0)
      },
      QH = {
        BYTES: 20,
        what: (SS, HS) => SS.getUint8(HS + 0),
        value: (SS, HS) => SS.getInt16(HS + 2, !0),
        pos: (SS, HS, gS) => SS.getInt32(HS + 4 + 4 * gS, !0),
        block: (SS, HS) => SS.getUint32(HS + 16, !0)
      },
      DH = {
        BYTES: 4,
        item: (SS, HS) => SS.getUint16(HS + 0, !0),
        slot: (SS, HS) => SS.getUint8(HS + 2)
      },
      wH = {
        BYTES: 16,
        target: (SS, HS) => SS.getInt32(HS + 0, !0),
        damage: (SS, HS) => SS.getFloat32(HS + 4, !0),
        distance: (SS, HS) => SS.getFloat32(HS + 8, !0),
        crit: (SS, HS) => SS.getUint8(HS + 12)
      },
      hH = {
        BYTES: 4,
        slot: (SS, HS) => SS.getUint16(HS + 0, !0)
      },
      ZH = {
        BYTES: 20,
        what: (SS, HS) => SS.getUint8(HS + 0),
        value: (SS, HS) => SS.getInt16(HS + 2, !0),
        pos: (SS, HS, gS) => SS.getInt32(HS + 4 + 4 * gS, !0),
        block: (SS, HS) => SS.getUint32(HS + 16, !0)
      },
      JH = {
        BYTES: 12,
        serverId: (SS, HS) => SS.getInt32(HS + 0, !0),
        index: (SS, HS) => SS.getUint32(HS + 4, !0),
        what: (SS, HS) => SS.getUint16(HS + 8, !0)
      },
      OH = {
        BYTES: 24,
        cx: (SS, HS) => SS.getInt32(HS + 0, !0),
        cy: (SS, HS) => SS.getInt32(HS + 4, !0),
        cz: (SS, HS) => SS.getInt32(HS + 8, !0),
        slot: (SS, HS) => SS.getUint32(HS + 12, !0),
        generation: (SS, HS) => SS.getUint32(HS + 16, !0),
        flags: (SS, HS) => SS.getUint32(HS + 20, !0)
      },
      dH = {
        BYTES: 44,
        pos: (SS, HS, gS) => SS.getFloat64(HS + 0 + 8 * gS, !0),
        sound: (SS, HS) => SS.getUint16(HS + 24, !0),
        flags: (SS, HS) => SS.getUint16(HS + 26, !0),
        handle: (SS, HS) => SS.getUint32(HS + 28, !0),
        volume: (SS, HS) => SS.getFloat32(HS + 32, !0),
        rate: (SS, HS) => SS.getFloat32(HS + 36, !0),
        refDist: (SS, HS) => SS.getFloat32(HS + 40, !0)
      },
      cH = {
        BYTES: 28,
        pos: (SS, HS, gS) => SS.getFloat64(HS + 0 + 8 * gS, !0),
        handle: (SS, HS) => SS.getUint32(HS + 24, !0)
      },
      vH = {
        BYTES: 16,
        handle: (SS, HS) => SS.getUint32(HS + 0, !0),
        volume: (SS, HS) => SS.getFloat32(HS + 4, !0),
        rate: (SS, HS) => SS.getFloat32(HS + 8, !0),
        refDist: (SS, HS) => SS.getFloat32(HS + 12, !0)
      },
      EH = {
        BYTES: 12,
        handle: (SS, HS) => SS.getUint32(HS + 0, !0),
        to: (SS, HS) => SS.getFloat32(HS + 4, !0),
        ms: (SS, HS) => SS.getUint16(HS + 8, !0),
        flags: (SS, HS) => SS.getUint16(HS + 10, !0)
      },
      LH = {
        BYTES: 4,
        handle: (SS, HS) => SS.getUint32(HS + 0, !0)
      },
      YH = {
        BYTES: 8,
        reason: (SS, HS) => SS.getUint8(HS + 0),
        code: (SS, HS) => SS.getUint8(HS + 1),
        version: (SS, HS) => SS.getUint32(HS + 4, !0)
      },
      AH = {
        BYTES: 4,
        key: (SS, HS) => SS.getUint8(HS + 0),
        tag: (SS, HS) => SS.getUint8(HS + 1)
      },
      yH = {
        BYTES: 16,
        save: (SS, HS) => SS.getUint32(HS + 0, !0),
        index: (SS, HS) => SS.getUint32(HS + 4, !0),
        ptr: (SS, HS) => SS.getUint32(HS + 8, !0),
        len: (SS, HS) => SS.getUint32(HS + 12, !0)
      },
      VH = {
        BYTES: 16,
        save: (SS, HS) => SS.getUint32(HS + 0, !0),
        kind: (SS, HS) => SS.getUint8(HS + 4),
        parts: (SS, HS) => SS.getUint32(HS + 8, !0),
        bytes: (SS, HS) => SS.getUint32(HS + 12, !0)
      },
      iH = {
        BYTES: 4,
        totalTicks: (SS, HS) => SS.getUint32(HS + 0, !0)
      },
      WH = {
        BYTES: 24,
        what: (SS, HS) => SS.getUint8(HS + 0),
        int: (SS, HS) => SS.getInt32(HS + 4, !0),
        x: (SS, HS) => SS.getFloat64(HS + 8, !0),
        y: (SS, HS) => SS.getFloat64(HS + 16, !0)
      },
      zH = {
        BYTES: 8,
        what: (SS, HS) => SS.getUint8(HS + 0),
        kind: (SS, HS) => SS.getUint8(HS + 1),
        save: (SS, HS) => SS.getUint32(HS + 4, !0)
      },
      UH = {
        BYTES: 4,
        Ju: (SS, HS) => SS.getUint16(HS + 0, !0)
      },
      pH = {
        BYTES: 360,
        eye: (SS, HS, gS) => SS.getFloat64(HS + 0 + 8 * gS, !0),
        localPos: (SS, HS, gS) => SS.getFloat64(HS + 24 + 8 * gS, !0),
        dSS: (SS, HS, gS) => SS.getFloat64(HS + 48 + 8 * gS, !0),
        viewProj: (SS, HS, gS) => SS.getFloat32(HS + 72 + 4 * gS, !0),
        origin: (SS, HS, gS) => SS.getInt32(HS + 136 + 4 * gS, !0),
        heading: (SS, HS) => SS.getFloat32(HS + 148, !0),
        pitch: (SS, HS) => SS.getFloat32(HS + 152, !0),
        tanHalfFovX: (SS, HS) => SS.getFloat32(HS + 156, !0),
        tanHalfFovY: (SS, HS) => SS.getFloat32(HS + 160, !0),
        viewportCss: (SS, HS, gS) => SS.getFloat32(HS + 164 + 4 * gS, !0),
        localVel: (SS, HS, gS) => SS.getFloat32(HS + 172 + 4 * gS, !0),
        actionDir: (SS, HS, gS) => SS.getFloat32(HS + 184 + 4 * gS, !0),
        localId: (SS, HS) => SS.getInt32(HS + 196, !0),
        playerFlags: (SS, HS) => SS.getUint32(HS + 200, !0),
        targetBlock: (SS, HS, gS) => SS.getInt32(HS + 204 + 4 * gS, !0),
        targetAdjacent: (SS, HS, gS) => SS.getInt32(HS + 216 + 4 * gS, !0),
        targetBlockId: (SS, HS) => SS.getUint32(HS + 228, !0),
        targetNormal: (SS, HS, gS) => SS.getInt8(HS + 232 + 1 * gS),
        targetFlags: (SS, HS) => SS.getUint8(HS + 235),
        pickedEntity: (SS, HS) => SS.getInt32(HS + 236, !0),
        breakingPos: (SS, HS, gS) => SS.getInt32(HS + 240 + 4 * gS, !0),
        breakingProgress: (SS, HS) => SS.getFloat32(HS + 252, !0),
        RD: (SS, HS) => SS.getUint16(HS + 256, !0),
        selectedSlot: (SS, HS) => SS.getUint8(HS + 258),
        heldFlags: (SS, HS) => SS.getUint8(HS + 259),
        heldAttrVersion: (SS, HS) => SS.getUint32(HS + 260, !0),
        inventoryVersion: (SS, HS) => SS.getUint32(HS + 264, !0),
        effectsVersion: (SS, HS) => SS.getUint32(HS + 268, !0),
        entitiesVersion: (SS, HS) => SS.getUint32(HS + 272, !0),
        entRenderPtr: (SS, HS) => SS.getUint32(HS + 276, !0),
        entCapacity: (SS, HS) => SS.getUint32(HS + 280, !0),
        frameMs: (SS, HS) => SS.getFloat32(HS + 284, !0),
        fps: (SS, HS) => SS.getFloat32(HS + 288, !0),
        entVisPtr: (SS, HS) => SS.getUint32(HS + 292, !0),
        momentumFrac: (SS, HS) => SS.getFloat32(HS + 296, !0),
        chunkSlotsPtr: (SS, HS) => SS.getUint32(HS + 300, !0),
        chunkSlotsLen: (SS, HS) => SS.getUint32(HS + 304, !0),
        walkThroughPtr: (SS, HS) => SS.getUint32(HS + 308, !0),
        walkThroughLen: (SS, HS) => SS.getUint32(HS + 312, !0),
        audioViewPtr: (SS, HS) => SS.getUint32(HS + 316, !0),
        inventoryViewPtr: (SS, HS) => SS.getUint32(HS + 320, !0),
        eventOverflowGen: (SS, HS) => SS.getUint32(HS + 324, !0),
        eventOverflowMask: (SS, HS) => SS.getUint32(HS + 328, !0),
        promptEntity: (SS, HS) => SS.getInt32(HS + 332, !0),
        replayViewPtr: (SS, HS) => SS.getUint32(HS + 336, !0),
        slotIcon: (SS, HS) => SS.getUint32(HS + 340, !0),
        localDeaths: (SS, HS) => SS.getUint32(HS + 344, !0),
        cameraFar: (SS, HS) => SS.getFloat32(HS + 348, !0),
        gliderBoostFuel: (SS, HS) => SS.getUint32(HS + 352, !0),
        interactLabel: (SS, HS) => SS.getUint16(HS + 356, !0),
        interactIcon: (SS, HS) => SS.getUint16(HS + 358, !0)
      },
      sH = {
        BYTES: 16,
        voxelsPtr: (SS, HS) => SS.getUint32(HS + 0, !0),
        version: (SS, HS) => SS.getUint32(HS + 4, !0),
        generation: (SS, HS) => SS.getUint32(HS + 8, !0),
        Ku: (SS, HS) => SS.getUint32(HS + 12, !0)
      },
      BH = {
        BYTES: 56,
        listener: (SS, HS, gS) => SS.getFloat64(HS + 0 + 8 * gS, !0),
        forward: (SS, HS, gS) => SS.getFloat32(HS + 24 + 4 * gS, !0),
        up: (SS, HS, gS) => SS.getFloat32(HS + 36 + 4 * gS, !0),
        dropped: (SS, HS) => SS.getUint32(HS + 48, !0),
        unfollowed: (SS, HS) => SS.getUint32(HS + 52, !0)
      },
      MH = {
        BYTES: 8,
        item: (SS, HS) => SS.getUint16(HS + 0, !0),
        amount: (SS, HS) => SS.getUint16(HS + 2, !0),
        attrVersion: (SS, HS) => SS.getUint32(HS + 4, !0)
      },
      FH = {
        BYTES: 76,
        version: (SS, HS) => SS.getUint32(HS + 0, !0),
        state: (SS, HS) => SS.getUint8(HS + 4),
        cameraMode: (SS, HS) => SS.getUint8(HS + 5),
        mf: (SS, HS) => SS.getUint32(HS + 8, !0),
        totalTicks: (SS, HS) => SS.getUint32(HS + 12, !0),
        speed: (SS, HS) => SS.getFloat32(HS + 16, !0),
        markIn: (SS, HS) => SS.getUint32(HS + 20, !0),
        markOut: (SS, HS) => SS.getUint32(HS + 24, !0),
        editVersion: (SS, HS) => SS.getUint32(HS + 28, !0),
        drops: (SS, HS, gS) => SS.getUint32(HS + 32 + 4 * gS, !0)
      },
      RH = {
        BYTES: 6,
        flags: (SS, HS) => SS.getUint8(HS + 0),
        harvestType: (SS, HS) => SS.getUint8(HS + 1),
        harvestLevel: (SS, HS) => SS.getUint8(HS + 2),
        attachedTop: (SS, HS) => SS.getUint16(HS + 4, !0)
      },
      TH = {
        BYTES: 3,
        flags: (SS, HS) => SS.getUint8(HS + 0),
        harvests: (SS, HS) => SS.getUint8(HS + 1),
        level: (SS, HS) => SS.getUint8(HS + 2)
      },
      oH = {
        BYTES: 12,
        item: (SS, HS) => SS.getUint32(HS + 0, !0),
        amount: (SS, HS) => SS.getFloat64(HS + 4, !0)
      },
      lH = {
        BYTES: 16,
        recipes: (SS, HS) => SS.getUint32(HS + 0, !0),
        ingredients: (SS, HS) => SS.getUint32(HS + 4, !0),
        craftAllTimes: (SS, HS) => SS.getUint32(HS + 8, !0),
        flags: (SS, HS) => SS.getUint32(HS + 12, !0)
      },
      mH = {
        BYTES: 10,
        item: (SS, HS) => SS.getUint16(HS + 0, !0),
        recipe: (SS, HS) => SS.getUint16(HS + 2, !0),
        produces: (SS, HS) => SS.getUint16(HS + 4, !0),
        requires: (SS, HS) => SS.getUint16(HS + 6, !0),
        flags: (SS, HS) => SS.getUint8(HS + 8)
      },
      eH = {
        BYTES: 4,
        amount: (SS, HS) => SS.getUint16(HS + 0, !0),
        items: (SS, HS) => SS.getUint16(HS + 2, !0)
      },
      rH = {
        BYTES: 8,
        amount: (SS, HS) => SS.getUint32(HS + 0, !0),
        item: (SS, HS) => SS.getUint16(HS + 4, !0),
        from: (SS, HS) => SS.getUint16(HS + 6, !0)
      },
      Sg = {
        BYTES: 16,
        serverId: (SS, HS) => SS.getInt32(HS + 0, !0),
        len: (SS, HS) => SS.getUint32(HS + 4, !0),
        kind: (SS, HS) => SS.getUint16(HS + 8, !0),
        variation: (SS, HS) => SS.getUint16(HS + 10, !0),
        pose: (SS, HS) => SS.getUint8(HS + 12),
        meta: (SS, HS) => SS.getUint8(HS + 13),
        mesh: (SS, HS) => SS.getUint8(HS + 14),
        flags: (SS, HS) => SS.getUint8(HS + 15)
      },
      Hg = {
        BYTES: 56,
        terrainOpaque: (SS, HS) => SS.getUint32(HS + 0, !0),
        terrainTransparent: (SS, HS) => SS.getUint32(HS + 4, !0),
        terrainPack: (SS, HS) => SS.getUint32(HS + 8, !0),
        earthSky: (SS, HS) => SS.getUint32(HS + 12, !0),
        skyMeshes: (SS, HS) => SS.getUint32(HS + 16, !0),
        regular: (SS, HS) => SS.getUint32(HS + 20, !0),
        thin: (SS, HS) => SS.getUint32(HS + 24, !0),
        line: (SS, HS) => SS.getUint32(HS + 28, !0),
        text: (SS, HS) => SS.getUint32(HS + 32, !0),
        particles: (SS, HS) => SS.getUint32(HS + 36, !0),
        terrainParts: (SS, HS) => SS.getUint32(HS + 40, !0),
        terrainCompiling: (SS, HS) => SS.getUint32(HS + 44, !0),
        ringCopiesMax: (SS, HS) => SS.getUint32(HS + 48, !0),
        ringBusyWrites: (SS, HS) => SS.getUint32(HS + 52, !0)
      },
      gg = {
        BYTES: 16,
        fov: (SS, HS) => SS.getFloat32(HS + 0, !0),
        baseFov: (SS, HS) => SS.getFloat32(HS + 4, !0),
        aspect: (SS, HS) => SS.getFloat32(HS + 8, !0),
        bodyHeading: (SS, HS) => SS.getFloat32(HS + 12, !0)
      },
      tg = {
        BYTES: 32,
        eye: (SS, HS, gS) => SS.getFloat64(HS + 0 + 8 * gS, !0),
        heading: (SS, HS) => SS.getFloat32(HS + 24, !0),
        pitch: (SS, HS) => SS.getFloat32(HS + 28, !0)
      },
      bg = {
        BYTES: 40,
        feet: (SS, HS, gS) => SS.getFloat64(HS + 0 + 8 * gS, !0),
        eyeHeight: (SS, HS) => SS.getFloat32(HS + 24, !0),
        heading: (SS, HS) => SS.getFloat32(HS + 28, !0),
        headingIsDrawn: (SS, HS) => SS.getUint32(HS + 32, !0)
      },
      Xg = 32,
      xg = 63,
      Ng = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function qg(SS, HS, gS, tS, bS) {
      var XS, xS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS, CS, nS, PS, QS, DS, wS, hS, ZS, JS, OS, dS, cS, vS;
      switch (SS) {
        case 32:
          return 4 === tS && (null === (XS = bS.tickEnd) || void 0 === XS || XS.call(bS, CH.mf(HS, gS)), !0);
        case 33:
          return 12 === tS && (null === (xS = bS.entitySpawned) || void 0 === xS || xS.call(bS, nH.serverId(HS, gS), nH.index(HS, gS), nH.kind(HS, gS)), !0);
        case 34:
          return 12 === tS && (null === (NS = bS.entityDespawned) || void 0 === NS || NS.call(bS, nH.serverId(HS, gS), nH.index(HS, gS), nH.kind(HS, gS)), !0);
        case 39:
          return !(tS < 20) && (null === (qS = bS.changeBlockFail) || void 0 === qS || qS.call(bS, PH.pos(HS, gS, 0), PH.pos(HS, gS, 1), PH.pos(HS, gS, 2), PH.actual(HS, gS), PH.dataLen(HS, gS), gS + 20, tS - 20), !0);
        case 46:
          return 0 === tS && (null === (uS = bS.changeBlockFailEnd) || void 0 === uS || uS.call(bS), !0);
        case 48:
          return 20 === tS && (null === (IS = bS.inventoryEvent) || void 0 === IS || IS.call(bS, QH.what(HS, gS), QH.value(HS, gS), QH.pos(HS, gS, 0), QH.pos(HS, gS, 1), QH.pos(HS, gS, 2), QH.block(HS, gS)), !0);
        case 49:
          return 4 === tS && (null === (fS = bS.heldItemChanged) || void 0 === fS || fS.call(bS, DH.item(HS, gS), DH.slot(HS, gS)), !0);
        case 50:
          return 16 === tS && (null === (kS = bS.shotDamage) || void 0 === kS || kS.call(bS, wH.target(HS, gS), wH.damage(HS, gS), wH.distance(HS, gS), wH.crit(HS, gS)), !0);
        case 51:
          return !(tS < 4) && (null === (aS = bS.enchantOffer) || void 0 === aS || aS.call(bS, hH.slot(HS, gS), gS + 4, tS - 4), !0);
        case 52:
          return !(tS < 20) && (null === (KS = bS.uiEvent) || void 0 === KS || KS.call(bS, ZH.what(HS, gS), ZH.value(HS, gS), ZH.pos(HS, gS, 0), ZH.pos(HS, gS, 1), ZH.pos(HS, gS, 2), ZH.block(HS, gS), gS + 20, tS - 20), !0);
        case 53:
          return 12 === tS && (null === (jS = bS.entityInfoChanged) || void 0 === jS || jS.call(bS, JH.serverId(HS, gS), JH.index(HS, gS), JH.what(HS, gS)), !0);
        case 55:
          return 24 === tS && (null === (GS = bS.chunkSlot) || void 0 === GS || GS.call(bS, OH.cx(HS, gS), OH.cy(HS, gS), OH.cz(HS, gS), OH.slot(HS, gS), OH.generation(HS, gS), OH.flags(HS, gS)), !0);
        case 40:
          return 44 === tS && (null === (CS = bS.playSound) || void 0 === CS || CS.call(bS, dH.pos(HS, gS, 0), dH.pos(HS, gS, 1), dH.pos(HS, gS, 2), dH.sound(HS, gS), dH.flags(HS, gS), dH.handle(HS, gS), dH.volume(HS, gS), dH.rate(HS, gS), dH.refDist(HS, gS)), !0);
        case 41:
          return 28 === tS && (null === (nS = bS.soundPos) || void 0 === nS || nS.call(bS, cH.pos(HS, gS, 0), cH.pos(HS, gS, 1), cH.pos(HS, gS, 2), cH.handle(HS, gS)), !0);
        case 42:
          return 16 === tS && (null === (PS = bS.soundSet) || void 0 === PS || PS.call(bS, vH.handle(HS, gS), vH.volume(HS, gS), vH.rate(HS, gS), vH.refDist(HS, gS)), !0);
        case 43:
          return 12 === tS && (null === (QS = bS.soundFade) || void 0 === QS || QS.call(bS, EH.handle(HS, gS), EH.to(HS, gS), EH.ms(HS, gS), EH.flags(HS, gS)), !0);
        case 44:
          return 4 === tS && (null === (DS = bS.soundStop) || void 0 === DS || DS.call(bS, LH.handle(HS, gS)), !0);
        case 45:
          return 0 === tS && (null === (wS = bS.soundReset) || void 0 === wS || wS.call(bS), !0);
        case 56:
          return 8 === tS && (null === (hS = bS.replayFailed) || void 0 === hS || hS.call(bS, YH.reason(HS, gS), YH.code(HS, gS), YH.version(HS, gS)), !0);
        case 57:
          return !(tS < 4) && (null === (ZS = bS.replayOption) || void 0 === ZS || ZS.call(bS, AH.key(HS, gS), AH.tag(HS, gS), gS + 4, tS - 4), !0);
        case 58:
          return 16 === tS && (null === (JS = bS.replayFilePart) || void 0 === JS || JS.call(bS, yH.save(HS, gS), yH.index(HS, gS), yH.ptr(HS, gS), yH.len(HS, gS)), !0);
        case 59:
          return 16 === tS && (null === (OS = bS.replayFileReady) || void 0 === OS || OS.call(bS, VH.save(HS, gS), VH.kind(HS, gS), VH.parts(HS, gS), VH.bytes(HS, gS)), !0);
        case 60:
          return !(tS < 4) && (null === (dS = bS.replayOpened) || void 0 === dS || dS.call(bS, iH.totalTicks(HS, gS), gS + 4, tS - 4), !0);
        case 61:
          return !(tS < 24) && (null === (cS = bS.replayUiEvent) || void 0 === cS || cS.call(bS, WH.what(HS, gS), WH.int(HS, gS), WH.x(HS, gS), WH.y(HS, gS), gS + 24, tS - 24), !0);
        case 62:
          return 8 === tS && (null === (vS = bS.recorderEvent) || void 0 === vS || vS.call(bS, zH.what(HS, gS), zH.kind(HS, gS), zH.save(HS, gS)), !0);
        default:
          return !1
      }
    }
    const ug = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let Ig = new Uint8Array(0);

    function fg(SS) {
      return Ig.buffer !== SS.buffer && (Ig = new Uint8Array(SS.buffer)), Ig
    }

    function kg(SS, HS, gS) {
      const tS = SS.Qa(66, HS, 4);
      if (tS < 0) return !1;
      return SS.view.setUint8(tS + 0, gS), !0
    }

    function ag(SS, HS, gS) {
      const tS = SS.Qa(67, HS, 4);
      if (tS < 0) return !1;
      return SS.view.setUint32(tS + 0, gS, !0), !0
    }

    function Kg(SS, HS, gS) {
      const tS = SS.Qa(68, HS, 4);
      if (tS < 0) return !1;
      return SS.view.setUint8(tS + 0, gS), !0
    }

    function jg(SS, HS, gS, tS) {
      const bS = SS.Qa(69, HS, 4 + tS.length);
      if (bS < 0) return !1;
      const XS = SS.view;
      return XS.setUint8(bS + 0, gS), fg(XS).set(tS, XS.byteOffset + bS + 4), !0
    }

    function Gg(SS, HS, gS, tS, bS) {
      const XS = SS.Qa(128, HS, 4 + bS.length);
      if (XS < 0) return !1;
      const xS = SS.view;
      return xS.setUint8(XS + 0, gS), xS.setUint16(XS + 2, tS, !0), fg(xS).set(bS, xS.byteOffset + XS + 4), !0
    }

    function Cg(SS, HS, gS) {
      const tS = SS.Qa(131, HS, 4);
      if (tS < 0) return !1;
      return SS.view.setInt32(tS + 0, gS, !0), !0
    }

    function ng(SS, HS, gS) {
      const tS = SS.Qa(132, HS, 4);
      if (tS < 0) return !1;
      return SS.view.setUint32(tS + 0, gS, !0), !0
    }

    function Pg(SS, HS, gS) {
      const tS = SS.Qa(133, HS, 4);
      if (tS < 0) return !1;
      return SS.view.setUint32(tS + 0, gS, !0), !0
    }

    function Qg(SS, HS, gS) {
      const tS = SS.Qa(144, HS, 4);
      if (tS < 0) return !1;
      return SS.view.setUint8(tS + 0, gS), !0
    }

    function Dg(SS, HS, gS, tS, bS) {
      const XS = SS.Qa(145, HS, 12);
      if (XS < 0) return !1;
      const xS = SS.view;
      return xS.setInt32(XS + 0, gS, !0), xS.setInt32(XS + 4, tS, !0), xS.setInt32(XS + 8, bS, !0), !0
    }

    function wg(SS, HS, gS, tS) {
      const bS = SS.Qa(256, HS, 4 + tS.length);
      if (bS < 0) return !1;
      const XS = SS.view;
      return XS.setUint16(bS + 0, gS, !0), fg(XS).set(tS, XS.byteOffset + bS + 4), !0
    }

    function hg(SS, HS, gS) {
      const tS = SS.Qa(258, HS, 4);
      if (tS < 0) return !1;
      return SS.view.setUint8(tS + 0, gS), !0
    }

    function Zg(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
      const uS = SS.Qa(320, HS, 48 + qS.length);
      if (uS < 0) return !1;
      const IS = SS.view;
      IS.setUint32(uS + 0, gS, !0), IS.setUint16(uS + 4, tS, !0), IS.setUint16(uS + 6, bS, !0), IS.setUint32(uS + 8, XS, !0);
      for (let fS = 0; fS < 3; fS++) IS.setFloat64(uS + 12 + 8 * fS, xS[fS], !0);
      for (let fS = 0; fS < 3; fS++) IS.setFloat32(uS + 36 + 4 * fS, NS[fS], !0);
      return fg(IS).set(qS, IS.byteOffset + uS + 48), !0
    }

    function Jg(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
      const uS = SS.Qa(321, HS, 48 + qS.length);
      if (uS < 0) return !1;
      const IS = SS.view;
      IS.setUint32(uS + 0, gS, !0), IS.setInt32(uS + 4, tS, !0), IS.setUint16(uS + 8, bS, !0), IS.setUint16(uS + 10, XS, !0);
      for (let fS = 0; fS < 3; fS++) IS.setFloat64(uS + 12 + 8 * fS, xS[fS], !0);
      for (let fS = 0; fS < 3; fS++) IS.setFloat32(uS + 36 + 4 * fS, NS[fS], !0);
      return fg(IS).set(qS, IS.byteOffset + uS + 48), !0
    }

    function Og(SS, HS, gS, tS, bS, XS, xS) {
      const NS = SS.Qa(322, HS, 44 + xS.length);
      if (NS < 0) return !1;
      const qS = SS.view;
      qS.setUint32(NS + 0, gS, !0), qS.setUint32(NS + 4, tS, !0);
      for (let uS = 0; uS < 3; uS++) qS.setFloat64(NS + 8 + 8 * uS, bS[uS], !0);
      for (let uS = 0; uS < 3; uS++) qS.setFloat32(NS + 32 + 4 * uS, XS[uS], !0);
      return fg(qS).set(xS, qS.byteOffset + NS + 44), !0
    }

    function dg(SS, HS, gS) {
      const tS = SS.Qa(323, HS, 4);
      if (tS < 0) return !1;
      return SS.view.setUint32(tS + 0, gS, !0), !0
    }

    function cg(SS, HS, gS, tS, bS, XS) {
      const xS = SS.Qa(324, HS, 32 + XS.length);
      if (xS < 0) return !1;
      const NS = SS.view;
      NS.setUint32(xS + 0, gS, !0), NS.setUint32(xS + 4, tS, !0);
      for (let qS = 0; qS < 3; qS++) NS.setFloat64(xS + 8 + 8 * qS, bS[qS], !0);
      return fg(NS).set(XS, NS.byteOffset + xS + 32), !0
    }

    function vg(SS, HS) {
      return !(SS.Qa(325, HS, 0) < 0)
    }

    function Eg(SS, HS, gS, tS, bS, XS) {
      const xS = SS.Qa(384, HS, 16);
      if (xS < 0) return !1;
      const NS = SS.view;
      return NS.setUint32(xS + 0, gS, !0), NS.setUint32(xS + 4, tS, !0), NS.setFloat32(xS + 8, bS, !0), NS.setFloat32(xS + 12, XS, !0), !0
    }

    function Lg(SS, HS, gS, tS, bS, XS, xS) {
      const NS = SS.Qa(385, HS, 36 + xS.length);
      if (NS < 0) return !1;
      const qS = SS.view;
      qS.setUint32(NS + 0, gS, !0), qS.setUint32(NS + 4, tS, !0);
      for (let uS = 0; uS < 3; uS++) qS.setFloat64(NS + 8 + 8 * uS, bS[uS], !0);
      return qS.setUint32(NS + 32, XS, !0), fg(qS).set(xS, qS.byteOffset + NS + 36), !0
    }

    function Yg(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
      const uS = SS.Qa(386, HS, 56 + qS.length);
      if (uS < 0) return !1;
      const IS = SS.view;
      IS.setUint32(uS + 0, gS, !0), IS.setUint8(uS + 4, tS);
      for (let fS = 0; fS < 4; fS++) IS.setFloat32(uS + 8 + 4 * fS, bS[fS], !0);
      for (let fS = 0; fS < 3; fS++) IS.setFloat64(uS + 24 + 8 * fS, XS[fS], !0);
      return IS.setUint32(uS + 48, xS, !0), IS.setUint32(uS + 52, NS, !0), fg(IS).set(qS, IS.byteOffset + uS + 56), !0
    }

    function Ag(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
      const uS = SS.Qa(387, HS, 56);
      if (uS < 0) return !1;
      const IS = SS.view;
      IS.setUint32(uS + 0, gS, !0), IS.setUint16(uS + 4, tS, !0), IS.setUint8(uS + 6, bS);
      for (let fS = 0; fS < 3; fS++) IS.setFloat64(uS + 8 + 8 * fS, XS[fS], !0);
      for (let fS = 0; fS < 2; fS++) IS.setFloat32(uS + 32 + 4 * fS, xS[fS], !0);
      IS.setFloat32(uS + 40, NS, !0);
      for (let fS = 0; fS < 3; fS++) IS.setFloat32(uS + 44 + 4 * fS, qS[fS], !0);
      return !0
    }

    function yg(SS, HS, gS) {
      const tS = SS.Qa(388, HS, 4);
      if (tS < 0) return !1;
      return SS.view.setUint32(tS + 0, gS, !0), !0
    }

    function Vg(SS, HS, gS, tS) {
      const bS = SS.Qa(389, HS, 8);
      if (bS < 0) return !1;
      const XS = SS.view;
      return XS.setInt32(bS + 0, gS, !0), XS.setFloat32(bS + 4, tS, !0), !0
    }

    function ig(SS, HS, gS, tS) {
      const bS = SS.Qa(390, HS, 8);
      if (bS < 0) return !1;
      const XS = SS.view;
      return XS.setInt32(bS + 0, gS, !0), XS.setFloat32(bS + 4, tS, !0), !0
    }

    function Wg(SS, HS, gS, tS, bS, XS) {
      const xS = SS.Qa(391, HS, 12);
      if (xS < 0) return !1;
      const NS = SS.view;
      return NS.setFloat32(xS + 0, gS, !0), NS.setFloat32(xS + 4, tS, !0), NS.setUint8(xS + 8, bS), NS.setUint8(xS + 9, XS), !0
    }

    function zg(SS, HS, gS) {
      const tS = SS.Qa(392, HS, 4);
      if (tS < 0) return !1;
      return SS.view.setUint32(tS + 0, gS, !0), !0
    }

    function Ug(SS, HS, gS, tS, bS) {
      const XS = SS.Qa(393, HS, 12);
      if (XS < 0) return !1;
      const xS = SS.view;
      return xS.setUint32(XS + 0, gS, !0), xS.setUint16(XS + 4, tS, !0), xS.setFloat32(XS + 8, bS, !0), !0
    }

    function pg(SS, HS, gS, tS, bS, XS, xS) {
      const NS = SS.Qa(394, HS, 36);
      if (NS < 0) return !1;
      const qS = SS.view;
      qS.setUint32(NS + 0, gS, !0), qS.setUint16(NS + 4, tS, !0), qS.setUint8(NS + 6, bS);
      for (let uS = 0; uS < 3; uS++) qS.setFloat64(NS + 8 + 8 * uS, XS[uS], !0);
      return qS.setFloat32(NS + 32, xS, !0), !0
    }

    function sg(SS, HS, gS) {
      const tS = SS.Qa(398, HS, 4);
      if (tS < 0) return !1;
      return SS.view.setUint32(tS + 0, gS, !0), !0
    }

    function Bg(SS, HS, gS) {
      const tS = SS.Qa(448, HS, 4);
      if (tS < 0) return !1;
      return SS.view.setFloat32(tS + 0, gS, !0), !0
    }

    function Mg(SS, HS, gS, tS) {
      const bS = SS.Qa(450, HS, 12);
      if (bS < 0) return !1;
      const XS = SS.view;
      for (let xS = 0; xS < 2; xS++) XS.setFloat32(bS + 0 + 4 * xS, gS[xS], !0);
      return XS.setUint8(bS + 8, tS), !0
    }

    function Fg(SS, HS, gS, tS) {
      const bS = SS.Qa(452, HS, 8);
      if (bS < 0) return !1;
      const XS = SS.view;
      return XS.setFloat32(bS + 0, gS, !0), XS.setUint8(bS + 4, tS), !0
    }

    function Rg(SS, HS, gS, tS, bS) {
      const XS = SS.Qa(454, HS, 4);
      if (XS < 0) return !1;
      const xS = SS.view;
      return xS.setUint8(XS + 0, gS), xS.setUint8(XS + 1, tS), xS.setUint8(XS + 2, bS), !0
    }

    function Tg(SS, HS, gS, tS) {
      const bS = SS.Qa(455, HS, 40);
      if (bS < 0) return !1;
      const XS = SS.view;
      for (let xS = 0; xS < 9; xS++) XS.setInt32(bS + 0 + 4 * xS, gS[xS], !0);
      return XS.setUint32(bS + 36, tS, !0), !0
    }

    function og(SS, HS, gS, tS) {
      const bS = SS.Qa(456, HS, 8);
      if (bS < 0) return !1;
      const XS = SS.view;
      return XS.setFloat32(bS + 0, gS, !0), XS.setUint8(bS + 4, tS), !0
    }

    function lg(SS, HS, gS, tS, bS) {
      const XS = SS.Qa(457, HS, 16);
      if (XS < 0) return !1;
      const xS = SS.view;
      for (let NS = 0; NS < 3; NS++) xS.setInt32(XS + 0 + 4 * NS, gS[NS], !0);
      for (let NS = 0; NS < 3; NS++) xS.setInt8(XS + 12 + 1 * NS, tS[NS]);
      return xS.setUint8(XS + 15, bS), !0
    }

    function mg(SS, HS, gS, tS) {
      const bS = SS.Qa(530, HS, 4 + tS.length);
      if (bS < 0) return !1;
      const XS = SS.view;
      return XS.setUint8(bS + 0, gS), fg(XS).set(tS, XS.byteOffset + bS + 4), !0
    }

    function eg(SS, HS, gS, tS, bS, XS) {
      const xS = SS.Qa(531, HS, 12 + XS.length);
      if (xS < 0) return !1;
      const NS = SS.view;
      return NS.setFloat32(xS + 0, gS, !0), NS.setFloat32(xS + 4, tS, !0), NS.setUint32(xS + 8, bS, !0), fg(NS).set(XS, NS.byteOffset + xS + 12), !0
    }

    function rg(SS, HS, gS, tS, bS, XS) {
      const xS = SS.Qa(532, HS, 12 + XS.length);
      if (xS < 0) return !1;
      const NS = SS.view;
      return NS.setInt32(xS + 0, gS, !0), NS.setInt32(xS + 4, tS, !0), NS.setUint32(xS + 8, bS, !0), fg(NS).set(XS, NS.byteOffset + xS + 12), !0
    }

    function St(SS, HS, gS, tS, bS) {
      const XS = SS.Qa(533, HS, 8 + bS.length);
      if (XS < 0) return !1;
      const xS = SS.view;
      return xS.setInt32(XS + 0, gS, !0), xS.setInt32(XS + 4, tS, !0), fg(xS).set(bS, xS.byteOffset + XS + 8), !0
    }

    function Ht(SS, HS) {
      return !(SS.Qa(576, HS, 0) < 0)
    }

    function gt(SS, HS, gS, tS, bS, XS) {
      const xS = SS.Qa(577, HS, 36 + XS.length);
      if (xS < 0) return !1;
      const NS = SS.view;
      NS.setUint8(xS + 0, gS);
      for (let qS = 0; qS < 16; qS++) NS.setUint8(xS + 4 + 1 * qS, tS[qS]);
      for (let qS = 0; qS < 16; qS++) NS.setUint8(xS + 20 + 1 * qS, bS[qS]);
      return fg(NS).set(XS, NS.byteOffset + xS + 36), !0
    }

    function tt(SS, HS, gS, tS) {
      const bS = SS.Qa(578, HS, 4 + tS.length);
      if (bS < 0) return !1;
      const XS = SS.view;
      return XS.setUint8(bS + 0, gS), fg(XS).set(tS, XS.byteOffset + bS + 4), !0
    }

    function bt(SS, HS, gS, tS, bS, XS, xS, NS) {
      const qS = SS.Qa(579, HS, 36);
      if (qS < 0) return !1;
      const uS = SS.view;
      return uS.setFloat64(qS + 0, gS, !0), uS.setFloat64(qS + 8, tS, !0), uS.setFloat64(qS + 16, bS, !0), uS.setFloat64(qS + 24, XS, !0), uS.setUint16(qS + 32, xS, !0), uS.setUint8(qS + 34, NS), !0
    }
    class Xt {
      constructor(SS, HS) {
        this.core = SS, this.afterCall = HS
      }
      canModify(SS, HS, gS) {
        const tS = this.core.IXS(SS, HS, gS);
        return this.afterCall(), tS
      }
      terrainBlocked(SS, HS, gS, tS, bS) {
        const XS = this.core.HxS(SS, HS, gS, tS, bS);
        return this.afterCall(), XS
      }
      TE(SS, HS, gS, tS) {
        const bS = this.core.xa(SS, HS, gS, tS);
        return this.afterCall(), bS
      }
      blockData(SS, HS, gS) {
        const tS = this.core.qXS(SS, HS, gS);
        return this.afterCall(), tS
      }
      cameraSweep(SS, HS, gS, tS, bS, XS, xS) {
        const NS = this.core.qbS(SS, HS, gS, tS, bS, XS, xS);
        return this.afterCall(), NS
      }
      hasServerTarget(SS) {
        const HS = this.core.wXS(SS);
        return this.afterCall(), HS
      }
      entityInteractable(SS) {
        const HS = this.core.CXS(SS);
        return this.afterCall(), HS
      }
      entityCrouching(SS) {
        const HS = this.core.GXS(SS);
        return this.afterCall(), HS
      }
      predictServerPosition(SS, HS, gS, tS) {
        const bS = this.core.AXS(SS, HS, gS, tS);
        return this.afterCall(), bS
      }
      setOtherEntitySetting(SS, HS, gS) {
        const tS = this.core.abS(SS, HS, gS);
        return this.afterCall(), tS
      }
      entityInfoBatch(SS) {
        const HS = this.core.GbS(SS);
        return this.afterCall(), HS
      }
      entityName(SS) {
        const HS = this.core.nXS(SS);
        return this.afterCall(), HS
      }
      hasEffect(SS, HS) {
        const gS = this.core.DXS(SS, HS);
        return this.afterCall(), gS
      }
      scratchPtr() {
        const SS = this.core.bbS();
        return this.afterCall(), SS
      }
      invSwap(SS, HS) {
        const gS = this.core.cXS(SS, HS);
        return this.afterCall(), gS
      }
      invMove(SS, HS, gS) {
        const tS = this.core.JXS(SS, HS, gS);
        return this.afterCall(), tS
      }
      invQuickMove(SS, HS, gS, tS) {
        const bS = this.core.OXS(SS, HS, gS, tS);
        return this.afterCall(), bS
      }
      invRemove(SS, HS, gS) {
        const tS = this.core.dXS(SS, HS, gS);
        return this.afterCall(), tS
      }
      invEnchant(SS, HS, gS, tS, bS) {
        const XS = this.core.ZXS(SS, HS, gS, tS, bS);
        return this.afterCall(), XS
      }
      craft(SS, HS, gS) {
        const tS = this.core.craft(SS, HS, gS);
        return this.afterCall(), tS
      }
      salvage(SS, HS, gS) {
        const tS = this.core.salvage(SS, HS, gS);
        return this.afterCall(), tS
      }
      selectSlot(SS) {
        const HS = this.core.WXS(SS);
        return this.afterCall(), HS
      }
      closeChest() {
        const SS = this.core.fXS();
        return this.afterCall(), SS
      }
      itemAttributesBatch(SS) {
        const HS = this.core.jbS(SS);
        return this.afterCall(), HS
      }
      itemNames() {
        const SS = this.core.yJ();
        return this.afterCall(), SS
      }
      blockProps() {
        const SS = this.core.uXS();
        return this.afterCall(), SS
      }
      itemProps() {
        const SS = this.core.vXS();
        return this.afterCall(), SS
      }
      salvageRecipe(SS) {
        const HS = this.core.nbS(SS);
        return this.afterCall(), HS
      }
      craftingView(SS, HS, gS) {
        const tS = this.core.KbS(SS, HS, gS);
        return this.afterCall(), tS
      }
      directorView() {
        const SS = this.core.NbS();
        return this.afterCall(), SS
      }
      directorDefaultPose() {
        const SS = this.core.ubS();
        return this.afterCall(), SS
      }
      directorEntity(SS) {
        const HS = this.core.IbS(SS);
        return this.afterCall(), HS
      }
      directorPose(SS, HS, gS, tS, bS, XS) {
        const xS = this.core.fbS(SS, HS, gS, tS, bS, XS);
        return this.afterCall(), xS
      }
      passTimings(SS) {
        const HS = this.core.YXS(SS);
        return this.afterCall(), HS
      }
      drawCensus() {
        const SS = this.core.jXS();
        return this.afterCall(), SS
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);